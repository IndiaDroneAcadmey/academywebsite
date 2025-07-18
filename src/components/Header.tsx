import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();
const { t } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    closeMenu();
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
const navLinks = [
  { href: '/', label: t('nav.home') },
  { href: '/courses', label: t('nav.courses') },
  { href: '/why-ida', label: t('nav.whyIda') },
  { href: '/success-stories', label: t('nav.successStories') },
  { href: '/partnerships', label: t('nav.partnerships') },
  { href: '/collaborate', label: t('nav.collaborations') },
  // { href: '/blog', label: t('nav.blog') },
  { href: '/contact', label: t('nav.contact') }
];

  const isActiveLink = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-lg py-3' : 'shadow-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <button 
                onClick={() => handleNavigation('/')}
                className="flex items-center"
              >
                <img 
                  src="/IDA.png" 
                  alt="India Drone Academy Logo" 
                  className={`transition-all duration-300 ${
                    isScrolled ? 'h-14' : 'h-14'
                  }`}
                />
              </button>
            </div>

            <nav className="hidden lg:flex" aria-label="Main Navigation">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className={`font-medium text-sm hover:text-[#26A65B] transition-colors duration-200 relative group ${
                        isActiveLink(link.href) ? 'text-[#26A65B]' : 'text-black'
                      }`}
                    >
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#26A65B] transition-all duration-200 ${
                        isActiveLink(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              {/* <select
                onChange={handleLanguageChange}
                value={i18n.language}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value="en">EN</option>
                <option value="te">TE</option>
              </select> */}
              <button
                onClick={() => handleNavigation('/apply')}
                className="bg-[#F15A24] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                {t('applyNow')}
              </button>
            </div>

            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 relative z-60"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-black" />
              ) : (
                <Menu className="h-6 w-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 lg:hidden ${
          isMenuOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
            <img 
              src="/logo.png" 
              alt="India Drone Academy Logo" 
              className="h-8"
            />
            <button
              onClick={closeMenu}
              className="p-2 rounded-md hover:bg-gray-200 transition-colors duration-200"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6 text-black" />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8 overflow-y-auto" aria-label="Mobile Navigation">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className={`block w-full text-left font-medium text-lg hover:text-[#26A65B] hover:bg-gray-50 transition-all duration-200 py-4 px-4 rounded-lg border-l-4 ${
                      isActiveLink(link.href) 
                        ? 'text-[#26A65B] bg-gray-50 border-[#26A65B]' 
                        : 'text-black border-transparent hover:border-[#26A65B]'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <button
              onClick={() => handleNavigation('/apply')}
              className="w-full bg-[#F15A24] text-white font-bold px-6 py-4 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center text-lg"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className={`${isScrolled ? 'h-16' : 'h-20'} transition-all duration-300`}></div>
    </>
  );
};

export default Header;
