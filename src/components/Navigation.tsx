'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/portfolio-data'

interface NavigationProps {
  showNav: boolean
}

export default function Navigation({ showNav }: NavigationProps) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 w-full bg-black text-yellow-300 z-50 border-b-4 border-black"
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <motion.h2
          initial={{ rotateZ: -5 }}
          animate={{ rotateZ: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="font-black text-2xl uppercase"
        >
          {portfolioData.firstName}!
        </motion.h2>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          className="flex gap-6 font-bold uppercase text-sm"
        >
          <a href="#about" className="hover:bg-yellow-300 hover:text-black px-2 py-1 transition-colors">About</a>
          <a href="#work" className="hover:bg-yellow-300 hover:text-black px-2 py-1 transition-colors">Work</a>
          <a href="#contact" className="hover:bg-yellow-300 hover:text-black px-2 py-1 transition-colors">Contact</a>
        </motion.div>
      </div>
    </motion.nav>
  )
}