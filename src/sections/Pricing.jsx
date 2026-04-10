import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Boxes, Check, Code2, ServerCog, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import { companyPhoneHref } from '../data/contact';
import { handlePrimaryContactAction } from '../utils/contactActions';

const packageServices = [
  'MVP and product builds',
  'Backend APIs and architecture',
  'Admin and dashboard systems',
  'Cloud and deployment setup',
  'QA and performance passes',
  'Ongoing technical support',
];

const Pricing = () => {
  return (
    <section className="section section-theme-blue overflow-hidden pt-20 pb-14 lg:pt-[6.4rem] lg:pb-10 xl:pt-[6.9rem] xl:pb-12 2xl:pt-[7.4rem] 2xl:pb-16" id="pricing">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container laptop-scale-pricing relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[3rem] border border-black/5 bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(248,250,252,0.94))] px-6 py-8 shadow-[0_28px_90px_rgba(15,23,42,0.1)] dark:border-white/8 dark:bg-[linear-gradient(145deg,rgba(8,18,34,0.98),rgba(11,24,42,0.94))] md:px-10 md:py-10 lg:min-h-[calc(100vh-8.6rem)] lg:px-10 lg:py-8 xl:min-h-[calc(100vh-9.1rem)] xl:px-12 xl:py-10 2xl:min-h-[calc(100vh-9.5rem)] 2xl:px-14 2xl:py-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,140,255,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.08),transparent_32%)]" />
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/10 blur-[70px]" />
          <div className="absolute right-8 top-12 hidden h-20 w-20 rounded-[1.8rem] border border-primary/18 bg-white/60 backdrop-blur-xl dark:bg-white/[0.04] lg:flex lg:items-center lg:justify-center">
            <Code2 className="h-8 w-8 text-primary" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.06fr_.94fr] lg:items-center lg:gap-10 xl:gap-12">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-5 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-primary">
                <Sparkles className="h-4 w-4" />
                Tailored Build Scope
              </div>
              <h3 className="font-heading text-gradient mb-4 max-w-[16ch] text-[2.35rem] font-black uppercase leading-[0.9] tracking-tight md:text-[3.15rem] lg:max-w-[14ch] lg:text-[3rem] xl:max-w-[15ch] xl:text-[3.45rem] 2xl:text-[4rem]">
                Development packages built around your roadmap.
              </h3>
              <p className="max-w-2xl text-base font-light leading-relaxed tracking-tight text-slate-600 dark:text-gray-400 md:text-lg lg:text-[0.95rem] xl:text-[1.02rem] 2xl:text-[1.08rem]">
                MVP delivery, product engineering, and backend systems scoped to the stage, speed, and complexity of your build.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.8rem] border border-primary/10 bg-white/75 p-4 shadow-sm dark:bg-white/[0.03]">
                  <Code2 className="mb-3 h-5 w-5 text-primary" />
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-900 dark:text-white">Product Builds</p>
                </div>
                <div className="rounded-[1.8rem] border border-secondary/10 bg-white/75 p-4 shadow-sm dark:bg-white/[0.03]">
                  <ServerCog className="mb-3 h-5 w-5 text-secondary" />
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-900 dark:text-white">Backend Systems</p>
                </div>
                <div className="rounded-[1.8rem] border border-teal/10 bg-white/75 p-4 shadow-sm dark:bg-white/[0.03]">
                  <Boxes className="mb-3 h-5 w-5 text-teal" />
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-900 dark:text-white">Platform Scale</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {packageServices.map((service) => (
                  <div key={service} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center lg:self-center lg:justify-end">
              <div className="w-full rounded-[2.4rem] border border-primary/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.82))] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] md:p-8 lg:max-w-[34rem]">
                <p className="mb-6 text-sm font-black uppercase tracking-[0.22em] text-slate-500 dark:text-white/55">
                  Best Fit For
                </p>
                <div className="mb-8 grid gap-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <div>Founders turning product ideas into launch-ready builds</div>
                  <div>Teams modernizing legacy systems or adding new product layers</div>
                  <div>Companies needing custom engineering capacity without fixed tiers</div>
                </div>
                <Button
                  variant="primary"
                  onClick={(e) => handlePrimaryContactAction(e, companyPhoneHref)}
                  className="group w-full justify-center rounded-full py-4 text-[12px] font-black uppercase tracking-[0.18em] shadow-xl"
                >
                  Connect Us
                  <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
