import React from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UpcomingBatchesBanner: React.FC = () => {
  const navigate = useNavigate();
  const upcomingBatches = [
    {
      course: 'DGCA Small Class',
      startDate: 'Every Monday',
      location: 'Hyderabad',
    },
    {
      course: 'DGCA Medium Class',
      startDate: 'Every Monday',
      location: 'Hyderabad',
    },
    {
      course: 'DGCA Small + Medium Combined',
      startDate: 'Every Monday',
      location: 'Hyderabad',
    },
    {
      course: 'Agriculture Spraying',
      startDate: 'Every Wednesday',
      location: 'Hyderabad',
    },
    {
      course: 'Aerial Cinematography',
      startDate: 'Every Monday',
      location: 'Hyderabad',
    },
    {
      course: 'Women Drone Pilot Bootcamp',
      startDate: 'Every Wednesday',
      location: 'Hyderabad',
    },
    {
      course: 'Site Asset Mapping',
      startDate: 'Every Monday',
      location: 'Hyderabad',
    },
    {
      course: 'Drone Assembly & Repair',
      startDate: 'Every Wednesday',
      location: 'Hyderabad',
    },
    {
      course: 'FPV Drone Training',
      startDate: 'Every Monday',
      location: 'Hyderabad',
    },
    {
      course: 'Simulator Refresher',
      startDate: 'Every Wednesday',
      location: 'Hyderabad',
    },
    {
      course: 'Corporate Training',
      startDate: 'Thrusday',
      location: 'Pan India',
    },
    {
      course: 'Ultimate Pro Bundle',
      startDate: 'Friday',
      location: 'Hyderabad',
    },
  ];

  const handleApplyClick = () => {
    navigate('/apply');
  };

  const BatchesScroll = () => {
    return (
      <div className="overflow-hidden relative">
        <div
          className="flex animate-scroll space-x-6"
          style={{ animation: 'scroll 20s linear infinite' }}
        >
          {upcomingBatches.map((batch, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm w-[20rem]" // Increased width for larger cards
            >
              <h3 className="font-semibold text-gray-900 mb-3 text-sm truncate">{batch.course}</h3>
              <div className="space-y-1 text-xs text-gray-600 mb-3">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {batch.startDate}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {batch.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="batches" className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 lg:p-10 mb-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              New Batch Starts Every Monday – Few Seats Left!
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Reserve your seat before it's gone. Limited seats per batch for personalized attention.
            </p>
          </div>

          {/* Batches Scroll */}
          <BatchesScroll />

          {/* CTA Button */}
          <div className="text-center mt-6">
            <button
              onClick={handleApplyClick}
              className="bg-[#F15A24] text-white font-bold px-6 py-3 rounded-md hover:bg-[#D64A1A] hover:shadow-md transform hover:-translate-y-0.5 transition duration-200 text-sm flex items-center justify-center mx-auto"
            >
              Apply for Next Batch
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Why Start This Monday?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#26A65B] mr-2" />
              <span className="font-medium text-gray-700">5-Day Fast Track</span>
            </div>
            <div className="flex items-center justify-center">
              <Users className="w-5 h-5 text-[#26A65B] mr-2" />
              <span className="font-medium text-gray-700">Small Batch Size</span>
            </div>
            <div className="flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#26A65B] mr-2" />
              <span className="font-medium text-gray-700">Weekend Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatchesBanner;
