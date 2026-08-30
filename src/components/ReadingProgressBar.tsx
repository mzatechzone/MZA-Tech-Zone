import React, { useState, useEffect } from 'react';
import { useRouter } from '../router/RouterContext';

export const ReadingProgressBar: React.FC = () => {
  const { currentPath } = useRouter();
  const [progressRatio, setProgressRatio] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight || document.documentElement.clientHeight;
      const scrollableDistance = scrollHeight - clientHeight;

      if (scrollableDistance > 40) {
        const ratio = Math.min(1, Math.max(0, scrollTop / scrollableDistance));
        setProgressRatio(ratio);
        setIsVisible(scrollTop > 8);
      } else {
        setProgressRatio(0);
        setIsVisible(false);
      }
    };

    const handleScrollOrResize = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateScrollProgress);
    };

    // Calculate immediately and after short timeouts to account for page layout shifts
    updateScrollProgress();
    const timer1 = setTimeout(updateScrollProgress, 60);
    const timer2 = setTimeout(updateScrollProgress, 250);

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [currentPath]);

  return (
    <div
      id="reading-progress-track"
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-[70] h-[3px] pointer-events-none transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        id="reading-progress-bar"
        role="progressbar"
        aria-valuenow={Math.round(progressRatio * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
        className="h-full w-full origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_10px_rgba(34,211,238,0.65)] transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `scaleX(${progressRatio})`,
        }}
      />
    </div>
  );
};
