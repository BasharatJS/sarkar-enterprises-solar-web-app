'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Why Choose Us', href: '#why-choose' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: [0, -3, 3, 0]
    }
  };

  const navItemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1
    }),
    hover: {
      y: -2,
      scale: 1.05
    }
  };

  const themeIconVariants = {
    initial: { rotate: -180, scale: 0 },
    animate: { rotate: 0, scale: 1 },
    exit: { rotate: 180, scale: 0 },
    hover: {
      scale: 1.2,
      rotate: [0, 15, -15, 0]
    }
  };

  const mobileMenuVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-green-200 dark:border-green-800'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            whileHover="hover"
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-3"
          >
            <div className="relative w-12 h-12 overflow-hidden rounded-full bg-gradient-to-br from-yellow-400 to-green-600 p-1">
              <Image
                src="/logo-sarkar-enterprise.png"
                alt="Sarkar Enterprises"
                width={48}
                height={48}
                className="w-full h-full object-contain rounded-full bg-white"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                Sarkar Enterprises
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Solar Energy Solutions</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                custom={index}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="relative text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300 hover:text-green-600 dark:hover:text-yellow-400 group px-4 py-2"
              >
                {/* Animated Border - Always visible */}
                <span className="absolute inset-0 rounded-lg overflow-hidden">
                  <span className="absolute inset-0 rounded-lg border-2 border-green-500/20 dark:border-yellow-500/20 group-hover:border-green-500/40 dark:group-hover:border-yellow-500/40 transition-all duration-300"></span>
                  <span className="absolute inset-0 rounded-lg">
                    <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-yellow-500 animate-border-spin"></span>
                    <span className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-yellow-500 to-green-500 animate-border-spin [animation-delay:0.15s]"></span>
                    <span className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-green-500 to-yellow-500 animate-border-spin [animation-delay:0.3s]"></span>
                    <span className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-yellow-500 to-green-500 animate-border-spin [animation-delay:0.45s]"></span>
                  </span>
                </span>

                {/* Text */}
                <span className="relative z-10">{item.name}</span>
              </motion.a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              variants={themeIconVariants}
              whileHover="hover"
              transition={{ duration: 0.3 }}
              className="p-2 rounded-full bg-gradient-to-br from-yellow-400 to-green-600 text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.div
                    key="moon"
                    variants={themeIconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    <MoonIcon className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    variants={themeIconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    <SunIcon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-green-200 dark:border-green-800 shadow-lg"
            >
              <nav className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: index * 0.1 }
                      }}
                      className="text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50 dark:hover:from-green-900/20 dark:hover:to-yellow-900/20 transition-all duration-300 hover:text-green-600 dark:hover:text-yellow-400"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;