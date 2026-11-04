
import React, { useMemo, useState } from 'react';
import {
  Search, MapPin, ShieldCheck, ArrowRight, GraduationCap,
  BookOpen, Bell, Download, School, Building2, FlaskConical,
  Stethoscope, BriefcaseBusiness, Filter, ExternalLink, Users,
  Landmark, X
} from 'lucide-react';

import PageHero from '../../components/PageHero/PageHero.jsx';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import { educationCategories } from '../../data/siteData.js';
import './Education.scss';

const institutes = [
  // Achalpur – Paratwada schools
  { name: 'Z P Pri Girls School Paratwada', category: 'Schools', location: 'Achalpur – Paratwada', area: 'Achalpur', type: 'School', board: 'State Board', verified: true },
  { name: 'Maharashtra Urdu Primary School', category: 'Schools', location: 'Achalpur', area: 'Achalpur', type: 'School', board: 'State Board', verified: true },
  { name: 'N P Urdu Secondary School Paratwada', category: 'Schools', location: 'Paratwada', area: 'Achalpur', type: 'School', board: 'State Board', verified: true },
  { name: 'Sharada Primary Marathi School Paratwada', category: 'Schools', location: 'Paratwada', area: 'Achalpur', type: 'School', board: 'State Board', verified: true },
  { name: 'Raja Shivaji Vidyalaya Achalpur', category: 'Schools', location: 'Achalpur', area: 'Achalpur', type: 'School', board: 'State Board', verified: true },
  { name: 'Fatima Convent Primary School', category: 'Schools', location: 'Achalpur', area: 'Achalpur', type: 'School', board: 'School listing', verified: false },
  { name: 'Rahmaniya Girls High School', category: 'Schools', location: 'Achalpur', area: 'Achalpur', type: 'School', board: 'State Board', verified: true },
  { name: 'Gaji Urdu High School Achalpur', category: 'Schools', location: 'Achalpur', area: 'Achalpur', type: 'School', board: 'State Board', verified: true },
  { name: 'Jagdamba Vidyalaya Achalpur', category: 'Schools', location: 'Achalpur', area: 'Achalpur', type: 'School', board: 'State Board', verified: true },
  { name: 'Siddhartha Vidyalaya & Junior College', category: 'Junior Colleges', location: 'Paratwada', area: 'Achalpur', type: 'Junior College', board: 'State Board', verified: true },

  // Achalpur – colleges
  { name: 'B. S. Patil College', category: 'Arts & Commerce', location: 'Achalpur', area: 'Achalpur', type: 'Degree College', board: 'SGBAU listing', verified: true },

  // Amravati – engineering
  { name: 'Government College of Engineering, Amravati', category: 'Engineering', location: 'Kathora, Amravati', area: 'Amravati City', type: 'Engineering College', board: 'Government', verified: true },
  { name: 'Sipna College of Engineering & Technology', category: 'Engineering', location: 'Badnera Road, Amravati', area: 'Amravati City', type: 'Engineering College', board: 'SGBAU', verified: true },
  { name: 'P. R. Pote Patil College of Engineering & Management', category: 'Engineering', location: 'Kathora Road, Amravati', area: 'Amravati City', type: 'Engineering College', board: 'Autonomous', verified: true },
  { name: 'Prof. Ram Meghe College of Engineering & Management', category: 'Engineering', location: 'Badnera, Amravati', area: 'Amravati City', type: 'Engineering College', board: 'Engineering', verified: true },
  { name: 'Shri H. V. P. Mandal College of Engineering & Technology', category: 'Engineering', location: 'Hanuman Vyayam Nagar, Amravati', area: 'Amravati City', type: 'Engineering College', board: 'Engineering', verified: true },
  { name: 'G. H. Raisoni College of Engineering & Management', category: 'Engineering', location: 'Amravati', area: 'Amravati City', type: 'Engineering College', board: 'Engineering', verified: true },
  { name: 'IBSS College of Engineering', category: 'Engineering', location: 'Mardi Road, Amravati', area: 'Amravati City', type: 'Engineering College', board: 'Engineering', verified: true },

  // Amravati – pharmacy
  { name: 'Government College of Pharmacy', category: 'Pharmacy', location: 'Kathora Naka, Amravati', area: 'Amravati City', type: 'Pharmacy College', board: 'Government', verified: true },
  { name: 'P. R. Pote Patil College of Pharmacy', category: 'Pharmacy', location: 'Kathora, Amravati', area: 'Amravati City', type: 'Pharmacy College', board: 'Pharmacy', verified: true },
  { name: 'Institute of Pharmacy & Research, Badnera', category: 'Pharmacy', location: 'Badnera, Amravati', area: 'Amravati City', type: 'Pharmacy College', board: 'Pharmacy', verified: true },
  { name: 'G. H. Raisoni School of Pharmacy', category: 'Pharmacy', location: 'Badnera, Amravati', area: 'Amravati City', type: 'Pharmacy College', board: 'Pharmacy', verified: true },
  { name: 'Dr. Rajendra Gode Institute of Pharmacy', category: 'Pharmacy', location: 'Mardi Road, Amravati', area: 'Amravati City', type: 'Pharmacy College', board: 'Pharmacy', verified: true },

  // Amravati – general degree colleges
  { name: 'Bharatiya Mahavidyalaya', category: 'Arts & Commerce', location: 'Ambadevi Road, Amravati', area: 'Amravati City', type: 'Degree College', board: 'SGBAU listing', verified: true },
  { name: 'Brijlal Biyani Science College', category: 'Science', location: 'Amravati', area: 'Amravati City', type: 'Degree College', board: 'SGBAU listing', verified: true },
  { name: 'Shri Shivaji Science College', category: 'Science', location: 'Gadge Nagar, Amravati', area: 'Amravati City', type: 'Degree College', board: 'SGBAU', verified: true },
  { name: 'Vidya Bharati Mahavidyalaya', category: 'Arts & Commerce', location: 'Amravati', area: 'Amravati City', type: 'Degree College', board: 'SGBAU', verified: true },
  { name: 'Government Vidarbha Institute of Science & Humanities', category: 'Science', location: 'VMV Road, Amravati', area: 'Amravati City', type: 'Degree College', board: 'Government', verified: true },
  { name: 'Takshashila Mahavidyalaya', category: 'Arts & Commerce', location: 'Shyam Nagar, Amravati', area: 'Amravati City', type: 'Degree College', board: 'SGBAU', verified: true },
  { name: 'Shri Shivaji Arts & Commerce College', category: 'Arts & Commerce', location: 'Amravati', area: 'Amravati City', type: 'Degree College', board: 'SGBAU listing', verified: true },

  // Schools in Amravati
  { name: 'Podar International School – Kathora Road', category: 'Schools', location: 'Kathora Road, Amravati', area: 'Amravati City', type: 'School', board: 'CBSE', verified: true },
  { name: 'Podar International School – Badnera Road', category: 'Schools', location: 'Badnera Road, Amravati', area: 'Amravati City', type: 'School', board: 'CBSE', verified: true },
  { name: 'Delhi Public School Amravati', category: 'Schools', location: 'Saturna, Amravati', area: 'Amravati City', type: 'School', board: 'CBSE', verified: true },
  { name: 'Jawahar Navodaya Vidyalaya', category: 'Schools', location: 'VMV Road, Amravati', area: 'Amravati City', type: 'School', board: 'CBSE', verified: true },
  { name: 'Birla Open Minds International School', category: 'Schools', location: 'Rewasa, Amravati', area: 'Amravati City', type: 'School', board: 'School listing', verified: true }
];

