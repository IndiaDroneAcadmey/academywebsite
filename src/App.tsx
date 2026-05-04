import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import WhyIDAPage from './pages/WhyIDAPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import ApplyNowPage from './pages/ApplyNowPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import SitemapPage from './pages/SitemapPage';
import CollaborationPage from './pages/CollaborationPage';
import PartnershipsPage from './pages/PartnershipsPage';
import CurriculumPage from './pages/CurriculumPage';
import GalleryPage from './pages/GalleryPage';
import VideoPage from './pages/VideoPage';
import InternshipPage from './pages/InternshipPage';
import WorkshopRegistrationPage from './pages/WorkshopRegistrationPage';
import Batches100Page from './pages/Batches100Page';
//added
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          <Route path="/why-ida" element={<WhyIDAPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/apply" element={<ApplyNowPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/collaborate" element={<CollaborationPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/applyintern" element={<InternshipPage />} />
          <Route path="/applyworkshop" element={<WorkshopRegistrationPage />} />
          <Route path="/offers" element={<Batches100Page />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
