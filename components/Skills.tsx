"use client";

import { motion } from "framer-motion";
export default function Skills() {
  return (
<motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 max-w-5xl mx-auto px-6 scroll-mt-20"
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <p className="text-gray-400 leading-relaxed">
         • ASP.NET Core • JavaScript • Microservices • gRPC • Kafka • Redis
         • Kubernetes • OpenShift • CI/CD • Docker • Next.js
        </p>
</motion.section>
  );
}
