'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline'

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Solar panels on rooftop',
    },
    {
      url: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Solar farm field',
    },
    {
      url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Modern solar installation',
    },
    {
      url: 'https://images.unsplash.com/photo-1583345237708-add35a664d77?',
      alt: 'Residential solar panels',
    },
    {
      url: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?',
      alt: 'Solar energy technology',
    },
    {
      url: 'https://images.unsplash.com/photo-1503495731986-41d521ecbb32?',
      alt: 'Clean solar energy',
    },
  ]

  const governmentSchemes = [
    {
      title: 'PM SURYA GHAR MUFT BIJLI YOJNA',
      description:
        'Sarkar Enterprises is the empanelled vendor of "PM SURYA GHAR MUFT BIJLI YOJNA" scheme.',
      benefits: [
        'Free electricity for homes',
        'Government subsidies up to 40%',
        'Easy EMI options',
      ],
    },
    {
      title: 'National Solar Mission',
      description:
        'Subsidy of ₹1,30,800/- available under PM Surya Ghar Muft Bijli Yojna scheme.',
      benefits: [
        '30% central subsidy',
        'Net metering facility',
        'Long-term savings',
      ],
    },
    {
      title: 'State Solar Policy Benefits',
      description:
        'Additional state government incentives and benefits for solar energy adoption.',
      benefits: [
        'State subsidies',
        'Tax exemptions',
        'Accelerated depreciation',
      ],
    },
    {
      title: 'Grid Connected Rooftop Solar',
      description:
        'Connect your solar system to the grid and sell excess electricity back to the utility.',
      benefits: [
        'Earn from excess power',
        '25-year warranty',
        'Maintenance support',
      ],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 6000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    )
  }

  const heroVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  }

  const imageVariants = {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  }

  const cardVariants = {
    initial: { opacity: 0, y: 100, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
    hover: {
      y: -10,
      scale: 1.02,
    },
  }

  const textVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  }

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)',
    },
    tap: { scale: 0.95 },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20 md:pb-0"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImageIndex].url}
              alt={heroImages[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Next image"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-yellow-400 w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 pt-20 pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <motion.div
            variants={heroVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white space-y-8"
          >
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                  Solar
                </span>{' '}
                <span className="text-white">Energy</span>
                <br />
                <span className="text-white">for a</span>{' '}
                <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                  Brighter
                </span>
                <br />
                <span className="text-white">Future</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-lg">
                Harness the power of the sun with Sarkar Enterprises. Leading
                solar energy solutions across India.
              </p>
            </motion.div>

            <motion.div
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://pmsuryaghar.gov.in/#/"
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ duration: 0.3 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                Apply Online
              </motion.a>
              <motion.a
                href="tel:+918638360212"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ duration: 0.3, delay: 0.1 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
              >
                Call Now
              </motion.a>
            </motion.div>

            <motion.div
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center space-x-8 text-sm"
            >
              <div className="flex items-center space-x-2">
                <CheckBadgeIcon className="w-5 h-5 text-green-400" />
                <span>Government Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckBadgeIcon className="w-5 h-5 text-yellow-400" />
                <span>25 Year Warranty</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Government Schemes Card */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Government Schemes & Benefits
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto rounded-full" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex % governmentSchemes.length}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="bg-gradient-to-r from-green-600/20 to-yellow-500/20 rounded-2xl p-6 border border-green-400/30">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-3">
                      {
                        governmentSchemes[
                          currentImageIndex % governmentSchemes.length
                        ].title
                      }
                    </h3>
                    <p className="text-gray-200 text-sm mb-4">
                      {
                        governmentSchemes[
                          currentImageIndex % governmentSchemes.length
                        ].description
                      }
                    </p>
                    <div className="space-y-2">
                      {governmentSchemes[
                        currentImageIndex % governmentSchemes.length
                      ].benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <CheckBadgeIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <motion.a
                href="https://pmsuryaghar.gov.in/#/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-yellow-500 to-green-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 text-center block"
              >
                Apply Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Coming Soon Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-r from-green-900/90 to-yellow-900/90 backdrop-blur-md py-8"
      >
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            More Sections Coming Soon...
          </h3>
          <p className="text-gray-200">
            About Us • Our Products • Why Choose Us • Gallery • Contact Us
          </p>
        </div>
      </motion.div> */}
    </section>
  )
}

export default Hero
