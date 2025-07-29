'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, Orbit, ChevronDown, Minimize2, Maximize2, X } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'
import { useRef, useState, useEffect } from 'react'

interface FloatingNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const FloatingNav = ({ activeSection, setActiveSection }: FloatingNavProps) => {
  const navItems = [
    { id: 'intro', label: 'INTRO', angle: 0 },
    { id: 'bio', label: 'BIO', angle: 90 },
    { id: 'tech', label: 'TECH', angle: 180 },
    { id: 'work', label: 'WORK', angle: 270 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="relative w-32 h-32">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-purple-500/30 rounded-full"
        />
        
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          const angle = (item.angle * Math.PI) / 180;
          const radius = 50;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              whileHover={{ scale: 1.2, rotate: 45 }}
              className={`absolute w-8 h-8 border-2 font-black text-xs uppercase transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                isActive 
                  ? 'bg-red-500 border-red-500 text-white scale-125' 
                  : 'bg-black border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black'
              }`}
              style={{
                left: `50%`,
                top: `50%`,
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              }}
            >
              {item.label.charAt(0)}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default function ExperimentalBrutalistPortfolio() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMinimized, setIsMinimized] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const glitchOffset = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'bio', 'tech', 'work'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: 'intro',
      title: 'SYSTEM_INIT.EXE',
      component: (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Glitch Background */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #ff0000 2px, #ff0000 4px)',
                backgroundSize: '100px 100px'
              }}
            />
          </div>

