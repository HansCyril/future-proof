import * as React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, staggerContainerVariants } from '../utils/animations'
import { CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ type: 'loading' })

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields' })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' })
      return
    }

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      })

      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle' })
      }, 5000)
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 space-y-6"
    >
      {/* Status Messages */}
      {status.type === 'success' && (
        <motion.div
          variants={slideUpVariants}
          className="flex items-center space-x-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg"
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span>{status.message}</span>
        </motion.div>
      )}

      {status.type === 'error' && (
        <motion.div
          variants={slideUpVariants}
          className="flex items-center space-x-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-lg"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{status.message}</span>
        </motion.div>
      )}

      {/* Form Fields */}
      <motion.div variants={slideUpVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Your name"
            disabled={status.type === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="your@email.com"
            disabled={status.type === 'loading'}
          />
        </div>
      </motion.div>

      {/* Subject */}
      <motion.div variants={slideUpVariants}>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          placeholder="Message subject"
          disabled={status.type === 'loading'}
        />
      </motion.div>

      {/* Message */}
      <motion.div variants={slideUpVariants}>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
          placeholder="Your message..."
          disabled={status.type === 'loading'}
        />
      </motion.div>

      {/* Submit Button */}
      <motion.button
        variants={slideUpVariants}
        type="submit"
        disabled={status.type === 'loading'}
        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {status.type === 'loading' ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Sending...</span>
          </div>
        ) : (
          'Send Message'
        )}
      </motion.button>
    </motion.form>
  )
}

export default ContactForm
