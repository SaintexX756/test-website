import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoomGallery } from '../components/RoomGallery';
import { RoomModal } from '../components/RoomModal';

const rooms = [
  {
    id: 1,
    name: 'Presidential Suite',
    nameBg: 'Президентски Суит',
    price: { usd: '$599', bgn: '1099 лв.' },
    description: 'Experience unparalleled luxury in our Presidential Suite. This expansive accommodation features a master bedroom, separate living and dining areas, and a private terrace offering breathtaking city views.',
    descriptionBg: 'Изживейте несравним лукс в нашия Президентски Суит. Този просторен апартамент разполага с основна спалня, отделни всекидневна и трапезария, и частна тераса с спираща дъха гледка към града.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Presidential Suite', bg: 'Президентски Суит' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Suite Living Room', bg: 'Всекидневна на суита' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Suite Bathroom', bg: 'Баня на суита' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Private Terrace', bg: 'Частна тераса' },
        width: 1950,
        height: 1300
      }
    ],
    amenities: [
      ['Master bedroom with king-size bed', 'Основна спалня с кралско легло'],
      ['Separate living and dining areas', 'Отделни всекидневна и трапезария'],
      ['Private terrace with city views', 'Частна тераса с градска гледка'],
      ['Luxury bathroom with jacuzzi', 'Луксозна баня с джакузи'],
      ['Butler service', 'Батлер услуги'],
      ['Premium mini bar', 'Премиум минибар'],
      ['Smart home controls', 'Смарт контрол на дома'],
      ['VIP airport transfer', 'ВИП трансфер от летището'],
    ],
    size: '120 m²',
  },
  {
    id: 2,
    name: 'Executive Suite',
    nameBg: 'Екзекютив Суит',
    price: { usd: '$399', bgn: '729 лв.' },
    description: 'Perfect for business travelers or those seeking extra space and comfort. Features a separate living area, dedicated workspace, and premium amenities for an elevated stay experience.',
    descriptionBg: 'Перфектен за бизнес пътници или търсещите допълнително пространство и комфорт. Разполага с отделна всекидневна, работно място и премиум удобства за луксозен престой.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Executive Suite', bg: 'Екзекютив Суит' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1566152446836-dd0792e4deae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Suite Workspace', bg: 'Работно място' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Suite Bathroom', bg: 'Баня на суита' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Lounge Area', bg: 'Кът за отдих' },
        width: 1950,
        height: 1300
      }
    ],
    amenities: [
      ['King-size bed', 'Кралско легло'],
      ['Separate living area', 'Отделна всекидневна'],
      ['Executive workspace', 'Бизнес работно място'],
      ['City views', 'Градска гледка'],
      ['Nespresso machine', 'Nespresso машина'],
      ['Mini bar', 'Минибар'],
      ['Smart TV', 'Смарт телевизор'],
      ['Daily newspaper', 'Ежедневен вестник'],
    ],
    size: '75 m²',
  },
  {
    id: 3,
    name: 'Deluxe Room',
    nameBg: 'Делукс Стая',
    price: { usd: '$299', bgn: '549 лв.' },
    description: 'Our Deluxe Rooms offer the perfect blend of comfort and style. Featuring contemporary design, premium bedding, and all the essential amenities for a pleasant stay.',
    descriptionBg: 'Нашите Делукс стаи предлагат перфектния баланс между комфорт и стил. Включват съвременен дизайн, луксозно спално бельо и всички необходими удобства за приятен престой.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Deluxe Room', bg: 'Делукс Стая' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Room Bathroom', bg: 'Баня' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Room Detail', bg: 'Детайл от стаята' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Workspace', bg: 'Работно място' },
        width: 1950,
        height: 1300
      }
    ],
    amenities: [
      ['Queen-size bed', 'Двойно легло'],
      ['Work desk', 'Работно бюро'],
      ['City view', 'Градска гледка'],
      ['En-suite bathroom', 'Самостоятелна баня'],
      ['Smart TV', 'Смарт телевизор'],
      ['Mini fridge', 'Минихладилник'],
      ['In-room safe', 'Сейф в стаята'],
      ['Free Wi-Fi', 'Безплатен Wi-Fi'],
    ],
    size: '45 m²',
  },
  {
    id: 4,
    name: 'Ocean View Suite',
    nameBg: 'Суит с Изглед към Морето',
    price: { usd: '$499', bgn: '919 лв.' },
    description: 'Wake up to stunning ocean views in our luxurious Ocean View Suite. Featuring a private balcony, premium furnishings, and a spacious layout for the ultimate coastal retreat.',
    descriptionBg: 'Събудете се с зашеметяваща морска гледка в нашия луксозен суит. Разполага с частен балкон, премиум обзавеждане и просторно разпределение за перфектната морска почивка.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Ocean View Suite', bg: 'Суит с Изглед към Морето' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Suite Balcony', bg: 'Балкон на суита' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Suite Bathroom', bg: 'Баня на суита' },
        width: 1950,
        height: 1300
      },
      {
        src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: { en: 'Living Area', bg: 'Всекидневна' },
        width: 1950,
        height: 1300
      }
    ],
    amenities: [
      ['King-size bed', 'Кралско легло'],
      ['Private balcony', 'Частен балкон'],
      ['Ocean views', 'Морска гледка'],
      ['Luxury bathroom', 'Луксозна баня'],
      ['Living area', 'Всекидневна'],
      ['Premium sound system', 'Премиум озвучителна система'],
      ['Mini bar', 'Минибар'],
      ['Room service', 'Румсървиз'],
    ],
    size: '85 m²',
  },
];

