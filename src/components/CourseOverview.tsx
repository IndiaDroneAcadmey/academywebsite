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
    price: '₹35,000',
    gst: '+ 18% GST',
    image: '/dgca-small.jpg',
    features: ['DGCA Certification', 'Theory & Practical', 'Job Assistance', 'Small Drone Operations'],
    link: '/courses/dgca-small',
    badge: 'Most Popular',
    badgeColor: 'bg-[#26A65B]',
    Class: 'DGCA Certified'
  },
  {
    id: 2,
    title: 'Drone-Didi Agri Program DGCA Small Class',
    description: 'Government-certified training for small Class drones, tailored for women in agriculture',
    duration: '5 Days',
    price: '₹35,000',
    gst: '+ 18% GST',
    image: '/whyida4.jpg',
    features: ['DGCA Certification', 'Women-Only Batches', 'Agriculture Focus', 'Job Assistance'],
    link: '/courses/drone-didi-agri-small',
    badge: 'Women Only',
    badgeColor: 'bg-pink-600',
    Class: 'Special Programs'
  },
  {
    id: 3,
    title: 'DGCA Medium Class',
    description: 'Advanced certification for medium Class drones (more than 25kg up to 50kg)',
    duration: '5 Days',
    price: '₹45,000',
    gst: '+ 18% GST',
    image: '/dgca-medium.jpg',
    features: ['Medium Drone Ops', 'Advanced Training', 'Commercial License', 'Higher Payload'],
    link: '/courses/dgca-medium',
    badge: 'Professional',
    badgeColor: 'bg-blue-600',
    Class: 'DGCA Certified'
  },
  {
    id: 4,
    title: 'Medium Upgrade',
    description: 'Upgrade your skills from Small Class to Medium Class drones (25kg to 50kg)',
    duration: '3 Days',
    price: '₹45,000',
    gst: '+ 18% GST',
    image: '/medium-upgrade.jpg',
    features: ['Upgrade Training', 'Advanced Drone Ops', 'Medium Drone Certification'],
    link: '/courses/medium-upgrade',
    badge: 'Upgrade',
    badgeColor: 'bg-green-600',
    Class: 'DGCA Certified'
  },
  {
    id: 5,
    title: 'DGCA Small + Medium Combined',
    description: 'Complete certification package for both small and medium categories',
    duration: '8 Days',
    price: '₹65,000',
    gst: '+ 18% GST',
    image: '/small-medium.jpg',
    features: ['Dual Certification', 'Complete Training', 'Best Value', 'All Categories'],
    link: '/courses/dgca-combined',
    badge: 'Best Value',
    badgeColor: 'bg-[#F15A24]',
    Class: 'DGCA Certified'
  },
  {
    id: 6,
    title: '2D Survey and Mapping',
    description: 'Training for creating 2D maps and surveys with drone technology',
    duration: '3 Days',
    price: '₹35,000',
    gst: '+ 18% GST',
    image: '/2dmapping.jpg',
    features: ['Survey Techniques', '2D Mapping', 'Data Processing', 'Field Practice'],
    link: '/courses/2d-mapping',
    badge: 'Surveying',
    badgeColor: 'bg-orange-600',
    Class: 'Special Courses'
  },
  {
    id: 7,
    title: '3D Survey and Mapping',
    description: 'Advanced training for 3D mapping and surveying with drone technology',
    duration: '5 Days',
    price: '₹45,000',
    gst: '+ 18% GST',
    image: '3dmapping.jpg',
    features: ['3D Mapping', 'Survey Techniques', 'Data Processing', 'Advanced Field Practice'],
    link: '/courses/3d-mapping',
    badge: 'Advanced',
    badgeColor: 'bg-blue-600',
    Class: 'Special Courses'
  },
  {
    id: 8,
    title: 'Site Inspection & Asset Mapping',
    description: 'Professional mapping and inspection services for infrastructure',
    duration: '3 Days',
    price: '₹35,000',
    gst: '+ 18% GST',
    image: '/site-asset.jpg',
    features: ['3D Mapping', 'Asset Inspection', 'Survey Techniques', 'Data Processing'],
    link: '/courses/site-mapping',
    badge: 'Professional',
    badgeColor: 'bg-blue-600',
    Class: 'Special Courses'
  },
  {
    id: 9,
    title: 'Mining Excavation Volumetric Analysis',
    description: 'Training for volumetric analysis of mining excavations using drones',
    duration: '3 Days',
    price: '₹35,000',
    gst: '+ 18% GST',
    image: '/mining.webp',
    features: ['Mining Analysis', 'Volumetric Calculations', 'Data Interpretation'],
    link: '/courses/mining-excavation',
    badge: 'Specialized',
    badgeColor: 'bg-red-600',
    Class: 'Special Courses'
  },
  {
    id: 10,
    title: 'Agriculture Crop Monitoring & Precision Farming (Multi-Spectral)',
    description: 'Specialized training for precision farming and crop monitoring using drones',
    duration: '4 Days',
    price: '₹45,000',
    gst: '+ 18% GST',
    image: '/agricrop-monitor.webp',
    features: ['Precision Farming', 'Multi-Spectral Imaging', 'Crop Health Analysis'],
    link: '/courses/agriculture-precision',
    badge: 'For Farmers',
    badgeColor: 'bg-green-600',
    Class: 'Special Courses'
  },
  {
    id: 11,
    title: 'Data Processing (2D + 3D Data)',
    description: 'Training in processing 2D and 3D data captured from drones',
    duration: '3 Days',
    price: '₹25,000',
    gst: '+ 18% GST',
    image: '/dataprocessing.png',
    features: ['2D & 3D Data', 'Processing Software', 'Field Data Analysis'],
    link: '/courses/data-processing',
    badge: 'Data Processing',
    badgeColor: 'bg-yellow-600',
    Class: 'Special Courses'
  },
  {
    id: 12,
    title: 'Thermal, LiDAR / Industrial, Pipeline / Corridor Inspections',
    description: 'Specialized inspections using thermal imaging, LiDAR, and drone technology',
    duration: '4 Days',
    price: '₹45,000',
    gst: '+ 18% GST',
    image: '/thermal.jpg',
    features: ['Thermal Imaging', 'LiDAR Technology', 'Pipeline Inspections'],
    link: '/courses/thermal-lidar',
    badge: 'Industrial',
    badgeColor: 'bg-orange-600',
    Class: 'Special Courses'
  },
  {
    id: 13,
    title: 'Engineering GIS Analytics using Drone Data',
    description: 'Training in GIS analytics using drone-collected data for engineering projects',
    duration: '5 Days',
    price: '₹45,000',
    gst: '+ 18% GST',
    image: '/gis.png',
    features: ['GIS Analysis', 'Drone Data Processing', 'Engineering Applications'],
    link: '/courses/gis-engineering',
    badge: 'Engineering',
    badgeColor: 'bg-blue-500',
    Class: 'Special Courses'
  },
  {
    id: 14,
    title: 'Simulator Refresher',
    description: 'Enhance your skills with 50 hours of simulator practice',
    duration: '50 Hours',
    price: '₹15,000',
    gst: '+ 18% GST',
    image: '/simulator.png',
    features: ['50 Hours Practice', 'Skill Enhancement', 'Emergency Scenarios', 'Flexible Schedule'],
    link: '/courses/simulator-refresher',
    badge: 'Refresher',
    badgeColor: 'bg-blue-500',
    Class: 'Online Training'
  },
  {
    id: 15,
    title: 'FPV Drone Training (Basic)',
    description: 'Basic FPV drone racing and flying techniques',
    duration: '3 Days',
    price: '₹25,000',
    gst: '+ 18% GST',
    image: '/fpv-basic.png',
    features: ['FPV Flying', 'Basic Maneuvers', 'Intro to Racing'],
    link: '/courses/fpv-basic',
    badge: 'Basic FPV',
    badgeColor: 'bg-red-500',
    Class: 'Special Courses'
  },
  {
    id: 16,
    title: 'FPV Drone Training (Advanced)',
    description: 'Advanced FPV drone racing and competitive techniques',
    duration: '5 Days',
    price: '₹45,000',
    gst: '+ 18% GST',
    image: '/fpv-advanced.png',
    features: ['Advanced FPV Flying', 'Racing Techniques', 'Competition Prep'],
    link: '/courses/fpv-advanced',
    badge: 'Advanced FPV',
    badgeColor: 'bg-red-600',
    Class: 'Special Courses'
  },
  {
    id: 17,
    title: 'Drone Assembly & Repair (Basic)',
    description: 'Learn to assemble and repair basic drone systems',
    duration: '3 Days',
    price: '₹30,000',
    gst: '+ 18% GST',
    image: '/repair-basic.jpg',
    features: ['Drone Assembly', 'Troubleshooting', 'Basic Repair'],
    link: '/courses/drone-assembly-basic',
    badge: 'Technical Basic',
    badgeColor: 'bg-gray-500',
    Class: 'Special Courses'
  },
  {
    id: 18,
    title: 'Drone Assembly & Repair (Advanced)',
    description: 'Advanced training in drone assembly and repair techniques',
    duration: '5 Days',
    price: '₹45,000',
    gst: '+ 18% GST',
    image: '/repair-advanced.jpg',
    features: ['Advanced Assembly', 'Technical Troubleshooting', 'Complex Repairs'],
    link: '/courses/drone-assembly-advanced',
    badge: 'Advanced Technical',
    badgeColor: 'bg-gray-700',
    Class: 'Special Courses'
  },
  {
    id: 19,
    title: 'Aerial Cinematography',
    description: 'Professional drone filming and photography for creative industries',
    duration: '3 Days',
    price: '₹25,000',
    gst: '+ 18% GST',
    image: '/aerial.avif',
    features: ['Professional Filming', 'Camera Operations', 'Creative Techniques', 'Portfolio Building'],
    link: '/courses/aerial-cinematography',
    badge: 'Creative',
    badgeColor: 'bg-purple-600',
    Class: 'Special Courses'
  },
  {
    id: 20,
    title: 'Custom Training / Workshop for Educational Institutes',
    description: 'Tailored drone training and workshops for schools and colleges',
    duration: '1 Day / Custom',
    price: '₹25,000',
    gst: '+ 18% GST',
    image: '/workshop.jpg',
    features: ['Custom Workshops', 'Hands-on Training', 'Educational Focus'],
    link: '/courses/custom-training',
    badge: 'For Institutes',
    badgeColor: 'bg-yellow-600',
    Class: 'Special Courses'
  },
  {
    id: 21,
    title: 'Online Theory Crash Course',
    description: 'Complete theoretical crash course for drone pilot certification',
    duration: 'Self-paced',
    price: '₹15,000',
    gst: '+ 18% GST',
    image: '/online-class.png',
    features: ['Online Theory', 'Self-paced Learning', 'Certification Prep'],
    link: '/courses/online-theory',
    badge: 'Online Course',
    badgeColor: 'bg-gray-600',
    Class: 'Online Training'
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