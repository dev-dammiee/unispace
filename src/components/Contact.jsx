import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="">
        <div className="flex flex-col items-center text-center bg-blue-900 py-20 text-white">
        <h1 className="text-4xl font-bold mt-10">Contact Us</h1>
        <p className="text-lg max-w-2xl mt-6">
            Get in touch with our team. We're here to help you make the most of your UniSpace experience.
        </p>
      </div>
      <section className="bg-[#f3f5f9] min-h-screen py-24 px-6 lg:px-20">
        
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
        
        {/* LEFT SIDE - FORM */}
        <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-10">
          
          {/* Header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-700" />
            </div>
            <h2 className="text-2xl font-semibold">
              Send us a Message
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us more about your inquiry..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-xl font-semibold text-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - INFO CARDS */}
        <div className="grid sm:grid-cols-1 gap-6">
          
          <InfoCard
            icon={<Mail className="w-6 h-6 text-blue-700" />}
            title="Email Us"
            primary="guruhub@gmail.com"
            secondary="We respond within 24 hours"
          />

          <InfoCard
            icon={<Phone className="w-6 h-6 text-blue-700" />}
            title="Call Us"
            primary="+234 8109587719"
            secondary="Mon–Fri 9:00 AM – 6:00 PM EST"
          />

          <InfoCard
            icon={<MapPin className="w-6 h-6 text-blue-700" />}
            title="Visit Us"
            primary="University of Cross River State, Nigeria"
            secondary="Tech Hub City, TC 12345"
          />

          <InfoCard
            icon={<Clock className="w-6 h-6 text-blue-700" />}
            title="Office Hours"
            primary="Monday – Friday"
            secondary="9:00 AM – 6:00 PM EST"
          />
        </div>
      </div>
    </section>
    </div>
  );
}

/* Info Card */
function InfoCard({ icon, title, primary, secondary }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-6 flex gap-5">
      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">
          {title}
        </h3>
        <p className="text-blue-700 font-medium">
          {primary}
        </p>
        <p className="text-gray-500 text-sm mt-1">
          {secondary}
        </p>
      </div>
    </div>
  );
}