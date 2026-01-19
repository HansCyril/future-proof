import * as React from 'react'
import { motion } from 'framer-motion'
import { scrollRevealVariants, staggerContainerVariants } from '../utils/animations'

interface SkillBarProps {
  name: string
  level: number
  delay?: number
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay = 0 }) => {
  return (
    <motion.div
      variants={scrollRevealVariants}
      transition={{ delay }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  )
}

interface SkillsGridProps {
  skills: Array<{ name: string; level: number; category: string }>
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {skills.map((skill, index) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 0.1} />
      ))}
    </motion.div>
  )
}

export default SkillsGrid
