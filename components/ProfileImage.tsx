"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../public/profile.png"

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-[280px] h-[280px] mx-auto"
    >
      {/* Glow ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 blur-xl opacity-30"
      />

      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative z-10 rounded-full overflow-hidden border-4 border-white shadow-2xl"
      >
        <Image
          src= {profile}
          alt="Anish Duwal"
          width={280}
          height={280}
          className="object-cover"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
