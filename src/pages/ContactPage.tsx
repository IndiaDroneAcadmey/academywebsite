import React, { useState, useRef } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Clock,
  Users,
  Award,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  CheckCircle,
  User,
  MessageCircle,
  Calendar,
  ArrowRight,
  ExternalLink,
  Navigation,
  Building,
  Globe,
  Headphones,
  Star,
  Shield,
  Zap,
  Linkedin,
} from 'lucide-react';


const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseOfInterest: [] as string[],

    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      fullName: formData.name,
      phone: formData.phone,
      email: formData.email,
      courseInterest: formData.courseOfInterest.length > 0
        ? formData.courseOfInterest.join(', ')
        : "Not Sure - Need Guidance",
      message: formData.message
    };

    try {
      const response = await fetch("https://npip9wce0m.execute-api.ap-south-1.amazonaws.com/PostContactform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (response.ok) {
        console.log("API Success:", result);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', courseOfInterest: [], message: '' });

        // Scroll to the success message
        setTimeout(() => {
          successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      } else {
        console.error("API Error:", result);
        alert("Something went wrong: " + (result.error || "Please try again."));
      }
    } catch (error) {
      console.error("Request Failed:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };



  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+91 9188883344',
      secondary: 'Mon-Sat, 9 AM - 6 PM',
      action: 'tel:+919188883344',
      actionText: 'Call Now',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },

    {
      icon: MessageSquare,
      title: 'WhatsApp',
      primary: 'Instant Support',
      secondary: 'Get quick answers to your questions',
      action: 'https://wa.me/919188883344?text=Hi, I need information about drone courses',
      actionText: 'Chat Now',
      color: 'text-[#25D366]',
      bgColor: 'bg-green-50'
    }
  ];

  const officeLocations = [
    {
      city: 'Hyderabad (Main Campus)',
      address: 'White Waters, 5A/6B, Lane beside KIMS Hospital, Timber Lake Colony, Shaikpet, Hyderabad, Telangana 500008',
      phone: '+91 9188883344',


      mapLink: 'https://maps.google.com/?q=White+Waters+Shaikpet+Hyderabad',
      isMain: true
    },
    {
      city: 'Vijayawada',
      address: 'Vijayawada, Andhra Pradesh',
      phone: '+91 9188883344',
      mapLink: 'https://maps.google.com/?q=Vijayawada+Andhra+Pradesh',
      isMain: false
    }
  ];
  const socialLinks = [
    {
      name: 'YouTube',
      handle: '@indiadroneacademy',
      followers: '427',
      url: 'https://www.youtube.com/@indiadroneacademy',
      icon: Youtube,
      bgColor: 'bg-red-600',
      color: 'text-white',
    },
    {
      name: 'Facebook',
      handle: 'indiadroneacademy',
      followers: '163',
      url: 'https://www.facebook.com/indiadroneacademy',
      icon: Facebook,
      bgColor: 'bg-blue-600',
      color: 'text-white',
    },
    {
      name: 'Twitter (X)',
      handle: '@inddroneacademy',
      followers: '16',
      url: 'https://x.com/inddroneacademy',
      icon: Twitter,
      bgColor: 'bg-black',
      color: 'text-white',
    },
    {
      name: 'Instagram',
      handle: '@indiadroneacademy',
      followers: '2159',
      url: 'https://www.instagram.com/indiadroneacademy/',
      icon: Instagram,
      bgColor: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600',
      color: 'text-white',
    },
    {
      name: 'LinkedIn',
      handle: 'India Drone Academy',
      followers: '633',
      url: 'https://www.linkedin.com/company/india-drone-academy/',
      icon: Linkedin,
      bgColor: 'bg-blue-700',
      color: 'text-white',
    },
  ];



  const courseOptions = [
    'DGCA Drone Pilot Training',
    'Simulator Training Program',
    'Drone Mapping & Agriculture Course',
    'Women Drone Program',
    '1-Day Special Courses',
    'Corporate Training',
    'Not Sure - Need Guidance'
  ];
  const handleCheckboxChange = (course: string) => {
    setFormData(prev => {
      const isSelected = prev.courseOfInterest.includes(course);
      const updated = isSelected
        ? prev.courseOfInterest.filter(c => c !== course)
        : [...prev.courseOfInterest, course];
      return { ...prev, courseOfInterest: updated };
    });
  };

  return (
    <div className={`${isSubmitted ? 'py-8' : 'min-h-screen'} bg-white`}>
      {!isSubmitted ? (
        <>

          {/* Header Spacer */}


          {/* Hero Section */}
          <section className="pt-4 pb-16 lg:pt-6 lg:pb-20 relative overflow-hidden mt-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-10 w-28 h-28 bg-[#F15A24] rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-36 h-36 bg-[#26A65B] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-snug">
                  Connect with India's{' '}
                  <span className="text-[#F15A24]">Premier Drone Academy</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
                  We're here to answer your questions, guide you through the application process,
                  and help you start your drone career journey.
                </p>

              </div>
            </div>
          </section>


          {/* Contact Methods Grid */}
          <section className="pt-0 pb-6 bg-white -mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Multiple Ways to Reach Us
                </h2>
                <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
                  Choose the method that works best for you. We're available across all channels.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-fit mx-auto">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <div
                        key={index}
                        className="w-[340px] bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition duration-200 transform hover:-translate-y-1 border"
                      >
                        <div className={`w-10 h-10 ${method.bgColor} rounded-xl flex items-center justify-center mb-3`}>
                          <IconComponent className={`w-5 h-5 ${method.color}`} />
                        </div>

                        <h3 className="text-base font-bold text-gray-900 mb-1">
                          {method.title}
                        </h3>

                        <p className="text-sm font-medium text-gray-900">
                          {method.primary}
                        </p>
                        <p className="text-xs text-gray-600 mb-3">
                          {method.secondary}
                        </p>

                        <a
                          href={method.action}
                          target={method.action.startsWith('http') ? '_blank' : undefined}
                          rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="w-full bg-[#F15A24] text-white text-xs font-semibold py-2 px-4 rounded-lg hover:bg-[#D64A1A] transition duration-200 flex items-center justify-center"
                        >
                          {method.actionText}
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>
          </section>



          {/* Office Locations */}
          <section className="py-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Visit Our Training Centers
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
                  Experience our world-class facilities and meet our expert instructors in person.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {officeLocations.map((location, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl p-6 shadow-md ${location.isMain ? 'ring-2 ring-[#F15A24] ring-opacity-50' : ''}`}
                  >
                    {location.isMain && (
                      <div className="inline-flex items-center bg-[#F15A24] text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                        <Star className="w-3.5 h-3.5 mr-2" />
                        Main Campus
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {location.city}
                    </h3>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-[#F15A24] mr-2 mt-0.5" />
                        <p className="text-gray-700">{location.address}</p>
                      </div>

                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-[#F15A24] mr-2" />
                        <a href={`tel:${location.phone}`} className="text-gray-700 hover:text-[#F15A24]">
                          {location.phone}
                        </a>
                      </div>


                    </div>

                    <div className="flex gap-2 mt-4">
                      <a
                        href="https://maps.app.goo.gl/dM67EeLA4LxQXND86"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#F15A24] text-white text-sm font-bold py-2 px-3 rounded-md hover:bg-[#D64A1A] transition"
                      >
                        <Navigation className="w-4 h-4 mr-1 inline" />
                        Get Directions
                      </a>
                      <a
                        href={`tel:${location.phone}`}
                        className="flex-1 bg-gray-100 text-gray-700 text-sm font-bold py-2 px-3 rounded-md hover:bg-gray-200 transition"
                      >
                        <Phone className="w-4 h-4 mr-1 inline" />
                        Call
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Embedded Map */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Find Our Hyderabad Campus
                </h3>
                <div className="relative h-72 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.893470680235!2d78.38136607377082!3d17.416899301957038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb956e0635a7fb%3A0x730c0d9fd9fa88d1!2sIndia%20Drone%20Academy!5e0!3m2!1sen!2sin!4v1750334582121!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="India Drone Academy Hyderabad Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>


          {/* Contact Form */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Have a specific question? Fill out the form below and we'll get back to you soon.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                            placeholder="Your full name"
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
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="courseOfInterest" className="block text-sm font-medium text-gray-700 mb-2">
                        Course of Interest
                      </label>
                      <div className="relative">

                        <div className="space-y-3">
                          {courseOptions.map((course) => (
                            <label key={course} className="flex items-center space-x-3">
                              <input
                                type="checkbox"
                                value={course}
                                checked={formData.courseOfInterest.includes(course)}
                                onChange={() => handleCheckboxChange(course)}
                                className="text-[#F15A24] focus:ring-[#F15A24]"
                              />
                              <span className="text-gray-700">{course}</span>
                            </label>
                          ))}
                        </div>

                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all duration-200"
                        placeholder="Tell us about your questions, goals, or how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#F15A24] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div ref={successRef} className="text-center py-8">
                    <div className="w-16 h-16 bg-[#26A65B] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-[#26A65B]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. Our team will get back to you soon.
                    </p>
                    <div className="bg-[#26A65B] bg-opacity-10 rounded-lg p-4">
                      <p className="text-[#26A65B] font-medium">
                        📱 For urgent queries, you can also WhatsApp us at +91 9188883344
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Social Media */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Follow Our Drone Journey
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Stay updated with the latest news, student achievements, and drone industry insights.
                </p>
              </div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
  {socialLinks.map((social, index) => {
    const IconComponent = social.icon;
    return (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center group"
      >
        <div className={`w-12 h-12 ${social.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300`}>
          <IconComponent className={`w-6 h-6 ${social.color}`} />
        </div>

        <h3 className="text-base font-bold text-gray-900 mb-1">
          {social.name}
        </h3>

        <p className="text-gray-600 text-sm mb-1">{social.handle}</p>

        <p className="text-xs text-gray-500 mb-2">{social.followers} followers</p>

        <div className="flex items-center justify-center text-[#F15A24] text-sm font-medium group-hover:text-[#D64A1A]">
          Follow Us
          <ExternalLink className="w-4 h-4 ml-1" />
        </div>
      </a>
    );
  })}
</div>


            </div>
          </section>

          {/* Final CTA */}
          <section className="py-6 lg:py-10 bg-gradient-to-br from-orange-600 to-orange-400 text-white relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Need an Urgent Response?
              </h2>
              <p className="text-base sm:text-lg text-orange-100 mb-6 max-w-xl mx-auto">
                For quick help, call or WhatsApp us. We're ready to assist your drone journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+91 9188883344"
                  className="bg-white text-[#F15A24] font-bold px-6 py-3 rounded-md hover:bg-gray-100 hover:shadow-md transition"
                >
                  <Phone className="w-4 h-4 mr-2 inline" />
                  Call Now
                </a>

                <a
                  href="https://wa.me/919188883344?text=Hi, I need information about drone courses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-md hover:bg-[#20B954] transition"
                >
                  <MessageSquare className="w-4 h-4 mr-2 inline" />
                  WhatsApp
                </a>

                <a
                  href="/apply"
                  className="border-2 border-white text-white font-bold px-6 py-3 rounded-md hover:bg-white hover:text-[#F15A24] transition"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-1 inline" />
                </a>
              </div>
            </div>
          </section>


        </>
      ) : (
        <div className="flex items-center justify-center py-16 bg-white px-4">
          <div
            ref={successRef}
            className="max-w-xl w-full p-8 bg-green-50 rounded-xl text-center border border-green-200 shadow"
          >
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-[#26A65B]" />
            </div>
            <h3 className="text-2xl font-bold text-[#26A65B] mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-700 mb-4">
              Thank you for reaching out. Our team will get back to you soon.
            </p>
            <p className="text-sm text-green-600 font-medium">
              📱 For urgent queries, WhatsApp us at{' '}
              <a
                href="https://wa.me/919188883344"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                +91 9188883344
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
