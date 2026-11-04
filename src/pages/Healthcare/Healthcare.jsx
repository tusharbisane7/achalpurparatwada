
import React, { useMemo, useState } from 'react';
import {
  Search, MapPin, Phone, ShieldCheck, PlusCircle, ArrowRight,
  Clock3, Hospital, Stethoscope, FlaskConical, Pill, HeartPulse,
  Droplet, Building2, Navigation, ExternalLink, X, Ambulance,
  Filter
} from 'lucide-react';
import PageHero from '../../components/PageHero/PageHero.jsx';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import './Healthcare.scss';

const healthcareListings = [
  // ACHALPUR – PARATWADA: HOSPITALS
  {
    id: 1,
    name: 'Sarvodaya Hospital',
    type: 'Hospital',
    area: 'Achalpur – Paratwada',
    address: 'Achalpur Road, in front of APMC, Harde Nagar, Paratwada, Maharashtra 444805',
    phone: '8183818392',
    detail: 'Multispeciality care, medicine, surgery, radiology and pathology services.',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=85',
    website: 'https://sarvodayahospitalparatwada.com/',
    source: 'Hospital website',
    verified: true
  },
  {
    id: 2,
    name: 'Bhele Orthopedic and Maternity Nursing Home',
    type: 'Nursing Home',
    area: 'Achalpur – Paratwada',
    address: 'Jaistambh–Pensionpura Road, beside Madan Mahal, Paratwada, Achalpur 444805',
    phone: '8369534911',
    detail: 'Orthopedic and maternity nursing home.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=85',
    source: 'Business directory',
    verified: true
  },
  {
    id: 3,
    name: 'Adoni Hospital',
    type: 'Hospital',
    area: 'Achalpur – Paratwada',
    address: 'Achalpur Road, in front of PWD Office, Jijau Nagar, Paratwada 444805',
    phone: '7223222680',
    detail: 'Hospital and women’s healthcare listing. Call to confirm available services.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=85',
    source: 'Business directory',
    verified: true
  },
  {
    id: 4,
    name: 'Sai Hospital Maternity and Surgical Nursing Home',
    type: 'Maternity',
    area: 'Achalpur – Paratwada',
    address: 'Achalpur–Paratwada Connecting Road, near Gulab Bag, Harde Nagar, Paratwada 444805',
    phone: '7223223322',
    detail: 'Maternity and surgical nursing home listing.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=85',
    source: 'Business directory',
    verified: true
  },
  {
    id: 5,
    name: 'Ubhad Accidental and Maternity Hospital',
    type: 'Maternity',
    area: 'Achalpur – Paratwada',
    address: 'Paratwada–Amravati Road, MSH-6, Achalpur 444805',
    phone: '7223227079',
    detail: 'Accident and maternity hospital listing. Confirm emergency availability by phone.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=85',
    source: 'Business directory',
    verified: true
  },
  {
    id: 6,
    name: 'Gotmare Multispeciality Hospital',
    type: 'Hospital',
    area: 'Achalpur – Paratwada',
    address: 'Achalpur–Paratwada Connecting Road, Harde Nagar, Paratwada 444805',
    phone: '7223220475',
    detail: 'Multispeciality hospital listing.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=85',
    source: 'Business directory',
    verified: true
  },
  {
    id: 7,
    name: 'Mukund Madhav Hospital',
    type: 'Hospital',
    area: 'Achalpur – Paratwada',
    address: 'Pensionpura, Paratwada, Achalpur 444805',
    phone: '9404336972',
    detail: 'General physician and respiratory-care listing.',
    image: 'https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?w=800&q=85',
    source: 'Business directory',
    verified: true
  },
  {
    id: 8,
    name: 'Shri Ganpati Multispeciality Hospital',
    type: 'Hospital',
    area: 'Achalpur – Paratwada',
    address: 'Civil Lines, Paratwada, Achalpur 444805',
    phone: '9822507223',
    detail: 'Multispeciality and medical clinic listing.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=85',
    source: 'Business directory',
    verified: true
  },
  {
    id: 9,
    name: 'Bardia Hospital',
    type: 'Hospital',
    area: 'Achalpur – Paratwada',
    address: 'Harde Nagar, Paratwada, Maharashtra 444805',
    phone: '7223220355',
    detail: 'Hospital listing. Contact facility to confirm departments and timings.',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=85',
    source: 'Local business directory',
    verified: false
  },

  // CLINICS AND DIAGNOSTIC CENTRES
  {
    id: 10,
    name: 'Varma Diagnostic Center',
    type: 'Laboratory',
    area: 'Achalpur – Paratwada',
    address: 'Mishra Lane, in front of Police Station, Bhoipura, Paratwada 444805',
    phone: '8421921419',
    detail: 'Diagnostic and medical imaging centre listing.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=85',
    source: 'Business directory',
    verified: true
  },
  {
    id: 11,
    name: 'Shoolin Advance Path Lab',
    type: 'Laboratory',
    area: 'Achalpur – Paratwada',
    address: 'In front of Kutir Hospital, near Sanjivani Hospital, Achalpur Road, Paratwada 444805',
    phone: '7666654100',
    detail: 'Pathology and laboratory testing listing.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=85',
    source: 'Business directory',
    verified: true
  },
  {
    id: 12,
    name: 'Shreeram Pathology Laboratory',
    type: 'Laboratory',
    area: 'Achalpur – Paratwada',
    address: 'LIC Square, Paratwada, Maharashtra 444805',
    phone: '9422914015',
    detail: 'Pathology laboratory listing.',
    image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=800&q=85',
    source: 'Business directory',
    verified: true
  },
  {
    id: 13,
    name: 'Ganraya Clinic & Day Care',
    type: 'Clinic',
    area: 'Achalpur – Paratwada',
    address: 'Achalpur–Paratwada Connecting Road, opposite PWD Office, Jijau Nagar, Paratwada 444805',
    phone: '9527515815',
    detail: 'Local clinic and day-care listing. Call to confirm consultation details.',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=85',
    source: 'Business directory',
    verified: true
  },
  {
    id: 14,
    name: 'Radiant Clinic – Dr. Shad Aman',
    type: 'Clinic',
    area: 'Achalpur – Paratwada',
    address: 'In front of TV Tower, Pensionpura, Paratwada 444805',
    phone: '8999258326',
    detail: 'Local medical clinic listing.',
    image: 'https://images.unsplash.com/photo-1666887360682-6b3f3a9c6e85?w=800&q=85',
    source: 'Business directory',
    verified: true
  },

  // PHARMACIES
  {
    id: 15,
    name: 'Genericart Medicine Store – Arohi Swast Aushadhi Seva',
    type: 'Pharmacy',
    area: 'Achalpur – Paratwada',
    address: 'Shop D/11, near Athavadi Bazar, Paratwada–Amravati Road, Pensionpura 444805',
    phone: '8087232705',
    detail: 'Medical store and pharmacy listing.',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=85',
    source: 'Business directory',
    verified: true
  },
  {
    id: 16,
    name: 'Tekwani Medical',
    type: 'Pharmacy',
    area: 'Achalpur – Paratwada',
    address: 'Vakil Line, Bhoipura, Paratwada, Achalpur 444805',
    phone: '8830769740',
    detail: 'Pharmacy and medical supplies listing.',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=85',
    source: 'Business directory',
    verified: true
  },
  {
    id: 17,
    name: 'New Khandelwal Medicals',
    type: 'Pharmacy',
    area: 'Achalpur – Paratwada',
    address: 'Jaistambh–Pensionpura Road, Datta Nagar, Paratwada 444805',
    phone: '9403627764',
    detail: 'Local pharmacy and medical store listing.',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=85',
    source: 'Business directory',
    verified: true
  },
  {
    id: 18,
    name: 'MedPlus – Pensionpura Paratwada',
    type: 'Pharmacy',
    area: 'Achalpur – Paratwada',
    address: 'Main Road, near Jaystambha Square, Pensionpura, Paratwada 444805',
    phone: '6302738016',
    detail: 'Retail pharmacy and medical store listing.',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=85',
    source: 'Business directory',
    verified: true
  },

  // AMRAVATI CITY – HOSPITALS
  {
    id: 19,
    name: 'District Government General Hospital – Irwin',
    type: 'Government Hospital',
    area: 'Amravati',
    address: 'Khaparde Bagicha, Maltekdi, Amravati 444606',
    phone: '07212663339',
    detail: 'Government district general hospital.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=85',
    source: 'Amravati District Government',
    verified: true
  },
  {
    id: 20,
    name: 'District Women Hospital – Daffrin',
    type: 'Government Hospital',
    area: 'Amravati',
    address: 'Shrikrishna Peth, Amravati 444601',
    phone: '',
    detail: 'Government women’s hospital.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=85',
    source: 'Amravati District Government',
    verified: true
  },
  {
    id: 21,
    name: 'Hitech Critical Care & Bonde Hospital',
    type: 'Hospital',
    area: 'Amravati',
    address: 'Rajapeth, Amravati 444605',
    phone: '07212676416',
    detail: 'Critical care hospital listing.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=85',
    source: 'Amravati District Government',
    verified: true
  },
  {
    id: 22,
    name: 'Radiant Superspeciality Hospital',
    type: 'Hospital',
    area: 'Amravati',
    address: 'Sabnis Plot, Rukhmini Nagar, near Kalyan Nagar Chowk, Amravati 444606',
    phone: '07212570999',
    detail: 'Superspeciality hospital listing.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=85',
    source: 'Amravati District Government',
    verified: true
  },
  {
    id: 23,
    name: 'Shri Sant Acchyut Maharaj Heart Hospital',
    type: 'Hospital',
    area: 'Amravati',
    address: 'Mardi Road, Amravati 444601',
    phone: '07212970116',
    detail: 'Heart hospital listing.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=85',
    source: 'Amravati District Government',
    verified: true
  },
  {
    id: 24,
    name: 'Baheti Hospital',
    type: 'Hospital',
    area: 'Amravati',
    address: 'Amba Peth, Kanwar Nagar, Guruchhaya Colony, Amravati 444601',
    phone: '07212677200',
    detail: 'Hospital listing.',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=85',
    source: 'Amravati District Government',
    verified: true
  },
  {
    id: 25,
    name: 'Chintamani Hospital',
    type: 'Hospital',
    area: 'Amravati',
    address: 'Lane No. 2, Bhau Colony, Radha Nagar, Amravati 444604',
    phone: '07212551143',
    detail: 'Hospital listing.',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=85',
    source: 'Amravati District Government',
    verified: true
  },
  {
    id: 26,
    name: 'Deshmukh Eye Hospital',
    type: 'Clinic',
    area: 'Amravati',
    address: 'Khaperde Gardens, Irwin Square, Netradan Road, Amravati 444602',
    phone: '07212663151',
    detail: 'Eye hospital listing.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85',
    source: 'Amravati District Government',
    verified: true
  }
];

