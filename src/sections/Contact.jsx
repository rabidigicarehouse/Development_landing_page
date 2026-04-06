import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Braces, MessageSquare, TerminalSquare } from 'lucide-react';
import gsap from 'gsap';
import ServiceForm from '../components/ServiceForm';

const Contact = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-visual', {
        scale: 0.82,
        opacity: 0,
        duration: 1.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="section relative overflow-hidden bg-slate-50 py-20 dark:bg-dark-bg sm:py-24 md:py-32" id="contact">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-full max-w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 opacity-30 blur-[150px] mix-blend-screen dark:opacity-60" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-12 sm:gap-14 lg:flex-row lg:gap-14">
          <div className="w-full text-left lg:w-[42%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2.5 sm:px-6"
            >
              <MessageSquare className="h-4 w-4 text-primary" />
              <span className="text-xs font-black uppercase tracking-widest text-primary">Build With Us</span>
            </motion.div>

            <h2 className="font-heading mb-8 text-[3.4rem] font-black uppercase leading-[0.8] tracking-tighter text-slate-950 dark:text-white sm:text-6xl md:mb-10 md:text-8xl">
              Built for
              <br />
              <span className="text-gradient italic">Development.</span>
            </h2>

            <p className="mb-10 text-lg font-light leading-relaxed tracking-tight text-slate-600 dark:text-gray-400 sm:mb-16 sm:text-xl md:text-2xl">
              Bring us the product idea, technical debt, legacy rebuild, or platform gap. We&apos;ll turn it into a clean engineering roadmap and a launch-ready build.
            </p>

            <div className="contact-visual relative hidden lg:block">
              <div className="group h-80 w-80 rotate-3 rounded-[3rem] bg-gradient-to-tr from-primary to-secondary p-1 transition-transform duration-700 hover:rotate-0">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2.8rem] bg-white dark:bg-dark-bg">
                  <div className="absolute left-10 top-12 h-28 w-52 rounded-[1.8rem] border border-primary/20 bg-slate-50 dark:bg-white/[0.03]" />
                  <div className="absolute right-10 top-20 h-20 w-28 rounded-[1.5rem] border border-secondary/20 bg-slate-50 dark:bg-white/[0.03]" />
                  <div className="absolute bottom-12 left-12 h-24 w-56 rounded-[1.6rem] border border-teal/20 bg-slate-50 dark:bg-white/[0.03]" />
                  <Braces className="absolute left-14 top-16 h-8 w-8 text-primary" />
                  <TerminalSquare className="absolute right-16 top-24 h-8 w-8 text-secondary" />
                  <div className="absolute bottom-20 left-20 h-1 w-28 rounded-full bg-primary/40" />
                  <div className="absolute bottom-14 left-20 h-1 w-36 rounded-full bg-secondary/30" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[58%] xl:w-[54%]">
            <div className="relative w-full lg:ml-auto lg:max-w-[760px]">
              <div className="absolute -inset-10 -z-10 animate-pulse rounded-full bg-primary/10 blur-[80px]" />
              <ServiceForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
