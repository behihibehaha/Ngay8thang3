import { useMemo } from 'react';
import './FloatingPetals.css';

const PETAL_COUNT = 20;

export default function FloatingPetals() {
  const petals = useMemo(() => {
    return Array.from({ length: PETAL_COUNT }, (_, i) => {
      const size = 8 + Math.random() * 16;
      const left = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = 10 + Math.random() * 15;
      const drift = -30 + Math.random() * 60;
      const opacity = 0.15 + Math.random() * 0.35;
      const rotation = Math.random() * 360;
      const type = i % 3; // 0 = petal, 1 = circle, 2 = heart

      return { id: i, size, left, delay, duration, drift, opacity, rotation, type };
    });
  }, []);

  return (
    <div className="floating-petals" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className={`petal petal-type-${p.type}`}
          style={{
            '--size': `${p.size}px`,
            '--left': `${p.left}%`,
            '--delay': `${p.delay}s`,
            '--duration': `${p.duration}s`,
            '--drift': `${p.drift}px`,
            '--opacity': p.opacity,
            '--rotation': `${p.rotation}deg`,
          }}
        />
      ))}
    </div>
  );
}
