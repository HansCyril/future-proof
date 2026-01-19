import * as React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsGrid from './components/ProjectsGrid'
import Timeline from './components/Timeline'
import ContactForm from './components/ContactForm'
import { ThemeProvider } from './context/ThemeContext'
import { projectsData, experienceData } from './data/content'
import { fadeInVariants } from './utils/animations'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />

        {/* Hero Section */}
        <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
          <HomePage />
        </motion.div>

        {/* About Section */}
        <motion.div variants={fadeInVariants}>
          <AboutPage />
        </motion.div>

        {/* Projects Section */}
        <motion.section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Showcasing some of my best work across different technologies and industries.
              </p>
            </motion.div>

            <ProjectsGrid projects={projectsData} />
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                My professional journey and roles in building amazing digital products.
              </p>
            </motion.div>

            <Timeline experiences={experienceData} />
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Have a project in mind? Let's work together to bring your ideas to life.
              </p>
            </motion.div>

            <ContactForm />
          </div>
        </motion.section>

        {/* Footer */}
        <Footer />

        {/* Scroll to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center z-40"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </ThemeProvider>
  )
}

export default App
