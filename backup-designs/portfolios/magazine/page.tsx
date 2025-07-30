'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, Scissors, Paperclip, Star } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export default function CollageBrutalistPortfolio() {
  return (
    <div className="min-h-screen bg-amber-50 text-black overflow-hidden relative">
      {/* Torn Paper Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 1, -1, 0],
            x: [0, 5, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-red-400 opacity-20"
          style={{ 
            clipPath: 'polygon(0% 0%, 85% 0%, 95% 35%, 85% 100%, 0% 100%)',
            filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.3))'
          }}
        />
        <motion.div
          animate={{
            rotate: [0, -2, 2, 0],
            y: [0, -10, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-0 w-72 h-72 bg-blue-400 opacity-25"
          style={{ 
            clipPath: 'polygon(15% 0%, 100% 0%, 100% 85%, 65% 100%, 0% 85%)',
            filter: 'drop-shadow(6px 6px 12px rgba(0,0,0,0.2))'
          }}
        />
        <motion.div
          animate={{
            rotate: [0, 3, -1, 0],
            x: [0, -8, 8, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-1/3 w-80 h-80 bg-green-400 opacity-15"
          style={{ 
            clipPath: 'polygon(0% 15%, 85% 0%, 100% 80%, 75% 100%, 0% 100%)',
            filter: 'drop-shadow(8px 8px 16px rgba(0,0,0,0.25))'
          }}
        />
      </div>

      {/* Collage Navigation */}
      <nav className="relative z-50 p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white border-8 border-black p-6 inline-block transform rotate-2 shadow-brutal"
          style={{ 
            clipPath: 'polygon(0% 0%, 95% 0%, 100% 90%, 85% 100%, 0% 100%)',
            filter: 'drop-shadow(8px 8px 0px #000000)'
          }}
        >
          <h1 className="text-3xl font-black uppercase tracking-wider">
            {portfolioData.firstName}/<span className="text-red-500">COLLAGE</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute top-8 right-8 flex gap-2"
        >
          {['WORK', 'SKILLS', 'CONTACT'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: (index - 1) * 15, scale: 1 }}
              transition={{ delay: 0.1 * index, type: "spring" }}
              className="bg-yellow-300 text-black px-4 py-2 font-black text-sm border-4 border-black hover:bg-red-300 transition-colors transform hover:scale-110 shadow-brutal"
              style={{ 
                clipPath: index % 2 === 0 ? 'polygon(0% 0%, 85% 0%, 100% 85%, 15% 100%)' : 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 85%)',
                filter: 'drop-shadow(4px 4px 0px #000000)'
              }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </nav>

      {/* Hero Section - Paper Collage Style */}
      <section className="py-20 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4 items-center">
            {/* Main Title - Torn Paper Effect */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
              className="col-span-12 md:col-span-7 relative"
            >
              <div className="relative z-10">
                {portfolioData.name.split(' ').map((word, index) => (
                  <motion.div
                    key={word}
                    initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? -2 : 2 }}
                    transition={{ delay: 0.4 + (index * 0.2) }}
                    className={`inline-block mb-4 mr-4 ${index === 0 ? 'bg-red-400' : 'bg-cyan-400'} text-black font-black text-6xl md:text-8xl px-6 py-4 border-8 border-black transform shadow-brutal`}
                    style={{ 
                      clipPath: index === 0 
                        ? 'polygon(0% 0%, 90% 0%, 95% 85%, 85% 100%, 0% 95%)' 
                        : 'polygon(5% 0%, 100% 0%, 100% 90%, 80% 100%, 0% 85%)',
                      filter: 'drop-shadow(12px 12px 0px #000000)'
                    }}
                  >
                    {word}
                  </motion.div>
                ))}
              </div>
              
              {/* Scattered Paper Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-300 border-4 border-black transform rotate-12"
                style={{ 
                  clipPath: 'polygon(0% 20%, 80% 0%, 100% 80%, 20% 100%)',
                  filter: 'drop-shadow(4px 4px 0px #000000)'
                }}
              >
                <Star className="w-8 h-8 m-2 text-black" />
              </motion.div>
            </motion.div>

            {/* Info Collage */}
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: 10 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="col-span-12 md:col-span-5"
            >
              <div className="space-y-4">
                {/* Title Paper */}
                <div 
                  className="bg-white text-black p-6 border-8 border-black transform rotate-1 shadow-brutal"
                  style={{ 
                    clipPath: 'polygon(0% 0%, 95% 0%, 100% 85%, 90% 100%, 0% 100%)',
                    filter: 'drop-shadow(8px 8px 0px #000000)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Paperclip className="w-6 h-6 text-red-500" />
                    <span className="font-black uppercase text-sm tracking-wider">DEVELOPER</span>
                  </div>
                  <h2 className="text-2xl font-black mb-3 uppercase">{portfolioData.title}</h2>
                  <p className="font-bold text-sm leading-tight">{portfolioData.bio}</p>
                </div>

                {/* Location Tag */}
                <motion.div
                  initial={{ opacity: 0, rotate: -20 }}
                  animate={{ opacity: 1, rotate: -8 }}
                  transition={{ delay: 0.9 }}
                  className="bg-green-300 text-black px-4 py-2 font-black text-sm border-4 border-black transform -rotate-8 inline-block shadow-brutal"
                  style={{ 
                    clipPath: 'polygon(5% 0%, 100% 15%, 95% 100%, 0% 85%)',
                    filter: 'drop-shadow(6px 6px 0px #000000)'
                  }}
                >
                  📍 {portfolioData.location}
                </motion.div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    href="#work"
                    className="bg-red-500 text-white px-6 py-3 font-black uppercase text-sm border-6 border-black transform rotate-2 hover:bg-black transition-colors shadow-brutal"
                    style={{ 
                      filter: 'drop-shadow(6px 6px 0px #000000)'
                    }}
                  >
                    VIEW WORK
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    href="#contact"
                    className="bg-yellow-300 text-black px-6 py-3 font-black uppercase text-sm border-6 border-black transform -rotate-2 hover:bg-cyan-300 transition-colors shadow-brutal"
                    style={{ 
                      filter: 'drop-shadow(6px 6px 0px #000000)'
                    }}
                  >
                    HIRE ME
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Decorative Elements */}
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              y: [0, -20, 20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400 border-6 border-black transform rotate-45 shadow-brutal"
          >
            <Scissors className="w-12 h-12 m-3 text-black transform -rotate-45" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Mixed Media Collage */}
      <section id="skills" className="py-32 px-8 bg-gradient-to-br from-red-100 to-orange-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-200 to-transparent transform skew-y-3"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center mb-16"
          >
            <span 
              className="bg-black text-white px-8 py-4 font-black text-5xl uppercase inline-block border-8 border-black transform rotate-1 shadow-brutal"
              style={{ 
                clipPath: 'polygon(0% 0%, 95% 0%, 100% 90%, 85% 100%, 0% 100%)',
                filter: 'drop-shadow(12px 12px 0px #ff0000)'
              }}
            >
              SKILLS/TOOLKIT
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 100, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: (index - 1) * 3 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring" }}
                className="relative"
              >
                {/* Paper Background with Torn Edge */}
                <div 
                  className={`bg-white border-8 border-black p-8 transform shadow-brutal ${
                    index === 0 ? 'bg-cyan-50' : index === 1 ? 'bg-yellow-50' : 'bg-pink-50'
                  }`}
                  style={{ 
                    clipPath: index === 0 
                      ? 'polygon(0% 0%, 90% 0%, 95% 80%, 85% 100%, 0% 100%)' 
                      : index === 1 
                      ? 'polygon(0% 0%, 95% 0%, 100% 85%, 90% 100%, 5% 100%)'
                      : 'polygon(5% 0%, 100% 0%, 100% 90%, 85% 100%, 0% 85%)',
                    filter: 'drop-shadow(8px 8px 0px #000000)'
                  }}
                >
                  {/* Category Title with Tape */}
                  <div className="relative mb-6">
                    <h3 className="text-2xl font-black uppercase">{category}</h3>
                    <div 
                      className="absolute -top-2 -right-2 w-16 h-8 bg-yellow-300 border-2 border-black transform rotate-12 opacity-80"
                      style={{ 
                        clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
                      }}
                    />
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-3">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20, rotate: -5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                        className="flex items-center gap-3"
                      >
                        <div 
                          className={`w-6 h-6 border-3 border-black transform rotate-45 ${
                            skillIndex % 3 === 0 ? 'bg-red-400' : skillIndex % 3 === 1 ? 'bg-blue-400' : 'bg-green-400'
                          }`}
                          style={{ filter: 'drop-shadow(2px 2px 0px #000000)' }}
                        />
                        <span className="font-black uppercase text-sm tracking-wider">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Paper Clips and Tape */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.2) + 0.5 }}
                  className="absolute -top-3 left-4"
                >
                  <Paperclip className="w-8 h-8 text-gray-600 transform rotate-45" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Layered Collage */}
      <section id="work" className="py-32 px-8 bg-gradient-to-br from-blue-100 to-purple-100 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span 
              className="bg-purple-400 text-black px-8 py-4 font-black text-5xl uppercase inline-block border-8 border-black transform -rotate-2 shadow-brutal"
              style={{ 
                clipPath: 'polygon(0% 0%, 90% 0%, 100% 80%, 85% 100%, 0% 100%)',
                filter: 'drop-shadow(12px 12px 0px #000000)'
              }}
            >
              FEATURED/WORK
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {portfolioData.projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? 2 : -2 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, type: "spring" }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                className="relative group"
              >
                {/* Main Project Card */}
                <div 
                  className="bg-white border-8 border-black p-8 shadow-brutal"
                  style={{ 
                    clipPath: 'polygon(0% 0%, 95% 0%, 100% 85%, 90% 100%, 0% 100%)',
                    filter: 'drop-shadow(12px 12px 0px #000000)'
                  }}
                >
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-black uppercase leading-tight">
                      {project.title}
                    </h3>
                    <div 
                      className="bg-red-400 text-black p-2 border-4 border-black transform rotate-12"
                      style={{ filter: 'drop-shadow(4px 4px 0px #000000)' }}
                    >
                      <Star className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <p className="text-lg font-bold mb-6 leading-tight">{project.description}</p>
                  
                  {/* Tech Stack - Scattered Tags */}
                  <div className="mb-8 relative h-24">
                    {project.tech.slice(0, 6).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0, rotate: 0 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: (techIndex - 2) * 15 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.3) + (techIndex * 0.1) }}
                        className={`absolute bg-${techIndex % 3 === 0 ? 'yellow' : techIndex % 3 === 1 ? 'green' : 'pink'}-300 text-black px-3 py-1 font-black uppercase text-xs border-3 border-black transform hover:scale-110 transition-transform shadow-brutal`}
                        style={{ 
                          top: `${Math.floor(techIndex / 3) * 40}px`,
                          left: `${(techIndex % 3) * 80 + (techIndex * 10)}px`,
                          clipPath: 'polygon(10% 0%, 90% 0%, 100% 80%, 80% 100%, 0% 90%)',
                          filter: 'drop-shadow(3px 3px 0px #000000)'
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-8">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-4 py-3 font-black uppercase text-sm border-4 border-black hover:bg-red-500 transition-colors flex items-center gap-2 shadow-brutal"
                        style={{ filter: 'drop-shadow(4px 4px 0px #ff0000)' }}
                      >
                        <Github size={16} />
                        CODE
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cyan-400 text-black px-4 py-3 font-black uppercase text-sm border-4 border-black hover:bg-yellow-300 transition-colors flex items-center gap-2 shadow-brutal"
                        style={{ filter: 'drop-shadow(4px 4px 0px #000000)' }}
                      >
                        <ExternalLink size={16} />
                        LIVE
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (index * 0.3) + 0.8 }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-300 border-4 border-black transform rotate-45"
                  style={{ filter: 'drop-shadow(4px 4px 0px #000000)' }}
                />

                {/* Tape Effect */}
                <div 
                  className="absolute top-8 left-8 w-20 h-6 bg-yellow-300 border-2 border-black transform -rotate-12 opacity-70"
                  style={{ 
                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* More Projects Collage Element */}
          <motion.div
            initial={{ opacity: 0, rotate: 0, scale: 0 }}
            whileInView={{ opacity: 1, rotate: -3, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div 
              className="bg-green-400 text-black px-8 py-4 inline-block font-black uppercase text-xl border-8 border-black transform shadow-brutal hover:rotate-0 transition-transform"
              style={{ 
                clipPath: 'polygon(5% 0%, 95% 0%, 100% 85%, 90% 100%, 0% 90%)',
                filter: 'drop-shadow(8px 8px 0px #000000)'
              }}
            >
              + {portfolioData.projects.filter(p => !p.featured).length} MORE PROJECTS
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Mixed Media Contact */}
      <section id="contact" className="py-32 px-8 bg-gradient-to-br from-pink-100 to-red-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-pink-200 to-transparent transform -skew-y-2"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center mb-16"
          >
            <div 
              className="bg-white text-black px-8 py-6 font-black text-5xl uppercase inline-block border-8 border-black transform rotate-1 shadow-brutal"
              style={{ 
                clipPath: 'polygon(0% 0%, 90% 0%, 100% 80%, 85% 100%, 0% 100%)',
                filter: 'drop-shadow(12px 12px 0px #000000)'
              }}
            >
              LET'S/COLLABORATE
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-black uppercase mt-8 bg-yellow-300 text-black px-6 py-3 inline-block transform -rotate-2 border-4 border-black shadow-brutal"
              style={{ filter: 'drop-shadow(6px 6px 0px #000000)' }}
            >
              READY TO CREATE SOMETHING AMAZING?
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 flex-wrap"
          >
            {[
              { icon: Mail, href: `mailto:${portfolioData.email}`, color: 'bg-red-400' },
              { icon: Github, href: portfolioData.social.github, color: 'bg-blue-400' },
              { icon: Linkedin, href: portfolioData.social.linkedin, color: 'bg-green-400' },
              { icon: Twitter, href: portfolioData.social.twitter, color: 'bg-purple-400' }
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={href}
                whileHover={{ scale: 1.2, rotate: index % 2 === 0 ? 15 : -15 }}
                href={href}
                target={href.includes('mailto') ? undefined : "_blank"}
                rel={href.includes('mailto') ? undefined : "noopener noreferrer"}
                className={`${color} text-black p-6 border-8 border-black font-black uppercase flex items-center justify-center w-20 h-20 hover:bg-white transition-colors transform shadow-brutal`}
                style={{ 
                  clipPath: index % 2 === 0 
                    ? 'polygon(0% 0%, 85% 0%, 100% 85%, 15% 100%)' 
                    : 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 85%)',
                  filter: 'drop-shadow(8px 8px 0px #000000)',
                  rotate: `${(index - 1.5) * 10}deg`
                }}
              >
                <Icon size={32} />
              </motion.a>
            ))}
          </motion.div>

          {/* Decorative Paper Scraps */}
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="absolute top-10 left-10 w-16 h-16 bg-cyan-300 border-4 border-black transform rotate-12 shadow-brutal"
            style={{ clipPath: 'polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%)' }}
          />
          <motion.div
            animate={{
              rotate: [0, -8, 8, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
            }}
            className="absolute bottom-10 right-10 w-20 h-12 bg-yellow-300 border-4 border-black transform -rotate-6 shadow-brutal"
            style={{ clipPath: 'polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%)' }}
          />
        </div>
      </section>
    </div>
  )
}