const healthcareCategories = [
  { label: 'All', icon: Building2 },
  { label: 'Hospital', icon: Hospital },
  { label: 'Government Hospital', icon: ShieldCheck },
  { label: 'Clinic', icon: Stethoscope },
  { label: 'Maternity', icon: HeartPulse },
  { label: 'Nursing Home', icon: HeartPulse },
  { label: 'Laboratory', icon: FlaskConical },
  { label: 'Pharmacy', icon: Pill }
];

const getMapUrl = (item) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${item.name}, ${item.address}`
  )}`;

export default function Healthcare() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [area, setArea] = useState('All Areas');
  const [showFilters, setShowFilters] = useState(false);

  const shown = useMemo(() => {
    const search = query.trim().toLowerCase();

    return healthcareListings.filter((item) => {
      const matchesType = filter === 'All' || item.type === filter;
      const matchesArea = area === 'All Areas' || item.area === area;
      const matchesSearch =
        !search ||
        `${item.name} ${item.type} ${item.address} ${item.detail}`
          .toLowerCase()
          .includes(search);

      return matchesType && matchesArea && matchesSearch;
    });
  }, [filter, query, area]);

  const counts = useMemo(() => ({
    total: healthcareListings.length,
    hospitals: healthcareListings.filter(x =>
      ['Hospital', 'Government Hospital'].includes(x.type)
    ).length,
    clinics: healthcareListings.filter(x =>
      ['Clinic', 'Maternity', 'Nursing Home'].includes(x.type)
    ).length,
    labs: healthcareListings.filter(x => x.type === 'Laboratory').length,
    pharmacies: healthcareListings.filter(x => x.type === 'Pharmacy').length
  }), []);

  const selectCategory = (category) => {
    setFilter(category);
    document.getElementById('healthcare-directory')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <PageHero
        eyebrow="Healthcare & medical directory"
        title="Healthcare Services"
        description="Find hospitals, doctors, clinics, nursing homes, diagnostic centres, pharmacies and medical services in Achalpur, Paratwada and Amravati."
        image="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1800&q=85"
      />

      <main className="container subpage-wrap healthcare-page">

        <section className="health-welcome">
          <div>
            <span className="health-eyebrow">YOUR LOCAL HEALTHCARE GUIDE</span>
            <h2>Healthcare, closer to <span>home.</span></h2>
            <p>Explore local medical facilities and find directions or contact information.</p>
          </div>
          <div className="health-welcome-icon"><HeartPulse /></div>
        </section>

        <section className="health-stats">
          <div className="health-stat">
            <span><Building2 /></span>
            <div><strong>{counts.total}</strong><small>Directory listings</small></div>
          </div>
          <div className="health-stat">
            <span><Hospital /></span>
            <div><strong>{counts.hospitals}</strong><small>Hospitals</small></div>
          </div>
          <div className="health-stat">
            <span><Stethoscope /></span>
            <div><strong>{counts.clinics}</strong><small>Clinics & care units</small></div>
          </div>
          <div className="health-stat">
            <span><Pill /></span>
            <div><strong>{counts.pharmacies}</strong><small>Pharmacies</small></div>
          </div>
        </section>

        <section className="health-emergency-strip">
          <div className="emergency-strip-icon"><Ambulance /></div>
          <div>
            <strong>Emergency assistance</strong>
            <small>For emergencies, call the appropriate emergency service.</small>
          </div>
          <a href="tel:108"><span>Ambulance</span><strong>108</strong></a>
          <a href="tel:112"><span>Emergency</span><strong>112</strong></a>
        </section>

        <section className="health-category-section">
          <div className="health-section-heading">
            <div>
              <span className="health-eyebrow">EXPLORE BY SERVICE</span>
              <h2>Find medical facilities</h2>
            </div>
            <span>Choose a category</span>
          </div>

          <div className="health-category-grid">
            {healthcareCategories.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={`health-category-card ${filter === item.label ? 'active' : ''}`}
                  style={{ '--delay': `${index * 55}ms` }}
                  onClick={() => selectCategory(item.label)}
                >
                  <span><Icon /></span>
                  <strong>{item.label === 'All' ? 'All Services' : item.label}</strong>
                  <ArrowRight className="health-category-arrow" />
                </button>
              );
            })}
          </div>
        </section>

        <div className="health-layout">
          <section className="health-main" id="healthcare-directory">

            <div className="health-search-panel">
              <div className="health-search-title">
                <div>
                  <span>HEALTHCARE DIRECTORY</span>
                  <h2>Search nearby facilities</h2>
                  <p>Search by facility name, service or address.</p>
                </div>
                <Search />
              </div>

              <div className="health-search-controls">
                <div className="health-search-input">
                  <Search />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search hospital, pharmacy, clinic..."
                    aria-label="Search healthcare facilities"
                  />
                  {query && (
                    <button onClick={() => setQuery('')} aria-label="Clear search">
                      <X />
                    </button>
                  )}
                </div>

                <select value={area} onChange={(e) => setArea(e.target.value)}>
                  <option>All Areas</option>
                  <option>Achalpur – Paratwada</option>
                  <option>Amravati</option>
                </select>

                <button
                  className="health-filter-button"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter /> Filter
                </button>
              </div>

              {showFilters && (
                <div className="health-filter-options">
                  {healthcareCategories.map(item => (
                    <button
                      key={item.label}
                      className={filter === item.label ? 'active' : ''}
                      onClick={() => {
                        setFilter(item.label);
                        setShowFilters(false);
                      }}
                    >
                      {item.label === 'All' ? 'All Services' : item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="health-results-heading">
              <div>
                <span className="health-eyebrow">LOCAL MEDICAL DIRECTORY</span>
                <h2>Healthcare listings</h2>
                <p>Contact the facility to confirm services and timings.</p>
              </div>
              <span className="health-result-count">{shown.length} results</span>
            </div>

            <div className="health-active-filters">
              {healthcareCategories.map(item => (
                <button
                  key={item.label}
                  className={filter === item.label ? 'active' : ''}
                  onClick={() => setFilter(item.label)}
                >
                  {item.label === 'All' ? 'All' : item.label}
                </button>
              ))}
            </div>

            {shown.length > 0 ? (
              <div className="health-listing-grid">
                {shown.map((item, index) => (
                  <article
                    className="health-listing-card"
                    key={item.id}
                    style={{ '--delay': `${Math.min(index, 12) * 45}ms` }}
                  >
                    <div className="health-image-wrap">
                      <img src={item.image} alt={`${item.type} – illustrative facility photo`} loading="lazy" />
                      <span className="health-type-badge">{item.type}</span>
                    </div>

                    <div className="health-listing-body">
                      <div className="health-listing-status">
                        <ShieldCheck />
                        {item.verified ? 'Source listing found' : 'Needs confirmation'}
                      </div>

                      <h3>{item.name}</h3>

                      <p className="health-address">
                        <MapPin /> {item.address}
                      </p>

                      <p className="health-detail">{item.detail}</p>

                      <div className="health-source">Source: {item.source}</div>

                      <div className="health-card-actions">
                        {item.phone ? (
                          <a className="health-call-button" href={`tel:${item.phone}`}>
                            <Phone /> Call
                          </a>
                        ) : (
                          <span className="health-no-phone">Phone not listed</span>
                        )}

                        <a
                          className="health-map-button"
                          href={getMapUrl(item)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Navigation /> Directions
                        </a>
                      </div>

                      {item.website && (
                        <a
                          className="health-website-link"
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit official website <ExternalLink />
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="health-empty">
                <Search />
                <h3>No facilities found</h3>
                <p>Try a different name, service or location.</p>
                <button onClick={() => {
                  setQuery('');
                  setFilter('All');
                  setArea('All Areas');
                }}>Reset filters</button>
              </div>
            )}
          </section>

          <aside className="health-sidebar">

            <div className="health-emergency-card">
              <span><Ambulance /></span>
              <h3>Emergency contacts</h3>
              <p>Ambulance service <a href="tel:108">108</a></p>
              <p>Emergency response <a href="tel:112">112</a></p>
              <small>For a medical emergency, call emergency services. Do not rely on directory opening-hour information.</small>
            </div>

            <div className="health-side-panel">
              <div className="health-side-heading">
                <span><Droplet /></span>
                <div><h3>Blood banks</h3><small>Amravati district listings</small></div>
              </div>
              <p>General Hospital Blood Bank – Irwin Hospital Campus</p>
              <p>Shri Balaji Blood Bank – Ambapeth</p>
              <p>Padmavati Blood Bank – Walcut Compound</p>
              <a
                href="https://amravati.gov.in/en/emergency-services/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View government contact directory <ArrowRight />
              </a>
            </div>

            <div className="health-side-panel">
              <div className="health-side-heading">
                <span><Clock3 /></span>
                <div><h3>Useful health resources</h3><small>Official information</small></div>
              </div>
              <a href="https://www.mohfw.gov.in/" target="_blank" rel="noopener noreferrer">
                Ministry of Health <ExternalLink />
              </a>
              <a href="https://abdm.gov.in/" target="_blank" rel="noopener noreferrer">
                Ayushman Bharat Digital Mission <ExternalLink />
              </a>
              <a href="https://www.nhp.gov.in/" target="_blank" rel="noopener noreferrer">
                National Health Portal <ExternalLink />
              </a>
            </div>

            <div className="health-provider-card">
              <PlusCircle />
              <span>FOR HEALTHCARE PROVIDERS</span>
              <h3>List your medical facility</h3>
              <p>Own a hospital, clinic, pharmacy or diagnostic centre? Submit your details for directory review.</p>
              <a href="mailto:contact@achalpurparatwada.com?subject=Healthcare%20Facility%20Registration">
                Register your facility <ArrowRight />
              </a>
            </div>
          </aside>
        </div>

        <div className="health-disclaimer">
          <ShieldCheck />
          <p>
            <strong>Directory disclaimer:</strong> This is an independent local information directory,
            not a medical service or government portal. Facility details, phone numbers, addresses,
            services and availability can change. Confirm directly with the provider before visiting.
            Listing does not mean medical accreditation or quality has been independently certified.
          </p>
        </div>
      </main>
    </>
  );
}
