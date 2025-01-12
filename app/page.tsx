'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const skills = [
    { name: 'Java', level: 85 },
    { name: 'Spring Boot', level: 75 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'SQL', level: 85 },
    { name: 'Git', level: 70 },
  ]

  const projects = [
    {
      title: 'SmartRoute Navigation',
      description: 'Comprehensive navigation solution with web interface and mobile application.',
      tags: ['Java', 'Android', 'GPS', 'Real-time']
    },
    {
      title: 'Text Summarization',
      description: 'Django-based web application using natural language processing.',
      tags: ['Python', 'Django', 'NLP']
    },
    {
      title: 'Weather Application',
      description: 'Android mobile application with real-time weather information.',
      tags: ['Android', 'API', 'Java']
    },
    {
      title: 'COVID-19 Analysis',
      description: 'Deep learning model for COVID-19 data analysis and prediction.',
      tags: ['Python', 'TensorFlow', 'PyTorch']
    }
  ]

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold">Sachin M</span>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="default" asChild>
                <a href="/resume">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm Sachin M
                <span className="block text-primary mt-2">Software Developer</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Motivated Computer Science Engineering student specializing in Java, web technologies, and cloud platforms.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button className="rounded-full" asChild>
                  <a href="tel:+916360150239">Contact Me</a>
                </Button>
                <Button 
                  variant="outline" 
                  className="rounded-full"
                  onClick={scrollToProjects}
                >
                  View Projects
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sachinimg.jpg-vB67TTpNBmi0azP7SIPYSmasDeykCg.jpeg"
                alt="Sachin M"
                fill
                quality={100}
                priority
                className="object-cover object-top scale-110"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-primary h-2.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <a href="mailto:markalesachin352@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                markalesachin352@gmail.com
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <a href="https://www.linkedin.com/in/sachin-markale-128974247/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <a href="https://github.com/assistantgoogle" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

