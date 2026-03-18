import React from "react";
import { Users } from "lucide-react";

function CTA() {
  return (
    <div className="bg-blue-900 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center text-white">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="text-white/70">
            <Users size={48} strokeWidth={1.5} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to level up your campus grind?
        </h2>

        {/* Subtext */}
        <p className="text-lg text-white/80 leading-relaxed mb-10">
          Whether you're here to study, build, collaborate, or just vibe — 
          UniSpace gives you the tools, the people, and the rewards to make 
          every session count.
        </p>

        {/* Button */}
        <button className="bg-gray-200 text-blue-900 px-8 py-3 rounded-lg font-medium 
        hover:bg-white transition duration-300 shadow-sm">
          Join UniSpace
        </button>

      </div>
    </div>
  );
}

export default CTA;