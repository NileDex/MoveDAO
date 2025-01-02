import { useState, useEffect } from 'react';
import './CSS/OrbitalMenu.css';

const OrbitalMenu = () => {
  const [rotation, setRotation] = useState(0);

  const menuItems = [
    {
      id: 1,
      orbit: 1,
      baseAngle: 45,
      label: 'Aptos',
      iconSrc: 'https://s2.coinmarketcap.com/static/img/coins/200x200/21794.png',
    },
    {
      id: 2,
      orbit: 1,
      baseAngle: 225,
      label: 'SUI',
      iconSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHilRvNz8dSEg5C9v3fj3OA1BJCe9iH4PVg&s',
    },
    {
      id: 3,
      orbit: 2,
      baseAngle: 90,
      label: 'Podium',
      iconSrc:
        'https://pbs.twimg.com/profile_images/1780620249450291200/Ay1jymLh_400x400.jpg',
    },
    {
      id: 4,
      orbit: 2,
      baseAngle: 270,
      label: 'Narwhal',
      iconSrc:
        'https://pbs.twimg.com/profile_images/1751202251836674048/kfnYQuS2_400x400.jpg',
    },
    {
      id: 5,
      orbit: 3,
      baseAngle: 135,
      label: 'Gorilla',
      iconSrc:
        'https://miro.medium.com/v2/resize:fit:2400/1*1QABIdoaCqI1kKyJoJiObA.png',
    },
  ];

  useEffect(() => {
    const animationFrame = requestAnimationFrame(function animate() {
      setRotation((prev) => (prev + 0.05) % 360); // Slower speed
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="orbital-menu">
      <div className="center-logo">
        <img
          src="https://miro.medium.com/v2/resize:fit:2400/1*nr1iwA9GvaP2B4VMZVc01Q.png"
          alt="ShapeShift"
        />
      </div>

      {[1, 2, 3].map((orbit) => (
        <div
          key={orbit}
          className="ring"
          style={{
            width: `${orbit * 120}px`, // Adjusted ring size for better responsiveness
            height: `${orbit * 120}px`,
          }}
        />
      ))}

      {menuItems.map((item) => {
        const orbitSpeed = 1 / item.orbit;
        const currentAngle = item.baseAngle + rotation * orbitSpeed;
        const radius = item.orbit * 60; // Adjusted for better responsiveness
        const size = 25 + item.orbit * 10; // Dynamic size based on orbit
        const x = Math.cos((currentAngle * Math.PI) / 180) * radius;
        const y = Math.sin((currentAngle * Math.PI) / 180) * radius;

        return (
          <div
            key={item.id}
            className="orbit-item"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            title={item.label}
          >
            <img
              src={item.iconSrc}
              alt={item.label}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OrbitalMenu;
