import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
// import TestimonialsSection from "../components/TestimonialsSection";
import ContactBanner from "../components/ContactBanner";
import HeroSection from "../components/HeroSection";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../styles/transitions";

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <ContactBanner />
    </motion.div>
  );
}
