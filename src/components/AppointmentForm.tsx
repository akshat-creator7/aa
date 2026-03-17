import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Phone, MessageSquare, Send } from 'lucide-react';

export default function AppointmentForm() {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[40px] text-center shadow-2xl border border-teal-100"
      >
        <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send size={32} />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Appointment Requested!</h3>
        <p className="text-slate-600 mb-8">
          Thank you for choosing Maruti Clinic. Our team will contact you shortly to confirm your preferred time.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold hover:bg-teal-700 transition-all"
        >
          Book Another
        </button>
      </motion.div>
    );
  }

  return (
    <section id="appointment" className="py-24 bg-teal-600 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="font-bold tracking-widest uppercase text-sm mb-4 opacity-80">Get in Touch</h2>
            <h3 className="text-5xl font-bold mb-8 leading-tight">Ready to Transform Your Life?</h3>
            <p className="text-xl text-teal-50 mb-12 leading-relaxed">
              Book your consultation today and take the first step towards a healthier, 
              more confident you. We are here to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-teal-100 text-sm">Call Us Directly</p>
                  <p className="text-2xl font-bold">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-teal-100 text-sm">Clinic Hours</p>
                  <p className="text-2xl font-bold">Mon - Sat: 10AM - 8PM</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 sm:p-12 rounded-[40px] shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <User size={16} className="text-teal-600" />
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Phone size={16} className="text-teal-600" />
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Calendar size={16} className="text-teal-600" />
                  Service Required
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all">
                  <option>Dental Consultation</option>
                  <option>Skin Treatment</option>
                  <option>Hair Implant</option>
                  <option>Other Aesthetic Care</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <MessageSquare size={16} className="text-teal-600" />
                  Your Message (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your concerns..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all resize-none"
                />
              </div>

              <button
                disabled={status === 'submitting'}
                className="w-full bg-teal-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all shadow-lg shadow-teal-100 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Confirm Appointment
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ size, className }: { size: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
