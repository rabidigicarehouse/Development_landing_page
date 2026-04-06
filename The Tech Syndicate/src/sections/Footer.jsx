import React, { useState } from 'react';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from 'lucide-react';
import logo from '../assets/Digiicare.png';
import ServiceModal from '../components/ServiceModal';
import { servicesData } from '../data/services';
import { handleScrollTo } from '../utils/scrollTo';

const Footer = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/digicarehouseagency' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/digicarehouseagency/' },
    { icon: <Youtube size={20} />, href: 'https://www.youtube.com/@digicarehouseagency' },
    { icon: <Linkedin size={20} />, href: 'http://linkedin.com/company/digicarehouseagency' },
  ];

  return (
    <footer className="flex min-h-screen items-center overflow-hidden border-t border-black/5 bg-slate-50 pb-12 pt-20 text-slate-900 dark:border-white/5 dark:bg-dark-bg dark:text-light">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-20 flex flex-col items-start justify-between gap-16 border-b border-black/5 pb-20 dark:border-white/5 lg:flex-row">
          <div className="w-full max-w-md">
            <a href="#" onClick={(e) => handleScrollTo(e, '#')} className="group mb-10 flex items-center">
              <img src={logo} alt="DigiCareHouse Development" className="h-16 w-auto object-contain transition-transform group-hover:scale-105 md:h-20" />
            </a>
            <p className="mb-10 text-xl font-light leading-relaxed tracking-tight text-slate-600 dark:text-gray-400">
              We build websites, apps, APIs, product systems, and cloud-ready infrastructure that help teams ship faster with less technical drag.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-slate-700 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white dark:border-white/10 dark:text-slate-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,.8fr)_minmax(0,1fr)] lg:w-auto">
            <div className="min-w-0">
              <h4 className="mb-10 text-xs font-black uppercase tracking-widest text-slate-950/70 dark:text-white/70">Services</h4>
              <ul className="grid grid-cols-1 gap-x-12 gap-y-5 text-sm font-light sm:grid-cols-2">
                {servicesData.map((s, i) => (
                  <li key={i}>
                    <button onClick={() => { setSelectedService(s); setIsModalOpen(true); }} className="inline-flex max-w-full text-left text-slate-800 transition-all duration-300 hover:text-primary dark:text-slate-300 font-bold uppercase tracking-tight leading-tight hover:-translate-y-0.5 hover:drop-shadow-[0_0_12px_rgba(79,140,255,0.28)]">
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-10 text-xs font-black uppercase tracking-widest text-slate-950/70 dark:text-white/70">Company</h4>
              <ul className="flex flex-col gap-6 text-sm font-light">
                <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="inline-flex max-w-full font-bold uppercase tracking-tighter text-slate-800 transition-all duration-300 hover:text-primary dark:text-slate-300 hover:-translate-y-0.5 hover:drop-shadow-[0_0_12px_rgba(79,140,255,0.28)]">Development Services</a></li>
                <li><a href="#process" onClick={(e) => handleScrollTo(e, '#process')} className="inline-flex max-w-full font-bold uppercase tracking-tighter text-slate-800 transition-all duration-300 hover:text-primary dark:text-slate-300 hover:-translate-y-0.5 hover:drop-shadow-[0_0_12px_rgba(79,140,255,0.28)]">Delivery Framework</a></li>
                <li><a href="#work" onClick={(e) => handleScrollTo(e, '#work')} className="inline-flex max-w-full font-bold uppercase tracking-tighter text-slate-800 transition-all duration-300 hover:text-primary dark:text-slate-300 hover:-translate-y-0.5 hover:drop-shadow-[0_0_12px_rgba(79,140,255,0.28)]">Build Showcase</a></li>
                <li><a href="#pricing" onClick={(e) => handleScrollTo(e, '#pricing')} className="inline-flex max-w-full font-bold uppercase tracking-tighter text-slate-800 transition-all duration-300 hover:text-primary dark:text-slate-300 hover:-translate-y-0.5 hover:drop-shadow-[0_0_12px_rgba(79,140,255,0.28)]">Programs</a></li>
              </ul>
            </div>

            <div className="md:col-span-2 xl:col-span-1">
              <h4 className="mb-10 text-xs font-black uppercase tracking-widest text-slate-950/70 dark:text-white/70">Agency Desk</h4>
              <p className="mb-8 text-lg font-light italic leading-relaxed text-slate-600 dark:text-gray-400">
                Remote-first product engineering partner
                <br />
                shipping globally
              </p>
              <div className="flex flex-col gap-4">
                <a href="mailto:info@digicarehouse.com" className="group flex items-center gap-2 font-bold text-primary">
                  <Mail size={16} /> info@digicarehouse.com
                  <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
                <a href="tel:+18483843773" className="group flex items-center gap-2 font-bold text-primary">
                  <Phone size={16} /> +1 (848) 384 3773
                  <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} DigiCareHouse Development Agency.</p>
          <div className="mt-6 flex gap-10 md:mt-0">
            <a href="#" className="transition-colors hover:text-primary">Privacy</a>
            <a href="#" className="transition-colors hover:text-primary">Client Terms</a>
          </div>
        </div>
      </div>

      <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} service={selectedService} />
    </footer>
  );
};

export default Footer;
