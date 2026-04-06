import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TerminalSquare } from 'lucide-react';
import Button from '../components/Button';
import { handleScrollTo } from '../utils/scrollTo';

const CTA = () => {
  return (
    <section className="section overflow-hidden bg-slate-50 dark:bg-dark-bg" id="cta">
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 flex h-full w-full max-w-[1200px] -translate-x-1/2 -translate-y-1/2 justify-between">
        <div className="h-[400px] w-[400px] rounded-full bg-primary/30 blur-[150px] mix-blend-screen" />
        <div className="-translate-y-20 h-[300px] w-[300px] rounded-full bg-secondary/30 blur-[120px] mix-blend-screen" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-12 shadow-2xl dark:border-white/5 dark:bg-[#0c0f1d] md:p-16"
        >
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.05] px-6 py-3 dark:border-white/10 dark:bg-white/[0.05]"
            >
              <TerminalSquare className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium uppercase tracking-wide text-slate-700 dark:text-gray-300">Ready to ship?</span>
            </motion.div>

            <h2 className="font-heading mb-6 text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Let&apos;s build something
              <br />
              <span className="text-gradient">production-grade.</span>
            </h2>

            <p className="mx-auto mb-12 max-w-2xl text-xl font-light text-slate-600 dark:text-gray-400">
              From SaaS platforms and storefronts to APIs, mobile apps, and cloud-ready systems, we build the layer your business actually runs on.
            </p>

            <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="inline-block w-full md:w-auto">
              <Button variant="primary" className="group w-full rounded-full px-10 py-5 text-lg shadow-2xl shadow-primary/40 hover:scale-105 md:w-auto">
                Connect Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
