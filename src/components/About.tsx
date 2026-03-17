import { motion } from 'motion/react';
import { Award, GraduationCap, HeartPulse } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="pt-12 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=2070"
                alt="Dr. Rahul Soni"
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-600 rounded-full -z-10" />
            <div className="absolute top-1/2 -left-10 w-20 h-20 bg-amber-400 rounded-2xl -z-10 rotate-12" />
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20">
              <p className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-1">Chief Specialist</p>
              <h4 className="text-2xl font-bold text-slate-900">Dr. Rahul Soni</h4>
              <p className="text-slate-600 text-sm">MDS, Dental Surgery & Aesthetic Specialist</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4">Meet Our Doctor</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8">Dedicated to Excellence in Patient Care</h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dr. Rahul Soni is a renowned specialist with over 15 years of experience in 
              dental surgery, skin aesthetics, and hair restoration. His vision for Maruti Clinic 
              is to provide high-quality, affordable treatments using the latest medical advancements.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Expert Education</h5>
                  <p className="text-slate-600 text-sm">MDS from Top Medical University with specialization in Aesthetic Surgery.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Award Winning</h5>
                  <p className="text-slate-600 text-sm">Recognized as the "Best Aesthetic Specialist" in the region for 3 consecutive years.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                  <HeartPulse size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Patient Centric</h5>
                  <p className="text-slate-600 text-sm">Focused on painless procedures and personalized treatment plans for every patient.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-900 rounded-[32px] text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="italic text-lg mb-4 text-slate-300">
                  "My goal is to make every patient feel confident and healthy. We don't just treat symptoms; we care for people."
                </p>
                <p className="font-bold">— Dr. Rahul Soni</p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-600/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
