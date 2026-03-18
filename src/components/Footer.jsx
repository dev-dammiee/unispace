import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f3f5f9] pt-20">
      
      {/* MAIN FOOTER */}
      <div className="bg-gradient-to-b from-[#2947a8] to-[#2046AF] 
                      rounded-t-[60px] px-10 lg:px-24 py-16 text-white">
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* COLUMN 1 */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide mb-6">
              UNiSPACE
            </h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              A smart workspace booking platform that blends community
              engagement with gamification for students, freelancers,
              and remote workers.
            </p>

            <div className="flex gap-5 text-blue-100">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-white transition" />
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-blue-100">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Contributors</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-4 text-blue-100">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>guruhub@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+234 08109587719</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Calabar, Nigeria</span>
              </div>
            </div>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Powered By
            </h3>

            <div className="flex items-center gap-3">
                <img src="footer.png" alt="Starlink" className="w-30" />
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 mt-16 pt-6 text-center text-blue-100 text-sm">
          © 2024 UniSpace. All rights reserved | developed by guru devs
        </div>
      </div>
    </footer>
  );
}