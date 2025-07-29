'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Terminal, 
  Layers, 
  Grid3x3, 
  Zap, 
  BookOpen, 
  Palette,
  Code2
} from 'lucide-react'

const portfolios = [
  {
    id: 'brutalist',
    title: 'Original Brutalist',
    description: 'Raw, bold design with strong typography and geometric shapes',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-red-600 to-orange-600',
    href: '/portfolios/brutalist'
  },
  {
    id: 'minimalist',
    title: 'Geometric Grid',
    description: 'Brutalist grid system with modular geometric components',
    icon: <Grid3x3 className="w-6 h-6" />,
    color: 'from-blue-600 to-cyan-600',
    href: '/portfolios/minimalist'
  },
  {
    id: 'creative-agency',
    title: 'Split Screen',
    description: 'Divided layouts with contrasting brutalist sections',
    icon: <Layers className="w-6 h-6" />,
    color: 'from-green-600 to-lime-600',
    href: '/portfolios/creative-agency'
  },
  {
    id: 'data-dashboard',
    title: 'Stacked Blocks',
    description: 'Heavy block elements stacked in brutalist composition',
    icon: <Code2 className="w-6 h-6" />,
    color: 'from-purple-600 to-pink-600',
    href: '/portfolios/data-dashboard'
  },
  {
    id: 'terminal',
    title: 'Angular Cuts',
    description: 'Sharp angles and diagonal cuts in brutalist style',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-orange-600 to-red-600',
    href: '/portfolios/terminal'
  },
  {
    id: 'interactive-3d',
    title: 'Overlapping Layers',
    description: 'Layered elements with brutalist depth and shadows',
    icon: <Layers className="w-6 h-6" />,
    color: 'from-cyan-600 to-blue-600',
    href: '/portfolios/interactive-3d'
  },
  {
    id: 'timeline',
    title: 'Text-Heavy Typography',
    description: 'Typography-focused brutalist design with bold fonts',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'from-yellow-600 to-orange-600',
    href: '/portfolios/timeline'
  },
  {
    id: 'card-based',
    title: 'Diagonal Layout',
    description: 'Diagonal compositions with brutalist geometric forms',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-pink-600 to-purple-600',
    href: '/portfolios/card-based'
  },
  {
    id: 'magazine',
    title: 'Collage Style',
    description: 'Mixed media brutalist collage with overlapping elements',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-teal-600 to-green-600',
    href: '/portfolios/magazine'
  },
  {
    id: 'glassmorphism',
    title: 'Poster Design',
    description: 'Large format poster-style brutalist composition',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'from-indigo-600 to-purple-600',
    href: '/portfolios/glassmorphism'
  },
  {
    id: 'corporate',
    title: 'Industrial Grid',
    description: 'Industrial-inspired brutalist grid with harsh contrasts',
    icon: <Grid3x3 className="w-6 h-6" />,
    color: 'from-gray-600 to-slate-700',
    href: '/portfolios/corporate'
  },
  {
    id: 'gradient-modern',
    title: 'Experimental Layout',
    description: 'Unconventional brutalist layout breaking design rules',
    icon: <Terminal className="w-6 h-6" />,
    color: 'from-violet-600 to-indigo-600',
    href: '/portfolios/gradient-modern'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Brutalist Portfolio Variations
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore 12 different brutalist design approaches. Each variant showcases unique layouts, 
            typography treatments, and geometric compositions while maintaining the raw, bold aesthetic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolios.map((portfolio, index) => (
            <motion.div
              key={portfolio.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href={portfolio.href}>
                <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`absolute inset-0 bg-gradient-to-br ${portfolio.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="p-6">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${portfolio.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {portfolio.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {portfolio.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {portfolio.description}
                    </p>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                       style={{ background: `linear-gradient(to right, ${portfolio.color.split(' ')[1]}, ${portfolio.color.split(' ')[3]})` }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Each portfolio demonstrates different design patterns and technologies
          </p>
        </motion.div>
      </div>
    </main>
  )
}
