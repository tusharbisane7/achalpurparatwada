import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Globe2
} from 'lucide-react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>
      <div className="footer-pattern"></div>

      <div className="container footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-brand-logo">
            <img
              src="/images/achalpur-paratwada-logo.png"
              alt="Achalpur Paratwada Logo"
              className="footer-logo-image"
            />
          </Link>

          <h2>Achalpur Paratwada</h2>
          <p className="footer-brand-subtitle">Digital Regional Portal</p>
          <p className="footer-marathi">
            आपले शहर, आपली डिजिटल ओळख!
          </p>
          <small>
            Connecting residents with local information,
            services and opportunities.
          </small>

          <div className="footer-community">
            <Globe2 size={15} />
            <span>Connecting Our Community</span>
          </div>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/government">Government Services</Link>
          <Link to="/healthcare">Healthcare Directory</Link>
          <Link to="/education">Schools & Colleges</Link>
          <Link to="/business">Local Businesses</Link>
          <Link to="/jobs">Jobs & Careers</Link>
        </div>

        <div className="footer-column">
          <h3>Discover</h3>
          <Link to="/news">Local News</Link>
          <Link to="/tourism">Tourism & Places</Link>
          <Link to="/transport">Bus Timetable</Link>
          <Link to="/offices">Government Offices</Link>
          <Link to="/marketplace">Buy & Sell</Link>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact & Support</h3>

          <p>
            <MapPin />
            <span>Achalpur – Paratwada, Maharashtra</span>
          </p>

          <p>
            <Mail />
            <a href="mailto:contact@achalpurparatwada.com">
              contact@achalpurparatwada.com
            </a>
          </p>

          <p>
            <Phone />
            <span>Contact details to be added</span>
          </p>

          <Link to="/complaints" className="footer-cta">
            Citizen Complaint Portal
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom-wrapper">
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Achalpur Paratwada.
            All rights reserved.
          </span>

          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#disclaimer">Disclaimer</a>
          </div>

          <span className="footer-made">
            Design by Tushar B
            <span className="footer-heart">♥</span>
          </span>
        </div>
      </div>
    </footer>
  );
}