'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  SunIcon,
  BoltIcon,
  ShieldCheckIcon,
  HeartIcon,
  ArrowUpIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const Footer: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const footerSections = [
    {
      title: 'Our Services',
      icon: SunIcon,
      links: [
        { name: 'Residential Solar', href: '#', external: false },
        { name: 'Commercial Solar', href: '#', external: false },
        { name: 'Solar Maintenance', href: '#', external: false },
        { name: 'Government Schemes', href: '#', external: false },
        { name: 'Solar Consultation', href: '#', external: false },
        { name: 'Battery Solutions', href: '#', external: false },
      ],
    },
    {
      title: 'Products',
      icon: BoltIcon,
      links: [
        { name: 'Solar Panels', href: '#products', external: false },
        { name: 'Inverters', href: '#products', external: false },
        { name: 'Solar Batteries', href: '#products', external: false },
        { name: 'Mounting Systems', href: '#products', external: false },
        { name: 'Solar Water Heaters', href: '#products', external: false },
        { name: 'Monitoring Systems', href: '#products', external: false },
      ],
    },
    {
      title: 'Quick Links',
      icon: ShieldCheckIcon,
      links: [
        {
          name: 'Apply Online',
          href: 'https://pmsuryaghar.gov.in/#/',
          external: true,
        },
        {
          name: 'Apply for Subsidy',
          href: 'https://pmsuryaghar.gov.in/#/',
          external: true,
        },
        {
          name: 'Solar Calculator',
          href: 'https://www.orbenergy.com/solar-calculator/',
          external: true,
        },
        { name: 'Call Now', href: 'tel:+918638360212', external: false },
      ],
    },
  ]

  const quickStats = [
    { number: '100+', label: 'Happy Customers', icon: HeartIcon },
    { number: '1+', label: 'MW Installed', icon: BoltIcon },
    { number: '5+', label: 'Cities Covered', icon: GlobeAltIcon },
    { number: '25', label: 'Years Warranty', icon: ShieldCheckIcon },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
        ease: 'easeInOut' as const,
      },
    },
  }

  const linkVariants = {
    hover: {
      x: 10,
      color: '#22c55e',
      transition: {
        duration: 0.2,
        ease: 'easeOut' as const,
      },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <footer
      ref={ref}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg"
        />
      </div>

      <div className="relative z-10">
        {/* Quick Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="border-b border-gray-700 py-12"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={statsVariants}
                  whileHover="hover"
                  className="text-center group cursor-default"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center group-hover:shadow-2xl transition-all duration-300">
                    <motion.div variants={iconVariants} whileHover="hover">
                      <stat.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info - 2 columns */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 overflow-hidden rounded-full bg-gradient-to-br from-yellow-400 to-green-600 p-1">
                  <Image
                    src="/logo-sarkar-enterprise.png"
                    alt="Sarkar Enterprises Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain rounded-full bg-white"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                    Sarkar Enterprises
                  </h3>
                  <p className="text-sm text-gray-400">
                    Solar Energy Solutions
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Leading the solar revolution in India with innovative, reliable,
                and affordable solar energy solutions. Empowering homes and
                businesses with clean energy since 2023.
              </p>

              <div className="space-y-3">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <MapPinIcon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">
                    Lengtisinga bazar Near Auto stand, Bongaigaon, ASSAM -
                    783384
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                  <div className="text-sm space-y-1">
                    <div>+91 86383 60212</div>
                    <div>+91 78969 42368</div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <EnvelopeIcon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">asjansexport@gmail.com</span>
                </motion.div>
                {/* <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <ClockIcon className="w-5 h-5 flex-shrink-0" />
                  <div className="text-sm space-y-1">
                    <div>Mon-Sat: 9:00 AM - 6:00 PM</div>
                    <div>Sunday: 10:00 AM - 4:00 PM</div>
                  </div>
                </motion.div> */}
              </div>
            </motion.div>

            {/* Footer Sections - 3 columns */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={sectionVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 mb-6">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="w-8 h-8 bg-gradient-to-r from-green-500 to-yellow-500 rounded-lg flex items-center justify-center"
                  >
                    <section.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-green-400">
                    {section.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <motion.li key={link.name}>
                      <motion.a
                        href={link.href}
                        {...(link.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        variants={linkVariants}
                        whileHover="hover"
                        className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm block"
                      >
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="border-t border-gray-700 py-8"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm text-center md:text-left">
                <p>
                  © {new Date().getFullYear()} Sarkar Enterprises. All rights
                  reserved. |{' '}
                  <span className="text-green-400">
                    Empanelled vendor of PM SURYA GHAR MUFT BIJLI YOJNA
                  </span>
                </p>
                <p className="mt-1">
                  Powered by{' '}
                  <a
                    href="https://basharat-software-engineer-portfoli.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-yellow-400 transition-colors duration-300 font-medium"
                  >
                    CodeWithBasharat
                  </a>
                </p>
              </div>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center text-white hover:shadow-2xl transition-all duration-300"
              >
                <ArrowUpIcon className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Animation Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-10 w-6 h-6 bg-yellow-400 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-40 left-20 w-4 h-4 bg-green-400 rounded-full"
      />
    </footer>
  )
}

export default Footer
