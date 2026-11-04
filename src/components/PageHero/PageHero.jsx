import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './PageHero.scss';

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  children
}) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!title) return;

    let timeout;

    const typingSpeed = isDeleting ? 45 : 85;

    if (!isDeleting && displayText === title) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2600);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    } else {
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? title.substring(0, displayText.length - 1)
          : title.substring(0, displayText.length + 1);

        setDisplayText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, title]);

  return (
    <section className="page-hero">

      {/* Background Image */}
      <div
        className="page-hero-background"
        style={{
          backgroundImage: `url("${image}")`
        }}
      />

      {/* Premium Overlay */}
      <div className="page-hero-overlay" />

      {/* Animated Light */}
      <div className="hero-light hero-light-one" />
      <div className="hero-light hero-light-two" />

      {/* Decorative Elements */}
      <div className="hero-decoration hero-decoration-one" />
      <div className="hero-decoration hero-decoration-two" />

      {/* Hero Content */}
      <div className="container page-hero-content">

        {eyebrow && (
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            {eyebrow}
          </div>
        )}

        <h1 className="hero-title">
          <span className="typewriter-text">
            {displayText}
          </span>
          <span className="typewriter-cursor">|</span>
        </h1>

        {description && (
          <p className="hero-description">
            {description}
          </p>
        )}

        {children && (
          <div className="hero-actions">
            {children}
          </div>
        )}

        <div className="hero-bottom-line">
          <span />
          <ArrowRight size={15} />
        </div>

      </div>

      {/* Bottom Shape */}
      <div className="hero-bottom-shape" />

    </section>
  );
}