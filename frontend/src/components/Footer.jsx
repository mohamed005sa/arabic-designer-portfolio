import React from 'react';
import { Heart, Mail, Phone, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      name: 'Instagram',
      url: 'https://instagram.com/designer',
      color: 'hover:text-pink-500'
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: 'Twitter', 
      url: 'https://twitter.com/designer',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/designer',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      name: 'Facebook',
      url: 'https://facebook.com/designer', 
      color: 'hover:text-blue-500'
    }
  ];

  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'عن المطور', href: '#about' },
    { name: 'المشاريع', href: '#projects' },
    { name: 'التواصل', href: '#contact' }
  ];

  return (
    <footer className="bg-[#0a1535] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-[#d3af35]">
              مصمم جرافيك
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              مصمم جرافيك محترف متخصص في الهوية البصرية وتصميم وسائل التواصل الاجتماعي. 
              أساعدك في بناء هوية بصرية مميزة لعلامتك التجارية.
            </p>
            <div className="flex space-x-reverse space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 transition-all duration-300 hover:scale-110 ${social.color}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#d3af35]">
              روابط سريعة
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#d3af35] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#d3af35]">
              معلومات التواصل
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-reverse space-x-3">
                <Mail className="h-5 w-5 text-[#d3af35]" />
                <a href="mailto:designer@example.com" className="text-gray-300 hover:text-[#d3af35] transition-colors">
                  designer@example.com
                </a>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <Phone className="h-5 w-5 text-[#d3af35]" />
                <a href="tel:+966501234567" className="text-gray-300 hover:text-[#d3af35] transition-colors">
                  +966 50 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2024 جميع الحقوق محفوظة | تم التطوير بـ 
            <Heart className="h-4 w-4 text-red-500" />
            بواسطة مصمم جرافيك
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;