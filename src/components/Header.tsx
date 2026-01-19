import * as React from 'react'
import { motion } from 'framer-motion'
import { slideDownVariants, hoverScaleVariants } from '../utils/animations'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.header
      variants={slideDownVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.button
          onClick={handleHomeClick}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </motion.button>

        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => {
            if (item === 'Home') {
              return (
                <motion.button
                  key={item}
                  onClick={handleHomeClick}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item}
                </motion.button>
              )
            }
            return (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
              </motion.a>
            )
          })}
        </nav>

        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          variants={hoverScaleVariants}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </motion.button>
      </div>
    </motion.header>
  )
}

export default Header
