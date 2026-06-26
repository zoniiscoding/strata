import { useEffect, useRef } from 'react';
import './Cursor.css';

export function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const supportsCursor = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (!supportsCursor) {
      return undefined;
    }

    document.documentElement.classList.add('has-strata-cursor');

    const cursor = cursorRef.current;
    const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { x: position.x, y: position.y };
    let scale = 1;
    let targetScale = 1;
    let frameId;

    function updateTarget(event) {
      target.x = event.clientX;
      target.y = event.clientY;

      const hovered = document.elementFromPoint(event.clientX, event.clientY);
      const isInteractive = hovered?.closest('a, button, [data-cursor="interactive"]');
      const isScene = hovered?.closest('.hero__canvas, .hero');
      targetScale = isInteractive ? 1.8 : isScene ? 1.35 : 1;
      cursor?.classList.toggle('is-scene', Boolean(isScene));
    }

    function tick() {
      position.x += (target.x - position.x) * 0.16;
      position.y += (target.y - position.y) * 0.16;
      scale += (targetScale - scale) * 0.14;

      if (cursor) {
        cursor.style.transform = `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      frameId = requestAnimationFrame(tick);
    }

    window.addEventListener('pointermove', updateTarget);
    frameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', updateTarget);
      cancelAnimationFrame(frameId);
      document.documentElement.classList.remove('has-strata-cursor');
    };
  }, []);

  return <div className="strata-cursor" ref={cursorRef} aria-hidden="true" />;
}
