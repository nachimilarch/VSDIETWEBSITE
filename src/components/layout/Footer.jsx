import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="bg-white/20 backdrop-blur-lg text-secondary border-t-2 border-white/20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center group mb-4">
              <img 
                src="/logo.png" 
                alt="VS Diet Concept" 
                className="h-20 md:h-20 w-auto transform transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-secondary-light mb-4 font-caveat text-lg">
              Hand Holding for a Holistic Living
            </p>
            <p className="text-secondary-light/70 text-sm">
              Personalized nutrition plans for sustainable health transformations
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-secondary-light hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-secondary-light hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-secondary-light hover:text-blue-500 transition-colors">Services</Link></li>
              <li><Link to="/resources" className="text-secondary-light hover:text-blue-500 transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-secondary-light hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/resources/diabetic-traffic-signal" className="text-secondary-light hover:text-blue-500 transition-colors">
                  Diabetic Traffic Signal
                </Link>
              </li>
              <li>
                <Link to="/resources/heart-healthy-food-guide" className="text-secondary-light hover:text-blue-500 transition-colors">
                  Heart-Healthy Guide
                </Link>
              </li>
              <li>
                <Link to="/resources/anti-inflammatory-lifestyle" className="text-secondary-light hover:text-blue-500 transition-colors">
                  Anti-Inflammatory Lifestyle Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <span className="text-2xl mr-3 flex-shrink-0">📞</span>
                <div>
                  <a href="tel:+918184969909" className="text-secondary-light hover:text-blue-500 transition-colors block">
                    +91 81849 69909
                  </a>
                  <a href="tel:+919849493543" className="text-secondary-light hover:text-blue-500 transition-colors block">
                    +91 98494 93543
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3 flex-shrink-0">📧</span>
                <a href="mailto:nutrition@vsdiet.in" className="text-secondary-light hover:text-blue-500 transition-colors">
                  nutrition@vsdiet.in
                </a>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3 flex-shrink-0">🌐</span>
                <a href="https://vsdiet.in" target="_blank" rel="noopener noreferrer" className="text-secondary-light hover:text-blue-500 transition-colors">
                  vsdiet.in
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 transition-colors">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-secondary-light/70 text-sm">
          <p>&copy; {new Date().getFullYear()} VS Diet Concept. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