const categories = [
  { label: 'All Institutes', icon: Building2 },
  { label: 'Schools', icon: School },
  { label: 'Junior Colleges', icon: GraduationCap },
  { label: 'Engineering', icon: FlaskConical },
  { label: 'Pharmacy', icon: BriefcaseBusiness },
  { label: 'Nursing', icon: Stethoscope },
  { label: 'Arts & Commerce', icon: BookOpen },
  { label: 'Science', icon: FlaskConical }
];

const shortcuts = [
  { label: 'Schools', icon: School, category: 'Schools' },
  { label: 'Colleges', icon: GraduationCap, category: 'All Institutes' },
  { label: 'Engineering', icon: FlaskConical, category: 'Engineering' },
  { label: 'Pharmacy & Nursing', icon: Stethoscope, category: 'Pharmacy' },
  { label: 'Scholarships', icon: BookOpen, category: 'Scholarships' }
];

const officialLinks = [
  { label: 'MahaDBT Scholarship Portal', url: 'https://mahadbt.maharashtra.gov.in/', note: 'Scholarship applications and renewals' },
  { label: 'UDISE+ School Information', url: 'https://udiseplus.gov.in/', note: 'School directory and education data' },
  { label: 'Amravati District College Directory', url: 'https://amravati.gov.in/en/public-utility-category/colleges/', note: 'District administration listing' },
  { label: 'Joint Director Technical Education, Amravati', url: 'https://jdroamt.org/', note: 'Engineering and pharmacy institute lists' },
  { label: 'Sant Gadge Baba Amravati University', url: 'https://sgbau.ac.in/', note: 'University and affiliated college resources' }
];

