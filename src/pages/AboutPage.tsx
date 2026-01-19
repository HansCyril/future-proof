import * as React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, staggerContainerVariants, scrollRevealVariants } from '../utils/animations'
import { Award, Code, Lightbulb } from 'lucide-react'
import SkillsGrid from '../components/SkillsGrid'
import { skillsData } from '../data/content'

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'I write well-organized, maintainable code that follows industry best practices and standards.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'I approach challenges with creativity and analytical thinking to deliver innovative solutions.',
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'I ensure every project meets high standards of performance, accessibility, and user experience.',
    },
  ]

  return (
    <motion.section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={slideUpVariants} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </motion.h2>
          <motion.p variants={slideUpVariants} className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a keen eye for design and a commitment to creating exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Bio Text */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p variants={scrollRevealVariants} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With over 5 years of experience in web development, I've had the privilege of working with startups, agencies, and enterprises to build digital solutions that make a real impact.
            </motion.p>

            <motion.p variants={scrollRevealVariants} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in building modern, responsive web applications using cutting-edge technologies like React, TypeScript, and Tailwind CSS. My approach combines technical expertise with a deep understanding of user experience design.
            </motion.p>

            <motion.p variants={scrollRevealVariants} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or mentoring aspiring developers. I'm always eager to learn and grow in this ever-evolving field.
            </motion.p>

            {/* Quick Stats */}
            <motion.div variants={scrollRevealVariants} className="grid grid-cols-3 gap-4 pt-6">
              {[
                { label: 'Projects', value: '20+' },
                { label: 'Clients', value: '15+' },
                { label: 'Years Exp.', value: '5+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={scrollRevealVariants}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={slideUpVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Technical Skills
          </motion.h3>

          <SkillsGrid skills={skillsData} />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AboutPage
