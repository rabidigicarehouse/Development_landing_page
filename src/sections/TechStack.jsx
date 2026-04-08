import React from 'react';

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'GraphQL',
  'Docker',
  'AWS',
  'Firebase',
  'Shopify',
  'React Native',
  'Tailwind',
  'Prisma',
  'Playwright',
];

const TechStack = () => {
  const list = [...technologies, ...technologies];

  return (
    <section className="section overflow-hidden border-y border-black/[0.1] bg-slate-50 py-16 xl:py-[4.5rem] 2xl:py-20 dark:border-white/[0.05] dark:bg-dark-bg" id="tech">
      <div className="flex items-center space-x-12 whitespace-nowrap animate-marquee">
        {list.map((tech, idx) => (
          <div key={idx} className="flex items-center justify-center">
            <span className="px-9 xl:px-10 2xl:px-12 font-heading text-3xl font-black uppercase tracking-tighter text-slate-300 transition-all duration-700 hover:text-primary dark:text-white/10 dark:hover:text-primary md:text-5xl xl:text-[2.8rem] 2xl:text-5xl">
              {tech}
            </span>
            <span className="mx-6 text-5xl text-secondary opacity-30">&bull;</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
