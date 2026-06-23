export interface CourseData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  badge: string;
  badgeColor: string;
  price: string;
  gst: string;
  originalPrice?: string;
  duration: string;
  mode: string;
  certificate: string;
  language: string;
  locations: string[];
  level: string;
  learningOutcomes: string[];
  courseFeatures: {
    icon: string;
    title: string;
    description: string;
  }[];
  batchDates: {
    startDate: string;
    endDate: string;
    location: string;
    seatsLeft: number;
    totalSeats: number;
  }[];
  instructor?: {
    name: string;
    image: string;
    title: string;
    experience: string;
    description: string;
    credentials: string[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  highlights: string[];
}

export const coursesData: Record<string, CourseData> = {
  'dgca-small': {
    id: 'dgca-small',
    title: 'DGCA Small Class Training',
    subtitle: 'Government-Certified Training for Small Class Drones (up to 25kg)',
    description: 'Become a certified commercial drone pilot for small Class operations with our comprehensive DGCA-approved training program. Perfect for beginners entering the drone industry.',
    heroImage: '/dgca-small.jpg',
    badge: 'DGCA Certified',
    badgeColor: 'bg-[#26A65B]',
    price: '₹35,000',
    gst: '+ 18% GST',
    originalPrice: '₹55,000',
    duration: '5 Days',
    mode: 'In-Person + Practical',
    certificate: 'DGCA Small Class License',
    language: 'English / Hindi / Telugu',
    locations: ['Hyderabad'],
    level: 'Beginner to Intermediate',
    learningOutcomes: [
      'Small drone airframe and component basics',
      'DGCA regulations for small Class operations',
      'Flight planning and navigation for small drones',
      'Weather assessment and safety protocols',
      'Simulator training',
      'Live flight experience ',
      'Emergency procedures and troubleshooting',
      'Commercial operations setup'
    ],
    courseFeatures: [
      {
        icon: 'Award',
        title: 'DGCA Small Class Certification',
        description: 'Government-recognized license for small drone operations'
      },
      {
        icon: 'Users',
        title: 'Expert Instructors',
        description: 'Learn from DGCA certified Instructors'
      },
      {
        icon: 'Plane',
        title: 'State-of-the-Art Facilities',
        description: 'Train on professional small class drones'
      },
      {
        icon: 'Briefcase',
        title: 'Practical Flying Skills',
        description: 'Real flight practice under expert supervision.'
      }
    ],
    batchDates: [
      {
        startDate: 'January 15, 2025',
        endDate: 'January 20, 2025',
        location: 'Hyderabad',
        seatsLeft: 8,
        totalSeats: 20
      },
      {
        startDate: 'February 2, 2025',
        endDate: 'February 7, 2025',
        location: 'Bangalore',
        seatsLeft: 12,
        totalSeats: 20
      }
    ],
    instructor: {
      name: 'Captain Rajesh Kumar',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Chief Flight Instructor',
      experience: '15+ Years Aviation Experience',
      description: 'Former Indian Air Force pilot with extensive experience in both manned and unmanned aircraft operations.',
      credentials: ['DGCA Certified Instructor', 'Commercial Pilot License', '2000+ Flight Hours', 'Drone Safety Expert']
    },
    faq: [
      {
        question: 'What is the difference between small and medium class?',
        answer: 'Small class covers drones up to 25kg weight, suitable for photography, surveillance, and light commercial operations. Medium class covers more than 25kg and up to 50kg drones for heavier commercial applications.'
      },
      {
        question: 'Can I upgrade to medium Class later?',
        answer: 'Yes, we offer a 3-day Medium Upgrade course for ₹65,000 + GST for existing small class license holders.'
      },
      {
        question: 'What jobs can I get with small class license?',
        answer: 'Aerial photography, real estate documentation, small area surveying, inspection services, and content creation roles.'
      }
    ],
    highlights: [
      '5-day comprehensive training',
      'DGCA small Class certification',
      'Hands-on flying experience',
      'Job placement assistance'
    ]
  },

  'dgca-medium': {
    id: 'dgca-medium',
    title: 'DGCA Medium Class Training',
    subtitle: 'Advanced Certification for Medium Class Dronesmore than 25kg upto 50kg',
    description: 'Advanced training for medium Class drone operations covering heavier payloads and complex commercial applications.',
    heroImage: '/dgca-medium.jpg',
    badge: 'Professional Level',
    badgeColor: 'bg-blue-600',
    price: '₹45,000',
    gst: '+ 18% GST',
    duration: '5 Days',
    mode: 'In-Person + Advanced Practical',
    certificate: 'DGCA Medium Class License',
    language: 'English / Hindi / Telugu',
    locations: ['Hyderabad'],
    level: 'Intermediate to Advanced',
    learningOutcomes: [
      'Medium drone systems and operations',
      'Advanced flight planning and navigation',
      'Payload management and operations',
      'Complex weather assessment',
      'Advanced simulator training ',
      'Live flight experience ',
      'Commercial operations management',
      'Advanced emergency procedures'
    ],
    courseFeatures: [
      {
        icon: 'Award',
        title: 'DGCA Medium Class Certification',
        description: 'Advanced license for medium Class operations'
      },
      {
        icon: 'Users',
        title: 'Advanced Training',
        description: 'Comprehensive training for complex operations'
      },
      {
        icon: 'Plane',
        title: 'Medium Drone Equipment',
        description: 'Train on professional medium Class drones'
      },
      {
        icon: 'Briefcase',
        title: 'Premium Job Support',
        description: 'Access to high-paying commercial opportunities'
      }
    ],
    batchDates: [
      {
        startDate: 'January 22, 2025',
        endDate: 'January 27, 2025',
        location: 'Hyderabad',
        seatsLeft: 6,
        totalSeats: 15
      }
    ],
    instructor: {
      name: 'Captain Rajesh Kumar',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Chief Flight Instructor',
      experience: '15+ Years Aviation Experience',
      description: 'Former Indian Air Force pilot with extensive experience in both manned and unmanned aircraft operations.',
      credentials: ['DGCA Certified Instructor', 'Commercial Pilot License', '2000+ Flight Hours', 'Drone Safety Expert']
    },
    faq: [
      {
        question: 'Do I need small Class license first?',
        answer: 'No, you can directly pursue medium Class certification. However, having small Class experience is beneficial.'
      },
      {
        question: 'What additional opportunities does medium Class provide?',
        answer: 'Heavy payload operations, agricultural spraying, large area surveying, industrial inspections, and cargo delivery services.'
      }
    ],
    highlights: [
      'Advanced 5-day training',
      'Medium Class certification',
      'Heavy payload operations',
      'Premium job opportunities'
    ]
  },
  'medium-upgrade': {
    id: 'medium-upgrade',
    title: 'Medium Class Upgrade',
    subtitle: 'Upgrade from Small to Medium Class in 3 Days',
    description: 'Fast-track upgrade course for existing small Class license holders to obtain medium Class certification.',
    heroImage: '/medium-upgrade.jpg',
    badge: 'Upgrade Course',
    badgeColor: 'bg-purple-600',
    price: '₹45,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Intensive Training',
    certificate: 'DGCA Medium Class License',
    language: 'English / Hindi',
    locations: ['Hyderabad'],
    level: 'Intermediate',
    learningOutcomes: [
      'Medium Class regulations and differences',
      'Advanced payload operations',
      'Enhanced safety protocols',
      'Medium drone practical training',
      'Advanced flight scenarios',
      'Commercial operation upgrades'
    ],
    courseFeatures: [
      {
        icon: 'Award',
        title: 'Quick Upgrade',
        description: 'Fast-track to medium Class certification'
      },
      {
        icon: 'Plane',
        title: 'Advanced Operations',
        description: 'Learn medium Class specific operations'
      },
      {
        icon: 'Users',
        title: 'Focused Training',
        description: 'Intensive 3-day focused curriculum'
      },
      {
        icon: 'Briefcase',
        title: 'Career Advancement',
        description: 'Access to higher-paying opportunities'
      }
    ],
    batchDates: [
      {
        startDate: 'February 10, 2025',
        endDate: 'February 12, 2025',
        location: 'Hyderabad',
        seatsLeft: 10,
        totalSeats: 15
      }
    ],
    instructor: {
      name: 'Captain Rajesh Kumar',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Chief Flight Instructor',
      experience: '15+ Years Aviation Experience',
      description: 'Former Indian Air Force pilot with extensive experience in both manned and unmanned aircraft operations.',
      credentials: ['DGCA Certified Instructor', 'Commercial Pilot License', '2000+ Flight Hours', 'Drone Safety Expert']
    },
    faq: [
      {
        question: 'Who is eligible for this upgrade course?',
        answer: 'Existing DGCA small Class license holders who want to upgrade to medium Class operations.'
      },
      {
        question: 'What is covered in the 3-day program?',
        answer: 'Medium Class specific regulations, advanced operations, payload management, and practical training on medium Class drones.'
      }
    ],
    highlights: [
      'Quick 3-day upgrade',
      'For existing license holders',
      'Medium Class access',
      'Enhanced career opportunities'
    ]
  },
  'dgca-combined': {
    id: 'dgca-combined',
    title: 'DGCA Small + Medium Combined Package',
    subtitle: 'Complete Dual Certification in 8 Days',
    description: 'Comprehensive training package covering both small and medium Class certifications in one complete course.',
    heroImage: '/small-medium.jpg',
    badge: 'Best Value',
    badgeColor: 'bg-[#F15A24]',
    price: '₹65,000',
    gst: '+ 18% GST',
    originalPrice: '₹110,000',
    duration: '8 Days',
    mode: 'Comprehensive Training',
    certificate: 'DGCA Small + Medium Class License',
    language: 'English / Hindi / Telugu',
    locations: ['Hyderabad'],
    level: 'Beginner to Advanced',
    learningOutcomes: [
      'Complete small Class training',
      'Complete medium Class training',
      'Dual certification preparation',
      'Comprehensive flight experience',
      'Advanced operational knowledge',
      'Complete commercial readiness',
      'Both Class practical training',
      'Enhanced job opportunities'
    ],
    courseFeatures: [
      {
        icon: 'Award',
        title: 'Dual Certification',
        description: 'Both small and medium Class licenses'
      },
      {
        icon: 'Users',
        title: 'Complete Training',
        description: 'Comprehensive 8-day program'
      },
      {
        icon: 'Plane',
        title: 'All Equipment Access',
        description: 'Train on both small and medium drones'
      },
      {
        icon: 'Briefcase',
        title: 'Maximum Opportunities',
        description: 'Access to all job categories'
      }
    ],
    batchDates: [
      {
        startDate: 'February 15, 2025',
        endDate: 'February 23, 2025',
        location: 'Hyderabad',
        seatsLeft: 5,
        totalSeats: 15
      }
    ],
    instructor: {
      name: 'Captain Rajesh Kumar',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Chief Flight Instructor',
      experience: '15+ Years Aviation Experience',
      description: 'Former Indian Air Force pilot with extensive experience in both manned and unmanned aircraft operations.',
      credentials: ['DGCA Certified Instructor', 'Commercial Pilot License', '2000+ Flight Hours', 'Drone Safety Expert']
    },
    faq: [
      {
        question: 'Why choose the combined package?',
        answer: 'Save ₹35,000 compared to taking courses separately, get comprehensive training, and access to all job opportunities in the drone industry.'
      },
      {
        question: 'Is this suitable for complete beginners?',
        answer: 'Yes, the course is designed to take you from beginner to advanced level with both Class certifications.'
      }
    ],
    highlights: [
      'Best value package',
      'Dual certification',
      'Save ₹35,000',
      'Complete career readiness'
    ]
  },
  'site-mapping': {
    id: 'site-mapping',
    title: 'Site Asset Mapping & Inspections',
    subtitle: 'Professional Infrastructure Mapping and Inspection Services',
    description: 'Master professional mapping and inspection techniques for infrastructure, construction sites, and asset management using advanced drone technology.',
    heroImage: '/site-asset.jpg',
    badge: 'Professional',
    badgeColor: 'bg-blue-600',
    price: '₹35,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Field Training + Software',
    certificate: 'Site Mapping Specialist',
    language: 'English / Hindi',
    locations: ['Hyderabad'],
    level: 'Intermediate',
    learningOutcomes: [
      '3D mapping and photogrammetry',
      'Infrastructure inspection techniques',
      'Survey-grade data collection',
      'Asset condition assessment',
      'Professional mapping software',
      'Report generation and analysis',
      'Client presentation skills',
      'Business development strategies'
    ],
    courseFeatures: [
      {
        icon: 'Target',
        title: '3D Mapping',
        description: 'Advanced 3D mapping and modeling techniques'
      },
      {
        icon: 'Settings',
        title: 'Professional Software',
        description: 'Training on industry-standard mapping software'
      },
      {
        icon: 'Users',
        title: 'Expert Training',
        description: 'Learn from certified mapping professionals'
      },
      {
        icon: 'Briefcase',
        title: 'Business Support',
        description: 'Guidance on starting mapping services'
      }
    ],
    batchDates: [
      {
        startDate: 'February 5, 2025',
        endDate: 'February 7, 2025',
        location: 'Hyderabad',
        seatsLeft: 8,
        totalSeats: 12
      }
    ],
    instructor: {
      name: 'Eng. Suresh Patel',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Senior Mapping Specialist',
      experience: '10+ Years in Surveying & Mapping',
      description: 'Professional surveyor with extensive experience in drone mapping and infrastructure inspection projects.',
      credentials: ['Licensed Surveyor', 'Drone Mapping Expert', '500+ Projects Completed', 'GIS Specialist']
    },
    faq: [
      {
        question: 'What equipment is used in this course?',
        answer: 'Professional mapping drones, high-resolution cameras, GPS systems, and industry-standard software like Pix4D and DroneDeploy.'
      },
      {
        question: 'What career opportunities are available?',
        answer: 'Infrastructure inspection, construction monitoring, real estate mapping, insurance assessment, and surveying services.'
      }
    ],
    highlights: [
      'Professional mapping techniques',
      'Industry-standard software training',
      'Real project experience',
      'Business development guidance'
    ]
  },
  'mining-analysis': {
    id: 'mining-analysis',
    title: 'Mining Excavation Volumetric Analysis',
    subtitle: 'Advanced Volumetric Analysis for Mining and Excavation',
    description: 'Specialized training in volumetric analysis and monitoring for mining operations, quarries, and large excavation projects.',
    heroImage: '/mining.webp',
    badge: 'Industrial',
    badgeColor: 'bg-gray-600',
    price: '₹35,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Field + Software Training',
    certificate: 'Mining Analysis Specialist',
    language: 'English / Hindi',
    locations: ['Hyderabad'],
    level: 'Advanced',
    learningOutcomes: [
      'Volumetric calculation techniques',
      'Mining operation monitoring',
      'Stockpile measurement',
      'Progress tracking systems',
      'Safety compliance monitoring',
      'Environmental impact assessment',
      'Advanced data processing',
      'Industrial reporting standards'
    ],
    courseFeatures: [
      {
        icon: 'Target',
        title: 'Volumetric Analysis',
        description: 'Precise volume calculations for mining operations'
      },
      {
        icon: 'Settings',
        title: 'Industrial Applications',
        description: 'Real-world mining and excavation scenarios'
      },
      {
        icon: 'Users',
        title: 'Industry Experts',
        description: 'Training from mining industry professionals'
      },
      {
        icon: 'Briefcase',
        title: 'Specialized Career',
        description: 'Access to high-paying industrial roles'
      }
    ],
    batchDates: [
      {
        startDate: 'February 12, 2025',
        endDate: 'February 14, 2025',
        location: 'Hyderabad',
        seatsLeft: 6,
        totalSeats: 10
      }
    ],
    instructor: {
      name: 'Dr. Vikram Singh',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Mining Technology Expert',
      experience: '12+ Years in Mining Operations',
      description: 'Mining engineer with extensive experience in drone applications for mining and excavation projects.',
      credentials: ['Mining Engineer', 'Drone Technology Specialist', 'Safety Expert', 'Industrial Consultant']
    },
    faq: [
      {
        question: 'What industries can I work in after this course?',
        answer: 'Mining companies, quarries, construction firms, environmental consulting, and government agencies involved in excavation monitoring.'
      },
      {
        question: 'What software will I learn?',
        answer: 'Specialized mining software including Carlson Mining, Surpac, and advanced volumetric analysis tools.'
      }
    ],
    highlights: [
      'Specialized industrial training',
      'High-paying career opportunities',
      'Advanced technology applications',
      'Industry certification'
    ]
  },
  'master-drone-tech': {
  id: 'master-drone-tech',
  title: 'Master Drone Technology (Training + Internship)',
  subtitle: '12-Week Advanced Training & Internship in Drone Applications',
  description: 'A comprehensive program combining advanced drone pilot training with real-world internship exposure in drone data processing, GIS applications, and engineering solutions. Designed for individuals seeking deep industry knowledge and hands-on experience.',
  heroImage: '/training-intern.jpg',
  badge: 'Professional',
  badgeColor: 'bg-blue-600',
  price: '₹95,000',
  gst: '+ 18% GST',
  duration: '12 Weeks',
  mode: 'Classroom + Field + Internship',
  certificate: 'Advanced Drone Technology & Internship',
  language: 'English / Hindi',
  locations: ['Hyderabad'],
  level: 'Advanced',
  learningOutcomes: [
    'Hands-on DGCA drone pilot training',
    'End-to-end drone operations',
    'Photogrammetry and LiDAR data handling',
    'GIS mapping and spatial analysis',
    'CAD-based planning and modeling',
    'Real-time internship on live projects',
    'Data processing with industry software',
    'Drone applications in agriculture, mining, and infra'
  ],
  courseFeatures: [
    {
      icon: 'Award',
      title: 'DGCA Pilot License',
      description: 'Certified pilot training aligned with DGCA guidelines'
    },
    {
      icon: 'Monitor',
      title: 'GIS & Photogrammetry',
      description: 'In-depth GIS applications using drone-generated data'
    },
    {
      icon: 'Briefcase',
      title: 'Internship Included',
      description: 'Work on live client projects during your internship'
    },
    {
      icon: 'Globe',
      title: 'Multi-Industry Exposure',
      description: 'Applications in agriculture, engineering, and mining'
    }
  ],
  batchDates: [
    {
      startDate: 'July 15, 2025',
      endDate: 'October 7, 2025',
      location: 'Hyderabad',
      seatsLeft: 8,
      totalSeats: 15
    },
    {
      startDate: 'August 5, 2025',
      endDate: 'October 28, 2025',
      location: 'Bangalore',
      seatsLeft: 10,
      totalSeats: 15
    }
  ],
  instructor: {
    name: 'Ms. Rhea Mehta',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'Senior UAV & GIS Specialist',
    experience: '9+ Years in Drone Engineering & GIS Analysis',
    description: 'Renowned instructor in drone data systems, GIS platforms, and enterprise drone solutions across civil and industrial domains.',
    credentials: ['DGCA Certified Trainer', 'GIS Analyst', 'LiDAR Specialist', 'Drone Software Consultant']
  },
  faq: [
    {
      question: 'Is the DGCA license part of the course?',
      answer: 'Yes, this course includes DGCA-compliant drone pilot training and certification.'
    },
    {
      question: 'What kind of internship will I do?',
      answer: 'You will work on real-world projects involving surveying, GIS mapping, volumetrics, and reporting under industry experts.'
    },
    {
      question: 'Is placement assistance provided?',
      answer: 'Yes, participants will be connected to industry partners and startups through our placement support cell.'
    }
  ],
  highlights: [
    'Complete training + internship combo',
    'Government-aligned DGCA certification',
    'Real project experience with top companies',
    'Career-ready GIS and drone data skills'
  ]
}
,
  'agriculture-spraying': {
    id: 'agriculture-spraying',
    title: 'Agriculture Crop Monitoring & Precision Farming',
    subtitle: 'Specialized Training for Agricultural Drone Operations',
    description: 'Master precision agriculture techniques with drone technology. Learn spraying operations for modern farming.',
    heroImage: '/agricrop-monitor.webp',
    badge: 'Agriculture Specialist',
    badgeColor: 'bg-green-600',
    price: '₹25,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Field Training + Practical',
    certificate: 'Agriculture Drone Specialist',
    language: 'English / Hindi / Regional',
    locations: ['Hyderabad', ],
    level: 'Beginner Friendly',
    learningOutcomes: [
      
      'Precision spraying operations',
      'Agricultural drone regulations',
      'Spray pattern optimization',
      'Chemical handling and safety',
      'Field mapping and planning',
      'Equipment maintenance'
    ],
    courseFeatures: [
      {
        icon: 'Wheat',
        title: 'Field Experience',
        description: 'Hands-on training in real agricultural fields'
      },
      {
        icon: 'Target',
        title: 'Precision Spraying',
        description: 'Master precision spraying techniques'
      },
      {
        icon: 'Users',
        title: 'Farmer Network',
        description: 'Connect with farming community'
      },
      {
        icon: 'TrendingUp',
        title: 'Business Support',
        description: 'Guidance on starting agri-drone service'
      }
    ],
    batchDates: [
      {
        startDate: 'January 25, 2025',
        endDate: 'January 27, 2025',
        location: 'Pune',
        seatsLeft: 8,
        totalSeats: 12
      }
    ],
    instructor: {
      name: 'Dr. Priya Sharma',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Agriculture Technology Expert',
      experience: '12+ Years in Precision Agriculture',
      description: 'PhD in Agricultural Engineering with specialization in drone technology applications for modern farming.',
      credentials: ['PhD Agricultural Engineering', 'Precision Agriculture Expert', 'Drone Technology Specialist', 'Published Researcher']
    },
    faq: [
      {
        question: 'Do I need farming background?',
        answer: 'No farming background required. We teach everything from basics. However, farmers and agriculture graduates will find it especially valuable.'
      },
      {
        question: 'What equipment is covered?',
        answer: 'Various agriculture drones, spraying systems, sensors, and data analysis software used in precision agriculture.'
      }
    ],
    highlights: [
      'Field-based practical training',
      'Latest agriculture drone technology',
      'Business setup guidance',
      'Farmer network connections'
    ]
  },
  'advanced-missions': {
  id: 'advanced-missions',
  title: 'Advanced Drone Missions & Payload Handling',
  subtitle: 'Train on Thermal, LiDAR, Oblique Flights & Payload Drop Missions',
  description: 'This advanced training program is designed for drone professionals seeking to master dynamic missions involving payload operations, thermal imaging, oblique capture, and LiDAR scanning. Gain hands-on experience with advanced flight patterns and mission planning for industrial and emergency use-cases.',
  heroImage: '/mission.png',
  badge: 'Industrial',
  badgeColor: 'bg-blue-700',
  price: '₹30,000',
  gst: '+ 18% GST',
  duration: '4 Days',
  mode: 'Field + Simulation Training',
  certificate: 'Payload Mission Specialist',
  language: 'English / Hindi',
  locations: ['Hyderabad'],
  level: 'Advanced',
  learningOutcomes: [
    'Payload mounting and drop missions',
    'Thermal and LiDAR sensor usage',
    'Oblique and orbit flight planning',
    'Emergency deployment scenarios',
    'Industrial inspection techniques',
    'Real-time mission execution',
    'Advanced mission software use',
    'Payload integration and testing'
  ],
  courseFeatures: [
    {
      icon: 'Zap',
      title: 'Dynamic Missions',
      description: 'Orbit, oblique, and complex mission handling'
    },
    {
      icon: 'Camera',
      title: 'Thermal Imaging',
      description: 'Operate and interpret thermal data'
    },
    {
      icon: 'Wrench',
      title: 'Payload Mounting',
      description: 'Hands-on payload configuration training'
    },
    {
      icon: 'MapPin',
      title: 'Mission Planning',
      description: 'Train on defense and industrial missions'
    }
  ],
  batchDates: [
    {
      startDate: 'August 20, 2025',
      endDate: 'August 23, 2025',
      location: 'Hyderabad',
      seatsLeft: 5,
      totalSeats: 10
    },
    {
      startDate: 'September 10, 2025',
      endDate: 'September 13, 2025',
      location: 'Bangalore',
      seatsLeft: 7,
      totalSeats: 10
    }
  ],
  instructor: {
    name: 'Mr. Arvind Rao',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'Payload & Mission Specialist',
    experience: '10+ Years in UAV Payload Engineering',
    description: 'Expert in designing and executing mission-critical drone operations across defense, emergency response, and energy sectors.',
    credentials: ['Payload Systems Engineer', 'Certified UAV Trainer', 'Thermal & LiDAR Specialist', 'Emergency Response Advisor']
  },
  faq: [
    {
      question: 'What are the prerequisites for this course?',
      answer: 'Participants should have basic drone piloting skills and prior training or certification is recommended.'
    },
    {
      question: 'Can I bring my own drone and payload?',
      answer: 'Yes, participants can bring compatible drones for training after verification by our team.'
    }
  ],
  highlights: [
    'Live mission execution',
    'Thermal and LiDAR training',
    'Defense and rescue use-case focus',
    'Payload specialist certification'
  ]
},
'gis-analytics': {
  id: 'gis-analytics',
  title: 'Engineering GIS Analytics using Drone Data',
  subtitle: 'Post-process Drone Data for Engineering Projects & GIS Applications',
  description: 'Master drone data interpretation and processing for infrastructure planning, CAD integration, GIS modeling, and cross-section analysis. Ideal for engineers, surveyors, and GIS professionals.',
  heroImage: '/gis.png',
  badge: 'Engineering',
  badgeColor: 'bg-green-600',
  price: '₹45,000',
  gst: '+ 18% GST',
  duration: '5 Days',
  mode: 'Software + Field Training',
  certificate: 'Engineering GIS Specialist',
  language: 'English / Hindi',
  locations: ['Hyderabad'],
  level: 'Intermediate to Advanced',
  learningOutcomes: [
    'Post-process drone data for civil engineering tasks',
    'Generate TIN, contour maps, and cross-sections',
    'Integrate drone data with CAD & GIS tools',
    'Plan alignments for roads, canals, and infrastructure',
    'Handle terrain modeling and volume analysis',
    'Understand spatial referencing and accuracy',
    'Use QGIS, Global Mapper, AutoCAD Civil 3D',
    'Prepare data for DPR and engineering reports'
  ],
  courseFeatures: [
    {
      icon: 'Monitor',
      title: 'CAD + GIS Modeling',
      description: 'Learn to process drone data into CAD-ready GIS layers'
    },
    {
      icon: 'Target',
      title: 'Cross-Section Analysis',
      description: 'Generate cross-sections and profiles from terrain data'
    },
    {
      icon: 'Users',
      title: 'Industry Tools',
      description: 'Training with QGIS, Global Mapper, and AutoCAD Civil 3D'
    },
    {
      icon: 'Briefcase',
      title: 'Project Ready',
      description: 'Skills aligned with engineering DPR documentation'
    }
  ],
  batchDates: [
    {
      startDate: 'August 5, 2025',
      endDate: 'August 9, 2025',
      location: 'Hyderabad',
      seatsLeft: 7,
      totalSeats: 15
    },
    {
      startDate: 'September 2, 2025',
      endDate: 'September 6, 2025',
      location: 'Bangalore',
      seatsLeft: 10,
      totalSeats: 15
    }
  ],
  instructor: {
    name: 'Er. Anil Deshmukh',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'GIS & Civil Engineering Expert',
    experience: '11+ Years in GIS & Infrastructure Design',
    description: 'Anil specializes in integrating drone data into engineering workflows for smart planning and precision infrastructure mapping.',
    credentials: ['Civil Engineer', 'GIS Consultant', 'Drone Mapping Specialist', 'QGIS & CAD Trainer']
  },
  faq: [
    {
      question: 'Do I need to know AutoCAD before joining?',
      answer: 'Basic CAD knowledge is helpful but not mandatory. The course includes guided tutorials for beginners.'
    },
    {
      question: 'Is this useful for road and irrigation DPRs?',
      answer: 'Yes, the course covers alignment modeling, terrain extraction, and data preparation for DPR workflows.'
    }
  ],
  highlights: [
    'Engineering-grade drone data usage',
    'QGIS + CAD integration',
    'Terrain & alignment modeling',
    'Project-based certification'
  ]
},
'ultimate-pro': {
  id: 'ultimate-pro',
  title: 'Ultimate Pro Bundle',
  subtitle: 'DGCA Medium + Cinematography + Mapping in One Career-Focused Package',
  description: 'This 10-day intensive bundle combines DGCA medium Class training with advanced cinematography and professional mapping skills. Ideal for those seeking a career in drone filmmaking, surveying, or commercial UAV services.',
  heroImage: '/bundle.png',
  badge: 'Ultimate Package',
  badgeColor: 'bg-gradient-to-r from-[#F15A24] to-[#26A65B]',
  price: '₹115,000',
  gst: '+ 18% GST',
  duration: '10 Days',
  mode: 'Intensive Field + Classroom',
  certificate: 'Triple Certification (DGCA Medium, Cinematography, Mapping)',
  language: 'English / Hindi / Telugu',
  locations: ['Hyderabad'],
  level: 'Comprehensive',
  learningOutcomes: [
    'DGCA medium Class drone certification',
    'Professional cinematography and aerial filming techniques',
    'Drone-based mapping and surveying skills',
    'End-to-end mission planning and execution',
    'Payload handling and data capture',
    'Cinematic camera control with drones',
    'Data post-processing using GIS tools',
    'Client project and portfolio preparation'
  ],
  courseFeatures: [
    {
      icon: 'Award',
      title: 'Triple Certification',
      description: 'Get certified in DGCA Medium, Cinematography & Mapping'
    },
    {
      icon: 'Camera',
      title: 'Aerial Cinematography',
      description: 'Capture professional-grade videos with drone cameras'
    },
    {
      icon: 'Target',
      title: 'Mapping & Surveying',
      description: 'Training on photogrammetry, TIN, and terrain modeling'
    },
    {
      icon: 'Briefcase',
      title: 'Career Ready',
      description: 'Designed for drone professionals and entrepreneurs'
    }
  ],
  batchDates: [
    {
      startDate: 'August 1, 2025',
      endDate: 'August 10, 2025',
      location: 'Hyderabad',
      seatsLeft: 6,
      totalSeats: 15
    },
    {
      startDate: 'September 5, 2025',
      endDate: 'September 14, 2025',
      location: 'Bangalore',
      seatsLeft: 8,
      totalSeats: 15
    }
  ],
  instructor: {
    name: 'Ms. Rhea Mehta',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'Lead Drone Technology Instructor',
    experience: '9+ Years in UAV Training & Production',
    description: 'Rhea is a multi-domain drone expert with extensive experience in DGCA certification, aerial filming, and GIS mapping. She has mentored 500+ students in both technical and creative aspects of drone operations.',
    credentials: ['DGCA Certified Instructor', 'Drone Cinematographer', 'GIS Trainer', 'UAV Program Director']
  },
  faq: [
    {
      question: 'Is DGCA license included?',
      answer: 'Yes, DGCA Medium Class license training and certification is included in the bundle.'
    },
    {
      question: 'Is prior drone experience required?',
      answer: 'No, this course is suitable for motivated beginners and intermediate learners seeking a professional edge.'
    }
  ],
  highlights: [
    'Best all-in-one training package',
    'Cinematography + Mapping + DGCA Certified',
    'Strong career foundation',
    'Hands-on learning and real projects'
  ]
},
'dgca-mapping-bundle': {
  id: 'dgca-mapping-bundle',
  title: 'DGCA Medium + 3D Mapping',
  subtitle: 'Medium Class DGCA Certification with 3D Mapping Specialization',
  description: 'This bundle equips you with DGCA-certified medium drone operations training and advanced 3D mapping skills for professional surveying and infrastructure analysis. Perfect for aspiring drone surveyors and GIS technicians.',
  heroImage: '/medium-3d.webp',
  badge: 'Professional Bundle',
  badgeColor: 'bg-blue-600',
  price: '₹90,000',
  gst: '+ 18% GST',
  duration: '8 Days',
  mode: 'Field + Software Training',
  certificate: 'DGCA Medium + 3D Mapping Certification',
  language: 'English / Hindi / Telugu',
  locations: ['Hyderabad'],
  level: 'Intermediate to Advanced',
  learningOutcomes: [
    'DGCA Medium Class License training',
    'Drone-based terrain mapping and data acquisition',
    '3D model creation (Point Cloud, Mesh)',
    'Flight planning for large-scale surveys',
    'Photogrammetry software skills (Pix4D, Agisoft)',
    'Contours, TIN, and volume calculations',
    'CAD & GIS data export workflows',
    'Real-world project handling for infra & land records'
  ],
  courseFeatures: [
    {
      icon: 'Target',
      title: '3D Mapping',
      description: 'Create high-resolution 3D terrain models and maps'
    },
    {
      icon: 'Award',
      title: 'DGCA Medium License',
      description: 'Operate medium Class drones for commercial use'
    },
    {
      icon: 'Monitor',
      title: 'Professional Tools',
      description: 'Use leading software like Pix4D, Agisoft, and QGIS'
    },
    {
      icon: 'Briefcase',
      title: 'Industry Applications',
      description: 'Real-world workflows for land, road, and irrigation projects'
    }
  ],
  batchDates: [
    {
      startDate: 'August 12, 2025',
      endDate: 'August 19, 2025',
      location: 'Hyderabad',
      seatsLeft: 6,
      totalSeats: 15
    },
    {
      startDate: 'September 9, 2025',
      endDate: 'September 16, 2025',
      location: 'Bangalore',
      seatsLeft: 9,
      totalSeats: 15
    }
  ],
  instructor: {
    name: 'Mr. Sandeep Varma',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'Lead Drone Survey Trainer',
    experience: '10+ Years in Surveying & DGCA Training',
    description: 'Specialist in drone-based land surveying, photogrammetry, and regulatory training with experience in public and private sector projects.',
    credentials: ['DGCA Certified Instructor', 'Survey Engineer', 'Photogrammetry Expert', 'Mapping Project Consultant']
  },
  faq: [
    {
      question: 'Can I take this course without prior experience?',
      answer: 'Yes. This course starts from DGCA Medium basics and progresses to advanced mapping, ideal for professionals and freshers.'
    },
    {
      question: 'Will I get two certificates?',
      answer: 'Yes. One for DGCA Medium Class training and one for 3D Mapping specialization.'
    }
  ],
  highlights: [
    '8-day dual-skill bundle',
    'Survey-grade 3D mapping techniques',
    'DGCA license included',
    'Industry-ready certification'
  ]
},

'aerial-cinematography': {
    id: 'aerial-cinematography',
    title: 'Aerial Cinematography',
    subtitle: 'Professional Drone Filming and Photography',
    description: 'Master the art of aerial cinematography and photography for creative industries, media production, and commercial applications.',
    heroImage: '/aerial.avif',
    badge: 'Creative',
    badgeColor: 'bg-purple-600',
    price: '₹25,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Creative Workshop + Practical',
    certificate: 'Aerial Cinematography Specialist',
    language: 'English / Hindi',
    locations: ['Hyderabad'],
    level: 'Intermediate',
    learningOutcomes: [
      'Professional camera operations',
      'Creative shot composition',
      'Cinematic movement techniques',
      'Lighting and exposure control',
      'Post-production workflow',
      'Client project management',
      'Portfolio development',
      'Industry networking'
    ],
    courseFeatures: [
      {
        icon: 'Camera',
        title: 'Professional Filming',
        description: 'Master professional aerial filming techniques'
      },
      {
        icon: 'Users',
        title: 'Creative Training',
        description: 'Learn from industry cinematographers'
      },
      {
        icon: 'Target',
        title: 'Portfolio Building',
        description: 'Create impressive demo reel'
      },
      {
        icon: 'Briefcase',
        title: 'Industry Connections',
        description: 'Network with media professionals'
      }
    ],
    batchDates: [
      {
        startDate: 'February 8, 2025',
        endDate: 'February 10, 2025',
        location: 'Mumbai',
        seatsLeft: 10,
        totalSeats: 15
      }
    ],
    instructor: {
      name: 'Arjun Mehta',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Professional Cinematographer',
      experience: '8+ Years in Film Industry',
      description: 'Award-winning cinematographer with extensive experience in aerial filming for Bollywood and commercial projects.',
      credentials: ['Professional Cinematographer', 'Drone Specialist', 'Award Winner', 'Industry Mentor']
    },
    faq: [
      {
        question: 'What career opportunities are available?',
        answer: 'Film industry, advertising, real estate marketing, event coverage, wedding photography, and content creation for digital platforms.'
      },
      {
        question: 'Do I need prior photography experience?',
        answer: 'Basic photography knowledge is helpful but not required. We cover fundamentals as part of the course.'
      }
    ],
    highlights: [
      'Creative industry focus',
      'Professional portfolio creation',
      'Industry networking opportunities',
      'Award-winning instructor'
    ]
  },
  'data-processing': {
    id: 'data-processing',
    title: 'Data Processing (Survey, Mapping, Agri)',
    subtitle: 'Advanced Data Analysis and Processing Techniques',
    description: 'Learn to process and analyze data from survey, mapping, and agriculture operations using professional software and techniques.',
    heroImage: '/dataprocessing.png',
    badge: 'Technical',
    badgeColor: 'bg-indigo-600',
    price: '₹25,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Software Training + Practical',
    certificate: 'Data Processing Specialist',
    language: 'English / Hindi',
    locations: ['Hyderabad'],
    level: 'Intermediate',
    learningOutcomes: [
      'Professional data processing software',
      'Survey data analysis techniques',
      'Agricultural data interpretation',
      'Report generation and visualization',
      'Quality control procedures',
      'Client deliverable preparation',
      'Workflow optimization',
      'Technical troubleshooting'
    ],
    courseFeatures: [
      {
        icon: 'Monitor',
        title: 'Software Training',
        description: 'Master industry-standard processing software'
      },
      {
        icon: 'Target',
        title: 'Data Analysis',
        description: 'Advanced analysis and interpretation techniques'
      },
      {
        icon: 'Users',
        title: 'Expert Guidance',
        description: 'Learn from data processing specialists'
      },
      {
        icon: 'Briefcase',
        title: 'Technical Skills',
        description: 'High-demand technical expertise'
      }
    ],
    batchDates: [
      {
        startDate: 'February 15, 2025',
        endDate: 'February 17, 2025',
        location: 'Hyderabad',
        seatsLeft: 12,
        totalSeats: 15
      }
    ],
    instructor: {
      name: 'Rahul Gupta',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Data Processing Expert',
      experience: '10+ Years in GIS and Remote Sensing',
      description: 'GIS specialist with extensive experience in drone data processing and analysis for various industries.',
      credentials: ['GIS Expert', 'Remote Sensing Specialist', 'Software Trainer', 'Technical Consultant']
    },
    faq: [
      {
        question: 'What software will I learn?',
        answer: 'Pix4D, DroneDeploy, AgiSoft Metashape, QGIS, and other industry-standard processing software.'
      },
      {
        question: 'What career paths are available?',
        answer: 'GIS analyst, data processing specialist, remote sensing expert, and technical consultant roles.'
      }
    ],
    highlights: [
      'Industry-standard software training',
      'High-demand technical skills',
      'Multiple industry applications',
      'Expert-level instruction'
    ]
  },
  'drone-assembly-basic': {
    id: 'drone-assembly-basic',
    title: 'Drone Assembly, Troubleshooting & Repair (Basic)',
    subtitle: 'Fundamental Drone Hardware and Maintenance Skills',
    description: 'Learn basic drone assembly, troubleshooting, and repair techniques to understand drone hardware and perform basic maintenance.',
    heroImage: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Technical',
    badgeColor: 'bg-gray-600',
    price: '₹25,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Hands-on Workshop',
    certificate: 'Basic Drone Technician',
    language: 'English / Hindi',
    locations: ['Hyderabad'],
    level: 'Beginner',
    learningOutcomes: [
      'Drone component identification',
      'Basic assembly procedures',
      'Troubleshooting common issues',
      'Basic repair techniques',
      'Maintenance schedules',
      'Safety protocols',
      'Tool usage and care',
      'Quality control basics'
    ],
    courseFeatures: [
      {
        icon: 'Wrench',
        title: 'Hands-on Assembly',
        description: 'Build drones from components'
      },
      {
        icon: 'Settings',
        title: 'Troubleshooting',
        description: 'Diagnose and fix common problems'
      },
      {
        icon: 'Users',
        title: 'Technical Training',
        description: 'Learn from experienced technicians'
      },
      {
        icon: 'Briefcase',
        title: 'Technical Career',
        description: 'Foundation for technical roles'
      }
    ],
    batchDates: [
      {
        startDate: 'February 20, 2025',
        endDate: 'February 22, 2025',
        location: 'Hyderabad',
        seatsLeft: 8,
        totalSeats: 12
      }
    ],
    instructor: {
      name: 'Manoj Kumar',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Senior Drone Technician',
      experience: '8+ Years in Drone Hardware',
      description: 'Electronics engineer with extensive experience in drone assembly, repair, and technical training.',
      credentials: ['Electronics Engineer', 'Drone Technician', 'Technical Trainer', 'Hardware Specialist']
    },
    faq: [
      {
        question: 'Do I need electronics background?',
        answer: 'No prior electronics experience required. We start with basics and build up to practical skills.'
      },
      {
        question: 'What tools and equipment are provided?',
        answer: 'All tools, components, and equipment are provided during training. We also provide a recommended tools list for purchase.'
      }
    ],
    highlights: [
      'Hands-on technical training',
      'Build complete drone systems',
      'Practical troubleshooting skills',
      'Foundation for advanced courses'
    ]
  },
  'drone-assembly-advanced': {
    id: 'drone-assembly-advanced',
    title: 'Drone Assembly, Troubleshooting & Repair (Advanced)',
    subtitle: 'Professional Drone Service and Repair Expertise',
    description: 'Advanced drone assembly, complex troubleshooting, and professional repair services training for technical specialists.',
    heroImage: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Advanced Technical',
    badgeColor: 'bg-red-600',
    price: '₹45,000',
    gst: '+ 18% GST',
    duration: '5 Days',
    mode: 'Professional Workshop',
    certificate: 'Advanced Drone Technician',
    language: 'English / Hindi',
    locations: ['Hyderabad'],
    level: 'Advanced',
    learningOutcomes: [
      'Advanced assembly techniques',
      'Complex system troubleshooting',
      'Professional repair services',
      'Custom drone building',
      'Performance optimization',
      'Business setup guidance',
      'Customer service skills',
      'Technical documentation'
    ],
    courseFeatures: [
      {
        icon: 'Wrench',
        title: 'Advanced Assembly',
        description: 'Professional-level assembly and customization'
      },
      {
        icon: 'Settings',
        title: 'Complex Repairs',
        description: 'Handle advanced technical issues'
      },
      {
        icon: 'Users',
        title: 'Professional Training',
        description: 'Industry-standard techniques and practices'
      },
      {
        icon: 'Briefcase',
        title: 'Business Setup',
        description: 'Start your own repair service'
      }
    ],
    batchDates: [
      {
        startDate: 'March 1, 2025',
        endDate: 'March 5, 2025',
        location: 'Hyderabad',
        seatsLeft: 6,
        totalSeats: 10
      }
    ],
    instructor: {
      name: 'Manoj Kumar',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Senior Drone Technician',
      experience: '8+ Years in Drone Hardware',
      description: 'Electronics engineer with extensive experience in drone assembly, repair, and technical training.',
      credentials: ['Electronics Engineer', 'Drone Technician', 'Technical Trainer', 'Hardware Specialist']
    },
    faq: [
      {
        question: 'What is the prerequisite for this course?',
        answer: 'Basic electronics knowledge or completion of our Basic Drone Assembly course is recommended.'
      },
      {
        question: 'Can I start a repair business after this course?',
        answer: 'Yes, we provide business setup guidance, pricing strategies, and ongoing technical support for starting your repair service.'
      }
    ],
    highlights: [
      'Professional-level training',
      'Business setup guidance',
      'Advanced technical skills',
      'Ongoing support included'
    ]
  },
  'fpv-basic': {
    id: 'fpv-basic',
    title: 'FPV Drone Training (Basic)',
    subtitle: 'First Person View Racing and Maneuvering',
    description: 'Learn First Person View drone racing and basic maneuvering techniques for recreational and competitive flying.',
    heroImage: '/fpv-basic.png',
    badge: 'Racing',
    badgeColor: 'bg-red-500',
    price: '₹25,000',
    gst: '+ 18% GST',
    duration: '3 Days',
    mode: 'Practical + Simulator',
    certificate: 'FPV Pilot Basic',
    language: 'English / Hindi',
    locations: ['Hyderabad'],
    level: 'Beginner',
    learningOutcomes: [
      'FPV system setup and operation',
      'Basic racing maneuvers',
      'Safety protocols for FPV flying',
      'Equipment selection and maintenance',
      'Racing line optimization',
      'Crash recovery techniques',
      'Competition preparation basics',
      'Community engagement'
    ],
    courseFeatures: [
      {
        icon: 'Zap',
        title: 'FPV Flying',
        description: 'Master first-person view flying techniques'
      },
      {
        icon: 'Target',
        title: 'Racing Skills',
        description: 'Learn basic racing and maneuvering'
      },
      {
        icon: 'Users',
        title: 'Expert Coaching',
        description: 'Training from experienced FPV pilots'
      },
      {
        icon: 'Briefcase',
        title: 'Competition Ready',
        description: 'Prepare for racing competitions'
      }
    ],
    batchDates: [
      {
        startDate: 'February 25, 2025',
        endDate: 'February 27, 2025',
        location: 'Hyderabad',
        seatsLeft: 10,
        totalSeats: 12
      }
    ],
    instructor: {
      name: 'Karthik Reddy',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'FPV Racing Champion',
      experience: '6+ Years in FPV Racing',
      description: 'National FPV racing champion with extensive experience in competitive flying and training.',
      credentials: ['FPV Racing Champion', 'Competition Judge', 'Technical Expert', 'Community Leader']
    },
    faq: [
      {
        question: 'Do I need prior drone experience?',
        answer: 'Basic drone flying experience is helpful but not required. We start with fundamentals and build up skills progressively.'
      },
      {
        question: 'What equipment is needed?',
        answer: 'Training equipment is provided. We also provide guidance on purchasing your own FPV setup.'
      }
    ],
    highlights: [
      'Exciting FPV flying experience',
      'Racing techniques training',
      'Competition preparation',
      'Champion instructor'
    ]
  },
  'fpv-advanced': {
    id: 'fpv-advanced',
    title: 'FPV Drone Training (Advanced)',
    subtitle: 'Professional Racing and Competition Preparation',
    description: 'Advanced FPV racing techniques and competition preparation for serious racers and professional pilots.',
    heroImage: '/fpv-advanced.png',
    badge: 'Professional Racing',
    badgeColor: 'bg-red-600',
    price: '₹45,000',
    gst: '+ 18% GST',
    duration: '5 Days',
    mode: 'Intensive Training + Competition',
    certificate: 'FPV Pilot Advanced',
    language: 'English / Hindi',
    locations: ['Hyderabad'],
    level: 'Advanced',
    learningOutcomes: [
      'Advanced racing techniques',
      'Competition strategy and tactics',
      'Performance optimization',
      'Advanced maneuvers and tricks',
      'Equipment tuning and setup',
      'Mental preparation for competition',
      'Sponsorship and career development',
      'Teaching and coaching skills'
    ],
    courseFeatures: [
      {
        icon: 'Zap',
        title: 'Advanced Racing',
        description: 'Master professional racing techniques'
      },
      {
        icon: 'Target',
        title: 'Competition Prep',
        description: 'Prepare for national and international competitions'
      },
      {
        icon: 'Users',
        title: 'Professional Coaching',
        description: 'Training from championship-level pilots'
      },
      {
        icon: 'Briefcase',
        title: 'Career Development',
        description: 'Professional racing career guidance'
      }
    ],
    batchDates: [
      {
        startDate: 'March 10, 2025',
        endDate: 'March 14, 2025',
        location: 'Hyderabad',
        seatsLeft: 6,
        totalSeats: 8
      }
    ],
    instructor: {
      name: 'Karthik Reddy',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'FPV Racing Champion',
      experience: '6+ Years in FPV Racing',
      description: 'National FPV racing champion with extensive experience in competitive flying and training.',
      credentials: ['FPV Racing Champion', 'Competition Judge', 'Technical Expert', 'Community Leader']
    },
    faq: [
      {
        question: 'What is the prerequisite for this course?',
        answer: 'Completion of FPV Basic course or equivalent experience in FPV flying is required.'
      },
      {
        question: 'Will I be ready for competitions?',
        answer: 'Yes, this course prepares you for national and international FPV racing competitions.'
      }
    ],
    highlights: [
      'Championship-level training',
      'Competition preparation',
      'Professional racing techniques',
      'Career development guidance'
    ]
  },
  'women-bootcamp': {
    id: 'women-bootcamp',
    title: 'Women Drone Pilot Bootcamp',
    subtitle: 'Empowering Women in Aviation Technology',
    description: 'A comprehensive training program designed specifically for women with mentorship, peer networking, and career guidance.',
    heroImage: '/whyida.jpg',
    badge: 'Women Only',
    badgeColor: 'bg-pink-600',
    price: '₹35,000',
    gst: '+ 18% GST',
    originalPrice: '₹50,000',
    duration: '5 Days',
    mode: 'Women-Only Batches + Mentorship',
    certificate: 'DGCA Small + Medium Class License',
    language: 'English / Hindi',
   locations: ['Hyderabad'],
    level: 'All Levels',
    learningOutcomes: [
      'Complete drone pilot certification',
      'Confidence building in technology',
      'Career guidance and planning',
      'Network building with industry professionals',
      'Leadership skills in aviation',
      'Entrepreneurship opportunities',
      'Safety and regulatory compliance',
      'Advanced flight techniques'
    ],
    courseFeatures: [
      {
        icon: 'Users',
        title: 'Women-Only Batches',
        description: 'Comfortable learning environment with female instructors'
      },
      {
        icon: 'Heart',
        title: 'Mentorship Program',
        description: 'Ongoing support from successful women pilots'
      },
      {
        icon: 'Award',
        title: 'Special Pricing',
        description: 'Discounted rates to encourage women participation'
      },
      {
        icon: 'Network',
        title: 'Alumni Network',
        description: 'Join 2000+ women pilots in our exclusive network'
      }
    ],
    batchDates: [
      {
        startDate: 'March 8, 2025',
        endDate: 'March 12, 2025',
        location: 'Bangalore',
        seatsLeft: 5,
        totalSeats: 15
      }
    ],
    instructor: {
      name: 'Captain Meera Patel',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Women Aviation Pioneer',
      experience: '10+ Years Breaking Barriers',
      description: 'First woman DGCA-certified drone instructor in South India, passionate about empowering women in aviation.',
      credentials: ['DGCA Chief Instructor', 'Women Aviation Award Winner', '1500+ Flight Hours', 'Motivational Speaker']
    },
    faq: [
      {
        question: 'Why a separate program for women?',
        answer: 'We provide a comfortable, supportive environment where women can learn confidently, build networks, and receive mentorship from successful female pilots.'
      },
      {
        question: 'Is the certification same as regular DGCA course?',
        answer: 'Yes, you receive the same DGCA certification. The only difference is the supportive learning environment and additional mentorship.'
      }
    ],
    highlights: [
      '2000+ women pilots trained',
      'Female instructor-led training',
      'Exclusive networking opportunities',
      'Career mentorship included'
    ]
  },
 'drone-didi-agri': {
  id: 'drone-didi-agri',
  title: 'Drone-Didi Agri Program DGCA Small Class',
  subtitle: 'Women in Agriculture Technology – DGCA Certified Training',
  description: 'Government-certified training for small Class drones, tailored for women in agriculture, focusing on precision farming and agri-entrepreneurship.',
  heroImage: '/whyida4.jpg',  // You can replace this with the appropriate image
  badge: 'Women Only',
  badgeColor: 'bg-pink-600',
  price: '₹35,000',
  gst: '+ 18% GST',
  originalPrice: '₹45,000', // Adjust this if necessary
  duration: '5 Days',
  mode: 'Field Training + Certification',
  certificate: 'DGCA Certified Drone Pilot',
  language: 'Hindi / Regional Languages',
  locations: ['Hyderabad', 'Pune'], // Add more locations as needed
  level: 'Beginner Friendly',
  learningOutcomes: [
    'DGCA Certified Training for Small Class Drones',
    'Agricultural drone operations and management',
    'Crop monitoring and precision farming techniques',
    'Business development and entrepreneurship skills',
    'Government schemes and funding awareness',
    'Sustainable farming practices and technology adoption'
  ],
  courseFeatures: [
    {
      icon: 'Wheat',
      title: 'Agriculture Focus',
      description: 'Specialized training for drone applications in agriculture'
    },
    {
      icon: 'Users',
      title: 'Women Empowerment',
      description: 'Focus on empowering rural and urban women through technology'
    },
    {
      icon: 'TrendingUp',
      title: 'Entrepreneurship Skills',
      description: 'Develop business and entrepreneurial skills for agricultural ventures'
    },
    {
      icon: 'Heart',
      title: 'Ongoing Support',
      description: 'Community-based support with mentorship and business assistance'
    }
  ],
  batchDates: [
    {
      startDate: 'March 15, 2025',
      endDate: 'March 19, 2025',
      location: 'Hyderabad',
      seatsLeft: 12,
      totalSeats: 20
    }
  ],
  instructor: {
    name: 'Dr. Sunita Devi',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',  // Replace with actual instructor image
    title: 'Rural Development Expert & Drone Specialist',
    experience: '15+ Years in Rural Empowerment and Agri-Tech',
    description: 'An expert in rural development, Dr. Sunita Devi has vast experience in empowering women in agriculture through technology adoption.',
    credentials: ['DGCA Certified Trainer', 'Agriculture Specialist', 'Women Empowerment Leader', 'Community Organizing Expert']
  },
  faq: [
    {
      question: 'Is this program suitable for women from rural areas?',
      answer: 'Yes, this program is specifically tailored for women in both rural and urban areas, with a focus on practical drone operations and business development.'
    },
    {
      question: 'What certification will I receive after completing this course?',
      answer: 'You will receive a DGCA certification for Small Class drones, along with the skills needed to operate drones in agricultural environments.'
    }
  ],
  highlights: [
    'DGCA Certified Training for Women in Agriculture',
    'Empowerment and Business Development Focus',
    'Practical Field Training and Mentorship',
    'Access to Government Schemes and Funding Resources'
  ]
},

  'simulator-refresher': {
    id: 'simulator-refresher',
    title: 'Simulator Refresher (50 hrs)',
    subtitle: 'Enhance Your Skills with Advanced Simulator Practice',
    description: 'Comprehensive 50-hour simulator training program to enhance flying skills and practice emergency scenarios.',
    heroImage: '/simulator.png',
    badge: 'Skill Enhancement',
    badgeColor: 'bg-blue-500',
    price: '₹15,000',
    gst: '+ 18% GST',
    duration: '50 Hours',
    mode: 'Simulator + Flexible Schedule',
    certificate: 'Simulator Proficiency Certificate',
    language: 'English / Hindi',
     locations: ['Hyderabad'],
    level: 'All Levels',
    learningOutcomes: [
      'Advanced flight scenarios',
      'Emergency procedure practice',
      'Weather condition simulation',
      'Navigation skill enhancement',
      'Equipment failure scenarios',
      'Precision flying techniques',
      'Confidence building',
      'Skill assessment and improvement'
    ],
    courseFeatures: [
      {
        icon: 'Monitor',
        title: '50 Hours Practice',
        description: 'Extensive simulator flying time'
      },
      {
        icon: 'Target',
        title: 'Skill Enhancement',
        description: 'Focus on improving specific skills'
      },
      {
        icon: 'Clock',
        title: 'Flexible Schedule',
        description: 'Practice at your own pace and timing'
      },
      {
        icon: 'Users',
        title: 'Expert Guidance',
        description: 'Instructor support and feedback'
      }
    ],
    batchDates: [
      {
        startDate: 'Ongoing',
        endDate: 'Flexible',
        location: 'Multiple Centers',
        seatsLeft: 20,
        totalSeats: 25
      }
    ],
    instructor: {
      name: 'Simulator Training Team',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Certified Simulator Instructors',
      experience: 'Collective 50+ Years Experience',
      description: 'Team of certified instructors specializing in simulator training and skill development.',
      credentials: ['DGCA Certified', 'Simulator Specialists', 'Training Experts', 'Skill Assessors']
    },
    faq: [
      {
        question: 'Can I schedule sessions flexibly?',
        answer: 'Yes, you can book simulator sessions based on your availability within the validity period.'
      },
      {
        question: 'What scenarios are covered?',
        answer: 'Emergency procedures, weather conditions, equipment failures, navigation challenges, and precision flying exercises.'
      }
    ],
    highlights: [
      'Flexible scheduling',
      '50 hours of practice',
      'Emergency scenario training',
      'Skill improvement focus'
    ]
  },
  'online-theory': {
    id: 'online-theory',
    title: 'Online Drone Pilot Theory Crash Course',
    subtitle: 'Complete Theory Foundation for Drone Pilots',
    description: 'Comprehensive online theory course covering all aspects of drone piloting with interactive sessions and assessments.',
    heroImage: '/online-class.png',
    badge: 'Online Learning',
    badgeColor: 'bg-green-500',
    price: '₹15,000',
    gst: '+ 18% GST',
    duration: 'Self-Paced',
    mode: 'Online + Interactive Sessions',
    certificate: 'Theory Completion Certificate',
    language: 'English / Hindi',
 locations: ['Hyderabad'],
    level: 'Beginner',
    learningOutcomes: [
      'DGCA regulations and compliance',
      'Drone systems and components',
      'Flight planning and navigation',
      'Weather and safety considerations',
      'Emergency procedures',
      'Airspace and communication',
      'Maintenance and inspection',
      'Commercial operations basics'
    ],
    courseFeatures: [
      {
        icon: 'Monitor',
        title: 'Online Learning',
        description: 'Study from anywhere at your own pace'
      },
      {
        icon: 'Users',
        title: 'Interactive Sessions',
        description: 'Live Q&A sessions with instructors'
      },
      {
        icon: 'Clock',
        title: 'Self-Paced',
        description: 'Complete at your own speed'
      },
      {
        icon: 'Award',
        title: 'Theory Foundation',
        description: 'Strong theoretical foundation for practical training'
      }
    ],
    batchDates: [
      {
        startDate: 'Immediate Access',
        endDate: 'Self-Paced',
        location: 'Online',
        seatsLeft: 50,
        totalSeats: 100
      }
    ],
    instructor: {
      name: 'Online Training Team',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Certified Online Instructors',
      experience: 'Collective 30+ Years Experience',
      description: 'Team of certified instructors specializing in online drone education and theory training.',
      credentials: ['DGCA Certified', 'Online Education Specialists', 'Curriculum Developers', 'Assessment Experts']
    },
    faq: [
      {
        question: 'How long do I have access to the course?',
        answer: 'You have 6 months access to all course materials and can complete at your own pace.'
      },
      {
        question: 'Are there live sessions?',
        answer: 'Yes, we conduct weekly live Q&A sessions and doubt clearing sessions with instructors.'
      }
    ],
    highlights: [
      'Affordable online learning',
      'Self-paced completion',
      'Interactive live sessions',
      'Strong theory foundation'
    ]
  },
 'school-awareness': {
  id: 'school-awareness',
  title: 'Drone Awareness for School Students',
  subtitle: 'Inspiring Young Minds through Drone Education',
  description: 'IDA empowers school students through live flight demos, interactive workshops, and STEM-integrated learning experiences.',
  heroImage: '/1.png',
  badge: 'For Schools',
  badgeColor: 'bg-yellow-600',
  price: '₹15,000',
  gst: '+ 18% GST',
  duration: '1 Day / Flexible',
  mode: 'On-campus / Remote / Hybrid',
  certificate: 'Drone Awareness Participation Certificate',
  language: 'English / Hindi / Regional',
 locations: ['Hyderabad'],
  level: 'Beginner (K-12)',
  learningOutcomes: [
    'Introduction to drones and their real-world applications',
    'STEM learning through drone technology',
    'Supervised hands-on drone flying experience',
    'Awareness of drone safety rules and airspace',
    'Career paths in drone and aerospace industries',
    'Boosting curiosity and scientific thinking',
    'Group-based interactive drone games and challenges',
    'Understanding drone ethics and responsible usage'
  ],
  courseFeatures: [
    {
      icon: 'Drone',
      title: 'Live Drone Demonstrations',
      description: 'Exciting real-time drone flight demos that inspire curiosity'
    },
    {
      icon: 'Gamepad',
      title: 'Hands-on Experience',
      description: 'Students get to fly drones under expert supervision'
    },
    {
      icon: 'Book',
      title: 'STEM Integration',
      description: 'Connects drones with science, math, and engineering concepts'
    },
    {
      icon: 'Rocket',
      title: 'Career Exposure',
      description: 'Introduces future opportunities in drone technology'
    }
  ],
  batchDates: [
    {
      startDate: 'On Request',
      endDate: '1 Day / Custom',
      location: 'School Campus',
      seatsLeft: 100,
      totalSeats: 100
    }
  ],
  instructor: {
    name: 'Drone Educator Team',
    image: 'https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'STEM & Drone Awareness Instructors',
    experience: '5+ Years in Drone & STEM Education',
    description: 'Our instructors are passionate about making drone technology accessible and fun for young students.',
    credentials: ['DGCA Certified Trainers', 'STEM Educators', 'Drone Awareness Experts']
  },
  faq: [
    {
      question: 'Is this suitable for all school students?',
      answer: 'Yes, the workshop is designed for K-12 students with age-appropriate activities.'
    },
    {
      question: 'Do students get to fly drones?',
      answer: 'Yes! All flying sessions are supervised and conducted in safe, open areas.'
    }
  ],
  highlights: [
    'Live drone demos and flying',
    'STEM-based engagement',
    'Exciting & fun learning experience',
    'Ideal for school events and science fairs'
  ]
},
'2d-mapping': {
  id: '2d-mapping',
  title: 'DGCA 2D Mapping',
  subtitle: 'Mastering the Basics of 2D Mapping with Drone Technology',
  description: 'This course introduces students to the fundamentals of 2D mapping using drone technology, covering the key concepts and techniques for effective data collection and processing.',
  heroImage: '/2dmapping.jpg',
  badge: 'For Professionals',
  badgeColor: 'bg-green-600',
  price: '₹35,000',
  gst: '+ 18% GST',
  duration: '6 Days',
  mode: 'Intensive Training',
  certificate: 'DGCA 2D Mapping Certification',
  language: 'English / Hindi / Regional',
 locations: ['Hyderabad'],
  level: 'Beginner to Intermediate',
  learningOutcomes: [
    'Introduction to 2D mapping and its applications in various industries',
    'Understanding survey techniques and mapping software',
    'Hands-on experience with drone-based 2D mapping projects',
    'Awareness of industry standards and drone safety regulations',
    'Boosting career prospects in surveying, mapping, and drone technology',
    'Group-based drone exercises and challenges',
    'Introduction to drone ethics and responsible usage in mapping'
  ],
  courseFeatures: [
    {
      icon: 'Drone',
      title: '2D Mapping Demonstrations',
      description: 'Live demos to showcase 2D mapping capabilities and drone usage in real-world projects'
    },
    {
      icon: 'Gamepad',
      title: 'Hands-on Mapping Experience',
      description: 'Students fly drones and gather 2D mapping data under expert supervision'
    },
    {
      icon: 'Book',
      title: 'Industry-Relevant Tools',
      description: 'Learn the best mapping tools and software used in the professional world'
    },
    {
      icon: 'Rocket',
      title: 'Career Exposure',
      description: 'Exposure to career paths in mapping, surveying, and drone industries'
    }
  ],
  batchDates: [
    {
      startDate: 'On Request',
      endDate: '6 Days / Custom',
      location: 'School Campus / Online',
      seatsLeft: 50,
      totalSeats: 50
    }
  ],
  instructor: {
    name: '2D Mapping Educator Team',
    image: 'https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: '2D Mapping & Drone Survey Instructors',
    experience: '5+ Years in Mapping & Drone Technology',
    description: 'Our instructors specialize in drone mapping, survey techniques, and geospatial data collection.',
    credentials: ['DGCA Certified Trainers', 'Surveying Experts', 'Drone Mapping Professionals']
  },
  faq: [
    {
      question: 'Do students get to operate drones in this course?',
      answer: 'Yes! Students will fly drones to collect 2D mapping data under expert supervision.'
    },
    {
      question: 'Is this course suitable for beginners?',
      answer: 'Yes! The course is designed for both beginners and those with some prior knowledge of drone technology.'
    }
  ],
  highlights: [
    'Hands-on drone flying experience for 2D mapping',
    'Learn the latest mapping tools and techniques',
    'Ideal for students interested in surveying, geospatial data, and drone technology'
  ]
},
'3d-mapping': {
  id: '3d-mapping',
  title: 'DGCA 3D Mapping',
  subtitle: 'Advanced Drone Techniques for 3D Mapping and Surveying',
  description: 'This course provides in-depth training on using drones for 3D mapping and surveying, including data collection, processing, and real-world applications in industries like construction and agriculture.',
  heroImage: '/3dmapping.jpg',
  badge: 'For Professionals',
  badgeColor: 'bg-blue-600',
  price: '₹45,000',
  gst: '+ 18% GST',
  duration: '6 Days',
  mode: 'Intensive Training',
  certificate: 'DGCA 3D Mapping Certification',
  language: 'English / Hindi / Regional',
  locations: ['Hyderabad'],
  level: 'Intermediate to Advanced',
  learningOutcomes: [
    'Comprehensive understanding of 3D mapping and its industrial applications',
    'Hands-on experience in data collection and processing for 3D mapping projects',
    'Learning to use specialized mapping software and tools for 3D models',
    'In-depth knowledge of drone safety and regulations in mapping',
    'Career enhancement in fields like construction, agriculture, and surveying',
    'Collaborative group projects and real-world mapping challenges',
    'Ethical use of drones and data privacy in 3D mapping'
  ],
  courseFeatures: [
    {
      icon: 'Drone',
      title: '3D Mapping Demonstrations',
      description: 'Live demonstrations of 3D mapping capabilities using drones for various industries'
    },
    {
      icon: 'Gamepad',
      title: 'Hands-on 3D Mapping Experience',
      description: 'Students will operate drones to capture data for 3D models under expert supervision'
    },
    {
      icon: 'Book',
      title: 'Advanced Mapping Techniques',
      description: 'Master advanced 3D mapping techniques with industry-standard tools'
    },
    {
      icon: 'Rocket',
      title: 'Career Exposure',
      description: 'Learn about career paths in surveying, 3D mapping, construction, and more'
    }
  ],
  batchDates: [
    {
      startDate: 'On Request',
      endDate: '6 Days / Custom',
      location: 'School Campus / Online',
      seatsLeft: 50,
      totalSeats: 50
    }
  ],
  instructor: {
    name: '3D Mapping Educator Team',
    image: 'https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: '3D Mapping & Drone Survey Instructors',
    experience: '7+ Years in 3D Mapping & Drone Surveying',
    description: 'Our instructors are experts in 3D mapping, using advanced drones and software for data collection and modeling.',
    credentials: ['DGCA Certified Trainers', 'Surveying and Mapping Experts', '3D Modeling Professionals']
  },
  faq: [
    {
      question: 'Can I take this course if I have no experience in mapping?',
      answer: 'This course is designed for those with basic knowledge of drones and mapping concepts.'
    },
    {
      question: 'Will I learn how to process 3D data in this course?',
      answer: 'Yes! Students will learn both data collection and 3D model creation using mapping software.'
    }
  ],
  highlights: [
    'Live drone demos for 3D mapping and surveying',
    'Hands-on experience with industry-leading mapping tools',
    'Perfect for professionals interested in advanced surveying and construction mapping'
  ]
},

  'site-asset-inspection': {
  id: 'site-inspection',
  title: 'Site Inspection & Asset Mapping',
  subtitle: 'Inspection and mapping of roads, railways, telecom, and industrial assets',
  description: 'Inspection and mapping of roads, railways, telecom, and industrial sites using drone technology. Understand tools, software, and field protocols.',
  heroImage: '/site-asset.jpg',
  badge: 'Special Courses',
  badgeColor: 'bg-orange-600',
  price: '₹35,000',
  gst: '+ 18% GST',
  duration: '5 Days',
  mode: 'Practical + Mapping Tools',
  certificate: 'Site Inspection & Mapping Certificate',
  language: 'English / Hindi',
  locations: ['Hyderabad'],
  level: 'Intermediate',
  learningOutcomes: [
    'Infrastructure inspection workflow',
    'Telecom and railway asset mapping',
    'Drone flying for inspection purposes',
    'Survey tool usage and planning',
    'Report generation using mapping software',
    'Utilities inspection case studies',
    'On-field mission execution'
  ],
  courseFeatures: [
    {
      icon: 'MapPin',
      title: 'Field Work',
      description: 'Real-world asset mapping scenarios'
    },
    {
      icon: 'Settings',
      title: 'Software Training',
      description: 'Hands-on with mapping tools'
    },
    {
      icon: 'Users',
      title: 'Industry Use Cases',
      description: 'Practical projects across sectors'
    },
    {
      icon: 'Briefcase',
      title: 'Job Opportunities',
      description: 'Inspection and GIS roles'
    }
  ],
  batchDates: [
    {
      startDate: 'March 20, 2025',
      endDate: 'March 24, 2025',
      location: 'Hyderabad',
      seatsLeft: 10,
      totalSeats: 15
    }
  ],
  instructor: {
    name: 'Mr. Naveen Rao',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'Senior GIS & Asset Mapping Trainer',
    experience: '12+ Years in Infra Mapping',
    description: 'Expert in UAV-based mapping and asset documentation with hundreds of successful government and private sector projects.',
    credentials: ['Drone Survey Expert', 'GIS Trainer', 'Infrastructure Consultant', '500+ Sites Mapped']
  },
  faq: [
    {
      question: 'Is this suitable for civil engineers?',
      answer: 'Yes, this course is highly recommended for civil engineers, planners, and survey professionals.'
    },
    {
      question: 'Do I need to bring my drone?',
      answer: 'No, drones and software access will be provided during the training.'
    }
  ],
  highlights: [
    'Real-site inspection experience',
    'Utility and infrastructure mapping',
    'Survey-grade workflows',
    'Industry-led instruction'
  ]
},
'mining-excavation': {
  id: 'mining-excavation',
  title: 'Mining Excavation Volumetric Analysis',
  subtitle: 'Analyze and calculate volumes for mining excavation projects using drones',
  description: 'Learn to measure volumes of excavation sites using aerial survey and photogrammetry techniques. Perfect for mining professionals seeking drone-based volumetrics.',
  heroImage: '/mining.webp',
  badge: 'Special Courses',
  badgeColor: 'bg-blue-600',
  price: '₹35,000',
  gst: '+ 18% GST',
  duration: '5 Days',
  mode: 'Field + Software Training',
  certificate: 'Volumetric Analysis Certificate',
  language: 'English / Hindi',
  locations: ['Hyderabad'],
  level: 'Advanced',
  learningOutcomes: [
    'Volume calculation using drones',
    'Stockpile analysis and cut/fill estimation',
    'Photogrammetry and elevation modeling',
    'Aerial data collection for mines',
    'Data processing and 3D point cloud handling',
    'Contour and DEM extraction',
    'Case study on mining productivity improvement'
  ],
  courseFeatures: [
    {
      icon: 'Settings',
      title: 'Data Processing Tools',
      description: 'Hands-on training in Pix4D, DJI Terra, or similar'
    },
    {
      icon: 'Target',
      title: 'Precision Mapping',
      description: 'Survey-grade results with control points'
    },
    {
      icon: 'Users',
      title: 'Mining Use Cases',
      description: 'Volumetric workflows applied to real mines'
    },
    {
      icon: 'Award',
      title: 'Job Focused',
      description: 'Targeted at mining engineers and surveyors'
    }
  ],
  batchDates: [
    {
      startDate: 'April 5, 2025',
      endDate: 'April 9, 2025',
      location: 'Hyderabad',
      seatsLeft: 8,
      totalSeats: 15
    }
  ],
  instructor: {
    name: 'Dr. Ravi Kumar',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'Mining GIS Analyst',
    experience: '10+ Years in UAV + Mining Projects',
    description: 'Experienced in integrating drone technology into mining productivity and survey operations for large mining sites across India.',
    credentials: ['Certified Drone Surveyor', 'Mining GIS Consultant', 'Autodesk & Pix4D Certified']
  },
  faq: [
    {
      question: 'Do I need to know GIS or CAD before joining?',
      answer: 'Basic familiarity is helpful but not mandatory. Training includes beginner-friendly walkthroughs.'
    },
    {
      question: 'Will we fly drones at mining sites?',
      answer: 'Drone flights will be simulated or executed on similar terrains. Permissions for real mines depend on schedule.'
    }
  ],
  highlights: [
    'Mining-specific volumetrics',
    'Hands-on drone data processing',
    'Field-level application',
    'Industry-grade software use'
  ]
},
'agriculture-precision': {
  id: 'agriculture-precision',
  title: 'Agriculture Crop Monitoring & Precision Farming (Multi-Spectral)',
  subtitle: 'Precision spraying techniques for crop protection and optimized agriculture',
  description: 'This course trains participants in modern spraying techniques using drones for crop protection and field productivity. It combines flight skills with crop monitoring and mapping practices tailored for agriculture.',
  heroImage: '/agricrop-monitor.webp',
  badge: 'Special Courses',
  badgeColor: 'bg-green-600',
  price: '₹45,000',
  gst: '+ 18% GST',
  duration: '3 Days',
  mode: 'On-field + Simulator',
  certificate: 'Agri Drone Spraying Certificate',
  language: 'English / Hindi / Telugu',
  locations: ['Hyderabad'],
  level: 'Beginner Friendly',
  learningOutcomes: [
    'Basics of precision farming with drones',
    'Drone operation for spraying',
    'Flight planning using farm mapping apps',
    'Payload setup and calibration for liquid sprays',
    'Safety and pesticide handling',
    'Real-time monitoring with multispectral drones',
    'Post-mission assessment and data recording'
  ],
  courseFeatures: [
    {
      icon: 'Wheat',
      title: 'Agri Mapping',
      description: 'Learn to map and analyze agricultural plots'
    },
    {
      icon: 'Zap',
      title: 'Spraying Demos',
      description: 'Live field demos with agri-spraying drones'
    },
    {
      icon: 'Users',
      title: 'For Farmers & Agri Techs',
      description: 'Tailored for rural entrepreneurs and professionals'
    },
    {
      icon: 'Award',
      title: 'Certification',
      description: 'Recognized agri spraying course certificate'
    }
  ],
  batchDates: [
    {
      startDate: 'July 8, 2025',
      endDate: 'July 10, 2025',
      location: 'Hyderabad',
      seatsLeft: 12,
      totalSeats: 20
    }
  ],
  instructor: {
    name: 'Ms. Ritu Sharma',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'Agri Drone Specialist',
    experience: '8+ Years in Precision Farming',
    description: 'Ritu is a drone agronomist specializing in spraying operations, crop monitoring analytics, and digital farming practices.',
    credentials: ['Certified Pesticide UAV Operator', 'Agri Drone Trainer', 'Worked with 50+ Farmer Producer Orgs']
  },
  faq: [
    {
      question: 'Is prior farming knowledge needed?',
      answer: 'Not required. The course is designed for beginners as well as experienced agri professionals.'
    },
    {
      question: 'Do we get hands-on flying?',
      answer: 'Yes, both simulator and real drone operations are included.'
    }
  ],
  highlights: [
    'Live spraying demonstrations',
    'Beginner-friendly format',
    'Rural entrepreneurship focused',
    'Government-ready skills'
  ]
},
'thermal-lidar': {
  id: 'thermal-lidar',
  title: 'Thermal, LiDAR / Industrial, Pipeline / Corridor Inspections',
  subtitle: 'Advanced Inspections Using Thermal Imaging, LiDAR, and Drone Technology',
  description: 'This course trains participants in specialized inspections for industrial sites, pipelines, and corridors using thermal imaging, LiDAR, and drones. It combines advanced technology with hands-on field training for precise data collection and analysis.',
  heroImage: '/thermal.jpg',  // Replace with appropriate image path
  badge: 'Industrial',
  badgeColor: 'bg-orange-600',
  price: '₹45,000',
  gst: '+ 18% GST',
  duration: '4 Days',
  mode: 'On-field + Classroom',
  certificate: 'Thermal & LiDAR Inspection Certificate',
  language: 'English / Hindi / Telugu',
  locations: ['Hyderabad'],
  level: 'Intermediate to Advanced',
  learningOutcomes: [
    'Thermal Imaging and LiDAR technology for industrial inspections',
    'Pipeline and corridor inspections using drone technology',
    'Advanced data collection and analysis techniques',
    'Understanding safety protocols in industrial environments',
    'Field training on real-world inspection scenarios',
    'Processing and interpreting thermal and LiDAR data',
    'Hands-on use of drones for mapping and inspections'
  ],
  courseFeatures: [
    {
      icon: 'Target',
      title: 'Industrial Inspections',
      description: 'Focus on inspecting industrial sites using advanced drone technology'
    },
    {
      icon: 'Zap',
      title: 'Thermal & LiDAR Technology',
      description: 'In-depth knowledge of thermal and LiDAR technology applications'
    },
    {
      icon: 'Pipeline',
      title: 'Pipeline Inspections',
      description: 'Techniques for inspecting pipelines and corridors using drones'
    },
    {
      icon: 'BarChart',
      title: 'Data Analysis',
      description: 'Learn how to process and analyze inspection data for actionable insights'
    }
  ],
  batchDates: [
    {
      startDate: 'April 10, 2025',
      endDate: 'April 13, 2025',
      location: 'Hyderabad',
      seatsLeft: 10,
      totalSeats: 15
    },
    {
      startDate: 'April 17, 2025',
      endDate: 'April 20, 2025',
      location: 'Pune',
      seatsLeft: 8,
      totalSeats: 15
    }
  ],
  instructor: {
    name: 'Dr. Rajesh Kumar',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300', // Replace with actual instructor image
    title: 'LiDAR & Thermal Inspection Specialist',
    experience: '20+ Years in Industrial Inspection and Drone Technology',
    description: 'An expert in industrial inspections using advanced technologies, Dr. Rajesh Kumar has over 20 years of experience in LiDAR, thermal imaging, and drone-based inspection techniques.',
    credentials: ['LiDAR Technology Expert', 'Thermal Imaging Specialist', 'Industrial Drone Trainer', 'Certified Safety Officer']
  },
  faq: [
    {
      question: 'What industries are covered in this program?',
      answer: 'This program covers industrial inspections, pipeline inspections, and corridor mapping, all using cutting-edge thermal and LiDAR drone technology.'
    },
    {
      question: 'Will I receive certification?',
      answer: 'Yes, upon completion, you will receive a certification in LiDAR & Thermal Inspection from our accredited training center.'
    }
  ],
  highlights: [
    'Advanced Thermal and LiDAR Drone Training',
    'Pipeline & Industrial Site Inspections',
    'Hands-on Field Training and Certification',
    'In-depth Data Analysis and Reporting Techniques'
  ]
},

'assembly-basic': {
  id: 'assembly-basic',
  title: 'Drone Assembly & Repair (Basic)',
  subtitle: 'Learn the essentials of drone assembly, repair, and basic maintenance',
  description: 'This foundational program covers essential drone assembly, basic repairs, soldering, and maintenance. Learn how to handle minor repairs, basic calibration, and troubleshoot common drone issues. Ideal for beginners or enthusiasts looking to start a career in drone repair and maintenance.',
  heroImage: '/repair-basic.jpg',
  badge: 'Special Courses',
  badgeColor: 'bg-green-600',
  price: '₹30,000',
  gst: '+ 18% GST',
  duration: '5 Days',
  mode: 'Hands-on + Lab Work',
  certificate: 'Basic Repair & Maintenance Certificate',
  language: 'English / Hindi',
  locations: ['Hyderabad'],
  level: 'Beginner',
  learningOutcomes: [
    'Basic drone assembly and disassembly',
    'Troubleshooting common issues (motors, ESCs)',
    'Introduction to soldering and wiring',
    'Basic calibration of IMU, GPS, and compass',
    'Simple flight performance tuning',
    'Fundamentals of drone repair and diagnostics'
  ],
  courseFeatures: [
    {
      icon: 'Wrench',
      title: 'Basic Repairs',
      description: 'Live workshop on basic drone assembly and repair'
    },
    {
      icon: 'Settings',
      title: 'Basic Tuning',
      description: 'Learn basic tuning for stable drone flight'
    },
    {
      icon: 'Monitor',
      title: 'Testing & Tools',
      description: 'Hands-on with essential drone repair tools and basic testing'
    },
    {
      icon: 'Award',
      title: 'Certification',
      description: 'Completion certificate for basic drone repair technicians'
    }
  ],
  batchDates: [
    {
      startDate: 'July 15, 2025',
      endDate: 'July 19, 2025',
      location: 'Bangalore',
      seatsLeft: 8,
      totalSeats: 15
    }
  ],
  instructor: {
    name: 'Mr. Ashwin Desai',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'UAV Maintenance Specialist',
    experience: '10+ Years in Drone Tech',
    description: 'Ashwin is a UAV technician with expertise in basic drone repairs, hardware diagnostics, and flight tuning for beginner-level drones.',
    credentials: ['FPV Technician', 'ESC Firmware Expert', 'Drone Lab Consultant']
  },
  faq: [
    {
      question: 'Is prior technical knowledge required?',
      answer: 'No, this course is designed for beginners and no prior technical knowledge is required.'
    },
    {
      question: 'Will I receive a toolkit?',
      answer: 'Tools will be provided during the course. You can purchase kits separately after the training.'
    }
  ],
  highlights: [
    'Introductory soldering and wiring training',
    'Basic-level drone repair and diagnostics',
    'Focus on drone enthusiast skills and hobbyist repairs',
    'Hands-on lab work and practical sessions'
  ]
},

'assembly-advanced': {
  id: 'assembly-advanced',
  title: 'Drone Assembly & Repair (Advanced)',
  subtitle: 'Master advanced repairs, calibration, soldering and maintenance for drone fleets',
  description: 'This intensive program focuses on advanced drone assembly and maintenance skills including soldering, calibration, firmware configuration, and repair of components like ESCs, motors, and IMUs. Ideal for technicians and engineers maintaining drone fleets.',
  heroImage: '/repair-advanced.jpg',
  badge: 'Special Courses',
  badgeColor: 'bg-red-600',
  price: '₹45,000',
  gst: '+ 18% GST',
  duration: '5 Days',
  mode: 'Hands-on + Lab Work',
  certificate: 'Advanced Repair & Maintenance Certificate',
  language: 'English / Hindi',
  locations: ['Hyderabad'],
  level: 'Advanced',
  learningOutcomes: [
    'Drone electronics and wiring diagnosis',
    'Motor, ESC, and flight controller setup',
    'Advanced soldering and connector repairs',
    'IMU, GPS, and compass calibration',
    'PID tuning for optimized performance',
    'Troubleshooting flight instability',
    'Component-level maintenance practices'
  ],
  courseFeatures: [
    {
      icon: 'Wrench',
      title: 'Hands-on Repairs',
      description: 'Live workshop on drone breakdown and reassembly'
    },
    {
      icon: 'Settings',
      title: 'Flight Tuning',
      description: 'PID and firmware tuning for flight performance'
    },
    {
      icon: 'Monitor',
      title: 'Testing & Tools',
      description: 'Hands-on with testing tools and lab instruments'
    },
    {
      icon: 'Award',
      title: 'Certification',
      description: 'Completion certificate for repair engineers'
    }
  ],
  batchDates: [
    {
      startDate: 'July 15, 2025',
      endDate: 'July 19, 2025',
      location: 'Bangalore',
      seatsLeft: 8,
      totalSeats: 15
    }
  ],
  instructor: {
    name: 'Mr. Ashwin Desai',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'UAV Maintenance Specialist',
    experience: '10+ Years in Drone Tech',
    description: 'Ashwin is a UAV technician with a specialization in hardware diagnostics, repair procedures, and tuning for racing and industrial drones.',
    credentials: ['FPV Technician', 'ESC Firmware Expert', 'Drone Lab Consultant']
  },
  faq: [
    {
      question: 'Is prior technical knowledge required?',
      answer: 'Yes, basic understanding of electronics or prior drone experience is recommended.'
    },
    {
      question: 'Will I receive a toolkit?',
      answer: 'Tools will be provided during the course. You can purchase kits separately post-training.'
    }
  ],
  highlights: [
    'Advanced-level soldering training',
    'Firmware + Hardware repair coverage',
    'Drone technician career focus',
    'Hands-on lab exercises'
  ]
},

'custom-training': {
  id: 'custom-training',
  title: 'Custom Training / Workshop for Institutes',
  subtitle: 'Tailored drone workshops for universities and government agencies',
  description: 'This flexible program is designed for institutions that want to introduce drones into their curriculum or operations. Training is customized to fit institutional goals, whether technical, academic, or administrative.',
  heroImage: '/workshop1.jpg',
  badge: 'Special Courses',
  badgeColor: 'bg-orange-500',
  price: '₹25,000',
  gst: '+ 18% GST',
  duration: '3 Days',
  mode: 'On-site / Campus Workshop',
  certificate: 'Institutional Workshop Certificate',
  language: 'English / Hindi / Regional',
  locations: ['Hyderabad'],
  level: 'Customized',
  learningOutcomes: [
    'Designing a drone curriculum for institutes',
    'On-campus flight training demonstrations',
    'Hands-on exposure to mapping, inspection, or spraying modules',
    'Certificate generation and project assessments',
    'Collaborative project model building for departments'
  ],
  courseFeatures: [
    {
      icon: 'Building',
      title: 'Tailored Curriculum',
      description: 'Based on institutional needs and level of students'
    },
    {
      icon: 'Users',
      title: 'Group Training',
      description: 'Multiple departments or batches can be trained at once'
    },
    {
      icon: 'Calendar',
      title: 'Flexible Schedule',
      description: 'You decide the dates and structure'
    },
    {
      icon: 'Award',
      title: 'Workshop Certification',
      description: 'Custom certificates and badges available'
    }
  ],
  batchDates: [
    {
      startDate: 'August 1, 2025',
      endDate: 'August 3, 2025',
      location: 'Hyderabad Campus',
      seatsLeft: 20,
      totalSeats: 30
    }
  ],
  instructor: {
    name: 'Ms. Shruthi Anil',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    title: 'Educational Drone Consultant',
    experience: '8+ Years in Institutional Drone Programs',
    description: 'Shruthi has trained hundreds of college faculty and students across India in curriculum-based drone education.',
    credentials: ['Academic Workshop Leader', 'STEM Drone Curriculum Expert', 'Women-in-Drone Advocate']
  },
  faq: [
    {
      question: 'Can this be conducted on our campus?',
      answer: 'Yes, we offer both on-campus and hybrid formats based on your infrastructure.'
    },
    {
      question: 'Can multiple departments join?',
      answer: 'Absolutely. We encourage inter-departmental participation for better collaboration.'
    }
  ],
  highlights: [
    'Institution-focused workshop design',
    'Certificate & curriculum support',
    'Hands-on learning with drones',
    'Custom topics based on college/agency'
  ]
},




};