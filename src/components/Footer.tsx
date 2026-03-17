import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none">MARUTI</span>
                <span className="text-[10px] text-teal-500 font-semibold tracking-widest uppercase">Clinic</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Providing excellence in dental, skin, and hair care. Your trusted partner for aesthetic and medical wellness.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-teal-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-teal-500 transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-teal-500 transition-colors">About Doctor</a></li>
              <li><a href="#appointment" className="hover:text-teal-500 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-teal-500 transition-colors">Dental Implants</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Skin Rejuvenation</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Hair Restoration</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Orthodontics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-4">
                <MapPin size={24} className="text-teal-500 shrink-0" />
                <span>123 Medical Plaza, Health Street, New Delhi, India</span>
              </li>
              <li className="flex gap-4">
                <Phone size={24} className="text-teal-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-4">
                <Mail size={24} className="text-teal-500 shrink-0" />
                <span>contact@maruticlinic.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Maruti Dental, Skin & Hair Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
