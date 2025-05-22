import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Droplets, Flame, Leaf, Wind, Heart, Clock, Calendar, Phone } from 'lucide-react';

export const SpaPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const content = {
    en: {
      title: 'Spa & Wellness',
      subtitle: 'Indulge in a world of relaxation and rejuvenation',
      description: 'Our award-winning spa and wellness center offers a sanctuary of peace and tranquility. Immerse yourself in luxurious treatments, therapeutic massages, and revitalizing experiences designed to nurture your body, mind, and spirit.',
      poolTitle: 'Infinity Pool',
      poolDescription: 'Experience pure bliss in our stunning infinity pool with panoramic views of the city skyline. The temperature-controlled waters and elegant surroundings create the perfect environment for relaxation and leisure.',
      poolFeatures: [
        'Temperature-controlled waters (28°C)',
        'Panoramic city views',
        'Comfortable loungers and cabanas',
        'Pool bar service',
        'Towel service',
        'Open daily from 7:00 to 22:00'
      ],
      spaTitle: 'Luxury Spa',
      spaDescription: 'Our spa offers a comprehensive range of treatments inspired by ancient traditions and modern techniques. Each therapy is performed by highly trained professionals using premium products to ensure an exceptional experience.',
      treatments: [
        {
          name: 'Signature Massage',
          duration: '90 min',
          price: '$150',
          description: 'A personalized massage combining various techniques to address your specific needs and preferences.'
        },
        {
          name: 'Hot Stone Therapy',
          duration: '75 min',
          price: '$130',
          description: 'Smooth, heated stones are placed on key points of the body, helping to loosen tight muscles and balance energy centers.'
        },
        {
          name: 'Aromatherapy Facial',
          duration: '60 min',
          price: '$120',
          description: 'A deeply relaxing facial treatment using essential oils tailored to your skin type.'
        },
        {
          name: 'Detox Body Wrap',
          duration: '60 min',
          price: '$140',
          description: 'A purifying treatment that eliminates toxins, improves skin texture, and promotes overall wellbeing.'
        }
      ],
      facilities: [
        {
          icon: 'sauna',
          name: 'Finnish Sauna',
          description: 'Traditional dry heat sauna to relax muscles and cleanse the body'
        },
        {
          icon: 'steam',
          name: 'Steam Room',
          description: 'Humid environment to open pores and improve circulation'
        },
        {
          icon: 'jacuzzi',
          name: 'Hydrotherapy Jacuzzi',
          description: 'Therapeutic water jets to massage and soothe the body'
        },
        {
          icon: 'relaxation',
          name: 'Relaxation Lounge',
          description: 'Tranquil space with herbal teas and refreshments'
        }
      ],
      bookingInfo: {
        title: 'Booking Information',
        hours: 'Open daily from 9:00 to 21:00',
        reservation: 'Advance reservations recommended',
        phone: '+359 2 123 4571',
        note: 'Hotel guests receive priority booking and special rates'
      }
    },
    bg: {
      title: 'СПА и Уелнес',
      subtitle: 'Потопете се в свят на релаксация и подмладяване',
      description: 'Нашият отличен с награди спа и уелнес център предлага убежище на мир и спокойствие. Потопете се в луксозни процедури, терапевтични масажи и ревитализиращи изживявания, създадени да подхранват вашето тяло, ум и дух.',
      poolTitle: 'Инфинити Басейн',
      poolDescription: 'Изпитайте чисто блаженство в нашия зашеметяващ инфинити басейн с панорамна гледка към градския хоризонт. Температурно контролираните води и елегантната обстановка създават перфектната среда за релаксация и отдих.',
      poolFeatures: [
        'Температурно контролирани води (28°C)',
        'Панорамна гледка към града',
        'Удобни шезлонги и кабани',
        'Обслужване на бар край басейна',
        'Услуга с кърпи',
        'Отворен ежедневно от 7:00 до 22:00'
      ],
      spaTitle: 'Луксозно СПА',
      spaDescription: 'Нашето спа предлага широка гама от процедури, вдъхновени от древни традиции и съвременни техники. Всяка терапия се извършва от висококвалифицирани професионалисти, използващи премиум продукти, за да осигурят изключително изживяване.',
      treatments: [
        {
          name: 'Фирмен Масаж',
          duration: '90 мин',
          price: '275 лв.',
          description: 'Персонализиран масаж, комбиниращ различни техники за задоволяване на вашите специфични нужди и предпочитания.'
        },
        {
          name: 'Терапия с Горещи Камъни',
          duration: '75 мин',
          price: '240 лв.',
          description: 'Гладки, загрети камъни се поставят на ключови точки на тялото, помагайки за отпускане на напрегнатите мускули и балансиране на енергийните центрове.'
        },
        {
          name: 'Ароматерапевтичен Фациал',
          duration: '60 мин',
          price: '220 лв.',
          description: 'Дълбоко релаксираща процедура за лице с използване на етерични масла, съобразени с вашия тип кожа.'
        },
        {
          name: 'Детоксикираща Маска за Тяло',
          duration: '60 мин',
          price: '260 лв.',
          description: 'Пречистваща процедура, която елиминира токсините, подобрява текстурата на кожата и насърчава цялостното благосъстояние.'
        }
      ],
      facilities: [
        {
          icon: 'sauna',
          name: 'Финландска Сауна',
          description: 'Традиционна сауна със суха топлина за отпускане на мускулите и пречистване на тялото'
        },
        {
          icon: 'steam',
          name: 'Парна Баня',
          description: 'Влажна среда за отваряне на порите и подобряване на кръвообращението'
        },
        {
          icon: 'jacuzzi',
          name: 'Хидротерапевтично Джакузи',
          description: 'Терапевтични водни струи за масаж и успокояване на тялото'
        },
        {
          icon: 'relaxation',
          name: 'Релакс Зона',
          description: 'Спокойно пространство с билкови чайове и освежаващи напитки'
        }
      ],
      bookingInfo: {
        title: 'Информация за Резервации',
        hours: 'Отворено ежедневно от 9:00 до 21:00',
        reservation: 'Препоръчват се предварителни резервации',
        phone: '+359 2 123 4571',
        note: 'Гостите на хотела получават приоритетно резервиране и специални цени'
      }
    }
  };

  const facilityIcons = {
    sauna: Flame,
    steam: Droplets,
    jacuzzi: Wind,
    relaxation: Leaf,
  };

  return (
    <div className="pt-24">
      <section className="py-20 px-4 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              {content[currentLanguage as keyof typeof content].title}
            </h1>
            <p className="text-2xl text-gold-400 font-playfair mb-6">
              {content[currentLanguage as keyof typeof content].subtitle}
            </p>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {content[currentLanguage as keyof typeof content].description}
            </p>
          </motion.div>

          {/* Infinity Pool Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Infinity Pool"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-bold text-white mb-6">
                {content[currentLanguage as keyof typeof content].poolTitle}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {content[currentLanguage as keyof typeof content].poolDescription}
              </p>
              <ul className="space-y-3">
                {content[currentLanguage as keyof typeof content].poolFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <Heart className="text-gold-400 w-5 h-5 mt-1 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Spa Treatments Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-white mb-6">
                {content[currentLanguage as keyof typeof content].spaTitle}
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto mb-10">
                {content[currentLanguage as keyof typeof content].spaDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {content[currentLanguage as keyof typeof content].treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="bg-navy-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-navy-800/80"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-playfair font-bold text-white">
                        {treatment.name}
                      </h3>
                      <p className="text-gray-400">
                        <Clock className="inline-block w-4 h-4 mr-1" /> {treatment.duration}
                      </p>
                    </div>
                    <span className="text-gold-400 text-xl font-semibold">
                      {treatment.price}
                    </span>
                  </div>
                  <p className="text-gray-300">
                    {treatment.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Spa Facilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content[currentLanguage as keyof typeof content].facilities.map((facility, index) => {
                const Icon = facilityIcons[facility.icon as keyof typeof facilityIcons];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    className="bg-navy-800/50 rounded-lg p-6 text-center hover:bg-navy-800 transition-all duration-300"
                  >
                    <Icon className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                    <h3 className="text-xl font-playfair font-bold text-white mb-3">
                      {facility.name}
                    </h3>
                    <p className="text-gray-300">
                      {facility.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Booking Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-navy-800 rounded-lg p-8 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-playfair font-bold text-white mb-6 text-center">
              {content[currentLanguage as keyof typeof content].bookingInfo.title}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Clock className="text-gold-400 w-5 h-5 mr-3" />
                <span>{content[currentLanguage as keyof typeof content].bookingInfo.hours}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar className="text-gold-400 w-5 h-5 mr-3" />
                <span>{content[currentLanguage as keyof typeof content].bookingInfo.reservation}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="text-gold-400 w-5 h-5 mr-3" />
                <span>{content[currentLanguage as keyof typeof content].bookingInfo.phone}</span>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gold-400 italic">
                  {content[currentLanguage as keyof typeof content].bookingInfo.note}
                </p>
                <button className="btn-primary mt-6">
                  {currentLanguage === 'bg' ? 'Резервирай Процедура' : 'Book a Treatment'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};