'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-8 bg-blue-500 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-6xl font-black uppercase mb-8"
        >
          <span className="bg-yellow-300 text-black px-4 py-2 inline-block transform -rotate-2">
            Let's Talk!
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-12 bg-black px-6 py-3 inline-block"
        >
          Ready to build something awesome?
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href={`mailto:${portfolioData.email}`}
            className="bg-yellow-300 text-black p-4 border-4 border-black hover:transform hover:rotate-6 transition-transform"
          >
            <Mail size={32} />
          </a>
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-300 text-black p-4 border-4 border-black hover:transform hover:rotate-6 transition-transform"
          >
            <Github size={32} />
          </a>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-300 text-black p-4 border-4 border-black hover:transform hover:rotate-6 transition-transform"
          >
            <Linkedin size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}