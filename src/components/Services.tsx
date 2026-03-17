import { motion } from 'motion/react';
import { Stethoscope, Sparkles, Scissors, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Dental Care',
    description: 'From routine checkups to advanced implants and orthodontics. We ensure your smile stays bright and healthy.',
    icon: Stethoscope,
    color: 'bg-blue-50 text-blue-600',
    features: ['Dental Implants', 'Teeth Whitening', 'Root Canal', 'Braces & Aligners'],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Skin Care',
    description: 'Advanced dermatological treatments for glowing skin. Specialized care for acne, aging, and pigmentation.',
    icon: Sparkles,
    color: 'bg-rose-50 text-rose-600',
    features: ['Laser Treatment', 'Chemical Peels', 'Anti-Aging', 'Acne Therapy'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Hair Implant',
    description: 'Restore your confidence with our high-success hair transplant and restoration procedures.',
    icon: Scissors,
    color: 'bg-indigo-50 text-indigo-600',
    features: ['FUE Transplant', 'PRP Therapy', 'Scalp Treatment', 'Hair Restoration'],
    image: 'https://images.unsplash.com/photo-1620331700431-7e820842909c?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Services() {
  return (
    <section id="services" className="pt-24 pb-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Care for Your Health & Beauty</h3>
          <p className="text-slate-600">
            We offer a wide range of specialized treatments under one roof, 
            ensuring you get the best care for your dental, skin, and hair needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <service.icon size={24} />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 size={18} className="text-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full py-3 rounded-xl border border-teal-600 text-teal-600 font-bold hover:bg-teal-600 hover:text-white transition-all">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