export const RoomsPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);

  return (
    <div className="pt-24">
      <section className="py-20 px-4 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              {currentLanguage === 'bg' ? 'Нашите Луксозни Стаи' : 'Our Luxury Accommodations'}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {currentLanguage === 'bg' 
                ? 'Открийте нашата колекция от внимателно проектирани стаи и апартаменти, всеки предлагащ уникална комбинация от комфорт и изисканост.'
                : 'Discover our collection of meticulously designed rooms and suites, each offering a unique blend of comfort and sophistication.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-navy-800 rounded-lg overflow-hidden shadow-xl"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <RoomGallery images={room.images} />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col">
                    <div className="mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-2xl font-playfair font-bold text-white">
                          {currentLanguage === 'bg' ? room.nameBg : room.name}
                        </h2>
                        <div className="text-right">
                          <span className="text-gold-400 text-xl font-semibold block">
                            {currentLanguage === 'bg' ? room.price.bgn : room.price.usd}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {currentLanguage === 'bg' ? 'на нощ' : 'per night'}
                          </span>
                        </div>
                      </div>
                      <div className="flex text-gold-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4">
                        {currentLanguage === 'bg' ? room.descriptionBg : room.description}
                      </p>
                      <p className="text-gray-400 text-sm mb-4">
                        {currentLanguage === 'bg' ? 'Размер на стаята: ' : 'Room Size: '}{room.size}
                      </p>
                    </div>

                    <div className="mb-6 flex-grow">
                      <h3 className="text-white font-semibold mb-3">
                        {currentLanguage === 'bg' ? 'Удобства в стаята' : 'Room Amenities'}
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {room.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center text-gray-300 text-sm">
                            <Check size={16} className="text-gold-400 mr-2" />
                            {currentLanguage === 'bg' ? amenity[1] : amenity[0]}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button 
                      className="btn-primary w-full"
                      onClick={() => navigate('/booking')}
                    >
                      {currentLanguage === 'bg' ? 'Резервирай Сега' : 'Book Now'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedRoom && (
        <RoomModal
          isOpen={!!selectedRoom}
          onClose={() => setSelectedRoom(null)}
          room={{
            name: currentLanguage === 'bg' ? selectedRoom.nameBg : selectedRoom.name,
            price: currentLanguage === 'bg' ? selectedRoom.price.bgn : selectedRoom.price.usd,
            description: currentLanguage === 'bg' ? selectedRoom.descriptionBg : selectedRoom.description,
            image: selectedRoom.images[0].src,
          }}
        />
      )}
    </div>
  );
};