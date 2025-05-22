import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const TermsOfService = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: March 1, 2024',
      sections: [
        {
          title: 'Agreement to Terms',
          content: 'By accessing or using Hotel Demo\'s website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.'
        },
        {
          title: 'Booking and Reservations',
          content: 'When making a reservation:',
          list: [
            'You must provide accurate and complete information',
            'You must be at least 18 years old to make a booking',
            'Reservations are subject to availability and confirmation',
            'Cancellation policies apply as specified during booking'
          ]
        },
        {
          title: 'Payment Terms',
          content: 'For all reservations:',
          list: [
            'Prices are in the currency specified during booking',
            'Payment methods accepted are listed during checkout',
            'Some reservations may require a deposit',
            'Additional charges may apply for extra services'
          ]
        },
        {
          title: 'House Rules',
          content: 'During your stay, you agree to:',
          list: [
            'Respect check-in and check-out times',
            'Follow all posted safety and security procedures',
            'Maintain appropriate noise levels',
            'Respect other guests and staff'
          ]
        },
        {
          title: 'Liability',
          content: 'Hotel Demo is not liable for:',
          list: [
            'Loss or damage to personal belongings',
            'Service interruptions beyond our control',
            'Third-party services arranged through our facility',
            'Indirect or consequential losses'
          ]
        },
        {
          title: 'Modifications',
          content: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.'
        }
      ]
    },
    bg: {
      title: 'Общи условия',
      lastUpdated: 'Последна актуализация: 1 март 2024',
      sections: [
        {
          title: 'Съгласие с условията',
          content: 'С достъпа или използването на уебсайта и услугите на Hotel Demo, вие се съгласявате да бъдете обвързани с тези Общи условия. Ако не сте съгласни с която и да е част от условията, не можете да използвате нашите услуги.'
        },
        {
          title: 'Резервации',
          content: 'При правене на резервация:',
          list: [
            'Трябва да предоставите точна и пълна информация',
            'Трябва да сте поне на 18 години, за да направите резервация',
            'Резервациите подлежат на наличност и потвърждение',
            'Прилагат се политики за анулиране, както е посочено при резервацията'
          ]
        },
        {
          title: 'Условия за плащане',
          content: 'За всички резервации:',
          list: [
            'Цените са в посочената валута при резервация',
            'Приеманите методи за плащане са изброени при плащане',
            'Някои резервации може да изискват депозит',
            'Може да се начислят допълнителни такси за екстри'
          ]
        },
        {
          title: 'Правила на хотела',
          content: 'По време на престоя си се съгласявате да:',
          list: [
            'Спазвате часовете за настаняване и напускане',
            'Следвате всички обявени процедури за безопасност',
            'Поддържате подходящи нива на шум',
            'Уважавате другите гости и персонала'
          ]
        },
        {
          title: 'Отговорност',
          content: 'Hotel Demo не носи отговорност за:',
          list: [
            'Загуба или повреда на лични вещи',
            'Прекъсвания на услугата извън нашия контрол',
            'Услуги на трети страни, уредени чрез нашия обект',
            'Непреки или последващи загуби'
          ]
        },
        {
          title: 'Промени',
          content: 'Запазваме си правото да променяме тези условия по всяко време. Промените влизат в сила веднага след публикуването им на уебсайта.'
        }
      ]
    }
  };

  return (
    <div className="pt-24">
      <section className="py-20 px-4 bg-navy-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-playfair font-bold text-white mb-4">
              {content[currentLanguage as keyof typeof content].title}
            </h1>
            <p className="text-gray-400">
              {content[currentLanguage as keyof typeof content].lastUpdated}
            </p>
          </motion.div>

          <div className="space-y-12">
            {content[currentLanguage as keyof typeof content].sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-navy-800 rounded-lg p-8"
              >
                <h2 className="text-2xl font-playfair font-bold text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-300 mb-4">{section.content}</p>
                {section.list && (
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};