          <div className="relative z-10 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <div className="bg-red-500 text-white px-6 py-2 font-black text-sm uppercase inline-block transform -skew-x-12 border-4 border-black">
                ⚠ EXPERIMENTAL INTERFACE LOADED ⚠
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl font-black uppercase mb-6 leading-none"
            >
              <motion.span
                animate={{
                  textShadow: ['0px 0px 0px #ff0000', '4px 4px 0px #ff0000', '0px 0px 0px #ff0000'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="block text-white"
              >
                {portfolioData.name.split(' ')[0]}
              </motion.span>
              <motion.span
                animate={{
                  backgroundColor: ['#000000', '#ffff00', '#000000'],
                  color: ['#ffff00', '#000000', '#ffff00']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="block px-4 py-2 inline-block transform skew-x-12 border-4 border-yellow-400"
              >
                {portfolioData.name.split(' ')[1]}
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ delay: 0.8 }}
              className="bg-green-500 text-black p-6 font-mono text-left border-8 border-black mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 animate-pulse"></div>
                <span className="font-black uppercase text-sm">DEVELOPER.EXE RUNNING</span>
              </div>
              <div className="space-y-2 text-sm">
                <div>&gt; NAME: {portfolioData.name}</div>
                <div>&gt; ROLE: {portfolioData.title}</div>
                <div>&gt; LOCATION: {portfolioData.location}</div>
                <div>&gt; STATUS: {portfolioData.bio}</div>
                <div className="text-red-600 font-black">&gt; WARNING: UNCONVENTIONAL METHODS DETECTED</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: -5 }}
                onClick={() => setShowTerminal(true)}
                className="bg-red-500 text-white px-6 py-3 font-black uppercase border-4 border-black hover:bg-white hover:text-red-500 transition-colors transform -skew-x-12"
              >
                ENTER_SYSTEM
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                onClick={() => setActiveSection('work')}
                className="bg-cyan-500 text-black px-6 py-3 font-black uppercase border-4 border-black hover:bg-black hover:text-cyan-500 transition-colors transform skew-x-12"
              >
                SKIP_TO_WORK
              </motion.button>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: 'bio',
      title: 'BIOGRAPHY.DAT',
      component: (
        <div className="min-h-screen flex items-center justify-center py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              {/* Left Column - Corrupted Photo */}
              <div className="md:col-span-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-1 border-8 border-black transform -rotate-3">
                    <div className="bg-black h-64 flex items-center justify-center border-4 border-white">
                      <div className="text-white font-black text-center">
                        <Orbit className="w-16 h-16 mx-auto mb-4 animate-spin" />
                        <div className="text-xs uppercase tracking-widest">IMAGE_CORRUPTED</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-2 font-black text-xs uppercase border-4 border-black transform rotate-12">
                    DEVELOPER.JPG
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Bio Data */}
              <div className="md:col-span-8 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-yellow-400 text-black p-6 border-8 border-black transform rotate-1"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-4 h-4 bg-red-500 transform rotate-45"></div>
                    <span className="font-black uppercase text-lg">PERSONAL_DATA.TXT</span>
                  </div>
                  <p className="font-bold text-lg leading-tight">{portfolioData.bio}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-black text-green-500 p-6 border-8 border-green-500 transform -rotate-1 font-mono"
                >
                  <div className="mb-4 font-black uppercase text-lg">SYSTEM_LOGS.LOG</div>
                  <div className="space-y-2 text-sm">
                    <div>&gt; [2018] INIT: Started with HTML/CSS in Notepad</div>
                    <div>&gt; [2019] UPGRADE: Learned JavaScript fundamentals</div>
                    <div>&gt; [2020] EXPANSION: Mastered React and Node.js</div>
                    <div>&gt; [2021] PRODUCTION: Built first commercial projects</div>
                    <div>&gt; [2022] OPTIMIZATION: Specialized in full-stack development</div>
                    <div>&gt; [2023] SCALING: Enterprise-level applications</div>
                    <div className="text-green-400">&gt; [CURRENT] STATUS: Ready for new challenges</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-red-500 text-white p-4 border-8 border-black text-center font-black uppercase transform skew-x-6"
                >
                  LOCATION: {portfolioData.location} • EMAIL: {portfolioData.email}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: 'tech',
      title: 'TECH_STACK.SYS',
      component: (
        <div className="min-h-screen py-20 px-8 bg-gradient-to-br from-zinc-900 to-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="bg-cyan-500 text-black px-8 py-4 font-black text-5xl uppercase inline-block border-8 border-black transform -skew-y-3">
                TECH/ARSENAL
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(portfolioData.skills).map(([category, skills], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 100, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: (index - 1) * 5 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Glitch effect on hover */}
                  <motion.div
                    whileHover={{
                      x: [0, -2, 2, 0],
                      y: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 0.2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="bg-white border-8 border-black p-6 h-full group-hover:bg-red-500 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-black uppercase text-black group-hover:text-white">
                        {category}
                      </h3>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-green-500 animate-pulse"></div>
                        <div className="w-3 h-3 bg-yellow-500"></div>
                        <div className="w-3 h-3 bg-red-500"></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                          whileHover={{ scale: 1.05, rotate: 2 }}
                          className="bg-black text-white px-3 py-2 font-bold uppercase text-sm border-4 border-black transform hover:border-cyan-500 transition-all cursor-pointer"
                        >
                          <div className="flex items-center justify-between">
                            <span>{skill}</span>
                            <div className="flex gap-1">
                              {[...Array(3)].map((_, i) => (
                                <div 
                                  key={i} 
                                  className={`w-2 h-2 ${
                                    i < (skillIndex % 3) + 1 ? 'bg-cyan-500' : 'bg-gray-600'
                                  } transform rotate-45`} 
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Category Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 text-black border-4 border-black flex items-center justify-center font-black text-xl transform rotate-12">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'work',
      title: 'PROJECTS.EXE',
      component: (
        <div className="min-h-screen py-20 px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, rotate: 10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="bg-purple-500 text-white px-8 py-4 font-black text-5xl uppercase inline-block border-8 border-white transform skew-x-12">
                PORTFOLIO/DUMP
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {portfolioData.projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.5, rotate: index % 2 === 0 ? -15 : 15 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3, type: "spring" }}
                  whileHover={{ 
                    scale: 1.02,
                    rotate: index % 2 === 0 ? 2 : -2,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group"
                >
                  {/* Project Container */}
                  <div className="bg-white border-8 border-black p-8 relative overflow-hidden">
                    {/* Glitch overlay on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                      className="absolute inset-0 bg-gradient-to-r from-red-500 via-transparent to-blue-500 pointer-events-none"
                    />

                    {/* Project Header */}
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <h3 className="text-3xl font-black uppercase text-black leading-tight">
                        {project.title}
                      </h3>
                      <div className="bg-green-500 text-black px-3 py-1 font-black text-xs uppercase border-2 border-black">
                        ACTIVE
                      </div>
                    </div>

                    <p className="text-black font-bold mb-6 text-lg leading-tight relative z-10">
                      {project.description}
                    </p>

                    {/* Tech Tags - Scattered Layout */}
                    <div className="mb-8 relative h-24">
                      {project.tech.slice(0, 6).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0, rotate: 0 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: (techIndex - 2) * 15 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.3) + (techIndex * 0.1) }}
                          whileHover={{ scale: 1.2, rotate: 0 }}
                          className={`absolute bg-${techIndex % 4 === 0 ? 'red' : techIndex % 4 === 1 ? 'blue' : techIndex % 4 === 2 ? 'yellow' : 'green'}-500 text-${techIndex % 4 === 2 ? 'black' : 'white'} px-3 py-1 font-black uppercase text-xs border-3 border-black transform cursor-pointer`}
                          style={{
                            top: `${Math.floor(techIndex / 3) * 35}px`,
                            left: `${(techIndex % 3) * 90 + (techIndex * 5)}px`,
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 relative z-10 mt-8">
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black text-white px-6 py-3 font-black uppercase text-sm border-4 border-black hover:bg-red-500 transition-colors flex items-center gap-2"
                        >
                          <Github size={16} />
                          SOURCE
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-cyan-500 text-black px-6 py-3 font-black uppercase text-sm border-4 border-black hover:bg-white transition-colors flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          DEMO
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project ID Tag */}
                  <div className="absolute -top-3 -left-3 bg-red-500 text-white px-4 py-2 font-black text-sm uppercase border-4 border-black transform -rotate-12">
                    PROJECT_{(index + 1).toString().padStart(2, '0')}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Projects Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="bg-orange-500 text-black px-8 py-4 inline-block font-black uppercase text-2xl border-8 border-black transform -skew-x-12">
                + {portfolioData.projects.filter(p => !p.featured).length} MORE PROJECTS IN ARCHIVE
              </div>
            </motion.div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div ref={containerRef} className="bg-black text-white overflow-hidden relative">
      {/* Terminal Window */}
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            className="fixed inset-4 z-50 bg-black border-8 border-green-500"
          >
            <div className="bg-green-500 text-black p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 border-2 border-black"></div>
                <span className="font-black uppercase">TERMINAL.EXE</span>
              </div>
              <button
                onClick={() => setShowTerminal(false)}
                className="bg-red-500 text-white p-2 border-2 border-black hover:bg-white hover:text-red-500 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-6 font-mono text-green-500 h-full overflow-auto">
              <div className="space-y-2 text-sm">
                <div>&gt; SYSTEM INITIALIZED</div>
                <div>&gt; LOADING DEVELOPER PROFILE...</div>
                <div>&gt; NAME: {portfolioData.name}</div>
                <div>&gt; CONTACT METHODS FOUND:</div>
                <div className="ml-4">
                  <div>- EMAIL: <a href={`mailto:${portfolioData.email}`} className="text-yellow-400 underline">{portfolioData.email}</a></div>
                  <div>- GITHUB: <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline">View Profile</a></div>
                  <div>- LINKEDIN: <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline">Connect</a></div>
                  <div>- TWITTER: <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline">Follow</a></div>
                </div>
                <div>&gt; PORTFOLIO SECTIONS AVAILABLE:</div>
                <div className="ml-4">
                  {sections.map(section => (
                    <div key={section.id}>
                      - <button 
                          onClick={() => {
                            setActiveSection(section.id);
                            setShowTerminal(false);
                          }}
                          className="text-cyan-400 underline hover:text-white"
                        >
                          {section.title}
                        </button>
                    </div>
                  ))}
                </div>
                <div className="text-red-500">&gt; WARNING: EXPERIMENTAL INTERFACE ACTIVE</div>
                <div>&gt; READY FOR COMMANDS_</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Display */}
      <AnimatePresence mode="wait">
        {sections.map(section => (
          activeSection === section.id && (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: 1000, rotate: 90 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -1000, rotate: -90 }}
              transition={{ type: "spring", stiffness: 100 }}
              id={section.id}
            >
              {section.component}
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Floating Navigation */}
      <FloatingNav activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Glitch Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0, 0.1, 0],
            scaleY: [1, 1.02, 1],
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            repeatDelay: Math.random() * 10,
          }}
          className="absolute inset-0 bg-red-500 mix-blend-multiply"
        />
      </div>
    </div>
  );
}