import * as React from 'react'
import { motion } from 'framer-motion'
import { scrollRevealVariants, staggerContainerVariants } from '../utils/animations'
import { Calendar, MapPin } from 'lucide-react'

interface TimelineItem {
  id: number
  role: string
  company: string
  period: string
  description: string
  skills: string[]
}

interface TimelineProps {
  experiences: TimelineItem[]
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-8"
    >
      {experiences.map((experience, index) => (
        <motion.div
          key={experience.id}
          variants={scrollRevealVariants}
          className="relative pl-8"
        >
          {/* Timeline marker */}
          <div className="absolute left-0 top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

          {/* Timeline line */}
          {index !== experiences.length - 1 && (
            <div className="absolute left-2 top-8 w-0.5 h-20 bg-gradient-to-b from-blue-600 to-purple-600 opacity-30"></div>
          )}

          {/* Content card */}
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ x: 10 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.role}</h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{experience.company}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">{experience.period}</span>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">{experience.description}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Timeline
