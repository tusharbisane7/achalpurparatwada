
import React, { useEffect, useState } from 'react';
import {
  Construction,
  Clock3,
  MapPin,
  Sparkles,
  ArrowUpRight,
  X,
  Globe,
} from 'lucide-react';
import './MaintenancePopup.scss';

export default function MaintenancePopup() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="maintenance-overlay">
      <div
        className="maintenance-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="maintenance-title"
      >
        <button
          type="button"
          className="maintenance-close"
          onClick={closePopup}
          aria-label="Close maintenance popup"
          title="Close"
        >
          <X size={21} />
        </button>

        <div className="maintenance-glow maintenance-glow--one" />
        <div className="maintenance-glow maintenance-glow--two" />

        <div className="maintenance-content">
          <div className="maintenance-brand">
            <span className="maintenance-brand__icon">
              <MapPin size={23} />
            </span>
            <span>
              ACHALPUR <strong>PARATWADA</strong>
            </span>
          </div>

          <div className="maintenance-illustration">
            <div className="maintenance-orbit maintenance-orbit--one" />
            <div className="maintenance-orbit maintenance-orbit--two" />

            <div className="maintenance-icon">
              <Construction size={55} strokeWidth={1.5} />
            </div>

            <span className="maintenance-spark maintenance-spark--one">
              <Sparkles size={20} />
            </span>

            <span className="maintenance-spark maintenance-spark--two">
              <Sparkles size={15} />
            </span>
          </div>

          <span className="maintenance-label">
            <span className="maintenance-status-dot" />
            WEBSITE UNDER MAINTENANCE
          </span>

          <h1 id="maintenance-title">
            Something <span>amazing</span>
            <br />
            is coming soon!
          </h1>

          <p className="maintenance-description">
            We're working behind the scenes to bring Achalpur and
            Paratwada a better digital experience.
          </p>

          <div className="maintenance-progress">
            <div className="maintenance-progress__heading">
              <span>Building something special</span>
              <Clock3 size={16} />
            </div>

            <div className="maintenance-progress__track">
              <span />
            </div>

            <p>Our website will be live soon.</p>
          </div>

          <button
            type="button"
            className="maintenance-explore"
            onClick={closePopup}
          >
            <Globe size={18} />
            Explore Website
            <ArrowUpRight size={17} />
          </button>

          <p className="maintenance-note">
            Explore our website while we're working on it.
          </p>

          <div className="maintenance-divider" />

          <div className="maintenance-footer">
            <span>DESIGNED & DEVELOPED BY</span>

            <a
              href="https://vyntaralabs.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="maintenance-developer"
            >
              VYNTARA TECHNOLOGIES
              <ArrowUpRight size={16} />
            </a>

            <p>Building digital experiences for tomorrow.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
