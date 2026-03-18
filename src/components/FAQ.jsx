import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is UniSpace?",
      answer:
        "UniSpace is a web-based platform that blends workspace booking with community engagement and gamification, designed for students, freelancers, and remote workers."
    },
    {
      question: "How do I book a workspace?",
      answer:
        "Filter by location, type, or features, check real-time availability, select your date and time (min. 1 hour), and proceed with payment (₦300/hour)."
    },
    {
      question: "What are UniPoints and how do I earn them?",
      answer:
        "UniPoints are rewards you earn through bookings (+1 point for 3+ hrs), community participation (+0.0001 to +0.0005 points per action), referrals (+10 points), and streaks (5-8 points)."
    },
    {
      question: "Can I cancel a booking?",
      answer:
        "Yes, you can cancel up to 24 hours before for a full refund."
    },
    {
      question: "How does the streak system work?",
      answer:
        "Earn a streak with daily login + booking. Miss a day? Redeem with 50 UniPoints within 24 hours to continue."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F3F5F9] py-20 px-6 md:px-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          Everything You Need to Know!
        </p>
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* LEFT SIDE */}
        <div className="flex-1 w-full space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium text-blue-900">
                    {item.question}
                  </span>

                  <span
                    className={`text-2xl text-blue-900 transform transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 pt-2 text-gray-600 border-t border-gray-100">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE - Floating Bubble */}
        <div className="flex-1 flex justify-center">
           <img src="faq.png" alt="" />
          
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
    </section>
  );
}