import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

import matthewImg from '../assets/Testimonials_clients/Matthew.png';
import rickImg from '../assets/Testimonials_clients/Rick cruz.jpeg';
import amandaImg from '../assets/Testimonials_clients/Amanda.jpg';
import georgeImg from '../assets/Testimonials_clients/George.jpeg';
import googleLogo from '../assets/google.png';
import verifiedBadge from '../assets/verified.png';

const testimonials = [
  {
    name: 'Matthew Jacobs',
    role: 'Founder, Health Beyond Hype',
    text: 'Their team brought structure to our rebuild, shipped fast, and gave us a codebase that finally felt dependable.',
    image: matthewImg,
  },
  {
    name: 'Rick Cruz',
    role: 'Founder, Bestway RV',
    text: 'We came in needing development help, but what we got was a full delivery partner that understood product, architecture, and launch.',
    image: rickImg,
  },
  {
    name: 'Amanda Parsi',
    role: 'Operations Lead, Gateway Co.',
    text: 'They simplified a very messy stack into one product flow. The handoff quality and engineering clarity stood out immediately.',
    image: amandaImg,
  },
  {
    name: 'George Grombacher',
    role: 'Founder, Lifeblood',
    text: 'The pace was strong, the communication was clean, and the final build felt production-ready instead of rushed.',
    image: georgeImg,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  const prev = () => setCurrent((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));

  return (
    <section className="section overflow-hidden bg-slate-50 py-32 dark:bg-dark-bg" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-20 lg:flex-row">
          <div className="w-full text-left lg:w-1/3">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="mb-8 inline-flex items-center">
              <img src={googleLogo} alt="Google" className="h-10 w-auto object-contain" />
            </motion.div>
            <h2 className="font-heading mb-10 text-6xl font-black uppercase leading-[0.8] tracking-tighter text-slate-950 dark:text-white">
              Shipped
              <br />
              <span className="text-gradient italic">Confidently.</span>
            </h2>
            <p className="mb-10 text-xl font-light leading-relaxed tracking-tight text-slate-600 dark:text-gray-400">
              Teams rely on us when the product has to launch cleanly, the stack has to hold up, and the delivery has to feel senior.
            </p>

            <div className="flex gap-4">
              <button onClick={prev} className="group flex h-16 w-16 items-center justify-center rounded-full border border-black/10 shadow-xl transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white dark:border-white/10">
                <ChevronLeft size={24} className="transition-transform group-hover:-translate-x-1" />
              </button>
              <button onClick={next} className="group flex h-16 w-16 items-center justify-center rounded-full border border-black/10 shadow-xl transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white dark:border-white/10">
                <ChevronRight size={24} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="relative w-full lg:w-2/3">
            <div className="absolute -inset-10 -z-10 animate-pulse rounded-full bg-primary/10 blur-[100px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="group relative overflow-hidden rounded-[4rem] border border-black/5 bg-white p-12 shadow-2xl dark:border-white/5 dark:bg-dark-card/60 md:p-20">
                  <Quote className="absolute right-10 top-10 h-24 w-24 text-primary opacity-20 transition-opacity duration-700 group-hover:opacity-40" />

                  <div className="mb-10 flex items-center gap-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-6 w-6 fill-primary text-primary" />)}
                    </div>
                    <img src={verifiedBadge} alt="Verified" className="h-6 w-6 object-contain" />
                  </div>

                  <p className="mb-12 text-2xl font-black uppercase leading-[1.1] tracking-tighter text-slate-950 dark:text-white md:text-4xl">
                    "{testimonials[current].text}"
                  </p>

                  <div className="mt-auto flex items-center gap-6">
                    <img src={testimonials[current].image} alt={testimonials[current].name} className="h-20 w-20 rounded-3xl border-2 border-primary/20 object-cover shadow-2xl" />
                    <div>
                      <h4 className="font-heading mb-2 text-2xl font-black uppercase leading-none tracking-tighter text-slate-950 dark:text-white">{testimonials[current].name}</h4>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400 opacity-60 dark:text-gray-500">{testimonials[current].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`h-1 rounded-full transition-all duration-700 ${i === current ? 'w-20 bg-primary' : 'w-4 bg-slate-300 dark:bg-white/10'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
