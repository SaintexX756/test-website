import React from 'react';
import { Hero } from '../components/Hero';
import { Amenities } from '../components/Amenities';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Amenities />
      <Gallery />
      <Testimonials />
    </>
  );
};