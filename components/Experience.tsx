"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "Inficare Pvt. Ltd.",
    title: "Software Engineer",
    date: "2025 – Present",
    tech: "ASP.NET Core, Clean Architecture, CQRS, PostgreSQL, Kafka, Redis, gRPC, Kubernetes, OpenShift",
    logo: "/logos/inficare.png",
    projectImage: "/projects/himalremit.png",
    current: true,
    projectLink: "#projects",
  },
  {
    company: "SmartCard Nepal",
    title: ".NET Developer",
    date: "2023 – 2025",
    tech: "ASP.NET MVC, REST & SOAP APIs, Hangfire, SQL Server, JavaScript, jQuery",
    logo: "/logos/mypay.png",
    projectImage: "/projects/mypay.png",
    projectLink: "#projects",
  },
  {
    company: "Noble Idea Solution",
    title: "Junior .NET Developer",
    date: "2022 – 2023",
    tech: "ASP.NET MVC, Hangfire, SQL Server, JavaScript, jQuery",
    logo: "/logos/noble-idea.png",
    projectImage: "/projects/nicepos.png",
    projectLink: "#projects",
  },
];


export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-900 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-16">
          Experience
        </h2>

        <div className="relative border-l border-gray-800 pl-12 space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative group ${
                exp.current ? "bg-blue-500/5 p-6 rounded-xl" : ""
              }`}
            >
              {/* Timeline Dot */}
              <span
                className={`absolute -left-[13px] top-6 w-5 h-5 rounded-full ${
                  exp.current
                    ? "bg-blue-500 shadow-blue-500/60 shadow-xl"
                    : "bg-gray-600"
                }`}
              />

              <div className="flex items-start gap-5">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 260 }}
                    className="
                      relative w-12 h-12 rounded-xl overflow-hidden
                      shadow-[0_0_20px_rgba(59,130,246,0.4)]
                      hover:shadow-[0_0_35px_rgba(59,130,246,0.9)]
                    "
                >
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="object-contain"
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.company}
                    </h3>

                    {exp.current && (
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-blue-400 mt-1">
                    {exp.title}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {exp.date}
                  </p>

                  <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                    {exp.tech}
                  </p>

                  {/* View Projects */}
                  <a
                    href={exp.projectLink}
                    className="inline-block mt-4 text-sm text-blue-400 hover:text-blue-300 transition"
                  >
                    View Projects →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}