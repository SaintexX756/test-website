import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const CookiePolicy = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const content = {
    en: {
      title: 'Cookie Policy',
      lastUpdated: 'Last Updated: March 1, 2024',
      sections: [
        {
          title: 'What Are Cookies',
          content: 'Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and allow certain features to function properly.'
        },
        {
          title: 'Types of Cookies We Use',
          content: 'We use the following types of cookies:',
          list: [
            'Essential Cookies: Required for the website to function properly',
            'Functional Cookies: Remember your preferences and choices',
            'Analytics Cookies: Help us understand how visitors use our site',
            'Marketing Cookies: Used to deliver relevant advertisements'
          ]
        },
        {
          title: 'Cookie Management',
          content: 'You can control cookies through your browser settings:',
          list: [
            'Block all cookies',
            'Accept all cookies',
            'Choose which cookies to accept',
            'Delete cookies periodically'
          ]
        },
        {
          title: 'Third-Party Cookies',
          content: 'Some cookies are placed by third-party services that appear on our pages. We use these services to:',
          list: [
            'Analyze site traffic and usage',
            'Provide social media features',
            'Process online payments',
            'Enhance security'
          ]
        },
        {
          title: 'Your Choices',
          content: 'When you first visit our website, you will be presented with a cookie consent banner. You can:'
        },
        {
          title: 'Updates to This Policy',
          content: 'We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.'
        }
      ]
    },
    bg: {
      title: 'Политика за бисквитките',
      lastUpdated: 'Последна актуализация: 1 март 2024',
      sections: [
        {
          title: 'Какво са бисквитките',
          content: 'Бисквитките са малки текстови файлове, които се поставят на вашето устройство, когато посещавате нашия уебсайт. Те ни помагат да ви предоставим по-добро изживяване и позволяват на определени функции да работят правилно.'
        },
        {
          title: 'Видове бисквитки, които използваме',
          content: 'Използваме следните видове бисквитки:',
          list: [
            'Съществени бисквитки: Необходими за правилното функциониране на уебсайта',
            'Функционални бисквитки: Запомнят вашите предпочитания и избор',
            'Аналитични бисквитки: Помагат ни да разберем как посетителите използват нашия сайт',
            'Маркетингови бисквитки: Използват се за показване на релевантни реклами'
          ]
        },
        {
          title: 'Управление на бисквитките',
          content: 'Можете да контролирате бисквитките чрез настройките на вашия браузър:',
          list: [
            'Блокиране на всички бисквитки',
            'Приемане на всички бисквитки',
            'Избор кои бисквитки да приемете',
            'Периодично изтриване на бисквитките'
          ]
        },
        {
          title: 'Бисквитки на трети страни',
          content: 'Някои бисквитки се поставят от услуги на трети страни, които се появяват на нашите страници. Използваме тези услуги за:',
          list: [
            'Анализ на трафика и използването на сайта',
            'Предоставяне на функции за социални медии',
            'Обработка на онлайн плащания',
            'Подобряване на сигурността'
          ]
        },
        {
          title: 'Вашият избор',
          content: 'Когато посетите нашия уебсайт за първи път, ще ви бъде показан банер за съгласие с бисквитките. Можете да:'
        },
        {
          title: 'Актуализации на тази политика',
          content: 'Можем да актуализираме тази Политика за бисквитките периодично. Всички промени ще бъдат публикувани на тази страница с актуализирана дата на редакция.'
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