import React, { memo, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { handleScrollTo } from '../utils/scrollTo';
import video1 from '../assets/Animated_video/1.mp4';
import video2 from '../assets/Animated_video/2.mp4';
import video3 from '../assets/Animated_video/3.mp4';
import video4 from '../assets/Animated_video/4.mp4';

const ensureVideoPlayback = (video) => {
  if (!video) return;
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.defaultPlaybackRate = 1.5;
  video.playbackRate = 1.5;

  const playPromise = video.play();
  if (playPromise?.catch) {
    playPromise.catch(() => {});
  }
};

const projects = [
  {
    title: 'Atlas SaaS Core',
    category: 'Product Platform',
    video: video1,
  },
  {
    title: 'Checkout Engine',
    category: 'Commerce Stack',
    video: video2,
  },
  {
    title: 'PocketFlow App',
    category: 'Mobile Product',
    video: video3,
  },
  {
    title: 'CloudCore Infra',
    category: 'Backend Systems',
    video: video4,
  },
];

const PortfolioCard = memo(function PortfolioCard({ project, index }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(index < 2);
  const [isActive, setIsActive] = useState(index < 2);

  useEffect(() => {
    if (shouldLoad || !cardRef.current) return;

    const preloadObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          preloadObserver.disconnect();
        }
      },
      { rootMargin: '220px 0px' }
    );

    preloadObserver.observe(cardRef.current);
    return () => preloadObserver.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsActive(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.35 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!shouldLoad || !video) return;

    const applyPlayback = () => ensureVideoPlayback(video);
    const restartPlayback = () => {
      video.currentTime = 0;
      ensureVideoPlayback(video);
    };
    const syncVisibilityPlayback = () => {
      if (document.visibilityState === 'visible' && isActive) {
        applyPlayback();
      } else {
        video.pause();
      }
    };

    if (video.readyState >= 2 && isActive) {
      applyPlayback();
    } else {
      video.addEventListener('loadedmetadata', syncVisibilityPlayback);
    }

    video.addEventListener('canplay', syncVisibilityPlayback);
    video.addEventListener('playing', syncVisibilityPlayback);
    video.addEventListener('waiting', syncVisibilityPlayback);
    video.addEventListener('stalled', syncVisibilityPlayback);
    video.addEventListener('ended', restartPlayback);
    document.addEventListener('visibilitychange', syncVisibilityPlayback);

    syncVisibilityPlayback();

    return () => {
      video.removeEventListener('loadedmetadata', syncVisibilityPlayback);
      video.removeEventListener('canplay', syncVisibilityPlayback);
      video.removeEventListener('playing', syncVisibilityPlayback);
      video.removeEventListener('waiting', syncVisibilityPlayback);
      video.removeEventListener('stalled', syncVisibilityPlayback);
      video.removeEventListener('ended', restartPlayback);
      document.removeEventListener('visibilitychange', syncVisibilityPlayback);
      video.pause();
    };
  }, [shouldLoad, isActive]);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="cursor-video group relative aspect-[1.28/1] overflow-hidden rounded-[3.2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:border-white/8 dark:bg-[#0b1120]"
      style={{ contain: 'layout paint', transform: 'translateZ(0)' }}
    >
      {shouldLoad ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
          preload={index < 2 ? 'auto' : 'metadata'}
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload nofullscreen noremoteplayback"
          aria-hidden="true"
          style={{ willChange: 'transform', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(226,232,240,0.72),rgba(241,245,249,0.94))] dark:bg-[linear-gradient(135deg,rgba(11,17,32,0.98),rgba(15,23,42,0.84),rgba(11,17,32,0.98))]" />
      )}

      <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_22%_18%,rgba(79,140,255,0.08),transparent_22%),radial-gradient(circle_at_78%_24%,rgba(124,92,255,0.08),transparent_24%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-transparent via-transparent to-transparent dark:from-[#0b1120] dark:via-[#0b1120]/82 dark:to-transparent" />

      <div className="absolute right-6 top-6 flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white/88 text-slate-700 shadow-sm backdrop-blur-md transition-all duration-500 group-hover:text-primary dark:border-white/10 dark:bg-white/6 dark:text-white/80">
        <ArrowUpRight className="h-8 w-8 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
        <div className="mb-5 inline-flex items-center rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-700 dark:border-white/10 dark:bg-white/6 dark:text-white/78">
          {project.category}
        </div>
        <h3 className="font-heading w-full text-[2.3rem] font-black uppercase leading-[0.9] tracking-tighter text-white md:text-[3rem]">
          {project.title}
        </h3>
      </div>
    </motion.article>
  );
});

const Portfolio = () => {

  return (
    <section className="section overflow-hidden bg-slate-50 py-32 dark:bg-dark-bg" id="work">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading title="Shipped Systems" subtitle="Selected Build Work" />
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="group inline-flex items-center gap-3 self-start rounded-full border border-primary/20 bg-primary/5 px-7 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-primary transition-all duration-500 hover:bg-primary/10"
          >
            View More Builds <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <PortfolioCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
