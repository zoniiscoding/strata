import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollStory() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      document.documentElement.classList.add('is-reduced-motion');
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.25,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 82%',
            },
          },
        );
      });

      gsap.utils.toArray('[data-parallax]').forEach((element) => {
        const depth = Number(element.dataset.parallax || 12);
        gsap.to(element, {
          yPercent: -depth,
          ease: 'none',
          scrollTrigger: {
            trigger: element.closest('section') || element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      });

      gsap.to('.hero__canvas', {
        autoAlpha: 0.48,
        scale: 1.04,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: '60% top',
          end: 'bottom top',
          scrub: 1.1,
        },
      });

      gsap.to('.navbar', {
        '--navbar-alpha': 0.9,
        scrollTrigger: {
          trigger: document.body,
          start: 'top -80',
          end: 'top -81',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => {
      context.revert();
    };
  }, []);
}
