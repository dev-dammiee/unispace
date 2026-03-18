import React from "react";

function About() {
  return (
    <div className="bg-gray-100">
      {/* Top Banner */}
      <div className="flex flex-col items-center text-center bg-blue-900 py-20 text-white">
        <h1 className="text-4xl font-bold mt-10">About Us</h1>
        <p className="text-lg max-w-2xl mt-6">
          Revolutionizing space booking through community engagement,
          gamification, and smart technology solutions.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Our Mission
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            UniSpace was created to bridge the gap between space accessibility
            and community building. We believe that great work happens when
            talented individuals have access to inspiring spaces and meaningful
            connections.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Our platform serves university students, freelancers, and remote
            workers by providing not just workspace booking, but a complete
            ecosystem of support, mentoring, and rewards that foster growth and
            collaboration.
          </p>

          <button className="bg-blue-900 hover:bg-blue-900 text-white px-6 py-3 rounded-lg shadow-md transition">
            Join Our Community
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="about.png"
            alt="Community"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;