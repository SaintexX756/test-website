import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const PrivacyPolicy = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: March 1, 2024',
      sections: [
        {
          title: 'Introduction',
          content: 'At Hotel Demo, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.'
        },
        {
          title: 'Information We Collect',
          content: 'We collect information that you provide directly to us, including:',
          list: [
            'Name, email address, and contact information',
            'Booking and reservation details',
            'Payment information',
            'Communication preferences',
            'Feedback and survey responses'
          ]
        },
        {
          title: 'How We Use Your Information',
          content: 'We use the information we collect to:',
          list: [
            'Process your reservations and payments',
            'Communicate with you about your stay',
            'Send you marketing communications (with your consent)',
            'Improve our services and website',
            'Comply with legal obligations'
          ]
        },
        {
          title: 'Information Sharing',
          content: 'We do not sell your personal information. We may share your information with:'
        },
        {
          title: 'Your Rights',
          content: 'You have the right to:',
          list: [
            'Access your personal information',
            'Correct inaccurate information',
            'Request deletion of your information',
            'Opt-out of marketing communications',
            'Lodge a complaint with supervisory authorities'
          ]
        },
        {
          title: 'Security',
          content: 'We implement appropriate technical and organizational measures to protect your personal information.'
        },
        {
          title: 'Contact Us',
          content: 'If you have any questions about this Privacy Policy, please contact us at privacy@hoteldemo.com'
        }
      ]
    },
    bg: {
      title: 'Политика за поверителност',
      lastUpdated: 'Последна актуализация: 1 март 2024',
      sections: [
        {
          title: 'Въведение',
          content: 'В Hotel Demo приемаме вашата поверителност сериозно. Тази Политика за поверителност обяснява как събираме, използваме, разкриваме и защитаваме вашата информация, когато посещавате нашия уебсайт или използвате нашите услуги.'
        },
        {
          title: 'Информация, която събираме',
          content: 'Събираме информация, която ни предоставяте директно, включително:',
          list: [
            'Име, имейл адрес и информация за контакт',
            'Детайли за резервации',
            'Информация за плащане',
            'Предпочитания за комуникация',
            'Обратна връзка и отговори на анкети'
          ]
        },
        {
          title: 'Как използваме вашата информация',
          content: 'Използваме събраната информация за:',
          list: [
            'Обработка на вашите резервации и плащания',
            'Комуникация с вас относно престоя ви',
            'Изпращане на маркетингови съобщения (с ваше съгласие)',
            'Подобряване на нашите услуги и уебсайт',
            'Спазване на законовите задължения'
          ]
        },
        {
          title: 'Споделяне на информация',
          content: 'Не продаваме вашата лична информация. Можем да споделяме вашата информация с:'
        },
        {
          title: 'Вашите права',
          content: 'Имате право да:',
          list: [
            'Достъпвате вашата лична информация',
            'Коригирате неточна информация',
            'Поискате изтриване на вашата информация',
            'Откажете маркетингови съобщения',
            'Подадете жалба до надзорните органи'
          ]
        },
        {
          title: 'Сигурност',
          content: 'Прилагаме подходящи технически и организационни мерки за защита на вашата лична информация.'
        },
        {
          title: 'Свържете се с нас',
          content: 'Ако имате въпроси относно тази Политика за поверителност, моля свържете се с нас на privacy@hoteldemo.com'
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