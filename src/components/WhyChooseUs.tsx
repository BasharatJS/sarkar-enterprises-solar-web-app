'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import {
  ShieldCheckIcon,
  TrophyIcon,
  CurrencyRupeeIcon,
  ClockIcon,
  UserGroupIcon,
  GlobeAltIcon,
  LightBulbIcon,
  HeartIcon,
  CheckBadgeIcon,
  StarIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const WhyChooseUs: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()
  const [activeFeature, setActiveFeature] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const rightContentRef = useRef<HTMLDivElement>(null)

  // Animated counter hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
      if (isInView && !hasAnimated) {
        setHasAnimated(true)
        let startTime: number
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime
          const progress = Math.min((currentTime - startTime) / duration, 1)
          setCount(Math.floor(progress * end))
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        requestAnimationFrame(animate)
      }
    }, [isInView, end, duration, hasAnimated])

    return count
  }

  const keyFeatures = [
    {
      icon: ShieldCheckIcon,
      title: 'Government Certified',
      description:
        'Empanelled vendor for PM SURYA GHAR MUFT BIJLI YOJNA scheme with all necessary certifications.',
      benefits: [
        'MNRE Approved',
        'ISO Certified',
        'BIS Standards',
        'CE Marked',
      ],
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?',
    },
    {
      icon: TrophyIcon,
      title: '25 Year Warranty',
      description:
        'Industry-leading warranty on solar panels with guaranteed performance and lifetime support.',
      benefits: [
        'Performance Guarantee',
        'Product Warranty',
        'Installation Warranty',
        'Maintenance Support',
      ],
      gradient: 'from-yellow-500 to-orange-600',
      bgGradient: 'from-yellow-50 to-orange-50',
      image:
        'https://plus.unsplash.com/premium_photo-1661961617519-ce160a561ee4?q=80&w=774',
    },
    {
      icon: CurrencyRupeeIcon,
      title: 'Best Pricing',
      description:
        'Competitive pricing with maximum government subsidies and flexible EMI options.',
      benefits: [
        'Up to 40% Subsidy',
        'Zero Down Payment',
        'Easy EMI Options',
        'Price Match Guarantee',
      ],
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      image: 'https://images.unsplash.com/photo-1629726797843-618688139f5a?',
    },
    {
      icon: ClockIcon,
      title: 'Quick Installation',
      description:
        'Fast and professional installation by certified technicians within 7 days.',
      benefits: [
        '7 Days Installation',
        'Expert Technicians',
        'Minimal Disruption',
        'Same Day Grid Connection',
      ],
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      image:
        'https://images.unsplash.com/photo-1617269778723-73a40cf299bd?q=80&w=870',
    },
    {
      icon: UserGroupIcon,
      title: 'Expert Team',
      description:
        'Dedicated team of solar experts with years of experience in renewable energy.',
      benefits: [
        'Certified Engineers',
        'Trained Installers',
        'Customer Support',
        'Technical Assistance',
      ],
      gradient: 'from-indigo-500 to-blue-600',
      bgGradient: 'from-indigo-50 to-blue-50',
      image:
        'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: PhoneIcon,
      title: '24/7 Support',
      description:
        'Round-the-clock customer support and maintenance services for peace of mind.',
      benefits: [
        'Emergency Support',
        'Remote Monitoring',
        'Preventive Maintenance',
        'Customer Helpline',
      ],
      gradient: 'from-red-500 to-pink-600',
      bgGradient: 'from-red-50 to-pink-50',
      image:
        'https://images.unsplash.com/photo-1614366502473-e54666693b44?q=80&w=938',
    },
  ]

  const achievements = [
    {
      icon: UserGroupIcon,
      number: useCounter(100),
      suffix: '+',
      label: 'Happy Customers',
      description: 'Satisfied clients across India',
    },
    {
      icon: GlobeAltIcon,
      number: useCounter(10),
      suffix: '+',
      label: 'Cities Covered',
      description: 'Nationwide service network',
    },
    {
      icon: LightBulbIcon,
      number: useCounter(50),
      suffix: 'MW+',
      label: 'Solar Installed',
      description: 'Clean energy generated',
    },
    {
      icon: StarIcon,
      number: useCounter(100),
      suffix: '%',
      label: 'Satisfaction Rate',
      description: 'Customer satisfaction guaranteed',
    },
  ]

  const trustIndicators = [
    {
      icon: CheckBadgeIcon,
      title: 'MNRE Approved',
      description: 'Ministry of New and Renewable Energy certified',
    },
    {
      icon: AcademicCapIcon,
      title: 'Expert Installation',
      description: 'Certified and trained installation team',
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Quality Components',
      description: 'Premium grade solar equipment only',
    },
    {
      icon: HeartIcon,
      title: 'Customer First',
      description: 'Dedicated to customer satisfaction',
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
      y: -15,
      scale: 1.03,
      rotateY: 5,
    },
  }

  const numberVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  }

  // Auto-rotate active feature
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % keyFeatures.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [keyFeatures.length])

  // Move right content to align with active card
  useEffect(() => {
    const updatePosition = () => {
      if (
        cardRefs.current[activeFeature] &&
        rightContentRef.current &&
        ref.current
      ) {
        const activeCard = cardRefs.current[activeFeature]
        const rightContent = rightContentRef.current
        const container = ref.current

        if (activeCard) {
          // Get the parent container that holds both left and right sections
          const keyFeaturesGrid = (container as HTMLElement).querySelector(
            '#features-grid'
          )

          if (keyFeaturesGrid) {
            const gridRect = keyFeaturesGrid.getBoundingClientRect()
            const activeCardRect = activeCard.getBoundingClientRect()
            const rightContentRect = rightContent.getBoundingClientRect()

            // Calculate the relative position of the active card within the grid
            const cardTop = activeCardRect.top - gridRect.top
            const cardHeight = activeCardRect.height
            const rightContentHeight = rightContentRect.height

            // Align bottoms: calculate offset so both card bottoms are at same level
            const cardBottom = cardTop + cardHeight
            const offset = cardBottom - rightContentHeight

            // Apply smooth transform
            rightContent.style.transform = `translateY(${offset}px)`
            rightContent.style.transition =
              'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }
        }
      }
    }

    // Delay the positioning to ensure proper layout
    const timeoutId = setTimeout(updatePosition, 200)

    // Add resize listener for responsive behavior
    window.addEventListener('resize', updatePosition)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', updatePosition)
    }
  }, [activeFeature, isInView])

  return (
    <section
      id="why-choose"
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
              Why Choose Sarkar Enterprises
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              Your Trusted
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Solar Partner</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            From government approvals to lifetime support, we provide end-to-end
            solar solutions that you can trust and rely on for decades.
          </motion.p>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              variants={numberVariants}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-500 to-yellow-500 p-4 group-hover:shadow-2xl transition-shadow duration-300"
                >
                  <achievement.icon className="w-full h-full text-white" />
                </motion.div>

                {/* Floating particles */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full"
                />
              </div>

              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {achievement.number}
                <span className="text-green-600 dark:text-green-400">
                  {achievement.suffix}
                </span>
              </div>
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                {achievement.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {achievement.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Features Section */}
        <div
          className="grid lg:grid-cols-2 gap-16 items-start mb-20"
          id="features-grid"
        >
          {/* Features List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8"
            >
              What Makes Us{' '}
              <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                Different
              </span>
            </motion.h3>

            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setActiveFeature(index)}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                  activeFeature === index
                    ? `bg-gradient-to-r ${feature.bgGradient} dark:from-gray-800 dark:to-gray-700 border-green-300 dark:border-green-600 shadow-xl scale-105`
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 shadow-lg`}
                  >
                    <feature.icon className="w-full h-full text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Benefits List */}
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            activeFeature === index
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0.7, x: -20 }
                          }
                          transition={{ delay: benefitIndex * 0.1 }}
                          className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`}
                          ></div>
                          <span>{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Active indicator */}
                {activeFeature === index && (
                  <motion.div
                    layoutId="activeFeature"
                    className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center"
                  >
                    <CheckBadgeIcon className="w-4 h-4 text-white" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Visual */}
          <div className="relative lg:sticky lg:top-20">
            <motion.div
              ref={rightContentRef}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <motion.img
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={keyFeatures[activeFeature].image}
                  alt={`${keyFeatures[activeFeature].title} - Solar installation`}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Overlay Content */}
                <div className="absolute bottom-8 left-8 right-8">
                  <motion.h4
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-white mb-4"
                  >
                    {keyFeatures[activeFeature].title}
                  </motion.h4>
                  <motion.p
                    key={`desc-${activeFeature}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-200"
                  >
                    {keyFeatures[activeFeature].description}
                  </motion.p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl"
              >
                <TrophyIcon className="w-12 h-12 text-white" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full flex items-center justify-center shadow-xl"
              >
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={indicator.title}
              variants={cardVariants}
              whileHover="hover"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-500 to-yellow-500 p-4 group-hover:shadow-2xl transition-shadow duration-300">
                <indicator.icon className="w-full h-full text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {indicator.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {indicator.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
