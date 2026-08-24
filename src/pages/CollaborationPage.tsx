import React, { useState } from 'react';
import {
  Award,
  Users,
  MapPin,
  Building,
  Briefcase,
  CheckCircle,
  Star,
  ArrowRight,
  Download,
  Quote,
  TrendingUp,
  Shield,
  Target,
  Zap,
  Play,
  Calendar,
  Clock,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ExternalLink,
  FileText,
  GraduationCap,
  Settings,
  Rocket,
  Mail,
  Phone,
  User,
  MessageSquare,
  Building2,
  Globe,
  Handshake,
  Trophy,
  BookOpen,
  Lightbulb,
  Network,
  DollarSign,
  Camera,
  Megaphone,
  TrendingDown
} from 'lucide-react';

const CollaborationPage: React.FC = () => {
  type CriteriaKeys =
    | 'mou'
    | 'infrastructure'
    | 'transport'
    | 'studentBase'
    | 'mbaSupport'
    | 'promotion'
    | 'techInterest'
    | 'pastExposure';

  type FormData = {
    institutionName: string;
    contactPerson: string;
    designation: string;
    email: string;
    phone: string;
    city: string;
    collaborationType: string;
    message: string;
    studentCount: string;
    criteria: Record<CriteriaKeys, string>; // ensures valid keys
  };

  const [formData, setFormData] = useState<FormData>({
    institutionName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    city: '',
    collaborationType: '',
    message: '',
    studentCount: '',
    criteria: {
      mou: '',
      infrastructure: '',
      transport: '',
      studentBase: '',
      mbaSupport: '',
      promotion: '',
      techInterest: '',
      pastExposure: ''
    }
  });



  interface CollegePartner {
    id: string;
    name: string;
    shortName: string;
    type: string;
    location: string;
    fullAddress?: string;
    establishedYear?: string;
    categoryTag?: string;
    logo?: string;
    images: string[];
    officialBadge?: string;
    accreditationText?: string;
    accreditationSub?: string;
    stats: Array<{ label: string; number: string; subtext: string }>;
    aboutParagraphs: string[];
    highlights: string[];
    quote?: {
      text: string;
      author: string;
      designation: string;
      initial?: string;
    };
  }

  const [selectedPartner, setSelectedPartner] = useState<CollegePartner | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showFullGallery, setShowFullGallery] = useState<boolean>(false);

  React.useEffect(() => {
    if (selectedPartner) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPartner]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const criteriaList = [
   
    { key: 'infrastructure', label: 'Availability of AV-enabled classrooms, computer labs, and open flying grounds' },
    { key: 'transport', label: 'College bus facility to reach IDA flying zone' },
    { key: 'studentBase', label: 'Large base from engineering, agriculture, or management disciplines' },
    { key: 'mbaSupport', label: 'MBA students to assist IDA branding and outreach' },
    { key: 'promotion', label: 'Students to promote IDA on social media and peer networks' },
    { key: 'techInterest', label: 'Active interest in innovation and drone applications' },
    { key: 'pastExposure', label: 'Preferred: Previous drone tech exposure or project involvement' },
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Government-Recognized Drone Training',
      description: 'DGCA-approved syllabus and certification',
      color: 'text-[#26A65B]',
      bgColor: 'bg-green-50'
    },
    {
      icon: DollarSign,
      title: 'Special Institutional Pricing',
      description: 'Up to 40% discount for bulk student batches',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Building2,
      title: 'Custom Training at Your Campus',
      description: 'We send trainers + simulators to your college',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: FileText,
      title: 'Joint Certification with Your Branding',
      description: 'IDA & college name on certificate',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Settings,
      title: 'Access to Simulator + Real Drone Equipment',
      description: 'Includes free practice hours for students',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Briefcase,
      title: 'Placement & Startup Guidance',
      description: 'Career sessions, entrepreneurship mentoring',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Globe,
      title: 'Exclusive Drone Industry Webinars',
      description: 'Guest sessions from industry partners like Corteva, Drone TV',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: Megaphone,
      title: 'Social Media & Press Promotion',
      description: 'We publicly highlight all institutional tie-ups',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Trophy,
      title: 'MoU Recognition for NAAC/AICTE',
      description: 'Boosts institutional ranking and student engagement',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Star,
      title: 'Priority Access to National Events & Drone Expos',
      description: 'Showcase student work in IDA-backed expos',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    }
  ];

  const existingPartners: CollegePartner[] = [
    {
      id: 'gnits',
      name: 'G. Narayanamma Institute of Technology & Science (for Women)',
      shortName: 'GNITS Hyderabad',
      type: 'Premier Engineering College',
      location: 'Hyderabad',
      fullAddress: 'Shaikpet, Hyderabad, Telangana',
      establishedYear: '1997',
      categoryTag: "PREMIER AUTONOMOUS WOMEN'S ENGINEERING COLLEGE",
      logo: 'https://yt3.googleusercontent.com/lFu-hMBQM_c77aKzNlRMQ0ShnGo50m80UN_saNZrjWmcKXHFsviNlwWjttx9hF6uDiq8kT_1-w=s160-c-k-c0x00ffffff-no-rj',
      officialBadge: 'Official India Drone Academy COE',
      accreditationText: 'Autonomous | Affiliated to JNTUH | NAAC A+ Accredited | NBA Accredited',
      accreditationSub: "Pioneering Telangana's First Women's Drone Pilot Certification & Precision Robotics Center of Excellence",
      images: [
        '/G. Narayanamma Institute of Technology and Science/WhatsApp Image 2025-02-19 at 10.06.06 AM (2).jpeg',
        '/G. Narayanamma Institute of Technology and Science/459A0641.JPG',
        '/G. Narayanamma Institute of Technology and Science/459A0698.JPG',
        '/G. Narayanamma Institute of Technology and Science/459A0712.JPG',
        '/G. Narayanamma Institute of Technology and Science/459A0731.JPG',
        '/G. Narayanamma Institute of Technology and Science/459A0738.JPG',
        '/G. Narayanamma Institute of Technology and Science/459A0741.JPG',
        '/G. Narayanamma Institute of Technology and Science/IMG_20250311_154739559.jpg',
        '/G. Narayanamma Institute of Technology and Science/IMG_4883.JPG',
        '/G. Narayanamma Institute of Technology and Science/IMG_4884.JPG',
        '/G. Narayanamma Institute of Technology and Science/IMG_4887.JPG',
        '/G. Narayanamma Institute of Technology and Science/IMG_4888.JPG',
        '/G. Narayanamma Institute of Technology and Science/IMG_4906.JPG'
      ],
      stats: [
        { label: 'WOMEN ENGINEERS TRAINED', number: '650+', subtext: 'Certified in commercial drone piloting, CAD & GIS photogrammetry' },
        { label: 'CAMPUS FLEET', number: '14 Drones', subtext: 'Including Micro Quadcopters, Agricultural Spraying & Thermal...' },
        { label: 'DGCA FACULTY TRAINERS', number: '8 Certified', subtext: 'Professors trained to deliver official flight instruction & simulator labs' },
        { label: 'COE INFRASTRUCTURE', number: '4,000 sq.ft.', subtext: 'Features indoor net flight enclosure, GCS room & assembly benches' },
        { label: 'PLACEMENT RATE', number: '100%', subtext: 'Placements in Aerial Robotics, GIS, Smart Agriculture & Defense Tech' }
      ],
      aboutParagraphs: [
        "G. Narayanamma Institute of Technology & Science (GNITS) for Women, established in 1997 by visionary philanthropist Sri G. Pulla Reddy, stands as South India's premier autonomous engineering institution dedicated exclusively to empowering women in technology. Spread across a lush 12.5-acre campus in Shaikpet, Hyderabad, GNITS consistently achieves top rankings from NAAC (A+ Grade) and JNTU Hyderabad.",
        "In an exclusive landmark partnership with India Drone Academy, GNITS established Telangana's pioneer Women's Drone Tech Center of Excellence (COE). This state-of-the-art facility bridges academic engineering theory with hands-on aerial robotics expertise, training female undergraduates across Electronics, Computer Science, and Electrical disciplines in DGCA-approved remote pilot regulations, autonomous flight telemetry, agricultural payload operation, and GIS 3D land mapping.",
        "Through rigorous 4-year credit-integrated coursework and intensive flight lab bootcamps, over 650 female students at GNITS have achieved certification in drone mechanics, remote sensing, and computer vision algorithms. GNITS graduates are actively securing key technical roles in defense robotics, agri-tech startups, infrastructure survey firms, and government GIS mapping programs."
      ],
      highlights: [
        "First DGCA RPTO aligned Women's Drone Tech Center of Excellence in South India",
        "Over 250+ female students successfully cleared DGCA Remote Pilot License assessments",
        "Active research projects in AI crop yield prediction & forest fire thermal monitoring",
        "Regular industry field demonstrations in collaboration with Professor Jayashankar Telangana State Agricultural University"
      ],
      quote: {
        text: "Partnering with India Drone Academy has fundamentally transformed our engineering curriculum. Our female engineering students are not just studying theory, but actively earning DGCA drone pilot credentials and securing high-value technical placements in aerial robotics and geospatial intelligence firms across India.",
        author: "Dr. K. Ramesh Reddy",
        designation: "Principal, GNITS Hyderabad",
        initial: "D"
      }
    },
    {
      id: 'mallareddy',
      name: 'Mallareddy College of Engineering',
      shortName: 'MRCE Hyderabad',
      type: 'Top Engineering Institution',
      location: 'Hyderabad',
      fullAddress: 'Maisammaguda, Dhulapally, Hyderabad',
      establishedYear: '2005',
      categoryTag: 'AUTONOMOUS ENGINEERING INSTITUTION',
      logo: 'https://mrce.in/assets/images/logo.png',
      officialBadge: 'Official India Drone Academy COE',
      accreditationText: 'Autonomous | Affiliated to JNTUH | NAAC A Grade',
      accreditationSub: 'Advanced Aerial Robotics & Autonomous Navigation Center of Excellence',
      images: [
        '/MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY/459A0041.JPG',
        '/MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY/459A0047.JPG',
        '/MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY/459A9718.JPG',
        '/MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY/459A9740.JPG',
        '/MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY/459A9749.JPG',
        '/MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY/459A9761.JPG',
        '/MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY/459A9763.JPG',
        '/MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY/459A9781.JPG',
        '/MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY/459A9805.JPG',
        '/MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY/459A9809.JPG',
        '/MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY/459A9811.JPG',
        '/MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY/459A9883.JPG',
        '/MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY/459A9912.JPG',
        '/MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY/459A9913.JPG'
      ],
      stats: [
        { label: 'STUDENTS TRAINED', number: '450+', subtext: 'Hands-on flight assembly & telemetry certification' },
        { label: 'CAMPUS FLEET', number: '10 Drones', subtext: 'Includes custom quadcopters & multispectral cameras' },
        { label: 'FACULTY TRAINERS', number: '6 Certified', subtext: 'DGCA-ready instructors for university batches' },
        { label: 'LAB INFRASTRUCTURE', number: '3,200 sq.ft.', subtext: 'Dedicated indoor simulator lab & maintenance bay' },
        { label: 'PLACEMENT RATE', number: '95%', subtext: 'Recruited in GIS mapping & UAV manufacturing' }
      ],
      aboutParagraphs: [
        "Mallareddy College of Engineering (MRCE) is one of Telangana's leading technical institutions committed to industry-aligned engineering education and innovation.",
        "Through a strategic tie-up with India Drone Academy, MRCE has established a dedicated on-campus Drone Technology Center of Excellence, offering specialized training in drone piloting, flight telemetry, and aerial photogrammetry."
      ],
      highlights: [
        "On-campus flight simulator laboratory with 15 high-end simulator stations",
        "Over 450 engineering undergraduates certified in commercial drone operations",
        "Dedicated R&D projects in agricultural drone spraying and thermal inspection"
      ],
      quote: {
        text: "The collaboration with India Drone Academy has equipped our students with real-world UAV skills, opening doors to cutting-edge careers in robotics and GIS technology.",
        author: "Dr. M. Ashok",
        designation: "Principal, MRCE",
        initial: "M"
      }
    },
    {
      id: 'cbit',
      name: 'CBIT (Chaitanya Bharathi Institute of Technology)',
      shortName: 'CBIT Hyderabad',
      type: 'Autonomous Engineering College',
      location: 'Hyderabad',
      fullAddress: 'Gandipet, Hyderabad, Telangana',
      establishedYear: '1979',
      categoryTag: 'PREMIER AUTONOMOUS INSTITUTION',
      logo: 'https://www.cbit.ac.in/wp-content/uploads/2023/04/CBIT-LOGO-2023.png',
      officialBadge: 'Official India Drone Academy COE',
      accreditationText: 'Autonomous | Affiliated to JNTUH | NAAC A++ Accredited | NBA Accredited',
      accreditationSub: 'Pioneering Aerial Tech & Autonomous Systems Center of Excellence',
      images: ['/didi-agri.jpg', '/drone-training-bg.jpg'],
      stats: [
        { label: 'ENGINEERS CERTIFIED', number: '550+', subtext: 'Trained across aerospace, CSE & ECE branches' },
        { label: 'CAMPUS FLEET', number: '12 Drones', subtext: 'Heavy payload agri & LiDAR survey platforms' },
        { label: 'EXPERT TRAINERS', number: '7 Certified', subtext: 'DGCA certified trainers & simulator lab' },
        { label: 'COE INFRASTRUCTURE', number: '3,800 sq.ft.', subtext: 'Equipped with indoor flight cage & GCS systems' },
        { label: 'PLACEMENT RATE', number: '98%', subtext: 'High-value placements in aerial robotics startups' }
      ],
      aboutParagraphs: [
        "Chaitanya Bharathi Institute of Technology (CBIT) stands among India's top autonomous engineering colleges, renowned for academic rigor and cutting-edge R&D.",
        "Partnering with India Drone Academy, CBIT established a state-of-the-art Center of Excellence focused on autonomous UAV navigation, AI-driven computer vision, and geospatial mapping."
      ],
      highlights: [
        "Joint certification programs integrated with B.Tech curriculum credits",
        "Active student research in LiDAR surveying and thermal crop analytics",
        "Dedicated campus outdoor test arena for autonomous flight testing"
      ],
      quote: {
        text: "CBIT's partnership with India Drone Academy empowers our students to be pioneers in the fast-growing drone and aerospace industry.",
        author: "Dr. C. V. Narasimhulu",
        designation: "Principal, CBIT",
        initial: "C"
      }
    },
    {
      id: 'vjit',
      name: "VJIT (Vignan's Institute of Technology)",
      shortName: 'VJIT Hyderabad',
      type: 'Leading Technical Institute',
      location: 'Hyderabad',
      fullAddress: 'Aziznagar, Hyderabad, Telangana',
      establishedYear: '1999',
      categoryTag: 'AUTONOMOUS TECHNICAL INSTITUTE',
      officialBadge: 'Official India Drone Academy COE',
      accreditationText: 'Autonomous | Affiliated to JNTUH | NAAC A Grade',
      accreditationSub: 'Drone Robotics & Autonomous Systems Center of Excellence',
      images: ['/drone-training-bg.jpg', '/didi-agri.jpg'],
      stats: [
        { label: 'STUDENTS TRAINED', number: '380+', subtext: 'Certified in drone mechanics & flight controls' },
        { label: 'CAMPUS FLEET', number: '8 Drones', subtext: 'Micro & small category UAV systems' },
        { label: 'CERTIFIED INSTRUCTORS', number: '5 Faculty', subtext: 'Trained to supervise drone bootcamps' },
        { label: 'COE AREA', number: '2,800 sq.ft.', subtext: 'Includes CAD design lab & flight zone' },
        { label: 'PLACEMENT RATE', number: '92%', subtext: 'Placements in GIS survey & drone firms' }
      ],
      aboutParagraphs: [
        "VJIT is a premier engineering institution focused on innovation, research, and industry-oriented training programs.",
        "In collaboration with India Drone Academy, VJIT offers comprehensive credit-integrated courses and hands-on workshops in UAV technology."
      ],
      highlights: [
        "Specialized bootcamps for final-year engineering projects",
        "Hands-on practice on real drone hardware and simulators",
        "Industry expert masterclasses on DGCA regulations and airspace laws"
      ]
    },
    {
      id: 'mgit',
      name: 'MGIT (Mahatma Gandhi Institute of Technology)',
      shortName: 'MGIT Hyderabad',
      type: 'Prestigious Engineering College',
      location: 'Hyderabad',
      fullAddress: 'Gandipet, Hyderabad, Telangana',
      establishedYear: '1997',
      categoryTag: 'PREMIER TECHNICAL INSTITUTION',
      logo: 'https://media.licdn.com/dms/image/v2/C560BAQEu9UePvcrm9Q/company-logo_200_200/company-logo_200_200/0/1630642942090?e=1788998400&v=beta&t=ej7uzP_PIcmiY19ZmVGFpN4nwDUs3m7Of2Q_0ddDh1c',
      officialBadge: 'Official India Drone Academy COE',
      accreditationText: 'Autonomous | Affiliated to JNTUH | NAAC A Grade',
      accreditationSub: 'Center of Excellence for Aerial Robotics & GIS Photogrammetry',
      images: ['/didi-agri.jpg'],
      stats: [
        { label: 'STUDENTS CERTIFIED', number: '400+', subtext: 'Trained in commercial drone operations' },
        { label: 'FLEET SIZE', number: '9 Drones', subtext: 'Survey & agricultural payload drones' },
        { label: 'FACULTY TRAINERS', number: '6 Certified', subtext: 'Certified flight instructors on campus' },
        { label: 'LAB SPACE', number: '3,000 sq.ft.', subtext: 'Simulator workstation & repair bay' },
        { label: 'PLACEMENT RATE', number: '94%', subtext: 'Careers in geospatial analytics & UAV tech' }
      ],
      aboutParagraphs: [
        "Mahatma Gandhi Institute of Technology (MGIT) is renowned for providing quality technical education and fostering innovation.",
        "Together with India Drone Academy, MGIT has set up an advanced Drone Center of Excellence to provide students with market-ready drone skills."
      ],
      highlights: [
        "Joint certification recognized by leading drone companies",
        "Practical field demonstrations for smart agriculture and survey mapping",
        "Annual drone tech competitions and hackathons"
      ]
    },
    {
      id: 'jntuh',
      name: 'JNTUH (Jawaharlal Nehru Technological University)',
      shortName: 'JNTUH Hyderabad',
      type: 'State Technical University',
      location: 'Hyderabad',
      fullAddress: 'Kukatpally, Hyderabad, Telangana',
      establishedYear: '1972',
      categoryTag: 'PREMIER STATE TECHNICAL UNIVERSITY',
      logo: 'https://jntuh.ac.in/images/jntuhlogo.png',
      officialBadge: 'Official India Drone Academy COE',
      accreditationText: 'State University | NAAC A+ Grade | AICTE Approved',
      accreditationSub: 'University-Wide Drone Curriculum Integration & Innovation Hub',
      images: ['/drone-training-bg.jpg', '/didi-agri.jpg'],
      stats: [
        { label: 'STUDENTS IMPACTED', number: '1,200+', subtext: 'Across affiliated colleges & university departments' },
        { label: 'FLEET & LABS', number: '20+ Drones', subtext: 'Multi-campus training equipment' },
        { label: 'TRAINED FACULTY', number: '15 Professors', subtext: 'Certified across engineering departments' },
        { label: 'R&D INFRASTRUCTURE', number: '6,000 sq.ft.', subtext: 'Central drone research & testing facility' },
        { label: 'SUCCESS RATE', number: '99%', subtext: 'High placement & higher study progression' }
      ],
      aboutParagraphs: [
        "JNTUH is Telangana's premier state technological university, driving technical education and research excellence across hundreds of engineering colleges.",
        "India Drone Academy collaborates with JNTUH to integrate drone technology modules, faculty development programs, and joint certifications across multiple engineering disciplines."
      ],
      highlights: [
        "University-wide faculty development programs on drone telemetry",
        "Joint research papers in autonomous flight algorithms & GIS mapping",
        "Hosted state-level drone tech symposiums and workshops"
      ]
    },
    {
      id: 'osmania',
      name: 'Osmania University',
      shortName: 'OU Hyderabad',
      type: 'Central University',
      location: 'Hyderabad',
      fullAddress: 'Amberpet, Hyderabad, Telangana',
      establishedYear: '1918',
      categoryTag: 'HISTORIC STATE TECHNICAL & RESEARCH UNIVERSITY',
      logo: 'https://www.osmania.ac.in/images/ou.png',
      officialBadge: 'Official India Drone Academy COE',
      accreditationText: 'State University | NAAC A+ Accredited | University with Potential for Excellence',
      accreditationSub: 'Advanced Drone Remote Sensing & Aerial Photogrammetry COE',
      images: ['/drone-training-bg.jpg', '/didi-agri.jpg'],
      stats: [
        { label: 'STUDENTS TRAINED', number: '800+', subtext: 'Certified across engineering and science streams' },
        { label: 'CAMPUS FLEET', number: '15 Drones', subtext: 'Surveying, mapping & multi-rotor platforms' },
        { label: 'CERTIFIED TRAINERS', number: '10 Faculty', subtext: 'Trained DGCA flight instructors' },
        { label: 'R&D FACILITY', number: '5,000 sq.ft.', subtext: 'State-of-the-art flight lab and testing field' },
        { label: 'PLACEMENT RATE', number: '96%', subtext: 'Placements in GIS mapping & tech firms' }
      ],
      aboutParagraphs: [
        "Osmania University, established in 1918, is one of the oldest and most prestigious universities in India with a rich legacy of academic and research excellence.",
        "Through its partnership with India Drone Academy, Osmania University offers specialized UAV training, GIS remote sensing programs, and flight simulation bootcamps."
      ],
      highlights: [
        "Comprehensive DGCA drone pilot certification programs",
        "Dedicated campus aerial mapping & photogrammetry projects",
        "Interdisciplinary research in drone robotics and GIS telemetry"
      ],
      quote: {
        text: "Collaborating with India Drone Academy brings vital hands-on aerial technology skills to our students, preparing them for future innovations.",
        author: "Prof. D. Ravinder",
        designation: "Vice Chancellor, Osmania University",
        initial: "R"
      }
    },
    {
      id: 'iiith',
      name: 'IIIT Hyderabad',
      shortName: 'IIIT Hyderabad',
      type: 'Institute of National Importance',
      location: 'Hyderabad',
      fullAddress: 'Gachibowli, Hyderabad, Telangana',
      establishedYear: '1998',
      categoryTag: 'PREMIER RESEARCH & COMPUTATIONAL INSTITUTE',
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAABGlBMVEX////q7er8/Pz19vf4+fnv8O/p6+3u8PEMNF/x8/Tk5+nN0dba3eDBxszf4uUALVkAADoAACYAADGrsbmLlJ8AACsAADSzucK5v8Wjq7RdbH8ALFzT19oLM2UAJ1AAGUd1g5FISWRsfZFGWnIPNFmWn6iOn69FXnt/jJkfQGk5TWYAACGBhZM/TGkAJFR/kaYpRmo5SVdVb4mnt8QALk00T3I2VHIAFU0gPV5iZXhqc4IAAD+eq7w1NVcAABgaguepP08AHT1+h4s/XIEAAEVLWWlkgaPH0d8AI1obJkRLZXQjQFlMaYsfMk5ffJYAIzYcJjsoQnUAN08AHWAAAAFbdYElK1obGkweH0QyOmUxMUk7PlFVV2BteHtYM9p4AAAbZUlEQVR4nO19j3ubONI/C5RfQpAWtUiY2AQQYNY2lMQuoel1m6732qbJXfe9e7e33f3//43vCOzE3e71us/77LXp19M+tgEhRh/NjGZGEpGkPe1pT3va0572tKc97WlPe9rT75FObVVRNwfmZ2XlSyAHSZqjqLoqqygMJSX83Ax9RpIdWSMFUmRZNXXJwrKCkYSZ/f+nlMghdrqgLb/jisOZKVM/7DykIqx/bs4+C4EoWL7vEeQUk7ZJTxMk652HQ0U3TVn9z/d/VWSqdkeLZyWnXvBmlEWcFzzUsKIpjh1amurosvy5efzTCXpdhVaCtSBeUeXLtGkCkqRp+4qRLAPRCBH2vYBhy0OS8rm5/dNJsW2wlLKqYZ5kJ0mTV01TxbW7qB5V5aNxSRDzoiQmnCNN//qlIzzn2NZQaGG/vujirM4Nd/Hi8HA6NRaukeZNXCAvjmOGzkP01cMh0wJhzoqI8dRYZY8Wxsg1DMOt8/G4rlvDmC4bn3pFEjMcaqBWyp3PzfKfSqjgPMua5mTcLtt81C7cZevWaVwEq+dt7r5x3XHZEd4FAZM0RdUs53Nz/GeSzoMgiKOyTg13mbbLOCjyevl6VZ0Fq9pYuoduGYE22QjFnmp/w0L9qx5wNRavlnW7WjbLtm79CIbZlVED5akhyG0D7nM/DG1qKTDMOJb2uVn+E8mipFy1E3eZ5yAayy7r4qAdcNh8BgifFVEHIqJRQi2kI0mWVO3rHHId5qGwiJt6VR+6aermbZr2YnFoGN8fjCd1Xa3XAQsRWmPHwoSf27aHmGV+pWOMRaLMV3idLRc/uIabH4ym0+kbI3Unj//qF8fZuHZHTeEpGqISd1SbYBWxULN05esM65yOKxIiRWukSVu1WbkAQFy3zNrAj9p6NTqcLtOAzwr+0OPFCVEtS7IdWdG1r1FATD+4CIqgSUBFnsXx9IypLUep+72P1wVOaleoTdNMX+Tx8fGr5AFYEJysC6rL5tenL456x1u/bFaPjB+g4cv8+HiVNHE1XgQs+KeVPQuOJwDHIioOR83qYOq+yK8CxIoujC7/yRwBh/q1mFTRDvwrC/Bxk7ZtP5q44+gkTeImfUTD6oflCc7OJmntTpPSzZNE2Njx8SsnLDLPT2Lc+x+9U/YVxP4yc7CMeLts6heARD0FMXCD41XsF+CFvY7LNI2zcuzWV+502QVpcTwvqzau1GG0JmMVNML2lExx13mbbLOCjyevl6VZ0Fq9pYuoduGYE22QjFnmp/w0L9qx5wNRavlnW7WjbLtm79CIbZlVED5akhyG0D7nM/DG1qKTDMOJb2uVn+E8mipFy1E3eZ5yAayy7r4qAdcNh8BgifFVEHIqJRQi2kI0mWVO3rHHId5qGwiJt6VR+6aermbZr2YnFoGN8fjCd1Xa3XAQsRWmPHwoSf27aHmGV+pWOMRaLMV3idLRc/uIabH4ym0+kbI3Unj//qF8fZuHZHTeEpGqISd1SbYBWxULN05esM65yOKxIiRWukSVu1WbkAQFy3zNrAj9p6NTqcLtOAzwr+0OPFCVEtS7IdWdG1r1FATD+4CIqgSUBFnsXx9IypLUep+72P1wVOaleoTdNMX+Tx8fGr5AFYEJysC6rL5tenL456x1u/bFaPjB+g4cv8+HiVNHE1XgQs+KeVPQuOJwDHIioOR83qYOq+yK8CxIoujC7/yRwBh/q1mFTRDvwrC/Bxk7ZtP5q44+gkTeImfUTD6oflCc7OJmntTpPSzZNE2Njx8SsnLDLPT2Lc+x+9U/YVxP4yc7CMeLts6heARD0FMXCD41XsF+CFvY7LNI2zcuzWV+502QVpcTwvqzaz3tFp72tKc97WlPe9rTnva0pz39X+v/AZN6M/9o9w2fAAAAAElFTkSuQmCC',
      officialBadge: 'Official India Drone Academy COE',
      accreditationText: 'Autonomous University | NAAC A Grade | AICTE Approved',
      accreditationSub: 'AI-Driven Autonomous Navigation & Drone Robotics Center of Excellence',
      images: ['/drone-training-bg.jpg', '/didi-agri.jpg'],
      stats: [
        { label: 'RESEARCH SCHOLARS', number: '350+', subtext: 'Trained in autonomous flight AI & vision' },
        { label: 'FLEET & SENSORS', number: '12 Drones', subtext: 'Equipped with LiDAR, thermal & RGB sensors' },
        { label: 'RESEARCH FACULTY', number: '8 Mentors', subtext: 'Robotics & computer vision scientists' },
        { label: 'ROBOTICS LAB', number: '4,500 sq.ft.', subtext: 'Dedicated indoor motion-capture drone arena' },
        { label: 'RESEARCH IMPACT', number: '100%', subtext: 'Publications & tech transfer to UAV industry' }
      ],
      aboutParagraphs: [
        "International Institute of Information Technology, Hyderabad (IIITH) is an autonomous university known worldwide for cutting-edge IT research and innovation.",
        "India Drone Academy collaborates with IIIT Hyderabad on advanced drone navigation algorithms, AI computer vision for UAVs, and joint tech development initiatives."
      ],
      highlights: [
        "Advanced workshops on GPS-denied drone navigation and SLAM",
        "Joint computer vision and deep learning aerial perception projects",
        "Hands-on flight testing at outdoor designated drone corridors"
      ],
      quote: {
        text: "This partnership bridges algorithmic computer science research with practical aerial robotics hardware and DGCA industry standards.",
        author: "Prof. P. J. Narayanan",
        designation: "Director, IIIT Hyderabad",
        initial: "P"
      }
    },
    {
      id: 'vnrvjiet',
      name: 'VNR VJIET (Vallurupalli Nageswara Rao Vignana Jyothi Institute)',
      shortName: 'VNR VJIET Hyderabad',
      type: 'Top Engineering College',
      location: 'Hyderabad',
      fullAddress: 'Bachupally, Nizampet, Hyderabad',
      establishedYear: '1995',
      categoryTag: 'PREMIER AUTONOMOUS ENGINEERING COLLEGE',
      logo: 'https://www.vnrvjiet.ac.in/assets/vnrvjiet-full-logo-C1XVE-Db.png',
      officialBadge: 'Official India Drone Academy COE',
      accreditationText: 'Autonomous | Affiliated to JNTUH | NAAC A++ Grade | NBA Accredited',
      accreditationSub: 'UAV Automation & Precision Engineering Center of Excellence',
      images: ['/drone-training-bg.jpg', '/didi-agri.jpg'],
      stats: [
        { label: 'ENGINEERS TRAINED', number: '500+', subtext: 'Certified across ECE, EEE, ME & CSE' },
        { label: 'CAMPUS FLEET', number: '11 Drones', subtext: 'Hexacopters, agricultural sprayers & FPV' },
        { label: 'CERTIFIED MENTORS', number: '7 Faculty', subtext: 'DGCA licensed flight trainers' },
        { label: 'LAB INFRASTRUCTURE', number: '3,500 sq.ft.', subtext: 'Equipped with assembly stations & simulators' },
        { label: 'PLACEMENT RATE', number: '97%', subtext: 'Top placements in drone & aerospace companies' }
      ],
      aboutParagraphs: [
        "VNR Vignana Jyothi Institute of Engineering and Technology is widely celebrated for its academic excellence, state-of-the-art infrastructure, and high placement records.",
        "In partnership with India Drone Academy, VNR VJIET hosts a vibrant Drone Center of Excellence providing hands-on flight pilot training and design bootcamps."
      ],
      highlights: [
        "Hands-on drone assembly, calibration, and PID tuning workshops",
        "DGCA Remote Pilot Certificate courses for undergraduate engineers",
        "Annual inter-college drone racing and precision flying hackathons"
      ],
      quote: {
        text: "Our students are gaining tremendous practical knowledge through India Drone Academy's specialized curriculum and experienced flight trainers.",
        author: "Dr. C. D. Naidu",
        designation: "Principal, VNR VJIET",
        initial: "C"
      }
    },
    {
      id: 'cmrec',
      name: 'CMR College of Engineering & Technology',
      shortName: 'CMR Hyderabad',
      type: 'Leading Engineering Institute',
      location: 'Hyderabad',
      fullAddress: 'Kandlakoya, Medchal Road, Hyderabad',
      establishedYear: '2002',
      categoryTag: 'AUTONOMOUS ENGINEERING INSTITUTION',
      logo: 'https://www.isocindiahyderabad.org/img/CMR.png',
      officialBadge: 'Official India Drone Academy COE',
      accreditationText: 'Autonomous | Affiliated to JNTUH | NAAC A+ Grade | NBA Accredited',
      accreditationSub: 'Center of Excellence for Drone Dynamics & Smart Agriculture',
      images: ['/didi-agri.jpg', '/drone-training-bg.jpg'],
      stats: [
        { label: 'STUDENTS TRAINED', number: '420+', subtext: 'Skilled in UAV electronics & aerial mapping' },
        { label: 'CAMPUS FLEET', number: '9 Drones', subtext: 'Agri-sprayers, survey copters & micro drones' },
        { label: 'FACULTY INSTRUCTORS', number: '6 Certified', subtext: 'Professors certified for simulator labs' },
        { label: 'LAB FACILITY', number: '3,000 sq.ft.', subtext: 'Indoor flying zone & simulation lab' },
        { label: 'PLACEMENT RATE', number: '94%', subtext: 'Placed in UAV manufacturing & service sectors' }
      ],
      aboutParagraphs: [
        "CMR College of Engineering & Technology (CMRCET) is a premier engineering institution known for modern pedagogy and industry-aligned innovation centers.",
        "The India Drone Academy COE at CMRCET provides comprehensive drone training spanning aerodynamics, avionics, payload operation, and DGCA exam prep."
      ],
      highlights: [
        "Dedicated agricultural drone spraying and mapping field demos",
        "End-to-end DGCA Remote Pilot License training modules",
        "Regular hackathons and student UAV startup incubation support"
      ],
      quote: {
        text: "The drone COE established with India Drone Academy provides our engineering students with a distinct edge in emerging technology careers.",
        author: "Dr. V. A. Narayana",
        designation: "Principal, CMRCET",
        initial: "V"
      }
    },
    {
      id: 'griet',
      name: 'Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)',
      shortName: 'GRIET Hyderabad',
      type: 'Premier Technical College',
      location: 'Hyderabad',
      fullAddress: 'Bachupally, Kukatpally, Hyderabad',
      establishedYear: '1997',
      categoryTag: 'PREMIER AUTONOMOUS ENGINEERING COLLEGE',
      logo: 'https://media.licdn.com/dms/image/v2/C510BAQGjvSB-HEAmUQ/company-logo_200_200/company-logo_200_200/0/1631322528024?e=1788998400&v=beta&t=qumSe9D8Be5ehXORJ-o7QBwtVkPvpa-c2gkrQJ0de1s',
      officialBadge: 'Official India Drone Academy COE',
      accreditationText: 'Autonomous | Affiliated to JNTUH | NAAC A++ Grade | NBA Accredited',
      accreditationSub: 'Center of Excellence for Aerial Robotics, AI & GIS Tech',
      images: ['/drone-training-bg.jpg', '/didi-agri.jpg'],
      stats: [
        { label: 'STUDENTS TRAINED', number: '480+', subtext: 'Certified in commercial UAV piloting & CAD' },
        { label: 'CAMPUS FLEET', number: '10 Drones', subtext: 'Multi-payload inspection & survey copters' },
        { label: 'CERTIFIED INSTRUCTORS', number: '6 Faculty', subtext: 'DGCA-trained flight mentors' },
        { label: 'COE INFRASTRUCTURE', number: '3,400 sq.ft.', subtext: 'Features simulation suites & workbench labs' },
        { label: 'PLACEMENT RATE', number: '95%', subtext: 'Placements in GIS, robotics & defense tech' }
      ],
      aboutParagraphs: [
        "GRIET is an established autonomous engineering college with a reputation for research, student innovations, and stellar placement statistics.",
        "India Drone Academy's collaboration with GRIET empowers students with hands-on drone flight experience, simulator practice, and industry certifications."
      ],
      highlights: [
        "Semester-long credit elective course on Drone Technologies",
        "High-performance flight simulator workstations on campus",
        "Collaborative projects in infrastructure surveying and disaster management"
      ],
      quote: {
        text: "Our partnership with India Drone Academy equips students with practical drone engineering skills that industry recruiters actively seek.",
        author: "Dr. J. Praveen",
        designation: "Principal, GRIET",
        initial: "J"
      }
    },
    {
      id: 'snist',
      name: 'Sreenidhi Institute of Science and Technology (SNIST)',
      shortName: 'SNIST Hyderabad',
      type: 'Autonomous Engineering College',
      location: 'Hyderabad',
      fullAddress: 'Yamnampet, Ghatkesar, Hyderabad',
      establishedYear: '1997',
      categoryTag: 'PREMIER AUTONOMOUS ENGINEERING COLLEGE',
      officialBadge: 'Official India Drone Academy COE',
      accreditationText: 'Autonomous | Affiliated to JNTUH | NAAC A+ Grade | NBA Accredited',
      accreditationSub: 'Center of Excellence for Drone Avionics & Smart Mobility',
      images: ['/didi-agri.jpg', '/drone-training-bg.jpg'],
      stats: [
        { label: 'STUDENTS CERTIFIED', number: '520+', subtext: 'Trained across diverse engineering branches' },
        { label: 'CAMPUS FLEET', number: '11 Drones', subtext: 'Includes custom survey & payload drones' },
        { label: 'CERTIFIED FACULTY', number: '7 Professors', subtext: 'DGCA compliant lab trainers' },
        { label: 'COE FACILITY', number: '3,600 sq.ft.', subtext: 'Includes dedicated flight cage & testing zone' },
        { label: 'PLACEMENT RATE', number: '96%', subtext: 'Placements in aerial data analytics and UAV firms' }
      ],
      aboutParagraphs: [
        "Sreenidhi Institute of Science and Technology (SNIST) is a premier engineering institution recognized for research focus and excellence in technical education.",
        "Through its COE partnership with India Drone Academy, SNIST trains engineering undergraduates in drone assembly, autonomous navigation, and GIS mapping."
      ],
      highlights: [
        "Industry-backed curriculum in UAV remote sensing and flight piloting",
        "Annual aerial robotics exhibition and hackathon on campus",
        "Dedicated lab for drone telemetry, battery management, and autopilot tuning"
      ],
      quote: {
        text: "The drone COE established in collaboration with India Drone Academy has created a dynamic platform for our students to master future-ready skills.",
        author: "Dr. T. Ch. Siva Reddy",
        designation: "Principal, SNIST",
        initial: "T"
      }
    }
  ];

  const collaborationModels = [
    {
      title: 'MoU-Based Training at Your Campus',
      description: 'We bring certified instructors and drone equipment to your campus.',
      features: [
        'On-campus delivery',
        'Drone equipment included',
        'Certified trainer support',
        'Flexible scheduling'
      ],
      icon: Building2,
      color: 'from-blue-500 to-blue-600'
    },

    {
      title: 'Joint Certificate Program with Revenue Share',
      description: 'Collaborative program where both institutions benefit from student enrollments.',
      features: [
        'Revenue sharing with joint certification',
        'Marketing & partnership support',
        'If Drone Lab is provided:',
        '■ Joint certification program',
        '■ Location branding (boards & banners)',
        '■ 1+ annual hosted event'
      ],
      icon: Handshake,
      color: 'from-green-500 to-green-600'
    },

    {
      title: 'Custom Bootcamps for Final-Year Students',
      description: 'Intensive training programs designed specifically for graduating students.',
      features: ['Career-focused training', 'Placement assistance', 'Industry connections', 'Fast-track certification'],
      icon: Rocket,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const {
      infrastructure,
      transport,
      studentBase,
      mbaSupport,
      promotion,
      techInterest,
      pastExposure
    } = formData.criteria;

    const payload = {
      ...formData,
      criteria: {
        avClassrooms: infrastructure,
        collegeBusFacility: transport,
        largeStudentBase: studentBase,
        mbaSupportForBranding: mbaSupport,
        studentSocialMediaPromo: promotion,
        innovationInterest: techInterest,
        priorDroneExposure: pastExposure
      }
    };

    const response = await fetch("https://wga2b0zo70.execute-api.ap-south-1.amazonaws.com/postcollaborate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (response.ok) {
      setIsSubmitted(true);
      setTimeout(() => {
        document.getElementById("collaboration-form")?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
      console.log("Submission successful:", result);
    } else {
      console.error("Submission failed:", result.error);
      alert("Failed to submit: " + result.error);
    }
  } catch (error) {
    console.error("Network error:", error);
    alert("Something went wrong. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};



  const handleRadioChange = (key: string, value: 'Yes' | 'No') => {
    setFormData(prev => ({
      ...prev,
      criteria: {
        ...prev.criteria,
        [key]: value
      }
    }));
  };

  const [visibleCount, setVisibleCount] = useState(12);


  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}


      {/* Hero Section */}
      <section className="pt-4 pb-16 lg:pt-6 lg:pb-20 relative overflow-hidden mt-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F15A24] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#26A65B] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Collaborate with India's{' '}
                <span className="text-[#F15A24]">Leading Drone Training Academy</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                India Drone Academy enables institutions to host government-certified drone training programs.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-[#26A65B]" />
                  <span>DGCA Approved</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-[#26A65B]" />
                  <span>50+ Top Institutions</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 mr-2 text-[#26A65B]" />
                  <span>NAAC/AICTE Recognition</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() =>
                  document.getElementById('collaboration-form')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-[#F15A24] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center"
              >
                Get Started With a Collaboration
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#F15A24] to-[#D64A1A] rounded-2xl p-8 shadow-2xl">
                <img
                  src="/didi-agri.jpg"
                  alt="Partnership collaboration showing flight demos, equipment, simulators, and industry presence"
                  className="w-full h-80 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
                <div className="text-2xl font-bold text-[#26A65B]">500+</div>
                <div className="text-sm text-gray-600">Active Partners</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="text-2xl font-bold text-[#F15A24]">15+</div>
                <div className="text-sm text-gray-600">Industries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-8 pb-0 lg:pt-10 lg:pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              What Your Institution Gains From This Collaboration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive benefits designed to enhance your institution's offerings and student outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-10 h-10 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-3`}>
                    <IconComponent className={`w-5 h-5 ${benefit.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>




      {/* Existing Collaborations */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Trusted by Top Engineering Colleges
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Click on any college card below to explore its Drone Tech Center of Excellence, lab setup, certified courses, and campus gallery.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {existingPartners.slice(0, visibleCount).map((partner) => {
              const isSelected = selectedPartner?.id === partner.id;
              return (
                <div
                  key={partner.id}
                  onClick={() => {
                    setSelectedPartner(partner);
                    setCurrentImageIndex(0);
                    setShowFullGallery(false);
                  }}
                  className={`group bg-white rounded-3xl p-6 shadow-sm border transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer relative flex flex-col justify-between overflow-hidden ${
                    isSelected
                      ? 'border-[#F15A24] ring-4 ring-[#F15A24]/15 shadow-2xl shadow-orange-500/10 scale-[1.01]'
                      : 'border-gray-200/80 hover:border-[#F15A24]/60 hover:shadow-xl hover:shadow-orange-500/5'
                  }`}
                >
                  {/* Subtle top accent gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F15A24]/0 to-transparent group-hover:via-[#F15A24] transition-all duration-500" />

                  {/* Explore Badge Top Right */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-50/90 text-[#F15A24] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-orange-200/80 group-hover:bg-[#F15A24] group-hover:text-white transition-all shadow-xs group-hover:shadow-md">
                      Explore <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <div>
                    {/* Logo Container */}
                    <div className="w-20 h-20 bg-gradient-to-b from-gray-50 to-white border border-gray-100 rounded-2xl mx-auto mb-4 flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:shadow-md transition-all">
                      {partner.logo ? (
                        <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain rounded-xl" />
                      ) : (
                        <Building className="w-9 h-9 text-[#F15A24]" />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-gray-900 text-base text-center leading-snug mb-1.5 group-hover:text-[#F15A24] transition-colors">
                      {partner.name}
                    </h3>

                    {/* Type / Tagline */}
                    <p className="text-xs text-gray-500 font-medium text-center mb-2">{partner.type}</p>

                    {/* Location */}
                    <div className="flex items-center justify-center text-xs text-gray-500 font-medium mb-4">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-[#F15A24]" />
                      {partner.location}
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="border-t border-gray-100 pt-3 text-center">
                    <span className="text-xs font-bold text-[#F15A24] inline-flex items-center gap-1.5 group-hover:underline">
                      View College Info & Drone Lab <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show More Button */}
          {visibleCount < existingPartners.length && (
            <div className="flex justify-center mt-4 mb-10">
              <button
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="px-7 py-3 border border-gray-300 text-gray-700 bg-white text-sm font-semibold rounded-full hover:border-[#F15A24] hover:text-[#F15A24] hover:shadow-md transition-all duration-200 shadow-xs flex items-center gap-2 cursor-pointer"
              >
                Show More Colleges <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Featured Partnerships */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Featured Partnerships
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-2xl bg-gradient-to-b from-green-50/50 to-transparent border border-green-100/50">
                <div className="w-14 h-14 bg-[#26A65B] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Star className="w-7 h-7 text-[#26A65B]" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-base">Narayanamma Institute</h4>
                <p className="text-gray-600 text-sm leading-relaxed">650+ female students trained in drone technology with 100% placement success</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gradient-to-b from-orange-50/50 to-transparent border border-orange-100/50">
                <div className="w-14 h-14 bg-[#F15A24] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-7 h-7 text-[#F15A24]" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-base">Mallareddy College</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Joint certification program with dedicated drone lab setup on campus</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gradient-to-b from-blue-50/50 to-transparent border border-blue-100/50">
                <div className="w-14 h-14 bg-blue-100/80 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-base">JNTUH</h4>
                <p className="text-gray-600 text-sm leading-relaxed">University-wide drone curriculum integration across multiple engineering branches</p>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="text-center mt-6">
            <p className="text-gray-600 italic text-sm font-medium">
              Expanding partnerships with top engineering colleges across South India
            </p>
          </div>
        </div>
      </section>

      {/* College COE Detail Modal */}
      {selectedPartner && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
          onClick={() => {
            setSelectedPartner(null);
            setShowFullGallery(false);
          }}
        >
          {showFullGallery ? (
            /* Full Campus & Drone Lab Photo Gallery View (Matching Screenshot 2) */
            <div
              className="relative bg-slate-950 text-white rounded-3xl sm:rounded-[28px] max-w-4xl sm:max-w-5xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-white/15 my-auto flex flex-col shadow-black/60 transition-all duration-300"
              onClick={e => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="bg-slate-900/90 backdrop-blur-md px-4 py-3 border-b border-white/10 flex items-center justify-between z-10 shrink-0">
                <button
                  onClick={() => setShowFullGallery(false)}
                  className="bg-white/10 hover:bg-[#F15A24] text-white text-xs font-semibold px-3.5 py-2 rounded-full backdrop-blur-md transition-all border border-white/20 flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back to College Details</span>
                </button>

                <div className="text-center min-w-0 px-2">
                  <h3 className="text-sm sm:text-base font-serif font-bold text-white truncate">
                    {selectedPartner.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-medium">
                    Full Campus & Drone Lab Photo Gallery • {selectedPartner.images.length} Images
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedPartner(null);
                    setShowFullGallery(false);
                  }}
                  className="bg-white/10 hover:bg-[#F15A24] text-white p-2 rounded-full backdrop-blur-md transition-all border border-white/20 cursor-pointer shadow-sm"
                  title="Close gallery"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Gallery Scrollable Content */}
              <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-6 bg-slate-950">
                {/* Main Large Image Display Card */}
                <div className="relative bg-slate-900/90 rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-2xl group flex flex-col justify-center items-center min-h-[320px] sm:min-h-[460px]">
                  <img
                    src={selectedPartner.images[currentImageIndex] || '/didi-agri.jpg'}
                    alt={`${selectedPartner.name} photo ${currentImageIndex + 1}`}
                    className="max-h-[380px] sm:max-h-[480px] w-full object-contain transition-all duration-300"
                  />

                  {/* Navigation Arrows */}
                  {selectedPartner.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setCurrentImageIndex(prev => (prev === 0 ? selectedPartner.images.length - 1 : prev - 1))
                        }
                        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#F15A24] text-white p-2.5 sm:p-3 rounded-full transition-all cursor-pointer backdrop-blur-md border border-white/20 shadow-lg hover:scale-110"
                      >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentImageIndex(prev => (prev === selectedPartner.images.length - 1 ? 0 : prev + 1))
                        }
                        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#F15A24] text-white p-2.5 sm:p-3 rounded-full transition-all cursor-pointer backdrop-blur-md border border-white/20 shadow-lg hover:scale-110"
                      >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                    </>
                  )}

                  {/* Image Info Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex items-end justify-between gap-4 pointer-events-none">
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base font-serif drop-shadow-sm">
                        {selectedPartner.shortName || selectedPartner.name}
                      </h4>
                      <p className="text-xs text-orange-400 font-mono font-medium">
                        Image {currentImageIndex + 1} of {selectedPartner.images.length}
                      </p>
                    </div>
                    <span className="bg-[#F15A24]/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full border border-[#F15A24]/40 backdrop-blur-md">
                      High Resolution
                    </span>
                  </div>
                </div>

                {/* Thumbnails Grid */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                    <Camera className="w-4 h-4 text-[#F15A24]" />
                    <span>All Campus & Lab Images ({selectedPartner.images.length})</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                    {selectedPartner.images.map((imgUrl, idx) => {
                      const isSelected = idx === currentImageIndex;
                      return (
                        <div
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`relative rounded-xl overflow-hidden cursor-pointer border-2 transition-all group aspect-[4/3] bg-slate-900 ${
                            isSelected
                              ? 'border-[#F15A24] ring-2 ring-[#F15A24]/50 scale-[1.02] shadow-xl'
                              : 'border-transparent opacity-60 hover:opacity-100 hover:scale-[1.01]'
                          }`}
                        >
                          <img
                            src={imgUrl}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {isSelected && (
                            <div className="absolute top-2 right-2 bg-[#F15A24] text-white rounded-full p-0.5 shadow-md z-10">
                              <CheckCircle className="w-4 h-4 text-white fill-[#F15A24]" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Rigid Outer Container for Detail View */
            <div
              className="relative bg-white rounded-3xl sm:rounded-[28px] max-w-3xl sm:max-w-4xl w-full max-h-[88vh] overflow-hidden shadow-2xl border border-white/20 text-gray-800 my-auto flex flex-col shadow-black/40 transition-all duration-300"
              onClick={e => e.stopPropagation()}
            >
              {/* Scrollable Inner Body */}
              <div className="overflow-y-auto flex-1 flex flex-col">
                {/* Hero / Gallery Header */}
                <div className="relative h-80 sm:h-96 w-full bg-slate-900 overflow-hidden shrink-0">
                  {/* Background Image Carousel */}
                  <img
                    src={selectedPartner.images[currentImageIndex] || '/didi-agri.jpg'}
                    alt={selectedPartner.name}
                    className="w-full h-full object-contain opacity-90 transition-all duration-500 cursor-pointer"
                    onClick={() => setShowFullGallery(true)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                  {/* Top Header Bar Badges & Controls */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    {/* Official Badge Pill */}
                    <div className="bg-white/95 text-slate-900 text-[11px] sm:text-xs font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/60 backdrop-blur-md">
                      <Shield className="w-3.5 h-3.5 text-[#F15A24]" />
                      <span>{selectedPartner.officialBadge || 'Official India Drone Academy COE'}</span>
                    </div>

                    {/* Right Controls: Photo Counter & Close Button */}
                    <div className="flex items-center gap-2">
                      <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-mono font-semibold px-3 py-1 rounded-full border border-white/20 shadow-xs">
                        {currentImageIndex + 1} / {selectedPartner.images.length}
                      </span>
                      <button
                        onClick={() => {
                          setSelectedPartner(null);
                          setShowFullGallery(false);
                        }}
                        className="bg-black/60 hover:bg-[#F15A24] text-white p-2 rounded-full backdrop-blur-md transition-all border border-white/20 cursor-pointer shadow-md hover:scale-105"
                        title="Close modal"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Carousel Prev/Next Arrows */}
                  {selectedPartner.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setCurrentImageIndex(prev => (prev === 0 ? selectedPartner.images.length - 1 : prev - 1))
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#F15A24] text-white p-2 sm:p-2.5 rounded-full transition-all cursor-pointer backdrop-blur-md border border-white/30 shadow-md hover:scale-110 z-10"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentImageIndex(prev => (prev === selectedPartner.images.length - 1 ? 0 : prev + 1))
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#F15A24] text-white p-2 sm:p-2.5 rounded-full transition-all cursor-pointer backdrop-blur-md border border-white/30 shadow-md hover:scale-110 z-10"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </>
                  )}

                  {/* Hero Bottom Overlay Details */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <div className="flex items-end gap-3">
                      {/* Logo Box */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white p-2 rounded-xl shadow-xl flex items-center justify-center shrink-0 border border-white/80">
                        {selectedPartner.logo ? (
                          <img src={selectedPartner.logo} alt="Logo" className="max-w-full max-h-full object-contain rounded-lg" />
                        ) : (
                          <Building className="w-7 h-7 text-[#F15A24]" />
                        )}
                      </div>

                      {/* Title & Tags */}
                      <div className="flex-1 text-white min-w-0">
                        <span className="bg-[#F15A24] text-white text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-md inline-block mb-1 shadow-xs">
                          {selectedPartner.categoryTag || "PREMIER AUTONOMOUS WOMEN'S ENGINEERING COLLEGE"}
                        </span>
                        <h2 className="text-base sm:text-xl lg:text-2xl font-serif font-bold leading-snug text-white drop-shadow-md truncate">
                          {selectedPartner.name}
                        </h2>
                        <div className="flex flex-wrap items-center gap-2.5 text-xs text-gray-200 font-medium">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#F15A24]" />
                            {selectedPartner.fullAddress || selectedPartner.location}
                          </span>
                          {selectedPartner.establishedYear && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-[#F15A24]" />
                              Est. {selectedPartner.establishedYear}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* View All Photos Button (Interactive) */}
                      <button
                        onClick={() => setShowFullGallery(true)}
                        className="shrink-0 bg-black/60 hover:bg-[#F15A24] backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/30 flex items-center gap-1.5 shadow-sm transition-all cursor-pointer hover:scale-105"
                        title="View all photos gallery"
                      >
                        <Camera className="w-3.5 h-3.5 text-orange-400" />
                        <span>Photos ({selectedPartner.images.length})</span>
                      </button>
                    </div>

                    {/* Dots Indicator */}
                    {selectedPartner.images.length > 1 && (
                      <div className="flex justify-center items-center gap-1.5 mt-2">
                        {selectedPartner.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImageIndex(i)}
                            className={`h-1.5 rounded-full transition-all cursor-pointer ${
                              i === currentImageIndex ? 'w-5 bg-[#F15A24] shadow-xs' : 'w-1.5 bg-white/60 hover:bg-white'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Premium Navy Accreditation Strip */}
                {selectedPartner.accreditationText && (
                  <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-amber-400 py-2.5 px-3.5 sm:px-5 text-xs font-semibold flex flex-wrap items-center justify-between gap-1.5 border-t border-b border-amber-400/25 shrink-0">
                    <div className="flex items-center gap-1.5 text-amber-300">
                      <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="tracking-wide text-xs">{selectedPartner.accreditationText}</span>
                    </div>
                    {selectedPartner.accreditationSub && (
                      <div className="text-gray-300 text-[11px] font-normal italic">
                        {selectedPartner.accreditationSub}
                      </div>
                    )}
                  </div>
                )}

                {/* Modal Content Body */}
                <div className="p-4 sm:p-5 space-y-5">
                  {/* Stats Grid */}
                  {selectedPartner.stats && selectedPartner.stats.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                      {selectedPartner.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-amber-50/50 via-orange-50/20 to-white rounded-xl p-3 border border-amber-200/70 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
                        >
                          <div>
                            <p className="text-[9px] sm:text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                              {stat.label}
                            </p>
                            <p className="text-base sm:text-lg lg:text-xl font-black text-[#F15A24] leading-tight mb-1">
                              {stat.number}
                            </p>
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-gray-600 leading-snug font-medium">{stat.subtext}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* About Section */}
                  {selectedPartner.aboutParagraphs && selectedPartner.aboutParagraphs.length > 0 && (
                    <div className="border-t border-gray-100 pt-4">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 flex items-center gap-2 font-serif">
                        <span className="p-1.5 bg-orange-100/80 rounded-lg text-[#F15A24]">
                          <Building2 className="w-4 h-4" />
                        </span>
                        About {selectedPartner.name}
                      </h3>
                      <div className="space-y-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                        {selectedPartner.aboutParagraphs.map((para, idx) => (
                          <p key={idx} className="bg-gray-50/60 rounded-xl p-3 border border-gray-100/80">{para}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* COE Highlights & Milestones */}
                  {selectedPartner.highlights && selectedPartner.highlights.length > 0 && (
                    <div className="bg-gradient-to-br from-orange-50/50 via-amber-50/30 to-white border border-orange-100 rounded-2xl p-4 sm:p-5 shadow-2xs">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="p-1 bg-[#F15A24] rounded-lg text-white">
                          <Zap className="w-3.5 h-3.5" />
                        </span>
                        Center of Excellence Highlights & Milestones
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedPartner.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="bg-white rounded-xl p-3 border border-emerald-100/80 shadow-2xs flex items-start gap-2.5 text-xs font-semibold text-slate-800"
                          >
                            <span className="w-4 h-4 text-white bg-emerald-500 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                              ✓
                            </span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Testimonial Quote Block */}
                  {selectedPartner.quote && (
                    <div className="bg-gradient-to-r from-amber-50 via-orange-50/50 to-amber-50/70 border-l-4 border-l-[#F15A24] border border-orange-200/80 rounded-xl p-4 shadow-2xs relative overflow-hidden">
                      <Quote className="w-12 h-12 text-[#F15A24]/10 absolute -top-1 right-3 pointer-events-none" />
                      <p className="italic text-slate-800 text-xs sm:text-sm leading-relaxed font-medium mb-3 relative z-10">
                        "{selectedPartner.quote.text}"
                      </p>
                      <div className="flex items-center gap-3 relative z-10">
                        <div className="w-9 h-9 bg-gradient-to-br from-[#F15A24] to-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-xs ring-2 ring-orange-200 shrink-0">
                          {selectedPartner.quote.initial || selectedPartner.quote.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                            {selectedPartner.quote.author}
                          </p>
                          <p className="text-[11px] text-gray-600 font-medium">{selectedPartner.quote.designation}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sticky Modal Footer Bar */}
              <div className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-gray-200/80 p-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl z-30 shrink-0">
                <p className="text-xs font-semibold text-slate-700 text-center sm:text-left">
                  Interested in establishing a similar Drone Center of Excellence at your campus?
                </p>
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setSelectedPartner(null);
                      setShowFullGallery(false);
                      document.getElementById('collaboration-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 sm:flex-none bg-gradient-to-r from-[#F15A24] to-[#D64A1A] hover:from-[#D64A1A] hover:to-[#B83B10] text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Request Campus Tour / MoU <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPartner(null);
                      setShowFullGallery(false);
                    }}
                    className="bg-gray-100 hover:bg-gray-200 text-slate-700 font-bold text-xs py-2.5 px-3.5 rounded-xl transition-all border border-gray-200 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}


      {/* Collaboration Models */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose a Model That Works for You
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible collaboration options designed to meet your institution's specific needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {collaborationModels.slice(0, 2).map((model, index) => {
              const IconComponent = model.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${model.color} p-3 text-white`}>
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-md flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-semibold mb-1">{model.title}</h3>
                    <p className="text-white text-opacity-90 text-sm">{model.description}</p>
                  </div>

                  {/* Features & Button Section */}
                  <div className="flex flex-col justify-between h-full p-4">
                    <ul className="space-y-2 mb-4">
                      {model.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-3 h-3 text-[#26A65B] mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button at Bottom */}
                    <button
                      onClick={() =>
                        document.getElementById('collaboration-form')?.scrollIntoView({ behavior: 'smooth' })
                      }
                      className="w-full mt-auto bg-[#F15A24] text-white font-semibold text-sm py-2.5 px-4 rounded-lg hover:bg-[#D64A1A] transition-all duration-200"
                    >
                      Request This Model
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* Special Pricing Banner */}
      <section className="py-6 lg:py-10 bg-gradient-to-br from-orange-600 to-orange-400 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Special Institutional Pricing
          </h2>
          <p className="text-base sm:text-lg text-orange-100 mb-4 max-w-3xl mx-auto">
            We offer <strong>up to 40% discount</strong> for institutions onboarding batches of 20+ students.
          </p>
          <p className="text-sm sm:text-base text-orange-100 mb-6">
            Custom pricing available for government colleges, autonomous institutions, and women's colleges.
          </p>

          <button
            onClick={() => document.getElementById('collaboration-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#F15A24] font-semibold text-sm sm:text-base px-6 py-3 rounded-md hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center"
          >
            <Download className="w-4 h-4 mr-2" />
            Request Pricing Sheet
          </button>
        </div>
      </section>


      {/* Contact Form */}
      <section id="collaboration-form" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            {!isSubmitted ? (

              <>
                
                {/* Title Section */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Let's Build a Collaboration
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Fill this form and our team will reach out you soon to discuss partnership opportunities.
                  </p>
                </div>

                {/* Form Starts */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Institution + Contact Person */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700 mb-2">
                        Institution Name *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="institutionName"
                          name="institutionName"
                          value={formData.institutionName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                          placeholder="Your institution name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Person Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="contactPerson"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Designation + City */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-2">
                        Designation *
                      </label>
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="Principal, Dean, Director, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        City/Location *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                          placeholder="City, State"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                          placeholder="your.email@institution.edu"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Collaboration Type + Student Count */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="collaborationType" className="block text-sm font-medium text-gray-700 mb-2">
                        Collaboration Type *
                      </label>
                      <select
                        id="collaborationType"
                        name="collaborationType"
                        value={formData.collaborationType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select collaboration type</option>
                        <option value="mou-campus">MoU-Based Training at Campus</option>
                        <option value="joint-certificate">Joint Certificate Program</option>
                        <option value="custom-bootcamp">Custom Bootcamps</option>
                        <option value="other">Other (specify in message)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="studentCount" className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Student Count
                      </label>
                      <input
                        type="text"
                        id="studentCount"
                        name="studentCount"
                        value={formData.studentCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="e.g., 50-100 students per batch"
                      />
                    </div>
                  </div>

                  {/* Selection Criteria */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-6">
                      College Selection Criteria <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-6">
                      {criteriaList.map((criterion, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                          <p className="font-medium text-gray-800 mb-2">{criterion.label}</p>
                          <div className="flex space-x-6">
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                name={`criteria_${index}`}
                                value="Yes"
                                checked={formData.criteria[criterion.key] === 'Yes'}
                                onChange={() => handleRadioChange(criterion.key, 'Yes')}
                                className="text-[#26A65B]"
                              />
                              <span>Yes</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                name={`criteria_${index}`}
                                value="No"
                                checked={formData.criteria[criterion.key] === 'No'}
                                onChange={() => handleRadioChange(criterion.key, 'No')}
                                className="text-red-500"
                              />
                              <span>No</span>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message / Proposal / Additional Details
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="Tell us about your institution, specific requirements, or any questions..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F15A24] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              // ✅ Thank-you message shown ONLY after form is submitted
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#26A65B] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#26A65B]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank you for your interest!</h3>
                <p className="text-gray-600 mb-6">
                  Our team will connect with you shortly to discuss collaboration opportunities and next steps.
                </p>
                <div className="bg-[#26A65B] bg-opacity-10 rounded-lg p-4">
                  <p className="text-[#26A65B] font-medium">
                    📧 You'll receive a confirmation email within 24 hours with detailed information about our partnership programs.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-6 -mt-4 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Our business development team is here to help you explore partnership opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919188883344"
              className="bg-[#F15A24] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-lg hover:bg-[#D64A1A] hover:shadow-md transition-all duration-200 flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call +91 9188883344
            </a>

            <a
              href="https://wa.me/919188883344?text=Hi, I'm interested in institutional collaboration with IDA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-lg hover:bg-[#20B954] transition-all duration-200 flex items-center justify-center"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CollaborationPage;