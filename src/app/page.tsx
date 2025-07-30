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
    title: 'Original Yellow',
    description: 'Classic brutalist design with yellow background and black text',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-yellow-400 to-yellow-500',
    href: '/portfolios/brutalist'
  },
  {
    id: 'minimalist',
    title: 'Classic Red/Black',
    description: 'Red background with bold black text and yellow accents',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-red-500 to-red-600',
    href: '/portfolios/minimalist'
  },
  {
    id: 'creative-agency',
    title: 'Neon Cyber',
    description: 'Black background with cyan and pink neon highlights',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-black to-gray-900',
    href: '/portfolios/creative-agency'
  },
  {
    id: 'data-dashboard',
    title: 'Industrial Orange',
    description: 'Orange industrial theme with dark navigation and clean contrasts',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-orange-400 to-orange-500',
    href: '/portfolios/data-dashboard'
  },
  {
    id: 'terminal',
    title: 'Electric Blue',
    description: 'Bright blue background with white navigation and yellow accents',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    href: '/portfolios/terminal'
  },
  {
    id: 'interactive-3d',
    title: 'Forest Brutalist',
    description: 'Deep green background with red and yellow geometric shapes',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-green-600 to-green-700',
    href: '/portfolios/interactive-3d'
  },
  {
    id: 'timeline',
    title: 'Purple Rage',
    description: 'Purple background with yellow navigation and pink accents',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-purple-600 to-purple-700',
    href: '/portfolios/timeline'
  },
  {
    id: 'card-based',
    title: 'Sunset Brutal',
    description: 'Deep red sunset theme with yellow and purple shapes',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-red-600 to-red-700',
    href: '/portfolios/card-based'
  },
  {
    id: 'magazine',
    title: 'Monochrome',
    description: 'Classic black and white with strategic red accent colors',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-black to-gray-800',
    href: '/portfolios/magazine'
  },
  {
    id: 'glassmorphism',
    title: 'Miami Vice',
    description: 'Pink background with cyan navigation and vibrant highlights',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-pink-500 to-pink-600',
    href: '/portfolios/glassmorphism'
  },
  {
    id: 'corporate',
    title: 'Acid Green',
    description: 'Lime green background with purple navigation and bold contrasts',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-lime-400 to-lime-500',
    href: '/portfolios/corporate'
  },
  {
    id: 'gradient-modern',
    title: 'Deep Sea',
    description: 'Teal background with orange navigation and cyan accents',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-teal-600 to-teal-700',
    href: '/portfolios/gradient-modern'
  },
  {
    id: 'fire-engine',
    title: 'Fire Engine',
    description: 'Dark red background with yellow navigation and orange shapes',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-red-700 to-red-800',
    href: '/portfolios/fire-engine'
  },
  {
    id: 'retro-wave',
    title: 'Retro Wave',
    description: 'Indigo background with pink navigation and cyan highlights',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-indigo-600 to-indigo-700',
    href: '/portfolios/retro-wave'
  },
  {
    id: 'earth-tone',
    title: 'Earth Tone',
    description: 'Amber background with green navigation and brown accents',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-amber-600 to-amber-700',
    href: '/portfolios/earth-tone'
  },
  {
    id: 'arctic',
    title: 'Arctic',
    description: 'Dark slate background with blue navigation and cyan highlights',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-slate-800 to-slate-900',
    href: '/portfolios/arctic'
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
            Brutalist Color Schemes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from 16 bold color variations of the same brutalist design. Each scheme maintains 
            the exact same layout and animations but with unique color personalities - from professional 
            to vibrant to experimental.
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
