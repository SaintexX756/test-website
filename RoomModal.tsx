import React from 'react';
import { X, Check } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { RoomGallery } from './RoomGallery';
import { useTranslation } from 'react-i18next';

interface RoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: {
    name: string;
    price: string;
    description: string;
    image: string;
  };
}

const amenities = [
  'King-size bed',
  'City view',
  'Free Wi-Fi',
  'Mini bar',
  'Room service',
  'Air conditioning',
  'Smart TV',
  'Coffee maker',
];

// Additional room images for the gallery
const getRoomImages = (mainImage: string) => [
  {
    src: mainImage,
    alt: { en: 'Main Room View', bg: 'Основен изглед на стаята' },
    width: 1950,
    height: 1300
  },
  {
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    alt: { en: 'Bathroom', bg: 'Баня' },
    width: 1950,
    height: 1300
  },
  {
    src: 'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    alt: { en: 'Bedroom Detail', bg: 'Детайл от спалнята' },
    width: 1950,
    height: 1300
  },
  {
    src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    alt: { en: 'Sitting Area', bg: 'Кът за сядане' },
    width: 1950,
    height: 1300
  }
];

export const RoomModal = ({ isOpen, onClose, room }: RoomModalProps) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  if (!room) return null;
  
  const roomImages = getRoomImages(room.image);

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex min-h-screen items-center justify-center px-4">
            <Dialog.Overlay className="fixed inset-0 bg-black/70" />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-navy-800 rounded-lg max-w-4xl w-full mx-auto overflow-hidden"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gold-400 z-10 bg-navy-900/50 p-2 rounded-full"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <RoomGallery images={roomImages} />
                </div>

                <div className="p-6 md:p-8">
                  <Dialog.Title className="text-3xl font-playfair font-bold text-white mb-2">
                    {room.name}
                  </Dialog.Title>
                  <p className="text-gold-400 text-xl font-semibold mb-4">
                    {room.price} / {currentLanguage === 'bg' ? 'нощ' : 'night'}
                  </p>
                  <p className="text-gray-300 mb-6">{room.description}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      {currentLanguage === 'bg' ? 'Удобства в стаята' : 'Room Amenities'}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <Check size={16} className="text-gold-400 mr-2" />
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="btn-primary w-full">
                    {currentLanguage === 'bg' ? 'Резервирай тази стая' : 'Book This Room'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};