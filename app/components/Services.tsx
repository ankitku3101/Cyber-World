"use client"

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const services = [
    {
      title: "Penetration Testing",
      description: "A web app that allows users to practice for front-end and UI interviews.",
      id: 1
    },
    {
      title: "Network Security",
      description: "A web app that allows users to practice for front-end and UI interviews.",
      id: 2
    },
    {
      title: "Web Security",
      description: "A web app that allows users to practice for front-end and UI interviews.",
      id: 3
    },
    {
      title: "Cloud Security",
      description: "A web app that allows users to practice for front-end and UI interviews.",
      id: 4
    },
    {
      title: "Server Security",
      description: "A web app that allows users to practice for front-end and UI interviews.",
      id: 5
    },
    {
      title: "Threat Intelligence",
      description: "A web app that allows users to practice for front-end and UI interviews.",
      id: 6
    },
  ];

export function Services()  {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-8 py-6">    
    <div className="pt-20 mb-4 flex justify-center text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-5xl"><div className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mr-4">Secure Systems</div>Protected Data</div>
    <div className="flex justify-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">We offer wide range of services for your system's privacy and safety</div>  
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
        {services.map((service, idx) => (
          <div
            key={service?.id}
            className="relative group block p-2 h-full w-full "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground" 
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
              <div className="relative z-50">
                <div className="p-4">
                  <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
                    {service.title}
                  </h4>
                  <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

