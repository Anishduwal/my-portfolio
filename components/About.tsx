"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 max-w-5xl mx-auto px-6"
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-400 leading-relaxed">
        I build scalable backend systems and modern frontend applications.
        Passionate about Clean Architecture, performance, and UI/UX.
      </p>
    </motion.section>
  );
}
