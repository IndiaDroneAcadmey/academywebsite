import React, { useState } from 'react';
import {
  Award,
  CheckCircle,
  Phone,
  Mail,
  User,
  MapPin,
  Calendar,
  MessageSquare,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Star,
  Download,
  AlertCircle,
  Loader,
  X,
  ChevronDown,
  ChevronUp,
  HelpCircle
} from 'lucide-react';
interface FormData {
  fullName: string;
  phone: string;
  email: string;
  course: string;
  location: string;
  batchDate: string;
  message: string;
  Class: string;
  preferredCourses: string[];
  city: string;
  state: string;
  pinCode: string;
  isEmployed: string;
  careerPurpose: string;
  heardFrom: string;
  groupDetails: string;
  discountCode: string;
}

const ApplyNowPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '', phone: '', email: '', course: '', location: '', batchDate: '', message: '',
    Class: '', preferredCourses: [], city: '', state: '', pinCode: '',
    isEmployed: '', careerPurpose: '', heardFrom: '', groupDetails: '', discountCode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

const courses = [
  { value: 'dgca-small', label: 'DGCA Small Class (5 Days)' },
  { value: 'dgca-medium', label: 'DGCA Medium Class (5 Days)' },
  { value: 'medium-upgrade', label: 'Medium Upgrade (3 Days)' },
  { value: 'dgca-combined', label: 'Small + Medium Combined (8 Days)' },
  { value: 'agriculture-spraying', label: 'Agriculture Spraying (3 Days)' },
  { value: 'site-mapping', label: 'Site Asset Mapping (3 Days)' },
  { value: 'mining-analysis', label: 'Mining Excavation Analysis (3 Days)' },
  { value: 'aerial-cinematography', label: 'Aerial Cinematography (3 Days)' },
  { value: 'data-processing', label: 'Data Processing (3 Days)' },
  { value: 'drone-assembly-basic', label: 'Drone Assembly Basic (3 Days)' },
  { value: 'drone-assembly-advanced', label: 'Drone Assembly Advanced (5 Days)' },
  { value: 'fpv-basic', label: 'FPV Training Basic (3 Days)' },
  { value: 'fpv-advanced', label: 'FPV Training Advanced (5 Days)' },
  { value: 'women-bootcamp', label: 'Women Drone Pilot Bootcamp (5 Days)' },
  { value: 'drone-didi-agri', label: 'Drone-Didi Agri Program (3 Days)' },
  { value: 'dgca-cinematography-bundle', label: 'DGCA Small + Cinematography (8 Days)' },
  { value: 'dgca-mapping-bundle', label: 'DGCA Medium + 3D Mapping (8 Days)' },
  { value: 'ultimate-pro', label: 'Ultimate Pro Bundle (10 Days)' },
  { value: 'thermal-lidar', label: 'Thermal Inspection & LiDAR (3 Days)' },
  { value: 'bvlos', label: 'BVLOS Training (2 Days)' },
  { value: 'safety-incident', label: 'Drone Safety & Incident Response (2 Days)' },
  { value: 'simulator-refresher', label: 'Simulator Refresher (50 hrs)' },
  { value: 'online-theory', label: 'Online Theory Crash Course' },
  { value: 'corporate', label: 'Corporate Training (Flexible)' }
];

  const allCourses = courses.map(c => c.label);

  const locations = [
    'Hyderabad, Telangana',
    'Vijayawada, Andhra Pradesh',
    'Gurugram, Haryana',
    'Harsola, Madhya Pradesh',
    'Meerut, Uttar Pradesh',
    'Nagpur, Maharashtra',
    'Belgaum, Karnataka'
  ];

  const batchDates = [
    'January 15-20, 2025 (Hyderabad) - DGCA Small',
    'January 22-27, 2025 (Hyderabad) - DGCA Medium',
    'January 25-27, 2025 (Pune) - Agriculture',
    'February 2-7, 2025 (Bangalore) - DGCA Small',
    'February 10-12, 2025 (Hyderabad) - Medium Upgrade',
    'February 15-23, 2025 (Hyderabad) - Combined Package',
    'March 1-6, 2025 (Mumbai) - DGCA Small',
    'March 8-13, 2025 (Bangalore) - DGCA Medium'
  ];

  const faqs = [
    {
      question: 'Who can apply for drone pilot training?',
      answer: 'Anyone above 18 years with basic English understanding and 10th standard education can apply. No prior aviation experience is required.'
    },
    {
      question: 'What happens after I submit this application?',
      answer: 'Our counselor will contact you soon to discuss your course selection, answer questions, and guide you through the enrollment process.'
    },
    {
      question: 'Can I pay the course fee in installments?',
      answer: 'Yes, we offer flexible payment options including EMI plans. Our counselor will discuss payment options that suit your budget.'
    },
    {
      question: 'Do I need prior drone flying experience?',
      answer: 'No prior experience needed! Our courses are designed for complete beginners. We start from basics and build up to advanced operations.'
    },
    {
      question: 'Is accommodation provided during training?',
      answer: 'We can help arrange accommodation near our training centers. Our team will provide recommendations for hotels and hostels in the area.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  const handleCheckboxChange = (courseLabel: string) => {
    setFormData(prev => {
      const isChecked = prev.preferredCourses.includes(courseLabel);
      const updatedCourses = isChecked
        ? prev.preferredCourses.filter(c => c !== courseLabel)
        : [...prev.preferredCourses, courseLabel];
      return { ...prev, preferredCourses: updatedCourses };
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};


    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.email.trim()) newErrors.email = "Email address is required.";

    if (!formData.location.trim()) newErrors.location = "Location is required.";

    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.state.trim()) newErrors.state = "State is required.";
    if (!formData.pinCode.trim()) newErrors.pinCode = "PIN Code is required.";
    if (!formData.isEmployed.trim()) newErrors.isEmployed = "Please select employment status.";
    if (!formData.careerPurpose.trim()) newErrors.careerPurpose = "Please select a career purpose.";
    if (!formData.heardFrom.trim()) newErrors.heardFrom = "Please tell us how you heard about us.";

    console.log("🛑 Validation Errors:", newErrors);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default page reload

    console.log("✅ Apply Now clicked");

    const isValid = validateForm(); // Optional: if you have validation
    if (!isValid) {
      console.log("❌ Validation failed");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://ipivcp0xd5.execute-api.ap-south-1.amazonaws.com/PostApplyform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      console.log("📡 Status Code:", response.status);

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`❌ API Error: ${text}`);
      }

      const result = await response.json();
      console.log("✅ Success:", result);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("❌ Submission error:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };





  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

 if (isSubmitted) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <div className="flex flex-col items-center justify-center bg-white px-2 pt-0 mt-[-20px] min-h-screen">

      <div className="text-center max-w-2xl">
        <div className="w-20 h-20 bg-[#26A65B] rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Application Received Successfully!
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Thank you for applying to <strong>India Drone Academy</strong>. Our counselor will contact you soon to discuss your course selection and next steps.
        </p>

        <div className="bg-gray-100 rounded-xl p-6 text-left text-base mb-6 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-2">What happens next?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Your details are securely submitted to our counselor team.</li>
            <li>You will receive a WhatsApp message and/or a call shortly.</li>
            <li>Our team will explain your chosen course(s), batch dates, and payment options.</li>
            
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="bg-[#26A65B] text-white px-6 py-3 rounded-md font-semibold text-base hover:bg-[#1e8c4c] transition"
          >
            Back to Home
          </a>
          <a
            href="/courses"
            className="bg-[#F15A24] text-white px-6 py-3 rounded-md font-semibold text-base hover:bg-[#d94e1a] transition"
          >
            View All Courses
          </a>
        </div>
      </div>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}


      {/* Header Section */}
      <section className="pt-4 pb-16 lg:pt-6 lg:pb-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F15A24] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#26A65B] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          {/* DGCA Badge */}
          <div className="inline-flex items-center bg-[#26A65B] bg-opacity-10 text-[#26A65B] px-6 py-3 rounded-full font-bold mb-8">
            <Award className="w-5 h-5 mr-2" />
            DGCA Approved Training Partner
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Apply Now & Start Your{' '}
            <span className="text-[#F15A24]">Drone Journey</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose from 24+ specialized courses. Fill the form to book your seat. Limited seats per batch - secure your spot today!
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-[#26A65B]" />
              <span>Secure Application</span>
            </div>
           
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-[#26A65B]" />
              <span>Expert Counseling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Fill Out Your Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200 ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                            }`}
                          placeholder="Enter your full name"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.fullName}
                        </p>
                      )}
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
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                            }`}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

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
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>

                  </div>
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Drone Pilot Training Course(s) Interested In *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {allCourses.map((course, index) => (
                        <label
                          key={index}
                          className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${formData.preferredCourses.includes(course)
                              ? 'bg-[#F15A24]/10 border-[#F15A24]'
                              : 'bg-white border-gray-300 hover:shadow-sm hover:border-[#F15A24]/50'
                            }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.preferredCourses.includes(course)}
                            onChange={() => handleCheckboxChange(course)}
                            className="mt-1 accent-[#F15A24] w-5 h-5"
                          />
                          <span className="text-sm text-gray-800 leading-snug">{course}</span>
                        </label>
                      ))}
                    </div>
                    {errors.preferredCourses && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.preferredCourses}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded"
                        placeholder="State"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City Pin Code *</label>
                      <input
                        type="text"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded"
                        placeholder="PIN Code"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">



                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Are you currently employed? *</label>
                    <div className="flex gap-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="isEmployed"
                          value="Yes"
                          checked={formData.isEmployed === 'Yes'}
                          onChange={handleInputChange}
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="isEmployed"
                          value="No"
                          checked={formData.isEmployed === 'No'}
                          onChange={handleInputChange}
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Are you looking DGCA Pilot Certificate for? *
                    </label>
                    <select
                      name="careerPurpose"
                      value={formData.careerPurpose}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded"
                    >
                      <option value="">-- Select an option --</option>
                      <option value="Employment">Employment</option>
                      <option value="Own Business">Own Business</option>
                      <option value="Career Change">Want to Change Career / Learn New Tech</option>
                      <option value="Aerial Photography">Aerial Photography and Videography</option>
                      <option value="Agri Spraying">Agriculture Spraying</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How do you know about us? *
                    </label>
                    <select
                      name="heardFrom"
                      value={formData.heardFrom}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded"
                    >
                      <option value="">-- Select an option --</option>
                      <option value="Google">Google Search</option>
                      <option value="YouTube">YouTube</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      For Group Discount, Please Enter Number of Members, Names who want to join
                    </label>
                    <textarea
                      name="groupDetails"
                      value={formData.groupDetails}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded"
                      placeholder="e.g., 3 Members - Rahul, Priya, Arjun"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      If you have Discount Code, Please Enter
                    </label>
                    <input
                      type="text"
                      name="discountCode"
                      value={formData.discountCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded"
                      placeholder="e.g., DRONE20"
                    />
                  </div>




                  {/* Location and Batch */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Training Location *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200 appearance-none ${errors.location ? 'border-red-500' : 'border-gray-300'
                            }`}
                        >
                          <option value="">Select location</option>
                          {locations.map((location) => (
                            <option key={location} value={location}>
                              {location}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                      {errors.location && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.location}
                        </p>
                      )}
                    </div>


                  </div>

                  {/* Optional Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="Tell us about your goals, experience, or any specific questions..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F15A24] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Apply Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>

                  {/* Privacy Note */}
                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy. We respect your data and will only use it to contact you about your application.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* WhatsApp Quick Help */}
              <div className="bg-[#25D366] bg-opacity-10 rounded-2xl p-8 border border-[#25D366] border-opacity-20">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Need Help Choosing the Right Course?
                </h3>
                <p className="text-gray-600 mb-6">
                  Talk to our advisors instantly on WhatsApp. Get personalized course recommendations and answers to all your questions.
                </p>
                <a
                  href="https://wa.me/919188883344?text=Hi, I need help choosing the right drone course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#20B954] transition-all duration-200 flex items-center justify-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Chat Now on WhatsApp
                </a>
              </div>

              {/* Trust Reminders */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Why Choose IDA?
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Award, text: 'DGCA Certified RPTO' },
                    { icon: Users, text: '2500+ Students Trained' },
                    { icon: CheckCircle, text: 'Placement Guidance & Startup Support' },
                    { icon: Star, text: '100% Success Rate' }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-center">
                        <div className="w-8 h-8 bg-[#26A65B] bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                          <IconComponent className="w-4 h-4 text-[#26A65B]" />
                        </div>
                        <span className="text-gray-700 font-medium">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Download Brochure */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Want to Learn More?
                </h3>
                <p className="text-gray-600 mb-6">
                  Download our comprehensive course brochure with detailed curriculum, fees, and batch schedules.
                </p>
                <button className="w-full bg-gray-100 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Before You Apply...
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our application process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <HelpCircle className="w-5 h-5 text-[#F15A24] mr-3" />
                    <span className="font-medium text-gray-900">{faq.question}</span>
                  </div>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed pl-8">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyNowPage;
