'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pb-20 relative">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 -rotate-12"
        />
        <motion.div
          animate={{
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rotate-45"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-9xl font-black uppercase leading-none">
            <span className="block bg-black text-yellow-300 px-4 py-2 inline-block transform -rotate-2">
              {portfolioData.name.split(' ')[0]}
            </span>
            <span className="block bg-red-500 text-white px-4 py-2 inline-block transform rotate-2 mt-4">
              {portfolioData.name.split(' ')[1]}
            </span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-black text-yellow-300 p-6 border-4 border-black transform -rotate-1"
        >
          <p className="text-2xl font-black uppercase mb-2">{portfolioData.title}</p>
          <p className="text-lg">{portfolioData.bio}</p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="#work"
            className="bg-red-500 text-white px-8 py-4 font-black uppercase border-4 border-black hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform flex items-center gap-2"
          >
            See Work <ArrowRight />
          </a>
          <a
            href="#lets-talk"
            className="bg-blue-500 text-white px-8 py-4 font-black uppercase border-4 border-black hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform"
          >
            Hire Me!
          </a>
        </motion.div>
      </div>
    </section>
  )
}