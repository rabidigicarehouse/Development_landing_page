import React from 'react';
import { motion } from 'framer-motion';
import { Braces, Database, GitBranch, Search, ServerCog } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const steps = [
  { icon: <Search />, title: 'Audit', desc: 'Mapping product goals, technical debt, platform constraints, and delivery risks before code begins.' },
  { icon: <Braces />, title: 'Architecture', desc: 'Defining the stack, component boundaries, data flow, and development approach for long-term scale.' },
  { icon: <Database />, title: 'Data Layer', desc: 'Structuring schemas, APIs, permissions, and content models so the product behaves cleanly.' },
  { icon: <ServerCog />, title: 'Build', desc: 'Shipping the frontend, backend, integrations, and infrastructure as one coordinated system.' },
  { icon: <GitBranch />, title: 'Launch', desc: 'Testing, deploying, monitoring, and iterating so releases stay stable after handoff.' },
];

const Process = () => {
  return (
    <section className="section section-theme-teal flex min-h-screen items-center overflow-hidden" id="process">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container laptop-scale-section mx-auto flex w-full flex-col justify-center px-6">
        <SectionHeading subtitle="Engineering Delivery Framework" title="Built To Ship" centered />

        <div className="relative mt-10 xl:mt-12 2xl:mt-16">
          <div className="pointer-events-none absolute left-0 top-[60px] hidden w-full px-20 -z-0 lg:block">
            <div className="h-[1px] w-full border-t-2 border-dashed border-slate-200 opacity-30 dark:border-white/10" />
          </div>

          <div className="grid grid-cols-1 gap-6 xl:gap-7 2xl:gap-8 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.4, ease: 'easeOut' } }}
                className="group relative z-10 flex flex-col items-center overflow-hidden rounded-[2.5rem] xl:rounded-[2.7rem] 2xl:rounded-[3rem] border border-slate-200 bg-white p-6 xl:p-7 2xl:p-8 text-center shadow-xl transition-all duration-500 hover:border-primary/50 dark:border-white/5 dark:bg-dark-card/40"
              >
                <div className="absolute inset-x-0 bottom-0 h-1 scale-x-0 bg-primary transition-transform duration-700 group-hover:scale-x-100" />

                <div className="mb-6 xl:mb-7 2xl:mb-8 flex h-16 w-16 xl:h-[4.5rem] xl:w-[4.5rem] 2xl:h-20 2xl:w-20 items-center justify-center rounded-[1.4rem] xl:rounded-[1.6rem] 2xl:rounded-3xl border border-slate-200 bg-slate-50 text-slate-400 shadow-sm transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 group-hover:text-primary dark:border-white/10 dark:bg-white/5">
                  {React.cloneElement(step.icon, { className: 'h-8 w-8' })}
                </div>

                <h4 className="font-heading mb-3 xl:mb-4 text-[1.35rem] xl:text-[1.5rem] 2xl:text-2xl font-black uppercase leading-none tracking-tighter text-slate-900 dark:text-white">{step.title}</h4>
                <p className="text-[13px] xl:text-[13.5px] 2xl:text-sm font-light leading-relaxed tracking-tight text-slate-600 dark:text-gray-400">{step.desc}</p>
                <span className="absolute -right-2 -top-4 font-heading text-7xl font-black opacity-[0.03] transition-opacity group-hover:opacity-[0.06] dark:group-hover:opacity-[0.1]">0{idx + 1}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
