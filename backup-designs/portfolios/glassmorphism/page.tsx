'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, Megaphone, Zap, Music } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export default function PosterBrutalistPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Concert Poster Style Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black border-b-8 border-red-500">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="transform -rotate-2"
            >
              <h1 className="text-3xl font-black uppercase tracking-wider text-red-500">
                {portfolioData.firstName}
                <span className="text-white">/DEV</span>
              </h1>
              <div className="text-xs font-black uppercase tracking-widest text-yellow-400">
                LIVE IN CODE
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-6 font-black uppercase text-sm"
            >
              <a href="#about" className="text-white hover:text-red-500 transition-colors transform hover:scale-110">
                ABOUT
              </a>
              <a href="#skills" className="text-white hover:text-yellow-400 transition-colors transform hover:scale-110">
                SKILLS
              </a>
              <a href="#projects" className="text-white hover:text-cyan-400 transition-colors transform hover:scale-110">
                PROJECTS
              </a>
              <a href="#contact" className="text-white hover:text-green-400 transition-colors transform hover:scale-110">
                CONTACT
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Concert Poster Style */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-yellow-900/20"></div>
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #fff 2px, #fff 4px)',
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Main Headline - Concert Poster Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black uppercase leading-none tracking-tight">
                <span className="block text-red-500 transform -skew-x-6 drop-shadow-brutal">
                  {portfolioData.name.split(' ')[0]}
                </span>
                <span className="block text-yellow-400 transform skew-x-6 drop-shadow-brutal -mt-4">
                  {portfolioData.name.split(' ')[1]}
                </span>
              </h1>
              
              {/* Poster-style decorative elements */}
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 15 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-8 -right-8 w-32 h-32 border-8 border-white transform rotate-15"
              >
                <div className="w-full h-full bg-cyan-400 flex items-center justify-center">
                  <Megaphone className="w-16 h-16 text-black transform -rotate-15" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Subtitle Banner */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="relative mb-12"
          >
            <div 
              className="bg-white text-black py-6 px-12 transform -rotate-1 inline-block border-8 border-black"
              style={{
                filter: 'drop-shadow(8px 8px 0px #ff0000)',
                clipPath: 'polygon(0% 0%, 95% 0%, 100% 80%, 90% 100%, 0% 100%)'
              }}
            >
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest">
                {portfolioData.title}
              </h2>
              <div className="text-lg font-black uppercase tracking-widest text-red-500 mt-2">
                LIVE CODING EXPERIENCE
              </div>
            </div>
          </motion.div>

          {/* Event Details Style */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {/* Bio Card */}
            <div 
              className="bg-red-500 text-black p-6 border-8 border-white transform rotate-2"
              style={{ filter: 'drop-shadow(8px 8px 0px #000000)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-black transform rotate-45"></div>
                <span className="font-black uppercase text-sm tracking-wider">BIOGRAPHY</span>
              </div>
              <p className="font-black text-sm leading-tight uppercase">{portfolioData.bio}</p>
            </div>

            {/* Location Card */}
            <div 
              className="bg-yellow-400 text-black p-6 border-8 border-white transform -rotate-1"
              style={{ filter: 'drop-shadow(8px 8px 0px #000000)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-black transform rotate-45"></div>
                <span className="font-black uppercase text-sm tracking-wider">LOCATION</span>
              </div>
              <p className="font-black text-2xl uppercase">{portfolioData.location}</p>
              <p className="font-black text-sm uppercase mt-2">BASE OF OPERATIONS</p>
            </div>

            {/* Since Card */}
            <div 
              className="bg-cyan-400 text-black p-6 border-8 border-white transform rotate-1"
              style={{ filter: 'drop-shadow(8px 8px 0px #000000)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-black transform rotate-45"></div>
                <span className="font-black uppercase text-sm tracking-wider">SINCE</span>
              </div>
              <p className="font-black text-2xl uppercase">2018</p>
              <p className="font-black text-sm uppercase mt-2">CODING SINCE</p>
            </div>
          </motion.div>

          {/* CTA Buttons - Ticket Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="flex gap-6 justify-center flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              href="#projects"
              className="bg-red-500 text-white px-8 py-4 font-black uppercase text-lg border-8 border-white transform hover:bg-white hover:text-red-500 transition-colors"
              style={{ 
                filter: 'drop-shadow(8px 8px 0px #000000)',
                clipPath: 'polygon(0% 0%, 90% 0%, 100% 70%, 85% 100%, 0% 100%)'
              }}
            >
              VIEW PROJECTS
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="#contact"
              className="bg-yellow-400 text-black px-8 py-4 font-black uppercase text-lg border-8 border-white transform hover:bg-white hover:text-yellow-600 transition-colors"
              style={{ 
                filter: 'drop-shadow(8px 8px 0px #000000)',
                clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 70%)'
              }}
            >
              BOOK NOW!
            </motion.a>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-10 w-24 h-24 border-8 border-green-400"
          >
            <div className="w-full h-full bg-green-400 flex items-center justify-center">
              <Music className="w-12 h-12 text-black" />
            </div>
          </motion.div>

          <motion.div
            animate={{
              rotate: [0, -360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-10 w-20 h-20 border-6 border-purple-400 transform rotate-45"
          >
            <div className="w-full h-full bg-purple-400 flex items-center justify-center">
              <Zap className="w-10 h-10 text-black transform -rotate-45" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Festival Lineup Style */}
      <section id="skills" className="py-32 px-8 bg-gradient-to-r from-red-600 via-black to-yellow-600 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center mb-16"
          >
            <div 
              className="bg-white text-black px-12 py-8 font-black text-6xl uppercase inline-block border-8 border-black transform -rotate-2"
              style={{ 
                filter: 'drop-shadow(12px 12px 0px #ffff00)',
                clipPath: 'polygon(0% 0%, 95% 0%, 100% 85%, 90% 100%, 0% 100%)'
              }}
            >
              TECH/LINEUP
            </div>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 100, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: (index - 1) * 2 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring" }}
                className="relative"
              >
                {/* Stage/Category Header */}
                <div 
                  className={`${
                    index === 0 ? 'bg-red-500' : index === 1 ? 'bg-yellow-400' : 'bg-cyan-400'
                  } text-black p-6 border-8 border-white mb-4 transform`}
                  style={{ 
                    filter: 'drop-shadow(8px 8px 0px #000000)',
                    clipPath: 'polygon(0% 0%, 90% 0%, 100% 70%, 85% 100%, 0% 100%)'
                  }}
                >
                  <h3 className="text-3xl font-black uppercase text-center">
                    {category} STAGE
                  </h3>
                </div>

                {/* Artists/Skills List */}
                <div className="space-y-4">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                      className="bg-black border-4 border-white p-4 transform hover:scale-105 transition-transform"
                      style={{ filter: 'drop-shadow(4px 4px 0px #ffffff)' }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-black uppercase text-white text-lg tracking-wider">
                          {skill}
                        </span>
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-3 h-3 ${
                                i < (skillIndex % 3) + 1 ? 'bg-yellow-400' : 'bg-gray-600'
                              } transform rotate-45`} 
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stage Number */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (index * 0.2) + 0.5 }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-white text-black border-4 border-black flex items-center justify-center font-black text-2xl transform rotate-12"
                  style={{ filter: 'drop-shadow(4px 4px 0px #000000)' }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Concert Posters */}
      <section id="projects" className="py-32 px-8 bg-gradient-to-r from-yellow-600 via-black to-cyan-600 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div 
              className="bg-cyan-400 text-black px-12 py-8 font-black text-6xl uppercase inline-block border-8 border-black"
              style={{ 
                filter: 'drop-shadow(12px 12px 0px #ff0000)',
                clipPath: 'polygon(0% 0%, 90% 0%, 100% 80%, 85% 100%, 0% 100%)'
              }}
            >
              FEATURED/SHOWS
            </div>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {portfolioData.projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? 3 : -3 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="relative group"
              >
                {/* Poster Frame */}
                <div 
                  className="bg-white border-8 border-black p-8 transform"
                  style={{ 
                    filter: 'drop-shadow(16px 16px 0px #000000)',
                    clipPath: 'polygon(0% 0%, 95% 0%, 100% 90%, 85% 100%, 0% 100%)'
                  }}
                >
                  {/* Project Header - Concert Style */}
                  <div className="text-center mb-6">
                    <div className="bg-black text-white px-4 py-2 inline-block transform -rotate-2 mb-4">
                      <span className="font-black uppercase text-sm tracking-widest">PRESENTS</span>
                    </div>
                    <h3 className="text-4xl font-black uppercase text-black leading-tight">
                      {project.title}
                    </h3>
                    <div className="w-full h-2 bg-black mt-2"></div>
                  </div>
                  
                  <p className="text-lg font-bold mb-6 leading-tight text-black text-center uppercase">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack - Band Members Style */}
                  <div className="mb-8">
                    <div className="text-center mb-4">
                      <span className="bg-red-500 text-white px-3 py-1 font-black uppercase text-sm">
                        FEATURING
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {project.tech.slice(0, 6).map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.3) + (techIndex * 0.1) }}
                          className="bg-black text-white px-2 py-1 font-black uppercase text-xs text-center border-2 border-black transform hover:scale-110 transition-transform"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Ticket-style buttons */}
                  <div className="flex gap-4 justify-center">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-500 text-white px-4 py-3 font-black uppercase text-sm border-4 border-black hover:bg-black hover:text-red-500 transition-colors flex items-center gap-2"
                        style={{ 
                          filter: 'drop-shadow(4px 4px 0px #000000)',
                          clipPath: 'polygon(0% 0%, 85% 0%, 100% 80%, 15% 100%)'
                        }}
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
                        className="bg-yellow-400 text-black px-4 py-3 font-black uppercase text-sm border-4 border-black hover:bg-black hover:text-yellow-400 transition-colors flex items-center gap-2"
                        style={{ 
                          filter: 'drop-shadow(4px 4px 0px #000000)',
                          clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 80%)'
                        }}
                      >
                        <ExternalLink size={16} />
                        LIVE
                      </motion.a>
                    )}
                  </div>

                  {/* Date/Time mockup */}
                  <div className="text-center mt-6 pt-4 border-t-4 border-black border-dashed">
                    <p className="font-black uppercase text-xs text-black">
                      DEPLOYED • PRODUCTION READY • LIVE NOW
                    </p>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-green-400 border-2 border-black transform rotate-45"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 border-2 border-black transform rotate-45"></div>
              </motion.div>
            ))}
          </div>

          {/* More Shows */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div 
              className="bg-green-400 text-black px-8 py-4 inline-block font-black uppercase text-xl border-8 border-black transform hover:rotate-0 transition-transform"
              style={{ 
                filter: 'drop-shadow(8px 8px 0px #000000)',
                clipPath: 'polygon(5% 0%, 95% 0%, 100% 85%, 90% 100%, 0% 90%)'
              }}
            >
              + {portfolioData.projects.filter(p => !p.featured).length} MORE SHOWS COMING SOON
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Event Ticket Style */}
      <section id="contact" className="py-32 px-8 bg-gradient-to-r from-purple-600 via-black to-green-600 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center mb-16"
          >
            <div 
              className="bg-white text-black px-12 py-8 font-black text-6xl uppercase inline-block border-8 border-black"
              style={{ 
                filter: 'drop-shadow(12px 12px 0px #00ff00)',
                clipPath: 'polygon(0% 0%, 90% 0%, 100% 80%, 85% 100%, 0% 100%)'
              }}
            >
              BOOKING/INFO
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-black uppercase mt-8 bg-red-500 text-white px-6 py-3 inline-block transform -rotate-2 border-4 border-white"
              style={{ filter: 'drop-shadow(6px 6px 0px #000000)' }}
            >
              READY TO ROCK THE CODE STAGE?
            </motion.p>
          </motion.div>

          {/* Contact Cards - VIP Pass Style */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8 flex-wrap"
          >
            {[
              { icon: Mail, href: `mailto:${portfolioData.email}`, color: 'bg-red-500', label: 'EMAIL' },
              { icon: Github, href: portfolioData.social.github, color: 'bg-yellow-400', label: 'GITHUB' },
              { icon: Linkedin, href: portfolioData.social.linkedin, color: 'bg-cyan-400', label: 'LINKEDIN' },
              { icon: Twitter, href: portfolioData.social.twitter, color: 'bg-green-400', label: 'TWITTER' }
            ].map(({ icon: Icon, href, color, label }, index) => (
              <motion.a
                key={href}
                whileHover={{ scale: 1.2, rotate: index % 2 === 0 ? 10 : -10 }}
                href={href}
                target={href.includes('mailto') ? undefined : "_blank"}
                rel={href.includes('mailto') ? undefined : "noopener noreferrer"}
                className={`${color} text-black p-6 border-8 border-white font-black uppercase flex flex-col items-center justify-center w-32 h-32 hover:bg-black hover:text-white transition-colors transform`}
                style={{ 
                  filter: 'drop-shadow(8px 8px 0px #000000)',
                  clipPath: 'polygon(10% 0%, 90% 0%, 100% 90%, 90% 100%, 10% 100%, 0% 90%)',
                  rotate: `${(index - 1.5) * 5}deg`
                }}
              >
                <Icon size={32} className="mb-2" />
                <span className="text-xs">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <div 
              className="bg-purple-500 text-white px-12 py-6 inline-block font-black text-2xl uppercase border-8 border-white transform rotate-1"
              style={{ 
                filter: 'drop-shadow(8px 8px 0px #000000)',
                clipPath: 'polygon(0% 0%, 95% 0%, 100% 85%, 90% 100%, 0% 100%)'
              }}
            >
              DON'T MISS THE SHOW - CONTACT NOW!
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}