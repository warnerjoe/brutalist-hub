'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, Wrench, Cpu, Factory, AlertTriangle } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export default function IndustrialBrutalistPortfolio() {
  return (
    <div className="min-h-screen bg-zinc-800 text-gray-100 font-mono">
      {/* Industrial Grid Header */}
      <header className="bg-black border-b-4 border-orange-500 relative">
        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-orange-500/30"></div>
            ))}
          </div>
        </div>
        
        <nav className="relative z-10 max-w-7xl mx-auto px-8 py-6">
          <div className="grid grid-cols-12 gap-4 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="col-span-6 md:col-span-4"
            >
              <div className="bg-orange-500 text-black px-4 py-2 inline-block font-black uppercase transform -skew-x-12">
                <Factory className="w-6 h-6 inline mr-2" />
                {portfolioData.firstName}/FACTORY
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-6 md:col-span-8 text-right"
            >
              <div className="grid grid-cols-4 gap-2">
                {['WORK', 'TECH', 'SPECS', 'CONTACT'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-zinc-700 text-orange-500 px-3 py-2 text-xs font-black uppercase border-2 border-orange-500 hover:bg-orange-500 hover:text-black transition-colors text-center"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </nav>
      </header>

      {/* Main Industrial Grid Layout */}
      <main className="relative">
        {/* Background Grid */}
        <div className="fixed inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-orange-500/30">
                <div className="grid grid-rows-12 h-full">
                  {[...Array(12)].map((_, j) => (
                    <div key={j} className="border-b border-orange-500/30"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section - Industrial Dashboard */}
        <section className="relative py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-6">
              {/* Main Title Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="col-span-12 md:col-span-8"
              >
                <div className="bg-black border-4 border-orange-500 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-4 h-4 bg-red-500 animate-pulse"></div>
                    <span className="text-red-500 font-black uppercase text-sm tracking-widest">
                      SYSTEM ACTIVE
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
                    <span className="block text-orange-500">{portfolioData.name.split(' ')[0]}</span>
                    <span className="block text-gray-100 bg-orange-500 px-2 py-1 inline-block mt-2">
                      {portfolioData.name.split(' ')[1]}
                    </span>
                  </h1>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-zinc-800 border-2 border-orange-500 p-4">
                      <div className="text-orange-500 font-black text-xs uppercase tracking-wider mb-2">
                        DESIGNATION
                      </div>
                      <div className="font-black text-lg">{portfolioData.title}</div>
                    </div>
                    <div className="bg-zinc-800 border-2 border-orange-500 p-4">
                      <div className="text-orange-500 font-black text-xs uppercase tracking-wider mb-2">
                        LOCATION
                      </div>
                      <div className="font-black text-lg">{portfolioData.location}</div>
                    </div>
                  </div>

                  <p className="text-gray-300 font-bold mb-8 text-lg leading-tight">
                    {portfolioData.bio}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="#work"
                      className="bg-orange-500 text-black py-4 px-6 font-black uppercase text-center border-4 border-orange-500 hover:bg-black hover:text-orange-500 transition-colors"
                    >
                      VIEW PROJECTS
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="#contact"
                      className="bg-black text-orange-500 py-4 px-6 font-black uppercase text-center border-4 border-orange-500 hover:bg-orange-500 hover:text-black transition-colors"
                    >
                      HIRE ENGINEER
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* System Status Panels */}
              <div className="col-span-12 md:col-span-4 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-black border-4 border-green-500 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-green-500 font-black uppercase text-sm">
                      AVAILABILITY
                    </span>
                    <div className="w-3 h-3 bg-green-500 animate-pulse"></div>
                  </div>
                  <div className="text-3xl font-black text-green-500">ONLINE</div>
                  <div className="text-xs text-gray-400 mt-2">READY FOR DEPLOYMENT</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-black border-4 border-blue-500 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-500 font-black uppercase text-sm">
                      EXPERIENCE
                    </span>
                    <Cpu className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="text-3xl font-black text-blue-500">2018+</div>
                  <div className="text-xs text-gray-400 mt-2">YEARS IN PRODUCTION</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-black border-4 border-yellow-500 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-yellow-500 font-black uppercase text-sm">
                      PROJECTS
                    </span>
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div className="text-3xl font-black text-yellow-500">
                    {portfolioData.projects.length}
                  </div>
                  <div className="text-xs text-gray-400 mt-2">COMPLETED BUILDS</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Specs Section - Equipment Grid */}
        <section id="tech" className="py-20 px-8 bg-zinc-900 border-y-4 border-orange-500">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="bg-orange-500 text-black px-8 py-4 font-black text-4xl uppercase inline-block border-4 border-black transform -skew-x-12">
                TECH/SPECIFICATIONS
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(portfolioData.skills).map(([category, skills], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-black border-4 border-orange-500 relative"
                >
                  {/* Module Header */}
                  <div className="bg-orange-500 text-black p-4 border-b-4 border-black">
                    <div className="flex items-center justify-between">
                      <span className="font-black uppercase text-lg">
                        {category} MODULE
                      </span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-green-500"></div>
                        <div className="w-3 h-3 bg-yellow-500"></div>
                        <div className="w-3 h-3 bg-red-500"></div>
                      </div>
                    </div>
                  </div>

                  {/* Module Content */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                          className="flex items-center justify-between bg-zinc-800 border-2 border-orange-500/50 p-3"
                        >
                          <span className="font-black uppercase text-sm tracking-wider">
                            {skill}
                          </span>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i} 
                                className={`w-2 h-4 ${
                                  i < Math.min(skill.length % 5 + 2, 5) ? 'bg-orange-500' : 'bg-zinc-600'
                                }`} 
                              />
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Module Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 text-black border-2 border-black flex items-center justify-center font-black text-lg">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - Production Line */}
        <section id="work" className="py-20 px-8 bg-zinc-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="bg-red-500 text-white px-8 py-4 font-black text-4xl uppercase inline-block border-4 border-black">
                PRODUCTION/OUTPUT
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioData.projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                  className="bg-black border-4 border-orange-500 relative overflow-hidden group"
                >
                  {/* Project Header */}
                  <div className="bg-orange-500 text-black p-4 border-b-4 border-black">
                    <div className="flex items-center justify-between">
                      <span className="font-black uppercase text-lg">
                        BUILD #{String(index + 1).padStart(3, '0')}
                      </span>
                      <div className="bg-green-500 text-black px-2 py-1 text-xs font-black">
                        DEPLOYED
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-black uppercase mb-4 text-orange-500">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 font-bold mb-6 leading-tight">
                      {project.description}
                    </p>

                    {/* Tech Grid */}
                    <div className="mb-6">
                      <div className="text-orange-500 font-black text-xs uppercase tracking-wider mb-3">
                        COMPONENTS USED
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {project.tech.slice(0, 6).map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.3) + (techIndex * 0.1) }}
                            className="bg-zinc-800 border border-orange-500 px-2 py-1 text-xs font-black text-center text-orange-500 hover:bg-orange-500 hover:text-black transition-colors"
                          >
                            {tech}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-zinc-800 text-orange-500 py-3 px-4 font-black uppercase text-sm text-center border-2 border-orange-500 hover:bg-orange-500 hover:text-black transition-colors flex items-center justify-center gap-2"
                        >
                          <Github size={16} />
                          SOURCE
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-orange-500 text-black py-3 px-4 font-black uppercase text-sm text-center border-2 border-orange-500 hover:bg-black hover:text-orange-500 transition-colors flex items-center justify-center gap-2"
                        >
                          <ExternalLink size={16} />
                          LIVE
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Status Indicators */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    <div className="w-2 h-2 bg-green-500 animate-pulse"></div>
                    <div className="w-2 h-2 bg-orange-500"></div>
                    <div className="w-2 h-2 bg-blue-500"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Production Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-black border-4 border-orange-500 p-8 text-center"
            >
              <div className="text-orange-500 font-black text-lg uppercase mb-4">
                TOTAL PRODUCTION OUTPUT
              </div>
              <div className="text-4xl font-black text-white">
                {portfolioData.projects.filter(p => !p.featured).length} ADDITIONAL BUILDS
              </div>
              <div className="text-gray-400 text-sm mt-2">
                COMPLETED AND OPERATIONAL
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section - Control Panel */}
        <section id="contact" className="py-20 px-8 bg-black border-t-4 border-orange-500">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="bg-red-500 text-white px-8 py-4 font-black text-4xl uppercase inline-block border-4 border-white">
                COMMUNICATION/INTERFACE
              </div>
              <div className="mt-6 bg-orange-500 text-black px-6 py-3 font-black uppercase text-lg inline-block">
                ENGINEER AVAILABLE FOR DEPLOYMENT
              </div>
            </motion.div>

            {/* Control Panel */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-800 border-4 border-orange-500 p-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Mail, href: `mailto:${portfolioData.email}`, label: 'EMAIL', color: 'red' },
                  { icon: Github, href: portfolioData.social.github, label: 'GITHUB', color: 'green' },
                  { icon: Linkedin, href: portfolioData.social.linkedin, label: 'LINKEDIN', color: 'blue' },
                  { icon: Twitter, href: portfolioData.social.twitter, label: 'TWITTER', color: 'yellow' }
                ].map(({ icon: Icon, href, label, color }, index) => (
                  <motion.a
                    key={href}
                    whileHover={{ scale: 1.1 }}
                    href={href}
                    target={href.includes('mailto') ? undefined : "_blank"}
                    rel={href.includes('mailto') ? undefined : "noopener noreferrer"}
                    className={`bg-${color}-500 text-black p-6 font-black uppercase text-center border-4 border-black hover:bg-black hover:text-${color}-500 transition-colors flex flex-col items-center justify-center gap-2`}
                  >
                    <Icon size={24} />
                    <span className="text-xs">{label}</span>
                  </motion.a>
                ))}
              </div>

              {/* System Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black border-2 border-orange-500 p-4">
                  <div className="text-orange-500 font-black text-xs uppercase tracking-wider mb-2">
                    CONTACT PROTOCOL
                  </div>
                  <div className="font-black text-lg">{portfolioData.email}</div>
                </div>
                <div className="bg-black border-2 border-orange-500 p-4">
                  <div className="text-orange-500 font-black text-xs uppercase tracking-wider mb-2">
                    OPERATIONAL BASE
                  </div>
                  <div className="font-black text-lg">{portfolioData.location}</div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="mt-8 flex items-center justify-between bg-black border-2 border-orange-500 p-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-green-500 animate-pulse"></div>
                  <span className="font-black uppercase text-green-500">READY FOR HIRE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-orange-500" />
                  <span className="font-black uppercase text-orange-500 text-sm">
                    FULL STACK ENGINEER
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}