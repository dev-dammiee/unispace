import React from "react";
import { CalendarDays, Wifi, Users } from "lucide-react";

// Reusable Card Component
const ServiceCard = ({ icon: Icon, title, description, features }) => {
  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-sm 
      hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] 
      transition duration-300"
    >
     <div className=" flex gap-3 items-center">
         <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
        <Icon className="text-blue-700" />
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>

     </div>
      <p className="text-gray-600 mb-4">{description}</p>

      <ul className="space-y-2 text-gray-600">
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

function Services() {
  const services = [
    {
      icon: CalendarDays,
      title: "Workspace Booking",
      description: "Book workspaces fast, anytime, anywhere.",
      features: [
        "Live seat and room status",
        "Tracks usage for rewards",
        "Mobile-first experience",
      ],
    },
    {
      icon: Wifi,
      title: "Starlink Internet Access",
      description: "Reliable, high-speed internet across all hubs.",
      features: [
        "Powered by Starlink tech",
        "Consistent uptime for remote work",
        "Stream, upload, and code without limits",
      ],
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Meet, chat, and grow with like minds.",
      features: [
        "Topic-based chatrooms",
        "Mentor and peer discovery",
        "React and reply to messages",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-24 px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg">
          From concept to deployment, we offer comprehensive solutions
          tailored to your unique business needs.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;