import React from 'react';
// Importing specific icons from the Material Design and Ionicons sets
import { MdOutlineSecurity, MdGroups, MdOutlineTimer, MdCastForEducation } from 'react-icons/md';
import { IoPhonePortraitOutline, IoPersonOutline, IoChatbubbleEllipsesOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';

const StrengthsSection = () => {
  const strengths = [
    {
      title: "Full Refund Policy",
      description: "Confidence in our results. If we don't meet the mark, you get a full refund—no questions asked.",
      icon: <IoShieldCheckmarkOutline size={32} className="text-blue-600" />,
    },
    {
      title: "Social Detox Environment",
      description: "Our Teachmint integration allows for doubt solving directly in-app, keeping you away from social media distractions.",
      icon: <IoChatbubbleEllipsesOutline size={32} className="text-purple-600" />,
    },
    {
      title: "Focused Group Classes",
      description: "Engaging group sessions designed for collaborative learning and peer support.",
      icon: <MdGroups size={32} className="text-green-600" />,
    },
    {
      title: "Teachmint Powered",
      description: "Seamless online classes delivered through the official Teachmint app for a stable experience.",
      icon: <MdCastForEducation size={32} className="text-red-600" />,
    },
    {
      title: "1-on-1 Personalized Coaching",
      description: "Get undivided attention with private sessions tailored to your specific learning pace.",
      icon: <IoPersonOutline size={32} className="text-indigo-600" />,
    },
    {
      title: "Personal Mentor",
      description: "A dedicated mentor is assigned to every student to track progress and provide 24/7 support.",
      icon: <MdOutlineSecurity size={32} className="text-orange-600" />,
    },
    {
      title: "Max 6 Students",
      description: "We strictly limit batches to 6 students to ensure every individual gets the attention they deserve.",
      icon: <MdGroups size={32} className="text-teal-600" />,
    },
    {
      title: "Flexible Timings",
      description: "Manage your studies around your life. We offer multiple slots to suit your daily routine.",
      icon: <MdOutlineTimer size={32} className="text-pink-600" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Strengths</h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Why Students Choose Us
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-8 lg:grid-cols-4">
          {strengths.map((strength, index) => (
            <div key={index} className="relative group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="flex items-center justify-center w-14 h-14 mb-5 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                {strength.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {strength.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;