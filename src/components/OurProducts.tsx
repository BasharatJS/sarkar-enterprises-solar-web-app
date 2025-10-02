'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SunIcon,
  BoltIcon,
  LightBulbIcon,
  CogIcon,
  Battery100Icon,
  WrenchScrewdriverIcon,
  BuildingOffice2Icon,
  CubeIcon,
  SparklesIcon,
  ArrowRightIcon,
  EyeIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'

const OurProducts: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('all')

  const productCategories = [
    { id: 'all', name: 'All Products', icon: CubeIcon },
    { id: 'panels', name: 'Solar Panels', icon: SunIcon },
    { id: 'inverters', name: 'Inverters & Batteries', icon: Battery100Icon },
    { id: 'lighting', name: 'Lighting Solutions', icon: LightBulbIcon },
    { id: 'pumps', name: 'Water Pumps', icon: CogIcon },
    { id: 'accessories', name: 'Accessories', icon: WrenchScrewdriverIcon },
  ]

  const products = [
    {
      id: 1,
      name: 'DCR Solar Panels',
      category: 'panels',
      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description:
        'High-efficiency Domestic Content Requirement solar panels for maximum energy generation.',
      specifications: [
        '540W-580W Power Range',
        '21%+ Efficiency',
        '25 Year Warranty',
        'Mono PERC Technology',
      ],
      price: 'Starting from ₹25/Watt',
      badge: 'Most Popular',
    },
    {
      id: 2,
      name: 'NDCR Solar Panels',
      category: 'panels',
      image:
        'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description:
        'Non-DCR certified solar panels offering excellent value and performance.',
      specifications: [
        '450W-540W Power Range',
        '20%+ Efficiency',
        '12 Year Warranty',
        'Polycrystalline Technology',
      ],
      price: 'Starting from ₹18/Watt',
      badge: 'Best Value',
    },
    {
      id: 3,
      name: 'Solar Street Light',
      category: 'lighting',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2024/11/467879733/XC/SK/SW/94292833/1707285977-applications-of-solar-street-lighting-500x500.jpg',
      description:
        'All-in-one solar street lights with intelligent control systems.',
      specifications: [
        '30W-150W LED',
        'Auto On/Off',
        'Motion Sensor',
        '3-5 Years Warranty',
      ],
      price: 'Starting from ₹8,500',
      badge: 'Smart Tech',
    },
    {
      id: 4,
      name: 'Submersible Solar Pump',
      category: 'pumps',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYOgdQQ_mxl3ARvTrJCk24iOLVN6GxvA-ZTg&s',
      description:
        'High-performance submersible pumps powered by solar energy.',
      specifications: [
        '1HP-10HP Range',
        'Up to 200m Head',
        'MPPT Controller',
        '5 Year Warranty',
      ],
      price: 'Starting from ₹45,000',
      badge: 'Heavy Duty',
    },
    {
      id: 5,
      name: 'Mono Block Pump',
      category: 'pumps',
      image: '/images/block-pump.jpg',
      description: 'Efficient mono block pumps for surface water applications.',
      specifications: [
        '0.5HP-3HP Range',
        'High Efficiency Motor',
        'Easy Installation',
        '3 Year Warranty',
      ],
      price: 'Starting from ₹25,000',
      badge: 'Compact',
    },
    {
      id: 6,
      name: 'Sprinkler System',
      category: 'pumps',
      image: '/images/sprinkle-system.jpg',
      description: 'Automated sprinkler systems for efficient irrigation.',
      specifications: [
        'Timer Control',
        'Multiple Zones',
        'Water Saving',
        '2 Year Warranty',
      ],
      price: 'Starting from ₹15,000',
      badge: 'Eco-Friendly',
    },
    {
      id: 7,
      name: 'LED Street Light',
      category: 'lighting',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnd2rQZ3XGBhqK0ETs5r-Zi_ZTc7Lm1tjLQ&s',
      description:
        'Energy-efficient LED street lights for urban and rural applications.',
      specifications: [
        '50W-200W Power',
        'IP65 Rating',
        'Long Lifespan',
        '3 Year Warranty',
      ],
      price: 'Starting from ₹3,500',
      badge: 'Energy Saver',
    },
    {
      id: 8,
      name: 'Solar OnGrid Inverter',
      category: 'inverters',
      image:
        'https://media.gettyimages.com/id/1807186164/photo/illustration-picture-shows-a-chinese-huawei-solar-panel-inverter-in-lierde-tuesday-28.jpg?s=612x612&w=0&k=20&c=pYnOoFeIjsovsju8msKm3dz5b-SW9hB1-5wfrWoqm1k=',
      description: 'Grid-tied inverters for maximum solar energy utilization.',
      specifications: [
        '1KW-100KW Range',
        '97%+ Efficiency',
        'Grid Synchronization',
        '5 Year Warranty',
      ],
      price: 'Starting from ₹12,000',
      badge: 'Grid Ready',
    },
    {
      id: 9,
      name: 'Hybrid Solar Inverter',
      category: 'inverters',
      image: '/images/hybrid-solar.jpg',
      description: 'Advanced hybrid inverters with battery backup capability.',
      specifications: [
        '3KW-10KW Range',
        'Battery Management',
        'Smart Monitoring',
        '5 Year Warranty',
      ],
      price: 'Starting from ₹35,000',
      badge: 'Hybrid Tech',
    },
    {
      id: 10,
      name: 'Lithium Battery',
      category: 'inverters',
      image: '/images/lithium-battry.jpg',
      description: 'High-capacity lithium batteries for energy storage.',
      specifications: [
        '100Ah-200Ah',
        '6000+ Cycles',
        'BMS Protection',
        '7 Year Warranty',
      ],
      price: 'Starting from ₹65,000',
      badge: 'Long Life',
    },
    {
      id: 11,
      name: 'Earthing Set',
      category: 'accessories',
      image:
        'https://4.imimg.com/data4/JH/NP/MY-2/high-voltage-earthing-set.jpg',
      description: 'Complete earthing solutions for solar installations.',
      specifications: [
        'Copper/GI Materials',
        'Complete Kit',
        'Easy Installation',
        '2 Year Warranty',
      ],
      price: 'Starting from ₹2,500',
      badge: 'Safety First',
    },
    {
      id: 12,
      name: 'Monorail Structure',
      category: 'accessories',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2020/11/RJ/NK/GY/84531635/aluminum-mono-rail-solar-mounting-structure.jpg',
      description: 'Durable monorail mounting structures for solar panels.',
      specifications: [
        'Galvanized Steel',
        'Wind Load Tested',
        'Modular Design',
        '10 Year Warranty',
      ],
      price: 'Starting from ₹85/Kg',
      badge: 'Durable',
    },
    {
      id: 13,
      name: 'RCC Structure',
      category: 'accessories',
      image:
        'https://www.himzentech.com/uploads/Concrete-foundation-Solar-Mounting-System.png',
      description:
        'Reinforced concrete structures for large solar installations.',
      specifications: [
        'Custom Design',
        'Load Bearing',
        'Weather Resistant',
        '25 Year Life',
      ],
      price: 'Custom Quote',
      badge: 'Heavy Duty',
    },
    {
      id: 14,
      name: '4mm DC Cable',
      category: 'accessories',
      image: '/images/dc-cable.jpg',
      description: 'High-quality DC cables for solar panel connections.',
      specifications: [
        'TUV Certified',
        'UV Resistant',
        'Temperature Rated',
        '25 Year Life',
      ],
      price: 'Starting from ₹45/Meter',
      badge: 'Certified',
    },
    {
      id: 15,
      name: '4mm AC Cable',
      category: 'accessories',
      image: '/images/ac-cable.jpg',
      description: 'Premium AC cables for inverter and grid connections.',
      specifications: [
        'ISI Marked',
        'Fire Retardant',
        'Flexible Design',
        '20 Year Life',
      ],
      price: 'Starting from ₹38/Meter',
      badge: 'Premium',
    },
  ]

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((product) => product.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      rotateY: 5,
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
    hover: {
      scale: 1.05,
      x: 5,
    },
  }

  return (
    <section
      id="products"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 overflow-hidden"
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
              Our Products
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              Complete Solar
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Energy Solutions
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            From high-efficiency solar panels to advanced inverters and
            accessories, we provide everything you need for a complete solar
            energy system.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {productCategories.map((category, index) => (
            <motion.button
              key={category.id}
              variants={categoryVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={`${product.id}-${activeCategory}`}
              variants={cardVariants}
              whileHover="hover"
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.1,
              }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-green-600 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full shadow-lg hover:bg-white transition-colors duration-300"
                  >
                    <EyeIcon className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gradient-to-r from-green-600 to-yellow-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Specifications */}
                <div className="space-y-2">
                  {product.specifications.slice(0, 2).map((spec, specIndex) => (
                    <div
                      key={specIndex}
                      className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full"></div>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                {/* <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">
                    {product.price}
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </motion.button>
                </div> */}
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.2,
                }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-3xl p-8 border border-green-200 dark:border-green-800">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Our experts can design a complete solar energy system tailored to
              your specific requirements and budget.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurProducts
