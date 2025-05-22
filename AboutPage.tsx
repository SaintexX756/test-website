import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Star, Award, Users, Clock } from 'lucide-react';

export const AboutPage = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const content = {
    en: {
      title: 'About Hotel Demo',
      subtitle: 'A Legacy of Luxury Since 1995',
      description: 'Located in the heart of Bulgaria, Hotel Demo stands as a symbol of luxury and hospitality. For over 25 years, we have been providing exceptional experiences to guests from around the world.',
      stats: [
        { number: '25+', text: 'Years of Excellence' },
        { number: '150', text: 'Luxury Rooms' },
        { number: '4.9', text: 'Guest Rating' },
        { number: '24/7', text: 'Service' },
      ],
      sections: [
        {
          title: 'Our Story',
          content: 'Founded in 1995, Hotel Demo began with a vision to create an unparalleled luxury experience in Bulgaria. Today, we continue to set the standard for hospitality excellence, combining traditional Bulgarian warmth with modern luxury.',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
          title: 'Our Mission',
          content: 'We are dedicated to providing exceptional service and creating memorable experiences for our guests. Every detail is carefully considered to ensure your stay exceeds expectations.',
          image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
          title: 'Our Values',
          content: 'Excellence, integrity, and genuine care for our guests form the foundation of everything we do. We believe in creating not just stays, but experiences that last a lifetime.',
          image: 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        }
      ],
      team: {
        title: 'Leadership Team',
        description: 'Meet the dedicated professionals who ensure your stay is nothing short of exceptional.',
        members: [
          {
            name: 'Alexander Petrov',
            role: 'General Manager',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
          },
          {
            name: 'Maria Dimitrova',
            role: 'Hospitality Director',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
          },
          {
            name: 'Stefan Ivanov',
            role: 'Executive Chef',
            image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
          }
        ]
      }
    },
    bg: {
      title: 'За Hotel Demo',
      subtitle: 'Традиция в Лукса от 1995',
      description: 'Разположен в сърцето на България, Hotel Demo е символ на лукс и гостоприемство. Повече от 25 години предоставяме изключителни преживявания на гости от цял свят.',
      stats: [
        { number: '25+', text: 'Години Опит' },
        { number: '150', text: 'Луксозни Стаи' },
        { number: '4.9', text: 'Рейтинг' },
        { number: '24/7', text: 'Обслужване' },
      ],
      sections: [
        {
          title: 'Нашата История',
          content: 'Основан през 1995 г., Hotel Demo започна с визията да създаде несравнимо луксозно преживяване в България. Днес продължаваме да определяме стандарта за отлично гостоприемство, съчетавайки традиционната българска топлота със съвременния лукс.',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
          title: 'Нашата Мисия',
          content: 'Посветени сме на предоставянето на изключително обслужване и създаването на незабравими преживявания за нашите гости. Всеки детайл е внимателно обмислен, за да надминем очакванията ви.',
          image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        {
          title: 'Нашите Ценности',
          content: 'Съвършенство, почтеност и искрена грижа за нашите гости са в основата на всичко, което правим. Вярваме в създаването не просто на престой, а на преживявания, които остават за цял живот.',
          image: 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        }
      ],
      team: {
        title: 'Ръководен Екип',
        description: 'Запознайте се с отдадените професионалисти, които се грижат вашият престой да бъде изключителен.',
        members: [
          {
            name: 'Александър Петров',
            role: 'Главен Мениджър',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
          },
          {
            name: 'Мария Димитрова',
            role: 'Директор Хотелиерство',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
          },
          {
            name: 'Стефан Иванов',
            role: 'Главен Готвач',
            image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
          }
        ]
      }
    }
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
            <h1 className="section-title mb-4">
              {content[currentLanguage as keyof typeof content].title}
            </h1>
            <p className="text-2xl text-gold-400 font-playfair mb-6">
              {content[currentLanguage as keyof typeof content].subtitle}
            </p>
            <p className="section-subtitle max-w-3xl">
              {content[currentLanguage as keyof typeof content].description}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {content[currentLanguage as keyof typeof content].stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-gold-400 mb-2">{stat.number}</p>
                <p className="text-gray-300">{stat.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {content[currentLanguage as keyof typeof content].sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="relative h-64 md:h-96">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-playfair font-bold text-white mb-6">
                    {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-white mb-4">
                {content[currentLanguage as keyof typeof content].team.title}
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {content[currentLanguage as keyof typeof content].team.description}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {content[currentLanguage as keyof typeof content].team.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className="bg-navy-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="relative h-72">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-playfair font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gold-400">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};