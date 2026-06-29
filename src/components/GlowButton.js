import React, { useRef } from 'react';
import './GlowButton.css';
import { Link } from 'react-router-dom';

const GlowButton = ({ to, children }) => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btn.style.setProperty("--mouseX", x + "px");
    btn.style.setProperty("--mouseY", y + "px");
  };

  return (
    <Link to={to} className="glow-btn" ref={btnRef} onMouseMove={handleMouseMove}>
      <div className="glow-inner"></div>
      <span>{children}</span>
    </Link>
  );
};

export default GlowButton;