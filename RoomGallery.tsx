import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface RoomGalleryProps {
  images: {
    src: string;
    alt: {
      en: string;
      bg: string;
    };
    width: number;
    height: number;
  }[];
}

export const RoomGallery: React.FC<RoomGalleryProps> = ({ images }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Gallery>
      <div className="relative rounded-lg overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="room-gallery-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-64 md:h-96 w-full">
                <Item
                  original={image.src}
                  thumbnail={image.src}
                  width={image.width}
                  height={image.height}
                  alt={currentLanguage === 'bg' ? image.alt.bg : image.alt.en}
                >
                  {({ ref, open }) => (
                    <>
                      <img
                        ref={ref as React.RefObject<HTMLImageElement>}
                        src={image.src}
                        alt={currentLanguage === 'bg' ? image.alt.bg : image.alt.en}
                        className="absolute inset-0 w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                        onClick={open}
                      />
                      <button 
                        onClick={open}
                        className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
                        aria-label="View full size image"
                      >
                        <Maximize size={20} />
                      </button>
                    </>
                  )}
                </Item>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Enhanced Navigation Arrows */}
        <button 
          className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 
                    bg-gold-500/80 hover:bg-gold-500 text-white p-3 rounded-full 
                    shadow-lg hover:shadow-xl transition-all duration-300 
                    border-2 border-white/50"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
        <button 
          className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 
                    bg-gold-500/80 hover:bg-gold-500 text-white p-3 rounded-full 
                    shadow-lg hover:shadow-xl transition-all duration-300
                    border-2 border-white/50"
          aria-label="Next image"
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>

        {/* Custom Pagination */}
        <div className="swiper-pagination absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10"></div>
      </div>
    </Gallery>
  );
};