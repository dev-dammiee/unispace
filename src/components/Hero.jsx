import React from 'react'
import Navbar from './Navbar'

function Hero() {
  return (
   <section className="min-h-screen pt-5 bg-gradient-to-br from-[#1e3cff] via-[#1b66ff] to-[#18a9e6] relative">
    
    <Navbar />

   <section className="flex flex-col items-center text-center px-6 text-white pt-24">

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl">
        Don&apos;t Just Book a Seat.
        <br />
        Earn. Connect. Grow.
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-2xl text-blue-100 max-w-2xl">
        UniSpace is your all-in-one platform for workspace booking,
        community, and rewards. Reserve your spot, connect with others,
        and unlock exclusive perks as you grow.
      </p>

      {/* Buttons */}
      <div className="flex gap-6 mt-10">

        <button className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition">
          Get Started
        </button>

        <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition">
          Learn More
        </button>

      </div>

     {/* Scroll Indicator */}
      <div className="absolute bottom-6 flex flex-col items-center text-blue-100">

        <div className="w-6 h-10 border-2 border-blue-200 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-200 mt-2 rounded"></div>
        </div>

        <p className="mt-3 text-sm">Scroll down</p>

        <svg
          className="w-5 h-5 mt-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>

      </div>

    </section>
    </section>
  )
}

export default Hero