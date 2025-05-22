import React from 'react';

interface HotelSchema {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressCountry: string;
  };
  telephone: string;
  email: string;
  priceRange: string;
  starRating: number;
}

export const StructuredData: React.FC<HotelSchema> = (props) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    ...props,
    image: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      className="structured-data"
    />
  );
};