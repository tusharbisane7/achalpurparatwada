import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  MapPin,
  CalendarDays,
  Search,
  Menu,
  X,
  UserRound,
  ChevronDown,
  Languages
} from 'lucide-react';

import './Header.scss';

const links = [
  ['Government', '/government'],
  ['Healthcare', '/healthcare'],
  ['Education', '/education'],
  ['Business', '/business'],
  ['Jobs', '/jobs'],
  ['News', '/news'],
  ['Tourism', '/tourism'],
  ['More', '/transport']
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('English');

  const toggleLanguage = () => {
    setLang((current) =>
      current === 'English' ? 'मराठी' : 'English'
    );
  };

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">

      {/* Top Utility Bar */}
      <div className="utility-bar">
        <div className="container utility-inner">

          <span className="utility-location">
            <MapPin size={14} />
            Achalpur – Paratwada, Maharashtra
          </span>

          <span className="utility-date">
            <CalendarDays size={14} />
            Local Information Portal
          </span>

          <div className="utility-links">

            <Link to="/government">
              Aaple Sarkar
            </Link>

            <Link to="/offices">
              Government Offices
            </Link>

            <Link to="/business">
              Add Your Business
            </Link>

            <button
              className="language-button"
              onClick={toggleLanguage}
              aria-label="Change language"
            >
              <Languages size={15} />
              {lang}
            </button>

          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header container">

        {/* Brand Logo */}
        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
          aria-label="Achalpur Paratwada homepage"
        >

          <div className="brand-logo-wrapper">
            <img
              src="/images/achalpur-paratwada-logo.png"
              alt="Achalpur Paratwada Logo"
              className="brand-logo"
            />
          </div>

          <span className="brand-text">
            <strong>Achalpur Paratwada</strong>
            <small>Digital Regional Portal</small>
          </span>

        </Link>

        {/* Marathi Tagline */}
        <div className="brand-tagline">
          <span>आपले शहर,</span>
          <span>आपली डिजिटल ओळख!</span>
        </div>

        {/* Navigation */}
        <nav
          className={`primary-nav ${open ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >

          {links.map(([label, path]) => (
            <NavLink
              key={label}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              <span>{label}</span>

              {[
                'Government',
                'Healthcare',
                'Education',
                'Business',
                'More'
              ].includes(label) && (
                <ChevronDown size={13} className="nav-chevron" />
              )}
            </NavLink>
          ))}

        </nav>

        {/* Header Actions */}
        <div className="header-actions">

          <button
            className="icon-button"
            aria-label="Search"
            onClick={() =>
              window.dispatchEvent(new Event('portal-open-search'))
            }
          >
            <Search size={19} />
          </button>

          <Link
            className="login-button"
            to="/login"
            onClick={closeMenu}
          >
            <UserRound size={16} />
            <span>Login / Register</span>
          </Link>

          <button
            className="mobile-menu"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>

        </div>
      </div>
    </header>
  );
}