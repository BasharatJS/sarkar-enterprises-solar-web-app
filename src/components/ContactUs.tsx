'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
      <div className="text-gray-500 dark:text-gray-400">Loading map...</div>
    </div>
  ),
})

const ContactUs: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create WhatsApp message
    const enquiryTypeLabel = enquiryTypes.find(type => type.value === formData.enquiryType)?.label || formData.enquiryType
    const message = `Hello, I am ${formData.name}.

*Enquiry Type:* ${enquiryTypeLabel}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Message:*
${formData.message}

Looking forward to your response!`

    const whatsappNumber = '918638360212' // WhatsApp number without + sign
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Open WhatsApp
    window.open(whatsappLink, '_blank')

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', enquiryType: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Our Office',
      details: ['Lengtisinga bazar Near Auto stand', 'Bongaigaon, ASSAM', 'PIN: 783384'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: PhoneIcon,
      title: 'Phone Numbers',
      details: ['+91 86383 60212', '+91 78969 42368'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Address',
      details: ['asjansexport@gmail.com', 'For business inquiries'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: 10:00 AM - 4:00 PM'],
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const enquiryTypes = [
    { value: '', label: 'Select Enquiry Type' },
    { value: 'residential-solar', label: 'Residential Solar Installation' },
    { value: 'commercial-solar', label: 'Commercial Solar Solutions' },
    { value: 'government-scheme', label: 'Government Scheme Enquiry' },
    { value: 'solar-panels', label: 'Solar Panels & Equipment' },
    { value: 'maintenance', label: 'Maintenance & Support' },
    { value: 'consultation', label: 'Free Solar Consultation' },
    { value: 'financing', label: 'Solar Financing Options' },
    { value: 'off-grid', label: 'Off-Grid Solar Systems' },
    { value: 'battery-backup', label: 'Solar Battery & Backup' },
    { value: 'water-heater', label: 'Solar Water Heater' },
    { value: 'other', label: 'Other Solar Enquiry' },
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
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    hover: {
      y: -5,
      scale: 1.02,
    },
  }

  return (
    <section
      id="contact"
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
            <ChatBubbleLeftRightIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-green-700 dark:text-green-300 font-medium">
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              Contact
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Sarkar Enterprises
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to harness the power of solar energy? Contact us today for a free consultation
            and discover how we can help you save money while saving the planet.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.h3
              variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Contact{' '}
              <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                Information
              </span>
            </motion.h3>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  variants={cardVariants}
                  whileHover="hover"
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 group"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all duration-300`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-gray-600 dark:text-gray-300 text-sm"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Send us a{' '}
              <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                Message
              </span>
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircleIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </motion.div>
                <h4 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Enquiry Type
                  </label>
                  <div className="relative">
                    <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-10 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white appearance-none cursor-pointer"
                    >
                      {enquiryTypes.map((type) => (
                        <option
                          key={type.value}
                          value={type.value}
                          className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 resize-none text-gray-900 dark:text-white"
                    placeholder="Tell us about your solar energy requirements..."
                    spellCheck="false"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending to WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span>Send via WhatsApp</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Find us on{' '}
              <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                Map
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Visit our office in Bongaigaon, Assam for consultation and support
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <MapComponent />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactUs