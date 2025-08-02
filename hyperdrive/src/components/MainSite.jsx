import React from 'react';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export default function MainSite() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-2xl font-orbitron">HYPERDRIVE</div>
        <ul className="flex space-x-6 text-[#BFBFBF]">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Models</li>
          <li className="hover:text-white cursor-pointer">Gallery</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24">
        <motion.div
          className="flex-1"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold tracking-widest mb-6">
            UNLEASH YOUR <span className="text-[#E6E6E6]">HYPERDRIVE</span>
          </h1>
          <p className="text-[#BFBFBF] text-lg mb-8 max-w-md leading-relaxed">
            Discover elite automotive engineering with mind‑blowing speed, advanced
            tech and futuristic design. Inspired by the world’s most exclusive marques.
          </p>
          <motion.button
            className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[#2E2E2E] rounded-full px-8 py-4 text-[#E6E6E6] font-semibold hover:bg-[rgba(255,255,255,0.1)] transition"
            whileHover={{ scale: 1.05, opacity: 1 }}
          >
            Explore Models
          </motion.button>
        </motion.div>

        <motion.div
          className="flex-1 mb-10 md:mb-0"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="/assets/hero-car.png"
            alt="HyperDrive Car"
            className="w-full object-contain"
          />
        </motion.div>
      </div>

      {/* Features / Models Preview */}
      <div className="py-16 px-6 md:px-24 bg-black">
        <h2 className="text-3xl font-orbitron font-bold tracking-wide text-center mb-12">
          Elite Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Model S1', 'Model X1', 'Model GT1'].map((model) => (
            <motion.div
              key={model}
              className="relative overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={`/assets/${model.toLowerCase()}.png`}
                alt={model}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)] flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-semibold">{model}</h3>
                <p className="text-[#E6E6E6] mt-2">0–60mph in 2.{Math.floor(Math.random()*9)}s</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
