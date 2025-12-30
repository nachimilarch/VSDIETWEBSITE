import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../../../public/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Add scroll listener for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-md border-b-2 border-primary/10' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="VS Diet Concept" 
              className="h-20 md:h-20 w-auto transform transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all duration-300 relative ${
                  isActive(link.path)
                    ? 'text-primary font-semibold'
                    : scrolled ? 'text-secondary hover:text-primary' : 'text-gray-800 hover:text-primary'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              📞 Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-2xl transition-colors ${
              scrolled ? 'text-secondary' : 'text-gray-800'
            } hover:text-primary`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-primary/10 mt-2 bg-white/90 backdrop-blur-lg rounded-b-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary font-semibold bg-primary-lighter/20 px-4 rounded-lg'
                    : 'text-secondary hover:text-primary px-4'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl mt-4 block text-center shadow-md"
            >
              📞 Book Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
