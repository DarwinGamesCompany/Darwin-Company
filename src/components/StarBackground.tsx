import React, { useMemo } from 'react';

export function StarBackground() {
  const stars = useMemo(() => {
    const generated = [];
    // Generate small dots
    for (let i = 0; i < 150; i++) {
      generated.push({
        id: `dot-${i}`,
        type: 'dot',
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1, // 1px to 3px
        opacity: Math.random() * 0.8 + 0.2,
      });
    }
    // Generate 7-pointed stars
    for (let i = 0; i < 35; i++) {
      generated.push({
        id: `star7-${i}`,
        type: 'star7',
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 15 + 10, // 10px to 25px
        opacity: Math.random() * 0.6 + 0.2,
        rotation: Math.random() * 360,
      });
    }
    return generated;
  }, []);

  const getStarPoints = () => {
    const points = [];
    const cx = 50, cy = 50;
    const outerRadius = 45;
    const innerRadius = 18; // Adjust for sharpness
    for (let i = 0; i < 14; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i * Math.PI) / 7 - Math.PI / 2;
      points.push(`${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`);
    }
    return points.join(' ');
  };

  const starPolygon = getStarPoints();

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star) => {
        if (star.type === 'dot') {
          return (
            <div
              key={star.id}
              className="absolute bg-white rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
              }}
            />
          );
        } else {
          return (
            <svg
              key={star.id}
              viewBox="0 0 100 100"
              className="absolute text-white fill-current"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                transform: `rotate(${star.rotation}deg)`,
              }}
            >
              <polygon points={starPolygon} />
            </svg>
          );
        }
      })}
    </div>
  );
}
