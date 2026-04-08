import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles, X, Globe, Smartphone, Server, Building2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { handleScrollTo } from '../utils/scrollTo';

const pricingData = [
  {
    name: 'Starter',
    icon: <Globe className="h-9 w-9 text-primary" />,
    tagline: 'A focused build for one production-ready website, app module, or platform milestone.',
    monthly: 129,
    annual: 899,
    features: [
      { text: '1 Product Build Stream', included: true },
      { text: 'Frontend or Backend Scope', included: true },
      { text: 'Responsive QA', included: true },
      { text: 'Deployment Support', included: true },
      { text: '2 Revision Rounds', included: true },
      { text: 'Infrastructure Ownership', included: false },
    ],
  },
  {
    name: 'Growth',
    icon: <Smartphone className="h-9 w-9 text-secondary" />,
    tagline: 'A multi-sprint product build with interfaces, APIs, integrations, and release support.',
    monthly: 279,
    annual: 1499,
    features: [
      { text: 'Everything in Starter', included: true },
      { text: 'Frontend + Backend Delivery', included: true },
      { text: 'Admin & Dashboard Systems', included: true },
      { text: 'CMS / Commerce Integration', included: true },
      { text: 'QA & Performance Pass', included: true },
      { text: 'Priority Release Support', included: true },
    ],
  },
  {
    name: 'Scale',
    icon: <Server className="h-9 w-9 text-teal" />,
    tagline: 'Best for teams building serious product infrastructure and customer-facing platforms.',
    monthly: 499,
    annual: 1999,
    popular: true,
    features: [
      { text: 'Everything in Growth', included: true },
      { text: 'SaaS Product Architecture', included: true },
      { text: 'DevOps / Cloud Setup', included: true },
      { text: 'Advanced Roles & Billing', included: true },
      { text: 'Testing & Monitoring', included: true },
      { text: 'Dedicated Technical Lead', included: true },
    ],
  },
  {
    name: 'Custom',
    icon: <Building2 className="h-9 w-9 text-slate-500 dark:text-slate-300" />,
    tagline: 'For larger engineering partnerships, platform rewrites, migrations, or multi-team roadmaps.',
    monthly: 'Custom',
    annual: 'Custom',
    features: [
      { text: 'Fractional Product Engineering', included: true },
      { text: 'Legacy Rebuilds & Migrations', included: true },
      { text: 'Cross-Team Delivery Planning', included: true },
      { text: 'Security / Compliance Input', included: true },
      { text: 'Long-Term Technical Ownership', included: true },
      { text: 'Custom SLA', included: true },
    ],
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="section overflow-hidden bg-slate-50 py-[4.5rem] xl:py-20 2xl:py-24 dark:bg-dark-bg" id="pricing">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container laptop-scale-pricing relative z-10 mx-auto px-6">
        <div className="mb-16 xl:mb-20 2xl:mb-24 flex flex-col justify-between gap-10 xl:gap-12 lg:flex-row lg:items-end">
          <SectionHeading title="Development Programs" subtitle="Delivery Tiers" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 xl:mb-9 2xl:mb-10 flex items-center gap-2 xl:gap-2.5 2xl:gap-4 rounded-full border border-black/5 bg-black/5 p-2 xl:p-2 2xl:p-3 shadow-lg backdrop-blur-3xl dark:border-white/10 dark:bg-white/5"
          >
            <button onClick={() => setIsAnnual(false)} className={`rounded-full px-3.5 xl:px-4.5 2xl:px-6 py-2 xl:py-2.5 text-[9px] xl:text-[10px] 2xl:text-xs font-black uppercase tracking-[0.14em] xl:tracking-[0.18em] transition-all duration-500 ${!isAnnual ? 'bg-primary text-white' : 'opacity-40 hover:opacity-100'}`}>
              Standard
            </button>
            <button onClick={() => setIsAnnual(true)} className={`flex items-center gap-1.5 xl:gap-2 rounded-full px-3.5 xl:px-4.5 2xl:px-6 py-2 xl:py-2.5 text-[9px] xl:text-[10px] 2xl:text-xs font-black uppercase tracking-[0.14em] xl:tracking-[0.18em] transition-all duration-500 ${isAnnual ? 'bg-primary text-white' : 'opacity-40 hover:opacity-100'}`}>
              Annual <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">-20%</span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:gap-9 2xl:gap-10 md:grid-cols-2 lg:grid-cols-4">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.8, ease: 'easeOut' }}
              className={`group relative flex flex-col rounded-[3rem] xl:rounded-[3.4rem] 2xl:rounded-[4rem] border p-6 lg:p-6 xl:p-8 2xl:p-10 transition-all duration-700 hover:-translate-y-4 xl:hover:-translate-y-5 2xl:hover:-translate-y-6 ${
                plan.popular
                  ? 'z-10 scale-105 border-primary/40 bg-white shadow-2xl dark:bg-dark-card'
                  : 'border-black/5 bg-white shadow-xl hover:border-primary/28 hover:shadow-[0_28px_70px_rgba(79,140,255,0.14)] dark:border-white/5 dark:bg-dark-card/30 dark:hover:shadow-[0_28px_70px_rgba(79,140,255,0.18)]'
              }`}
            >
              <div className="pointer-events-none absolute inset-0 rounded-[4rem] bg-[radial-gradient(circle_at_top,rgba(79,140,255,0.16),transparent_55%)] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-primary px-6 py-2 text-xs font-black uppercase tracking-widest text-white shadow-lg">
                  <Sparkles className="h-4 w-4" /> Most Requested
                </div>
              )}

                <div className="mb-10 xl:mb-11 2xl:mb-12">
                <div className="mb-6 xl:mb-7 2xl:mb-8 flex h-14 w-14 lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20 items-center justify-center rounded-[1.25rem] xl:rounded-[1.45rem] 2xl:rounded-3xl border border-black/5 bg-slate-50 shadow-sm transition-all duration-700 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_0_34px_rgba(79,140,255,0.2)] dark:border-white/10 dark:bg-white/5">
                  {plan.icon}
                </div>
                <h3 className="font-heading mb-3 xl:mb-4 text-[1.35rem] lg:text-[1.4rem] xl:text-[1.55rem] 2xl:text-3xl font-bold uppercase leading-none tracking-tight text-slate-950 dark:text-white">{plan.name}</h3>
                <p className="text-xs font-light leading-relaxed tracking-tight text-slate-600 dark:text-gray-400">{plan.tagline}</p>
              </div>

              <div className="mb-10 xl:mb-11 2xl:mb-12 h-20">
                <span className="flex items-baseline gap-2 text-[2.25rem] lg:text-[2.3rem] xl:text-[2.6rem] 2xl:text-5xl font-black uppercase leading-none tracking-tighter text-slate-950 dark:text-white">
                  {typeof plan.monthly === 'number' && <span className="text-lg font-light tracking-widest text-primary">$</span>}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isAnnual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.5 }}
                    >
                      {isAnnual ? plan.annual : plan.monthly}
                    </motion.span>
                  </AnimatePresence>
                  {typeof plan.monthly === 'number' && <span className="text-[10px] xl:text-xs font-light tracking-[0.18em] opacity-40">/ Month</span>}
                </span>
              </div>

              <ul className="mb-10 xl:mb-11 2xl:mb-12 flex flex-grow flex-col gap-4 xl:gap-[1.1rem] 2xl:gap-5">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className={`flex items-start gap-4 text-xs font-medium tracking-tight ${feature.included ? 'text-slate-700 dark:text-slate-300' : 'opacity-20'}`}>
                    {feature.included ? <Check className="h-4 w-4 shrink-0 text-primary" /> : <X className="h-4 w-4 shrink-0" />}
                    <span className={feature.included ? '' : 'line-through'}>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="block w-full">
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className={`group/btn w-full justify-center rounded-full py-4 xl:py-[1.1rem] 2xl:py-5 text-[12px] xl:text-sm font-black uppercase tracking-[0.18em] shadow-xl ${plan.popular ? 'bg-primary text-white' : 'border-primary text-primary hover:bg-primary/5'}`}
                >
                  Connect Us
                  <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-2" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
