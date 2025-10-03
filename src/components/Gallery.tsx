'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  SparklesIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  PhotoIcon,
  EyeIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

const Gallery: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'On-Grid Rooftop Solar Installation',
      title: '5KW On-Grid Rooftop Solar',
      description:
        'Complete residential on-grid solar system with net metering - Guwahati, Assam',
      category: 'On-Grid Rooftop',
      projectDetails: '5KW Capacity • 15 Panels • Net Metering',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Utility Scale Solar Power Plant',
      title: '25KW Utility Scale Solar Plant',
      description:
        'Large-scale ground-mounted solar power plant - Dibrugarh, Assam',
      category: 'Utility Scale',
      projectDetails: '25MW Capacity • 75,000 Panels • Grid Connected',
    },
    {
      id: 3,
      src: 'https://solar.huawei.com/admin/asset/v1/pro/view/ef588f1de6ec489392bee3447c8d533f.jpg',
      alt: 'Off-Grid Solar System Installation',
      title: '10KW Off-Grid Solar System',
      description:
        'Stand-alone solar system with battery backup - Remote village Jorhat, Assam',
      category: 'Off-Grid System',
      projectDetails: '10KW Capacity • 200Ah Battery Bank • Remote Location',
    },
    {
      id: 4,
      src: 'https://5.imimg.com/data5/SELLER/Default/2025/9/543217961/VF/DM/NX/203919547/solar-hybrid-system.png',
      alt: 'Hybrid Solar Power System',
      title: '8KW Hybrid Solar System',
      description:
        'Grid-tied system with battery backup - Commercial building Silchar, Assam',
      category: 'Hybrid System',
      projectDetails: '8KW Capacity • 150Ah Lithium Battery • Smart Inverter',
    },
    {
      id: 5,
      src: 'https://5.imimg.com/data5/SELLER/Default/2024/10/456341399/NA/YD/JH/233118888/agriculture-solar-pumping-system-500x500.png',
      alt: 'Solar Water Pumping System',
      title: '5HP Solar Water Pump',
      description:
        'Agricultural solar pumping system - Farmer installation Tezpur, Assam',
      category: 'Solar Pumping',
      projectDetails: '5HP Submersible • 200ft Depth • MPPT Controller',
    },
    {
      id: 6,
      src: 'https://5.imimg.com/data5/SELLER/Default/2022/10/XG/YP/XC/2183775/industrial-rooftop-solar-power-plant-500x500.jpeg',
      alt: 'Industrial Rooftop Solar',
      title: '100KW Industrial Rooftop',
      description:
        'Large industrial rooftop solar installation - Tea factory Dibrugarh, Assam',
      category: 'Industrial Rooftop',
      projectDetails: '100KW Capacity • 300 Panels • Three Phase System',
    },
    {
      id: 7,
      src: 'https://5.imimg.com/data5/SELLER/Default/2024/2/388278774/KT/OO/HM/103160242/sunnadesign-tournefeuille-26-scaled-500x500.jpg',
      alt: 'Solar Street Lighting Project',
      title: 'Solar Street Light Project',
      description:
        'Smart solar street lighting installation - Municipal project Nagaon, Assam',
      category: 'Solar Lighting',
      projectDetails: '50 Units • 40W LED • Motion Sensors • Smart Control',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Commercial Solar Installation',
      title: '50KW Commercial Solar System',
      description:
        'Comprehensive solar solution for shopping complex - Jorhat, Assam',
      category: 'Commercial Solar',
      projectDetails: '50KW Capacity • 150 Panels • ROI in 4 Years',
    },
    {
      id: 9,
      src: 'https://api.orientsolar.com/blog/Solar-Energy-System-in-Agriculture.webp',
      alt: 'Agri-Solar Installation',
      title: '12KW Agri-Solar System',
      description:
        'Agricultural solar installation with crop protection - Rice fields Bongaigaon, Assam',
      category: 'Agri-Solar',
      projectDetails: '12KW Capacity • Elevated Structure • Dual Land Use',
    },
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.05,
      y: -10,
      rotateY: 5,
      rotateX: 5,
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
    },
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      )
    }
  }

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden"
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
              Our Gallery
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              Solar Projects
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Showcase</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our completed solar installations, cutting-edge technology,
            and satisfied customers across India. Each project represents our
            commitment to excellence.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={imageVariants}
              whileHover="hover"
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.1,
              }}
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/80 via-yellow-500/60 to-green-600/80 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                {/* Category Badge */}
                <div className="self-start bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {image.category}
                </div>

                {/* Bottom Content */}
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-white/90 mb-2">
                    {image.description}
                  </p>
                  <p className="text-xs text-yellow-200 mb-4 font-medium">
                    {image.projectDetails}
                  </p>

                  {/* View Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full transition-colors duration-300"
                  >
                    <EyeIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">View Image</span>
                  </motion.div>
                </div>
              </div>

              {/* Magnifying Glass Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 scale-75 group-hover:scale-100">
                <MagnifyingGlassIcon className="w-8 h-8 text-white" />
              </div>

              {/* Corner Decorations */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: index * 0.5,
                }}
                className="absolute top-2 right-2 w-3 h-3 bg-yellow-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: index * 0.3,
                }}
                className="absolute bottom-2 left-2 w-2 h-2 bg-green-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-3xl p-8 border border-green-200 dark:border-green-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  100+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                  5+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  States Covered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  1MW+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Solar Installed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Quality Assured
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: 'easeOut',
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              >
                <XMarkIcon className="w-6 h-6" />
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              >
                <ArrowLeftIcon className="w-6 h-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              >
                <ArrowRightIcon className="w-6 h-6" />
              </motion.button>

              {/* Image */}
              <div className="relative">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-96 md:h-[32rem] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Image Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <motion.div
                  key={`content-${selectedImage}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-gradient-to-r from-green-500 to-yellow-500 px-3 py-1 rounded-full text-xs font-semibold">
                      {galleryImages[selectedImage].category}
                    </div>
                    <div className="text-sm text-gray-300">
                      {selectedImage + 1} of {galleryImages.length}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-200 mb-2">
                    {galleryImages[selectedImage].description}
                  </p>
                  <p className="text-yellow-200 text-sm font-medium">
                    {galleryImages[selectedImage].projectDetails}
                  </p>
                </motion.div>
              </div>

              {/* Progress Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === selectedImage
                        ? 'bg-white w-6'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
