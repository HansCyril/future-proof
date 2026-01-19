import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X } from 'lucide-react'
import { hoverScaleVariants, scrollRevealVariants } from '../utils/animations'

interface ProjectCardProps {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveLink: string
  githubLink: string
  category: string
}

interface ProjectModalProps {
  project: ProjectCardProps | null
  onClose: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          <div className="relative h-96 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const ProjectCard: React.FC<ProjectCardProps & { onCardClick: () => void }> = (props) => {
  const { onCardClick, ...project } = props

  return (
    <motion.div
      variants={scrollRevealVariants}
      className="group cursor-pointer"
      onClick={onCardClick}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
        {...hoverScaleVariants}
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span className="text-white text-sm font-semibold">Click to view details</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-3">
            <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex space-x-3">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live</span>
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-sm font-semibold py-2 rounded transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

interface ProjectsGridProps {
  projects: ProjectCardProps[]
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null)

  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            onCardClick={() => setSelectedProject(project)}
          />
        ))}
      </motion.div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}

export default ProjectsGrid
