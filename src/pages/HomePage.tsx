import * as React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, staggerContainerVariants, slideRightVariants } from '../utils/animations'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import jaweImage from '../image/jawe.jpg'

const HomePage: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 sm:px-6 lg:px-8 pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={slideUpVariants}>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Hans Cyril T. Eder
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                Full Stack Developer & Creative Designer
              </h2>
            </motion.div>

            <motion.p variants={slideUpVariants} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I create beautiful, functional, and user-centered web experiences. With expertise in React, TypeScript, and modern web technologies, I help businesses and individuals bring their digital vision to life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={slideUpVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all shadow-lg"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                View My Work
              </motion.button>
              <motion.a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 font-semibold rounded-lg transition-all"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={slideUpVariants} className="flex space-x-4 pt-6">
              {[
                { icon: Github, url: '#', label: 'GitHub' },
                { icon: Linkedin, url: '#', label: 'LinkedIn' },
                { icon: Mail, url: 'mailto:your@email.com', label: 'Email' },
              ].map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-800 dark:text-gray-200 hover:text-white flex items-center justify-center transition-all shadow-md"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration / Visual Element */}
          <motion.div
            variants={slideRightVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center justify-center"
          >
            <motion.div
              className="relative w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-2xl"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.div
                className="absolute inset-4 rounded-full bg-white dark:bg-gray-900 overflow-hidden"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img 
                  src={jaweImage} 
                  alt="Hans Cyril T. Eder"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HomePage
