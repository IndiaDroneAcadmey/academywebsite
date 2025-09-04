import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);
  const [isCollaborateDropdownOpen, setIsCollaborateDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const collaborateDropdownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Gallery dropdown outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsGalleryDropdownOpen(false);
      }
    };
    if (isGalleryDropdownOpen) document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isGalleryDropdownOpen]);

  // Collaborations dropdown outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (collaborateDropdownRef.current && !collaborateDropdownRef.current.contains(event.target as Node)) {
        setIsCollaborateDropdownOpen(false);
      }
    };
    if (isCollaborateDropdownOpen) document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isCollaborateDropdownOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    closeMenu();
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/why-ida', label: 'Why IDA?' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/partnerships', label: 'Partnerships' },
    { href: '/contact', label: 'Contact' }
  ];

  const isActiveLink = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  const handleGalleryDropdownToggle = () => setIsGalleryDropdownOpen(!isGalleryDropdownOpen);
  const handleCollaborateDropdownToggle = () => setIsCollaborateDropdownOpen(!isCollaborateDropdownOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg py-3' : 'shadow-md py-4'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <button onClick={() => handleNavigation('/')} className="flex items-center">
                <img
                  src="/IDA.png"
                  alt="India Drone Academy Logo"
                  className="h-14 transition-all duration-300"
                />
              </button>
            </div>

            <nav className="hidden lg:flex" aria-label="Main Navigation">
              <ul className="flex items-center space-x-8">
                {navLinks.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className={`font-medium text-sm hover:text-[#26A65B] transition-colors duration-200 relative group ${isActiveLink(link.href) ? 'text-[#26A65B]' : 'text-black'}`}
                    >
                      {link.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-[#26A65B] transition-all duration-200 ${isActiveLink(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                      />
                    </button>
                  </li>
                ))}

                {/* Collaborations Dropdown */}
                <li ref={collaborateDropdownRef} className="relative">
                  <button
                    onClick={handleCollaborateDropdownToggle}
                    className="font-medium text-sm hover:text-[#26A65B] transition-colors duration-200 relative group"
                  >
                    Collaborations
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#26A65B] transition-all duration-200 ${isCollaborateDropdownOpen ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    />
                  </button>

                  {isCollaborateDropdownOpen && (
                    <div className="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-56 z-50">
                      <button
                        onClick={() => {
                          handleNavigation('/collaborate');
                          setIsCollaborateDropdownOpen(false);
                        }}
                        className="block px-4 py-2 text-black text-sm hover:text-[#26A65B] hover:bg-gray-100 w-full text-left"
                      >
                        Overview
                      </button>
                      <button
                        onClick={() => {
                          handleNavigation('/applyintern');
                          setIsCollaborateDropdownOpen(false);
                        }}
                        className="block px-4 py-2 text-black text-sm hover:text-[#26A65B] hover:bg-gray-100 w-full text-left"
                      >
                        Apply for Internship
                      </button>
                      {/* NEW: Apply for Workshop */}
                      <button
                        onClick={() => {
                          handleNavigation('/applyworkshop');
                          setIsCollaborateDropdownOpen(false);
                        }}
                        className="block px-4 py-2 text-black text-sm hover:text-[#26A65B] hover:bg-gray-100 w-full text-left"
                      >
                        Apply for Workshop
                      </button>
                    </div>
                  )}
                </li>

                {/* Contact */}
                <li>
                  <button
                    onClick={() => handleNavigation('/contact')}
                    className={`font-medium text-sm hover:text-[#26A65B] transition-colors duration-200 relative group ${isActiveLink('/contact') ? 'text-[#26A65B]' : 'text-black'}`}
                  >
                    Contact
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#26A65B] transition-all duration-200 ${isActiveLink('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    />
                  </button>
                </li>

                {/* Gallery Dropdown */}
                <li ref={dropdownRef} className="relative">
                  <button
                    onClick={handleGalleryDropdownToggle}
                    className="font-medium text-sm hover:text-[#26A65B] transition-colors duration-200 relative group"
                  >
                    Gallery
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#26A65B] transition-all duration-200 ${isGalleryDropdownOpen ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    />
                  </button>

                  {isGalleryDropdownOpen && (
                    <div className="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-48">
                      <button
                        onClick={() => {
                          handleNavigation('/gallery');
                          setIsGalleryDropdownOpen(false);
                        }}
                        className="block px-4 py-2 text-black text-sm hover:text-[#26A65B] hover:bg-gray-100 w-full text-left"
                      >
                        Photos
                      </button>
                      <button
                        onClick={() => {
                          handleNavigation('/video');
                          setIsGalleryDropdownOpen(false);
                        }}
                        className="block px-4 py-2 text-black text-sm hover:text-[#26A65B] hover:bg-gray-100 w-full text-left"
                      >
                        Videos
                      </button>
                    </div>
                  )}
                </li>
              </ul>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => handleNavigation('/apply')}
                className="bg-[#F15A24] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                Apply for offers
              </button>
            </div>

            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 relative z-60"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 lg:hidden ${isMenuOpen ? 'opacity-50 visible' : 'opacity-0 invisible'}`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
            <img src="/logo.png" alt="India Drone Academy Logo" className="h-8" />
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
                    className={`block w-full text-left font-medium text-lg hover:text-[#26A65B] hover:bg-gray-50 transition-all duration-200 py-4 px-4 rounded-lg border-l-4 ${isActiveLink(link.href) ? 'text-[#26A65B] bg-transparent border-none' : 'text-black border-transparent hover:border-[#26A65B]'}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}

              {/* Mobile Collaborations Dropdown */}
              <li>
                <button
                  onClick={handleCollaborateDropdownToggle}
                  className="block w-full text-left font-medium text-lg hover:text-[#26A65B] hover:bg-gray-50 transition-all duration-200 py-4 px-4 rounded-lg border-l-4 text-black border-transparent"
                >
                  Collaborations {isCollaborateDropdownOpen ? '▲' : '▼'}
                </button>
                {isCollaborateDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <button
                      onClick={() => {
                        handleNavigation('/collaborate');
                        setIsCollaborateDropdownOpen(false);
                      }}
                      className="block w-full text-left py-2 px-4 text-gray-700 hover:text-[#26A65B]"
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => {
                        handleNavigation('/applyintern');
                        setIsCollaborateDropdownOpen(false);
                      }}
                      className="block w-full text-left py-2 px-4 text-gray-700 hover:text-[#26A65B]"
                    >
                      Apply for Internship
                    </button>
                    {/* NEW: Apply for Workshop */}
                    <button
                      onClick={() => {
                        handleNavigation('/applyworkshop');
                        setIsCollaborateDropdownOpen(false);
                      }}
                      className="block w-full text-left py-2 px-4 text-gray-700 hover:text-[#26A65B]"
                    >
                      Apply for Workshop
                    </button>
                  </div>
                )}
              </li>

              {/* Mobile Gallery Dropdown */}
              <li>
                <button
                  onClick={handleGalleryDropdownToggle}
                  className="block w-full text-left font-medium text-lg hover:text-[#26A65B] hover:bg-gray-50 transition-all duration-200 py-4 px-4 rounded-lg border-l-4 text-black border-transparent"
                >
                  Gallery {isGalleryDropdownOpen ? '▲' : '▼'}
                </button>
                {isGalleryDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <button
                      onClick={() => {
                        handleNavigation('/gallery');
                        setIsGalleryDropdownOpen(false);
                      }}
                      className="block w-full text-left py-2 px-4 text-gray-700 hover:text-[#26A65B]"
                    >
                      Photos
                    </button>
                    <button
                      onClick={() => {
                        handleNavigation('/video');
                        setIsGalleryDropdownOpen(false);
                      }}
                      className="block w-full text-left py-2 px-4 text-gray-700 hover:text-[#26A65B]"
                    >
                      Videos
                    </button>
                  </div>
                )}
              </li>
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

      <div className={`${isScrolled ? 'h-16' : 'h-20'} transition-all duration-300`} />
    </>
  );
};

export default Header;
