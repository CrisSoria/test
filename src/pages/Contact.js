import { motion } from "framer-motion";
import React from "react";
import ContactSection from "../components/ContactSection";
import Map from "../components/Map";
import { pageTransition, pageVariants } from "../styles/transitions";

export default function Contact() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <ContactSection />
      <Map />
    </motion.div>
  );
}
