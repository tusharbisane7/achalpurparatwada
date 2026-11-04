
import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Building2,
  CalendarDays,
  Users,
  PlusCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { services, news, places } from '../../data/siteData.js';
import ServiceCard from '../../components/ServiceCard/ServiceCard.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import NewsCard from '../../components/NewsCard/NewsCard.jsx';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';

import './Home.scss';

const heroWords = [
  'Paratwada',
  'Your Digital Region',
  'आपली ओळख!'
];

function useTypewriter(words, typingSpeed = 100, deletingSpeed = 55, pause = 1800) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!deleting && text === currentWord) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((previous) => (previous + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          deleting
            ? currentWord.substring(0, text.length - 1)
            : currentWord.substring(0, text.length + 1)
        );
      }, deleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function Home() {
  const animatedWord = useTypewriter(heroWords);

  return (
    <>
      {/* =================================
          HERO SECTION
      ================================== */}

      <section className="home-hero">

        <div className="home-hero-background" />
        <div className="hero-shade" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-ring hero-ring-one" />
        <div className="hero-ring hero-ring-two" />

        <div className="container hero-content">

          <span className="hero-kicker">
            <span className="hero-kicker-dot" />
            WELCOME TO YOUR REGION
          </span>

          <h1>
            Achalpur <em>{animatedWord}</em>
            <span className="home-typewriter-cursor">|</span>
          </h1>

          <h2>
            Your local digital information & citizen service portal
          </h2>

          <p className="hero-marathi">
            आपले शहर, आपली माहिती, आपली सेवा!
          </p>

          <div className="hero-search-wrapper">
            <SearchBar />
          </div>

          <div className="hero-pills">
            <span>
              <ShieldCheck size={16} />
              Verified local information
            </span>

            <span>
              <MapPin size={16} />
              Local services & places
            </span>
          </div>

          <div className="hero-scroll-indicator">
            <span />
            Discover your region
          </div>

        </div>

        <div className="hero-bottom-wave" />

      </section>

      {/* =================================
          MAIN CONTENT
      ================================== */}

      <div className="container home-main">

        {/* QUICK ACCESS */}

        <div className="quick-strip">
          {services.slice(0, 6).map((item, index) => (
            <Link
              key={item.title}
              to={item.path}
              className="quick-strip-item"
              style={{ '--item-index': index }}
            >
              <span className="quick-icon">
                <item.icon />
              </span>
              <span>{item.title}</span>
              <ArrowRight className="quick-arrow" size={14} />
            </Link>
          ))}
        </div>

        {/* SERVICES */}

        <section className="service-section">

          <SectionTitle
            title="Explore Services"
            action={{
              label: 'View all services',
              href: '/government'
            }}
          />

          <div className="service-grid">
            {services.map((item, index) => (
              <div
                className="service-grid-item"
                key={item.title}
                style={{ '--item-index': index }}
              >
                <ServiceCard item={item} />
              </div>
            ))}
          </div>

        </section>

        {/* NEWS AND QUICK LINKS */}

        <section className="home-feature-grid">

          <div className="panel news-panel">

            <SectionTitle
              title="Latest Local Updates"
              action={{
                label: 'View all news',
                href: '/news'
              }}
            />

            <div className="news-list">
              {news.map((item, index) => (
                <div
                  className="news-list-item"
                  key={index}
                  style={{ '--item-index': index }}
                >
                  <NewsCard item={item} />
                </div>
              ))}
            </div>

          </div>

          <div className="panel quick-panel">

            <SectionTitle title="Quick Access" />

            <Link to="/government">
              <Building2 />
              <span>Aaple Sarkar & Setu Services</span>
              <ArrowRight />
            </Link>

            <Link to="/offices">
              <MapPin />
              <span>Government office directory</span>
              <ArrowRight />
            </Link>

            <Link to="/transport">
              <CalendarDays />
              <span>Bus stations & timetable</span>
              <ArrowRight />
            </Link>

            <Link to="/complaints">
              <ShieldCheck />
              <span>Submit a civic complaint</span>
              <ArrowRight />
            </Link>

            <Link to="/business" className="add-listing">
              <PlusCircle />
              <span>Add your business</span>
              <ArrowRight />
            </Link>

          </div>

        </section>

        {/* COMMUNITY BANNER */}

        <section className="join-banner">

          <div className="join-banner-content">

            <span className="hero-kicker">
              GROW WITH YOUR COMMUNITY
            </span>

            <h2>
              Are you a local business, hospital or institution?
            </h2>

            <p>
              Add your listing and help residents discover your services.
            </p>

            <Link to="/business">
              Register your listing
              <ArrowRight size={17} />
            </Link>

          </div>

          <div className="join-art">
            <div className="join-art-circle">
              <Users size={78} />
            </div>
            <span className="join-art-dot dot-one" />
            <span className="join-art-dot dot-two" />
            <span className="join-art-dot dot-three" />
          </div>

        </section>

        {/* PLACES */}

        <section className="places-section">

          <SectionTitle
            title="Explore Our Region"
            action={{
              label: 'Explore tourism',
              href: '/tourism'
            }}
          />

          <div className="place-grid">

            {places.map((place, index) => (
              <Link
                to="/tourism"
                className="place-card"
                key={place.name}
                style={{
                  backgroundImage: `
                    linear-gradient(
                      0deg,
                      rgba(3, 24, 45, .94),
                      rgba(3, 24, 45, .05) 85%
                    ),
                    url("${place.image}")
                  `,
                  '--item-index': index
                }}
              >

                <span className="place-card-label">
                  DISCOVER
                </span>

                <div className="place-card-content">
                  <strong>{place.name}</strong>
                  <span>{place.text}</span>
                </div>

                <span className="place-card-arrow">
                  <ArrowRight size={17} />
                </span>

              </Link>
            ))}

          </div>

        </section>

        {/* STATS */}

        <section className="stats-row">

          <div>
            <span className="stats-icon">
              <GlobeIcon />
            </span>
            <strong>One portal</strong>
            <span>For local information</span>
          </div>

          <div>
            <span className="stats-icon">
              <Building2 />
            </span>
            <strong>Many services</strong>
            <span>Across our region</span>
          </div>

          <div>
            <span className="stats-icon">
              <Users />
            </span>
            <strong>Community first</strong>
            <span>Built for residents</span>
          </div>

        </section>

      </div>
    </>
  );
}

function GlobeIcon() {
  return <MapPin />;
}
