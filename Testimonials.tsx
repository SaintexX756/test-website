import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: { en: 'Business Traveler', bg: 'Бизнес пътник' },
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    text: {
      en: 'An exceptional experience! The staff went above and beyond to ensure my comfort.',
      bg: 'Изключително преживяване! Персоналът надмина очакванията ми, за да осигури моя комфорт.'
    },
  },
  {
    name: 'Michael Chen',
    role: { en: 'Luxury Traveler', bg: 'Луксозен пътешественик' },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    text: {
      en: 'The attention to detail and luxury amenities made my stay unforgettable.',
      bg: 'Вниманието към детайла и луксозните удобства направиха престоя ми незабравим.'
    },
  },
  {
    name: 'Emma Davis',
    role: { en: 'Honeymoon Guest', bg: 'Младоженци' },
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    text: {
      en: 'Perfect honeymoon destination. The romantic atmosphere was exactly what we wanted.',
      bg: 'Перфектна дестинация за меден месец. Романтичната атмосфера беше точно това, което искахме.'
    },
  },
];

export const Testimonials = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-navy-900 to-navy-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            {currentLanguage === 'bg' ? 'Мнения на гости' : 'Guest Experiences'}
          </h2>
          <p className="section-subtitle">
            {currentLanguage === 'bg' 
              ? 'Какво споделят нашите уважаеми гости за престоя си'
              : 'What our valued guests say about their stay'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="testimonial-card"
            >
              <div className="flex items-center mb-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">
                    {currentLanguage === 'bg' ? testimonial.role.bg : testimonial.role.en}
                  </p>
                </div>
              </div>
              <div className="flex text-gold-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300">
                {currentLanguage === 'bg' ? testimonial.text.bg : testimonial.text.en}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};