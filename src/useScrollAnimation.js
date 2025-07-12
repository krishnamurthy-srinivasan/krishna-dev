import { useEffect } from 'react';

export default function useScrollAnimation(ref) {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add('opacity-100', 'translate-y-0');
          ref.current.classList.remove('opacity-0', 'translate-y-6');
        } else {
          ref.current.classList.remove('opacity-100', 'translate-y-0');
          ref.current.classList.add('opacity-0', 'translate-y-6');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}
