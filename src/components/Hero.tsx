import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070"
          alt="Modern Clinic Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:via-white/80" />
      </div>
      
      {/* Main Hero Content */}
      <div className="flex-grow flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Star size={14} fill="currentColor" />
                Trusted by 5000+ Patients
              </div>
              <h1 className="text-5xl lg:text-8xl font-bold text-slate-900 leading-[1.1] mb-6">
                Your Smile, <br />
                <span className="text-teal-600">Our Passion.</span>
              </h1>
              <p className="text-lg text-slate-700 mb-8 max-w-lg leading-relaxed font-medium">
                Experience world-class dental, skin, and hair care at Maruti Clinic. 
                Led by Dr. Rahul Soni, we combine advanced technology with compassionate care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#appointment"
                  className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all shadow-lg shadow-teal-200 group"
                >
                  Book Your Visit
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition-all"
                >
                  Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Liquid Glass Stat Cards - Now in Flow */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-[24px] md:rounded-[40px] p-6 md:p-8 lg:p-10 min-w-[200px] md:min-w-[240px] lg:min-w-[280px] text-center group hover:bg-white/20 transition-all pointer-events-auto"
          >
            <span className="block text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-1 md:mb-2">15+</span>
            <span className="text-[10px] md:text-xs lg:text-sm text-teal-700 uppercase font-black tracking-[0.1em] md:tracking-[0.2em]">Years Experience</span>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[24px] md:rounded-[40px] pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-teal-600/10 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-[24px] md:rounded-[40px] p-8 md:p-10 lg:p-12 min-w-[220px] md:min-w-[280px] lg:min-w-[320px] text-center group hover:bg-teal-600/20 transition-all md:scale-110 pointer-events-auto"
          >
            <span className="block text-4xl md:text-5xl lg:text-7xl font-black text-teal-600 mb-1 md:mb-2">10k+</span>
            <span className="text-[10px] md:text-xs lg:text-sm text-slate-900 uppercase font-black tracking-[0.1em] md:tracking-[0.2em]">Happy Patients</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/10 to-transparent rounded-[24px] md:rounded-[40px] pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-[24px] md:rounded-[40px] p-6 md:p-8 lg:p-10 min-w-[200px] md:min-w-[240px] lg:min-w-[280px] text-center group hover:bg-white/20 transition-all pointer-events-auto"
          >
            <span className="block text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-1 md:mb-2">5/5</span>
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs lg:text-sm text-teal-700 uppercase font-black tracking-[0.1em] md:tracking-[0.2em]">Patient Rating</span>
              <span className="text-[9px] lg:text-xs text-slate-500 font-bold mt-1 md:mt-2">(as on Google)</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-bl from-white/20 to-transparent rounded-[24px] md:rounded-[40px] pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Floating Badge for Mobile/Desktop */}
      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col gap-4 z-20">
        <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
            <ShieldCheck size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">Safe & Hygienic</p>
            <p className="text-xs text-slate-500">ISO Certified Clinic</p>
          </div>
        </div>
      </div>
    </section>
  );
}