export default function Education() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All Institutes');
  const [area, setArea] = useState('All Areas');
  const [showFilters, setShowFilters] = useState(false);

  const filteredInstitutes = useMemo(() => {
    const search = query.trim().toLowerCase();

    return institutes.filter((item) => {
      const matchesCategory =
        category === 'All Institutes' || item.category === category;

      const matchesArea =
        area === 'All Areas' ||
        (area === 'Achalpur – Paratwada'
          ? item.area === 'Achalpur'
          : item.area === 'Amravati City');

      const matchesSearch =
        !search ||
        `${item.name} ${item.category} ${item.location} ${item.board}`
          .toLowerCase()
          .includes(search);

      return matchesCategory && matchesArea && matchesSearch;
    });
  }, [query, category, area]);

  const counts = useMemo(() => ({
    total: institutes.length,
    schools: institutes.filter(x => x.category === 'Schools').length,
    colleges: institutes.filter(x => x.category !== 'Schools').length,
    engineering: institutes.filter(x => x.category === 'Engineering').length,
    pharmacy: institutes.filter(x => x.category === 'Pharmacy').length
  }), []);

  const selectShortcut = (value) => {
    setCategory(value);
    setQuery('');
    document.getElementById('institute-directory')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <PageHero
        eyebrow="Student & institute resources"
        title="Education Hub"
        description="Explore schools, colleges, professional courses, scholarships and educational opportunities across Achalpur, Paratwada and Amravati."
        image="https://images.unsplash.com/photo-1562774053-701939374585?w=1800&q=85"
      />

      <main className="container subpage-wrap education-page">

        <section className="education-welcome">
          <div>
            <span className="education-eyebrow">LEARN • GROW • ACHIEVE</span>
            <h2>Find the right place for your <span>future.</span></h2>
            <p>One regional directory for students, parents and educational institutions.</p>
          </div>
          <div className="education-welcome-icon"><GraduationCap /></div>
        </section>

        <section className="education-stats" aria-label="Directory statistics">
          <div className="education-stat">
            <span className="stat-icon"><Building2 /></span>
            <div><strong>{counts.total}</strong><small>Listed institutes</small></div>
          </div>
          <div className="education-stat">
            <span className="stat-icon"><School /></span>
            <div><strong>{counts.schools}</strong><small>School records</small></div>
          </div>
          <div className="education-stat">
            <span className="stat-icon"><GraduationCap /></span>
            <div><strong>{counts.colleges}</strong><small>College records</small></div>
          </div>
          <div className="education-stat">
            <span className="stat-icon"><FlaskConical /></span>
            <div><strong>{counts.engineering + counts.pharmacy}</strong><small>Professional institutes</small></div>
          </div>
        </section>

        <section className="education-shortcuts">
          {shortcuts.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="education-shortcut"
                style={{ '--delay': `${index * 70}ms` }}
                onClick={() => selectShortcut(item.category)}
              >
                <span><Icon /></span>
                <strong>{item.label}</strong>
                <ArrowRight className="shortcut-arrow" />
              </button>
            );
          })}
        </section>

        <div className="education-layout">
          <section className="education-main">

            <div className="education-search">
              <div className="education-search-heading">
                <div>
                  <span>INSTITUTE FINDER</span>
                  <h2>Search educational institutes</h2>
                  <p>Search by name, stream, course or location.</p>
                </div>
                <Search />
              </div>

              <div className="education-search-controls">
                <div className="education-input-wrap">
                  <Search />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Try: engineering, pharmacy, school..."
                    aria-label="Search educational institutes"
                  />
                  {query && (
                    <button
                      className="clear-search"
                      onClick={() => setQuery('')}
                      aria-label="Clear search"
                    >
                      <X />
                    </button>
                  )}
                </div>

                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  aria-label="Filter by location"
                >
                  <option>All Areas</option>
                  <option>Achalpur – Paratwada</option>
                  <option>Amravati City</option>
                </select>

                <button
                  className="filter-toggle"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter /> Categories
                </button>
              </div>

              {showFilters && (
                <div className="education-filter-panel">
                  {categories.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.label}
                        className={category === item.label ? 'active' : ''}
                        onClick={() => {
                          setCategory(item.label);
                          setShowFilters(false);
                        }}
                      >
                        <Icon size={15} /> {item.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="education-category-heading">
              <SectionTitle title="Explore education categories" />
              <span>Choose your stream</span>
            </div>

            <div className="education-categories">
              {educationCategories.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.title}
                    className="education-category-card"
                    style={{ '--delay': `${index * 55}ms` }}
                    onClick={() => {
                      const match = categories.find(x =>
                        x.label.toLowerCase().includes(item.title.toLowerCase())
                      );
                      if (match) setCategory(match.label);
                    }}
                  >
                    <span className="category-icon"><Icon /></span>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                    <ArrowRight className="category-arrow" />
                  </button>
                );
              })}
            </div>

            <section id="institute-directory" className="institute-section">
              <div className="directory-heading">
                <div>
                  <span className="education-eyebrow">DISCOVER INSTITUTES</span>
                  <h2>Institute Directory</h2>
                  <p>Browse the currently listed educational institutes.</p>
                </div>
                <span className="result-count">{filteredInstitutes.length} records</span>
              </div>

              <div className="active-filters">
                <button
                  className={category === 'All Institutes' ? 'active' : ''}
                  onClick={() => setCategory('All Institutes')}
                >All</button>
                {categories.slice(1).map(item => (
                  <button
                    key={item.label}
                    className={category === item.label ? 'active' : ''}
                    onClick={() => setCategory(item.label)}
                  >{item.label}</button>
                ))}
              </div>

              {filteredInstitutes.length > 0 ? (
                <div className="institute-grid">
                  {filteredInstitutes.map((item, index) => (
                    <article
                      className="institute-card"
                      key={item.name}
                      style={{ '--delay': `${Math.min(index, 12) * 45}ms` }}
                    >
                      <div className="institute-card-top">
                        <span className="institute-type-icon">
                          {item.category === 'Schools' ? <School /> :
                           item.category === 'Engineering' ? <FlaskConical /> :
                           item.category === 'Pharmacy' ? <BriefcaseBusiness /> :
                           <GraduationCap />}
                        </span>
                        <span className="institute-category">{item.category}</span>
                      </div>

                      <div className="institute-card-body">
                        <span className={item.verified ? 'listing-status verified' : 'listing-status'}>
                          <ShieldCheck size={13} />
                          {item.verified ? 'Directory source found' : 'Needs verification'}
                        </span>
                        <h3>{item.name}</h3>
                        <p className="institute-location"><MapPin /> {item.location}</p>
                        <div className="institute-card-footer">
                          <span>{item.board}</span>
                          <button
                            onClick={() => window.open(
                              `https://www.google.com/search?q=${encodeURIComponent(item.name + ' ' + item.location)}`,
                              '_blank',
                              'noopener,noreferrer'
                            )}
                          >
                            Details <ArrowRight />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="education-empty">
                  <Search />
                  <h3>No matching institutes found</h3>
                  <p>Try another search term or change your filters.</p>
                  <button onClick={() => {
                    setQuery('');
                    setCategory('All Institutes');
                    setArea('All Areas');
                  }}>Clear filters</button>
                </div>
              )}
            </section>
          </section>

          <aside className="education-side">
            <div className="info-panel">
              <div className="side-panel-heading">
                <span><Landmark /></span>
                <div><h3>Official education links</h3><small>Government resources</small></div>
              </div>
              {officialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="official-link"
                >
                  <span><strong>{link.label}</strong><small>{link.note}</small></span>
                  <ExternalLink />
                </a>
              ))}
            </div>

            <div className="update-card">
              <div className="side-panel-heading">
                <span><Bell /></span>
                <div><h3>Student updates</h3><small>Important notices</small></div>
              </div>
              <div className="update-item"><span>01</span><p>Scholarship application and renewal notices</p></div>
              <div className="update-item"><span>02</span><p>College admission and counselling updates</p></div>
              <div className="update-item"><span>03</span><p>Board and university examination notifications</p></div>
              <small className="source-note">Updates will be published after source verification.</small>
            </div>

            <div className="scholarship-card">
              <span className="scholarship-icon"><BookOpen /></span>
              <span className="education-eyebrow">FINANCIAL SUPPORT</span>
              <h3>Scholarships for your education</h3>
              <p>Explore Maharashtra government scholarship schemes and application services.</p>
              <a href="https://mahadbt.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer">
                Explore MahaDBT <ArrowRight />
              </a>
            </div>

            <div className="education-register-card">
              <Users />
              <h3>Are you an institute?</h3>
              <p>Help students discover your school or college by submitting your details.</p>
              <a href="mailto:contact@achalpurparatwada.com?subject=Institute%20Directory%20Registration">
                Register your institute <ArrowRight />
              </a>
            </div>
          </aside>
        </div>

        <div className="education-disclaimer">
          <ShieldCheck />
          <p>
            <strong>Directory information:</strong> This is an independent regional information portal,
            not a government website. Listings are an initial research set and should be checked
            against the relevant board, university or regulator before admission decisions.
            Institutes can request corrections or verification.
          </p>
        </div>
      </main>
    </>
  );
}
