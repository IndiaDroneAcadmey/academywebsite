import React, { useState, useEffect } from 'react';
import { ArrowRight, Plane, Wheat, Users, Clock, ChevronLeft, ChevronRight, Settings, Camera, Wrench, Monitor, Target, Zap, Award, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseOverview: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: 'DGCA Small Class',
      description: 'Government-certified training for small Class drones (up to 25kg)',
      duration: '5 Days',
      price: '₹45,000',
      gst: '+ 18% GST',
      icon: Plane,
      image: '/dgca-small.jpg',
      features: ['DGCA Certification', 'Theory & Practical', 'Job Assistance', 'Small Drone Operations'],
      link: '/courses/dgca-small',
      badge: 'Most Popular',
      badgeColor: 'bg-[#26A65B]',
      Class: 'DGCA Certified'
    },
    {
      id: 2,
      title: 'DGCA Medium Class',
      description: 'Advanced certification for medium Class drones more than 25kg upto 50kg',
      duration: '5 Days',
      price: '₹65,000',
      gst: '+ 18% GST',
      icon: Plane,
      image: '/dgca-medium.jpg',
      features: ['Medium Drone Ops', 'Advanced Training', 'Commercial License', 'Higher Payload'],
      link: '/courses/dgca-medium',
      badge: 'Professional',
      badgeColor: 'bg-blue-600',
      Class: 'DGCA Certified'
    },
    {
      id: 3,
      title: 'DGCA Small + Medium Combined',
      description: 'Complete certification package for both small and medium categories',
      duration: '8 Days',
      price: '₹75,000',
      gst: '+ 18% GST',
      icon: Award,
      image: '/small-medium.jpg',
      features: ['Dual Certification', 'Complete Training', 'Best Value', 'All Categories'],
      link: '/courses/dgca-combined',
      badge: 'Best Value',
      badgeColor: 'bg-[#F15A24]',
      Class: 'DGCA Certified'
    },
    {
      id: 4,
      title: 'Agriculture Spraying',
      description: 'Specialized training for precision farming and crop spraying operations',
      duration: '3 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      icon: Wheat,
      image: '/agricrop-monitor.webp',
      features: ['Precision Farming', 'Spraying Techniques', 'Crop Analysis', 'Field Practice'],
      link: '/courses/agriculture-spraying',
      badge: 'For Farmers',
      badgeColor: 'bg-green-600',
      Class: 'Special Courses'
    },
    {
      id: 5,
      title: 'Aerial Cinematography',
      description: 'Professional drone filming and photography for creative industries',
      duration: '3 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      icon: Camera,
      image: '/aerial.avif',
      features: ['Professional Filming', 'Camera Operations', 'Creative Techniques', 'Portfolio Building'],
      link: '/courses/aerial-cinematography',
      badge: 'Creative',
      badgeColor: 'bg-purple-600',
      Class: 'Special Courses'
    },
    {
      id: 6,
      title: 'Women Drone Pilot Bootcamp',
      description: 'Comprehensive training program designed specifically for women',
      duration: '5 Days',
      price: '₹35,000',
      gst: '+ 18% GST',
      icon: Users,
      image: '/whyida.jpg',
      features: ['Women-Only Batches', 'Mentorship', 'Career Guidance', 'Networking'],
      link: '/courses/women-bootcamp',
      badge: 'Women Only',
      badgeColor: 'bg-pink-600',
      Class: 'Women Programs'
    },
    {
      id: 7,
      title: 'Site Asset Mapping',
      description: 'Professional mapping and inspection services for infrastructure',
      duration: '3 Days',
      price: '₹35,000',
      gst: '+ 18% GST',
      icon: Target,
      image: '/site-asset.jpg',
      features: ['3D Mapping', 'Asset Inspection', 'Survey Techniques', 'Data Processing'],
      link: '/courses/site-mapping',
      badge: 'Professional',
      badgeColor: 'bg-blue-600',
      Class: 'Special Courses'
    },
    {
      id: 8,
      title: 'Drone Assembly & Repair',
      description: 'Learn to build, troubleshoot and repair drone systems',
      duration: '3-5 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      icon: Wrench,
      image: '/repair-basic.jpg',
      features: ['Hardware Assembly', 'Troubleshooting', 'Repair Techniques', 'Technical Skills'],
      link: '/courses/drone-assembly',
      badge: 'Technical',
      badgeColor: 'bg-gray-600',
      Class: 'Special Courses'
    },
    {
      id: 9,
      title: 'FPV Drone Training',
      description: 'First Person View drone racing and advanced maneuvering',
      duration: '3-5 Days',
      price: '₹25,000',
      gst: '+ 18% GST',
      icon: Zap,
      image: '/fpv-advanced.png',
      features: ['FPV Flying', 'Racing Techniques', 'Advanced Maneuvers', 'Competition Prep'],
      link: '/courses/fpv-training',
      badge: 'Advanced',
      badgeColor: 'bg-red-600',
      Class: 'Special Courses'
    },
    {
      id: 10,
      title: 'Simulator Refresher',
      description: 'Enhance your skills with 50 hours of simulator practice',
      duration: '50 Hours',
      price: '₹15,000',
      gst: '+ 18% GST',
      icon: Monitor,
      image: '/simulator.png',
      features: ['50 Hours Practice', 'Skill Enhancement', 'Emergency Scenarios', 'Flexible Schedule'],
      link: '/courses/simulator-refresher',
      badge: 'Refresher',
      badgeColor: 'bg-blue-500',
      Class: 'Online Training'
    },
   {
  id: 11,
  title: 'Drone Awareness for Schools',
  description: 'IDA empowers school students through live drone demos, hands-on flying, and STEM-integrated workshops',
  duration: '1 Day / Custom',
  price: '₹15,000',
  gst: '+ 18% GST',
  icon: Building,
  image: '1.png',
  features: [
    'Interactive Drone Demonstrations',
    'Hands-on Supervised Flying',
    'STEM Education Integration',
    'Drone Career Path Guidance'
  ],
  link: '/courses/school-awareness',
  badge: 'For School Students',
  badgeColor: 'bg-yellow-600',
  Class: 'Special Courses'
},

    {
      id: 12,
      title: 'Ultimate Pro Bundle',
      description: 'Complete professional package: DGCA Medium + Cinematography + Mapping',
      duration: '10 Days',
      price: '₹115,000',
      gst: '+ 18% GST',
      icon: Award,
      image: '/bundle.png',
      features: ['Triple Certification', 'Complete Package', 'Professional Level', 'Career Ready'],
      link: '/courses/ultimate-pro',
      badge: 'Ultimate Package',
      badgeColor: 'bg-gradient-to-r from-[#F15A24] to-[#26A65B]',
      Class: 'Bundles'
    }
  ];

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(courses.length / cardsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleCourseClick = (link: string) => {
    navigate(link);
  };

  const handleApplyClick = () => {
    navigate('/apply');
  };

  const handleConsultationClick = () => {
    navigate('/contact');
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
            Our Training Programs
          </h2>
          


        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {courses.slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide).map((course) => {
                      const IconComponent = course.icon;
                      return (
                        <div
                          key={course.id}
                          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                          onClick={() => handleCourseClick(course.link)}
                        >
                          {/* Course Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                            {/* Badge */}
                            <div className={`absolute top-4 left-4 ${course.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                              {course.badge}
                            </div>

                            {/* Icon */}
                            <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full">
                              <IconComponent className="w-5 h-5 text-[#26A65B]" />
                            </div>

                            {/* Price */}
                            <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                              <div className="text-[#F15A24] font-bold text-sm">{course.price}</div>
                              <div className="text-gray-600 text-xs">{course.gst}</div>
                            </div>
                          </div>

                          {/* Course Content */}
                          <div className="p-6">
                            <div className="text-xs text-[#F15A24] font-bold mb-2">{course.Class}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[#F15A24] transition-colors duration-200">
                              {course.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                              {course.description}
                            </p>

                            {/* Duration */}
                            <div className="flex items-center mb-4">
                              <Clock className="w-4 h-4 text-[#F15A24] mr-2" />
                              <span className="text-sm font-medium text-gray-700">{course.duration}</span>
                            </div>

                            {/* Features */}
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-1">
                                {course.features.slice(0, 2).map((feature, index) => (
                                  <span
                                    key={index}
                                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                                  >
                                    {feature}
                                  </span>
                                ))}
                                {course.features.length > 2 && (
                                  <span className="text-gray-500 text-xs">
                                    +{course.features.length - 2}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex gap-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCourseClick(course.link);
                                }}
                                className="flex-1 bg-[#F15A24] hover:bg-[#D64A1A] text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 text-sm"
                              >
                                Explore
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleApplyClick();
                                }}
                                className="flex-1 bg-white border border-[#F15A24] text-[#F15A24] hover:bg-[#F15A24] hover:text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 text-sm"
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 z-10"
            aria-label="Previous courses"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 z-10"
            aria-label="Next courses"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide
                  ? 'bg-[#F15A24] scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-sm px-4 py-2 rounded-full transition-colors duration-200 ${isAutoPlaying
                ? 'bg-[#F15A24] text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
};

export default CourseOverview;