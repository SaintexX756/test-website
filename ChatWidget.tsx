import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ChatWidgetProps {
  // Optional props for future customization
  customStyles?: boolean;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ customStyles = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Initialize the chat widget
    const initChatWidget = () => {
      try {
        window.VG_CONFIG = {
          ID: "j7u1r08r09ltw3mp", // YOUR AGENT ID
          region: 'eu', // YOUR ACCOUNT REGION 
          render: 'bottom-right', // can be 'full-width' or 'bottom-left' or 'bottom-right'
          stylesheets: [
            // Base TIXAE Agents CSS
            "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
            // Add your custom css stylesheets, Can also add relative URL ('/public/your-file.css)
          ],
        };
        
        const VG_SCRIPT = document.createElement("script");
        VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
        VG_SCRIPT.defer = true; // Remove 'defer' if you want widget to load faster (Will affect website loading)
        
        // Add error handling for the script
        VG_SCRIPT.onerror = (error) => {
          console.warn('Chat widget failed to load:', error);
        };
        
        document.body.appendChild(VG_SCRIPT);

        // Add event listener to detect when the widget is opened
        window.addEventListener('message', (event) => {
          if (event.data && event.data.type === 'vg_widget_opened') {
            setIsOpen(true);
          }
        });
      } catch (error) {
        console.warn('Error initializing chat widget:', error);
      }
    };

    // Clean up function to remove the script when component unmounts
    const cleanup = () => {
      try {
        const scriptElement = document.querySelector('script[src="https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js"]');
        if (scriptElement) {
          scriptElement.remove();
        }
      } catch (error) {
        console.warn('Error cleaning up chat widget:', error);
      }
    };

    // Initialize the widget
    if (process.env.NODE_ENV === 'production') {
      // Only load the chat widget in production environment
      initChatWidget();
    } else {
      console.info('Chat widget disabled in development environment to prevent fetch errors');
    }

    // Clean up on component unmount
    return cleanup;
  }, [customStyles]);

  const handleCloseChat = () => {
    // Close the chat widget
    setIsOpen(false);
    
    // Send message to close the widget
    if (window.VG_OVERLAY_CONTAINER) {
      const event = new CustomEvent('vg_close_widget');
      window.dispatchEvent(event);
    }
    
    // Alternative approach - click outside the widget to close it
    document.body.click();
  };

  return (
    <>
      {/* Chat Widget Container */}
      <div style={{ width: 0, height: 0 }} id="VG_OVERLAY_CONTAINER">
        {/* Here is where TIXAE Agents renders the widget. */}
        {/* Set render to 'full-width' then adjust the width and height to 500px (for example) to render the chatbot itself without the popup. */}
      </div>

      {/* Close button for the chat widget */}
      {isOpen && (
        <button
          onClick={handleCloseChat}
          className="fixed bottom-24 right-6 z-[9999] p-2 bg-navy-800 text-white rounded-full shadow-lg hover:bg-navy-900 transition-all duration-300"
          aria-label="Close chat"
        >
          <X size={24} />
        </button>
      )}

      {/* Add custom styling for the chat widget button */}
      <style jsx="true">{`
        /* Add pulsating effect to the chat widget button */
        .vg-widget-button {
          animation: pulse 2s infinite;
          box-shadow: 0 0 0 rgba(245, 158, 11, 0.4);
          transform: scale(1.05);
          bottom: 22px !important;
          right: 20px !important;
        }
        
        /* Position the chat widget at a specific height */
        .vg-widget-container {
          bottom: 80px !important;
          right: 20px !important;
        }
      `}</style>
    </>
  );
};

// Add this to make TypeScript happy with the VG_CONFIG global
declare global {
  interface Window {
    VG_CONFIG: any;
    VG_OVERLAY_CONTAINER: any;
  }
}