import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DemoVideoSection from '../components/DemoVideoSection';
import PricingCalculator from '../components/PricingCalculator';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Navbar />
      <Hero />
      <Features />
      <DemoVideoSection />
      <PricingCalculator />
      <Testimonials />
      <FAQ />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;