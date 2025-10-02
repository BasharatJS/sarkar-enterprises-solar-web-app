'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SunIcon } from '@heroicons/react/24/outline'

const PageLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Set window size on client side
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 10
      })
    }, 150)

    // Hide loader after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [])

  if (!isMounted) {
    return null
  }

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: 'easeInOut' as const,
      },
    },
  }

  const sunVariants = {
    initial: { rotate: 0, scale: 0 },
    animate: {
      rotate: 360,
      scale: 1,
      transition: {
        rotate: {
          duration: 2,
          repeat: Infinity,
          ease: 'linear' as const,
        },
        scale: {
          duration: 0.5,
          ease: 'easeOut' as const,
        },
      },
    },
  }

  const rayVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.2,
        ease: 'easeInOut' as const,
      },
    }),
  }

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
  }

  const progressBarVariants = {
    initial: { width: '0%' },
    animate: {
      width: `${progress}%`,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-green-50 via-yellow-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(234, 179, 8, 0.2) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-8">
            {/* Solar Sun Animation */}
            <div className="relative">
              {/* Outer Rays */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={rayVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute"
                    style={{
                      rotate: `${i * 45}deg`,
                    }}
                  >
                    <div className="w-1 h-20 bg-gradient-to-t from-yellow-400 to-transparent rounded-full" />
                  </motion.div>
                ))}
              </div>

              {/* Rotating Sun Icon */}
              <motion.div
                variants={sunVariants}
                initial="initial"
                animate="animate"
                className="relative w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 shadow-2xl shadow-yellow-500/50 flex items-center justify-center"
              >
                <SunIcon className="w-16 h-16 text-white" strokeWidth={2} />

                {/* Inner Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 blur-xl"
                />
              </motion.div>

              {/* Orbiting Particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.3,
                    }}
                    className={`absolute w-2 h-2 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full`}
                    style={{
                      top: '50%',
                      left: `${50 + (i + 2) * 15}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Company Name */}
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="text-center space-y-2"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-yellow-500 to-green-600 bg-clip-text text-transparent">
                Sarkar Enterprises
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Solar Energy Solutions
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
              <motion.div
                variants={progressBarVariants}
                initial="initial"
                animate="animate"
                className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 rounded-full shadow-lg"
              />
            </div>

            {/* Loading Text */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-sm text-gray-500 dark:text-gray-400 font-medium"
            >
              Loading {progress}%
            </motion.div>
          </div>

          {/* Floating Energy Particles */}
          {windowSize.width > 0 && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`float-${i}`}
                  initial={{
                    x: Math.random() * windowSize.width,
                    y: windowSize.height + 50,
                  }}
                  animate={{
                    y: -50,
                    x: Math.random() * windowSize.width,
                  }}
                  transition={{
                    duration: Math.random() * 3 + 4,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: 'linear',
                  }}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                  style={{
                    boxShadow: '0 0 10px rgba(234, 179, 8, 0.8)',
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader
