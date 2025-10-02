'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SunIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  HeartIcon,
  SparklesIcon,
  GlobeAltIcon,
  UsersIcon,
  TrophyIcon,
  BoltIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline'

const AboutUs: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    {
      number: '100+',
      label: 'Happy Customers',
      icon: UsersIcon,
      color: 'from-green-500 to-emerald-500',
    },
    {
      number: '50+',
      label: 'MW Installed',
      icon: BoltIcon,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      number: '10+',
      label: 'Cities Covered',
      icon: GlobeAltIcon,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      icon: TrophyIcon,
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const values = [
    {
      icon: SunIcon,
      title: 'Sustainability',
      description:
        'Committed to creating a sustainable future through clean solar energy solutions.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description:
        'Using cutting-edge technology and innovative approaches to maximize solar efficiency.',
      gradient: 'from-blue-400 to-purple-500',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality',
      description:
        'Premium solar panels and components with 25-year warranty and certified installations.',
      gradient: 'from-green-400 to-teal-500',
    },
    {
      icon: HeartIcon,
      title: 'Customer Care',
      description:
        'Dedicated customer support and maintenance services for lifetime peace of mind.',
      gradient: 'from-pink-400 to-red-500',
    },
  ]

  const milestones = [
    {
      year: '2023',
      title: 'Company Established',
      description:
        'Sarkar Enterprises was founded with a vision to make solar energy accessible to every Indian household.',
    },
    {
      year: '2023',
      title: 'First 100 MW',
      description:
        'Successfully completed our first major installations across multiple states.',
    },
    {
      year: '2024',
      title: 'Government Partnership',
      description:
        'Became empanelled vendor for PM SURYA GHAR MUFT BIJLI YOJNA scheme.',
    },
    {
      year: '2024',
      title: 'Expansion',
      description:
        'Expanded operations to 25+ cities with dedicated service centers.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    hover: {
      y: -10,
      scale: 1.02,
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-yellow-100 dark:from-green-900/30 dark:to-yellow-900/30 px-6 py-3 rounded-full mb-6"
          >
            <SparklesIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-green-700 dark:text-green-300 font-medium">
              About Sarkar Enterprises
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              Powering India
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              with Clean Energy
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Since 2023, we've been at the forefront of India's solar revolution,
            making clean energy accessible and affordable for every household
            and business across the nation.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statsVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center group"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} p-4 group-hover:shadow-2xl transition-all duration-300`}
              >
                <stat.icon className="w-full h-full text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Our{' '}
                <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                  Journey
                </span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Founded in 2023 with a bold vision to transform India's energy
                landscape, Sarkar Enterprises emerged as a pioneering force in
                the solar energy sector. We recognized the immense potential of
                solar power to address India's growing energy needs while
                contributing to environmental sustainability.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                From our humble beginnings to becoming an empanelled vendor for
                government schemes like PM SURYA GHAR MUFT BIJLI YOJNA, our
                journey has been marked by innovation, dedication, and an
                unwavering commitment to customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckBadgeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Our Mission
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    To accelerate India's transition to clean energy by
                    providing world-class solar solutions that are accessible,
                    affordable, and reliable for every Indian household and
                    business.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1678743133528-9afcd2b72b70?"
                alt="Solar installation team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-xl font-bold text-white mb-2">
                  Expert Installation Team
                </h4>
                <p className="text-gray-200">
                  Certified professionals ensuring quality installations
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <SunIcon className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              Milestones
            </span>
          </motion.h3>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-green-500 to-yellow-500 rounded-full" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <motion.div
                      whileHover="hover"
                      variants={cardVariants}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h3
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              Core Values
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={cardVariants}
                whileHover="hover"
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="group relative"
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.gradient} p-4 group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <value.icon className="w-full h-full text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
