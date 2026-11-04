
import React, { useMemo, useState } from 'react';
import {
  Search, MapPin, Clock3, Phone, ArrowRight, Navigation,
  Mountain, Trees, Camera, Landmark, Waves, Church, Compass,
  Sparkles, ExternalLink, X, Filter, ShieldCheck, CalendarDays,
  Route, TentTree, Info
} from 'lucide-react';
import PageHero from '../../components/PageHero/PageHero.jsx';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import './Tourism.scss';

const destinations = [
  {
    id: 1,
    name: 'Melghat Tiger Reserve',
    category: 'Wildlife',
    area: 'Melghat',
    address: 'Melghat Tiger Reserve, Amravati district, Maharashtra',
    description: 'A vast Satpura forest landscape known for tigers, leopards, sloth bears, birds, teak forests and guided jungle safaris.',
    bestTime: 'October to June; check safari season and gate availability',
    hours: 'Safari slots vary; check Forest Department booking',
    phone: '+91 72126 62792',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1000&q=85',
    maps: 'Melghat Tiger Reserve, Maharashtra',
    tag: 'Wildlife experience',
    mystery: false,
    official: 'https://amravati.gov.in/en/tourism-melghat/'
  },
  {
    id: 2,
    name: 'Chikhaldara Hill Station',
    category: 'Hill Stations',
    area: 'Chikhaldara',
    address: 'Chikhaldara, Taluka Chikhaldara, District Amravati, Maharashtra 444807',
    description: 'Vidarbha’s hill station with green valleys, viewpoints, lakes, coffee plantations and access to Melghat.',
    bestTime: 'October to February; monsoon for greenery',
    hours: 'Town access throughout the day; individual attractions have their own timings',
    phone: '',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000&q=85',
    maps: 'Chikhaldara Hill Station, Maharashtra',
    tag: 'Popular destination',
    mystery: false,
    official: 'https://maharashtratourism.gov.in/nature/chikhaldara/'
  },
  {
    id: 3,
    name: 'Bhimkund (Kichakdari)',
    category: 'Mystery & Legends',
    area: 'Chikhaldara',
    address: 'Bhimkund Road, Motha, Chikhaldara, Amravati, Maharashtra 444807',
    description: 'A dramatic gorge and seasonal waterfall viewpoint associated with the Bhima–Kichaka story from the Mahabharata tradition.',
    bestTime: 'July to October for monsoon scenery',
    hours: '6:00 AM – 7:00 PM (published listing; confirm locally)',
    phone: '',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1000&q=85',
    maps: 'Bhimkund Point, Chikhaldara',
    tag: 'Legend & waterfall',
    mystery: true,
    official: 'https://zpamravati.gov.in/en/places-centres/chikhaldara-tourism/'
  },
  {
    id: 4,
    name: 'Gawilgarh Fort',
    category: 'Forts & Heritage',
    area: 'Chikhaldara',
    address: 'Gawilgarh Fort, Chikhaldara, Amravati, Maharashtra 444807',
    description: 'Historic hill fort associated with the Gond period, later Maratha and other regional history, with old gateways, bastions and inscriptions.',
    bestTime: 'October to February',
    hours: 'Mon–Sat: 9:00 AM–5:00 PM; Sun: 9:00 AM–6:00 PM (published listing)',
    phone: '',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1000&q=85',
    maps: 'Gawilgarh Fort, Chikhaldara',
    tag: 'Historic fort',
    mystery: false,
    official: 'https://www.incredibleindia.gov.in/en/maharashtra/amravati/gawligadh-fort'
  },
  {
    id: 5,
    name: 'Panchbol Point',
    category: 'Viewpoints',
    area: 'Chikhaldara',
    address: 'Panchbol Point, Chikhaldara, Amravati, Maharashtra 444807',
    description: 'A valley viewpoint famous for its reported five-echo effect and panoramic views of the Satpura hills.',
    bestTime: 'Early morning and sunset; October to February',
    hours: 'Daylight visits recommended; confirm local access',
    phone: '',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&q=85',
    maps: 'Panchbol Point, Chikhaldara',
    tag: 'Five-echo viewpoint',
    mystery: true,
    official: 'https://zpamravati.gov.in/en/places-centres/chikhaldara-tourism/'
  },
  {
    id: 6,
    name: 'Cloud Point (Megh Point)',
    category: 'Viewpoints',
    area: 'Chikhaldara',
    address: 'Tiosa–Nerpinglai–Chandurbazar–Achalpur–Chikhaldara Road, Madki, Maharashtra 444717',
    description: 'A roadside scenic viewpoint on the Chikhaldara approach, known for hill views and cloud-filled landscapes during suitable weather.',
    bestTime: 'Monsoon and winter; clear mornings',
    hours: '5:00 AM – 5:30 PM (published listing; confirm locally)',
    phone: '',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000&q=85',
    maps: 'Cloud Point Megh Point Madki Maharashtra',
    tag: 'Cloud viewpoint',
    mystery: false,
    official: ''
  },
  {
    id: 7,
    name: 'Semadoh Forest & Eco Tourism',
    category: 'Wildlife',
    area: 'Melghat',
    address: 'Semadoh, Dharni Taluka, Amravati district, Maharashtra 444813',
    description: 'Forest tourism base near the Sipna River with nature experiences, accommodation facilities and access to Melghat wildlife activities.',
    bestTime: 'October to June; follow forest advisories',
    hours: 'Activities and safari slots are scheduled by the Forest Department',
    phone: '+91 72126 62792',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1000&q=85',
    maps: 'Semadoh Eco Tourism Melghat',
    tag: 'Forest getaway',
    mystery: false,
    official: 'https://amravati.gov.in/en/tourism-melghat/'
  },
  {
    id: 8,
    name: 'Kolkas Eco Tourism Centre',
    category: 'Wildlife',
    area: 'Melghat',
    address: 'Kolkas, Melghat Tiger Reserve, Amravati district, Maharashtra',
    description: 'Forest eco-tourism centre with forest accommodation and access to the surrounding wilderness. Prior permission may be required for some stays.',
    bestTime: 'October to June',
    hours: 'Check Forest Department booking and access timings',
    phone: '+91 72126 62792',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&q=85',
    maps: 'Kolkas Eco Tourism Centre Melghat',
    tag: 'Forest stay',
    mystery: false,
    official: 'https://amravati.gov.in/en/tourism-melghat/'
  },
  {
    id: 9,
    name: 'Harisal Forest Gateway',
    category: 'Wildlife',
    area: 'Melghat',
    address: 'Harisal, Dharni Taluka, Amravati district, Maharashtra',
    description: 'A village gateway to forest experiences, nature tourism and selected adventure activities in the Melghat region.',
    bestTime: 'October to June; check seasonal activity availability',
    hours: 'Activity timings depend on the authorised operator and forest permissions',
    phone: '+91 89565 63016',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1000&q=85',
    maps: 'Harisal Melghat Maharashtra',
    tag: 'Forest gateway',
    mystery: false,
    official: 'https://amravati.gov.in/en/tourism-melghat/'
  },
  {
    id: 10,
    name: 'Bir Dam & Lake',
    category: 'Lakes & Waterfalls',
    area: 'Chikhaldara',
    address: 'Bir Dam, Chikhaldara region, Amravati district, Maharashtra',
    description: 'A quiet water and landscape stop listed among Chikhaldara’s tourist attractions. Enjoy the surrounding scenery and check local access restrictions.',
    bestTime: 'Monsoon and winter',
    hours: 'Daylight visits recommended; no confirmed official hours',
    phone: '',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000&q=85',
    maps: 'Bir Dam Chikhaldara',
    tag: 'Lake & nature',
    mystery: false,
    official: 'https://amravati.gov.in/en/tourism-melghat/'
  },
  {
    id: 11,
    name: 'Shakkar Lake',
    category: 'Lakes & Waterfalls',
    area: 'Chikhaldara',
    address: 'Shakkar Lake, Chikhaldara, Amravati district, Maharashtra',
    description: 'A forest-surrounded lake and scenic stop included in the Chikhaldara tourist circuit.',
    bestTime: 'October to February',
    hours: 'Daylight visits recommended; confirm local access',
    phone: '',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000&q=85',
    maps: 'Shakkar Lake Chikhaldara',
    tag: 'Scenic lake',
    mystery: false,
    official: 'https://maharashtratourism.gov.in/nature/chikhaldara/'
  },
  {
    id: 12,
    name: 'Hurricane Point',
    category: 'Viewpoints',
    area: 'Chikhaldara',
    address: 'Hurricane Point, Chikhaldara, Amravati district, Maharashtra',
    description: 'A scenic valley viewpoint with wide views over the forested hills and surrounding landscape.',
    bestTime: 'Morning and sunset; October to February',
    hours: 'Daylight visits recommended; verify local access',
    phone: '',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1000&q=85',
    maps: 'Hurricane Point Chikhaldara',
    tag: 'Valley viewpoint',
    mystery: false,
    official: 'https://zpamravati.gov.in/en/places-centres/chikhaldara-tourism/'
  },
  {
    id: 13,
    name: 'Mozari Point',
    category: 'Viewpoints',
    area: 'Chikhaldara',
    address: 'Mozari Point, Chikhaldara, Amravati district, Maharashtra',
    description: 'A scenic viewpoint listed among Chikhaldara’s attractions, suitable for landscape photography and hill views.',
    bestTime: 'Sunrise and sunset',
    hours: 'Daylight visits recommended; verify local access',
    phone: '',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1000&q=85',
    maps: 'Mozari Point Chikhaldara',
    tag: 'Nature viewpoint',
    mystery: false,
    official: 'https://amravati.gov.in/en/tourism-melghat/'
  },
  {
    id: 14,
    name: 'Kalalkund Waterfall',
    category: 'Lakes & Waterfalls',
    area: 'Melghat',
    address: 'Near Adnadi village, Chikhaldara region, Amravati district, Maharashtra 444806',
    description: 'A seasonal waterfall in a remote forest setting, often explored along with nearby Bakadari. Access can be difficult during heavy rain.',
    bestTime: 'Monsoon and immediately after the rains',
    hours: 'No confirmed public hours; visit in daylight and check local access',
    phone: '',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1000&q=85',
    maps: 'Kalalkund Waterfall Adnadi Maharashtra',
    tag: 'Hidden waterfall',
    mystery: true,
    official: ''
  },
  {
    id: 15,
    name: 'Bakadari Waterfall',
    category: 'Lakes & Waterfalls',
    area: 'Melghat',
    address: 'Adnadi region, Chikhaldara Taluka, Amravati district, Maharashtra',
    description: 'A seasonal waterfall destination in the Adnadi forest region. Access routes may involve walking and local guidance.',
    bestTime: 'Monsoon; check trail and weather conditions',
    hours: 'No confirmed public hours; daylight access only',
    phone: '',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1000&q=85',
    maps: 'Bakadari Waterfall Adnadi Maharashtra',
    tag: 'Hidden waterfall',
    mystery: true,
    official: ''
  },
  {
    id: 16,
    name: 'Narnala Fort',
    category: 'Forts & Heritage',
    area: 'Nearby Region',
    address: 'Narnala Fort, Shahanur, Akot Taluka, Maharashtra 444101',
    description: 'A historic hill fort in the Satpura landscape with extensive fortifications, forest surroundings and panoramic views.',
    bestTime: 'October to February',
    hours: 'Confirm current ASI/Forest access and entry hours before travel',
    phone: '',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1000&q=85',
    maps: 'Narnala Fort Shahanur Maharashtra',
    tag: 'Historic hill fort',
    mystery: false,
    official: 'https://amravatidivision.gov.in/en/tourism/tourist-places/'
  },
  {
    id: 17,
    name: 'Achalpur Fort & Historic Gates',
    category: 'Forts & Heritage',
    area: 'Achalpur – Paratwada',
    address: 'Chawalmandi, Achalpur, Maharashtra 444806',
    description: 'Historic city fortifications and monumental gateways associated with old Ellichpur/Achalpur. Explore the surviving walls and gateways respectfully.',
    bestTime: 'October to February; early morning',
    hours: 'Public streets and exterior areas; individual structures may have access restrictions',
    phone: '',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1000&q=85',
    maps: 'Achalpur Fort Chawalmandi Maharashtra',
    tag: 'Local heritage',
    mystery: true,
    official: ''
  },
  {
    id: 18,
    name: 'Muktagiri Jain Temple Complex',
    category: 'Temples & Spiritual',
    area: 'Nearby Region',
    address: 'Muktagiri, Thapoda, Bhainsdehi Taluka, Betul district, Madhya Pradesh',
    description: 'A renowned hillside Jain pilgrimage site with a group of 52 temples, forest surroundings and a seasonal waterfall.',
    bestTime: 'Monsoon for waterfall scenery; winter for comfortable walking',
    hours: 'Generally 6:00 AM–5:00 PM; confirm with the temple trust',
    phone: '+91 91127 58008',
    image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=1000&q=85',
    maps: 'Muktagiri Jain Temple Madhya Pradesh',
    tag: 'Pilgrimage & waterfall',
    mystery: false,
    official: ''
  },
  {
    id: 19,
    name: 'Semadoh Bridge & Sipna River',
    category: 'Lakes & Waterfalls',
    area: 'Melghat',
    address: 'Semadoh village, Amravati district, Maharashtra 444813',
    description: 'A peaceful riverside stop in the forest corridor, popular for landscape photography and short breaks on the Melghat route.',
    bestTime: 'Monsoon and winter',
    hours: 'No published visitor hours; use daylight and follow forest rules',
    phone: '',
    image: 'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=1000&q=85',
    maps: 'Semadoh Bridge Sipna River',
    tag: 'Riverside escape',
    mystery: false,
    official: 'https://amravati.gov.in/en/tourism-melghat/'
  },
  {
    id: 20,
    name: 'Vairat Plateau & Safari Gate',
    category: 'Wildlife',
    area: 'Chikhaldara',
    address: 'Vairat Plateau, near Chikhaldara, Amravati district, Maharashtra',
    description: 'A high plateau and safari access area in the Melghat landscape. Safari entry is controlled and depends on Forest Department permits.',
    bestTime: 'October to June; book a safari in advance',
    hours: 'Safari sessions are scheduled by the Forest Department',
    phone: '+91 72126 62792',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1000&q=85',
    maps: 'Vairat Safari Gate Chikhaldara',
    tag: 'Safari gateway',
    mystery: false,
    official: 'https://safaribooking.mahaforest.gov.in/'
  }
];

const categories = [
  { name: 'All Places', icon: Compass },
  { name: 'Wildlife', icon: Trees },
  { name: 'Hill Stations', icon: Mountain },
  { name: 'Viewpoints', icon: Camera },
  { name: 'Lakes & Waterfalls', icon: Waves },
  { name: 'Forts & Heritage', icon: Landmark },
  { name: 'Temples & Spiritual', icon: Church },
  { name: 'Mystery & Legends', icon: Sparkles }
];

const areas = [
  'All Areas',
  'Achalpur – Paratwada',
  'Chikhaldara',
  'Melghat',
  'Nearby Region'
];

const mapLink = (place) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${place.maps}, ${place.address}`
  )}`;

export default function Tourism() {
  const [category, setCategory] = useState('All Places');
  const [area, setArea] = useState('All Areas');
  const [query, setQuery] = useState('');
  const [mysteryOnly, setMysteryOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filteredPlaces = useMemo(() => {
    const search = query.trim().toLowerCase();

    return destinations.filter((place) => {
      const matchesCategory =
        category === 'All Places' || place.category === category;

      const matchesArea =
        area === 'All Areas' || place.area === area;

      const matchesMystery = !mysteryOnly || place.mystery;

      const matchesSearch =
        !search ||
        `${place.name} ${place.category} ${place.area} ${place.address} ${place.description}`
          .toLowerCase()
          .includes(search);

      return matchesCategory && matchesArea && matchesMystery && matchesSearch;
    });
  }, [category, area, query, mysteryOnly]);

  const counts = useMemo(() => ({
    total: destinations.length,
    wildlife: destinations.filter(p => p.category === 'Wildlife').length,
    viewpoints: destinations.filter(p => p.category === 'Viewpoints').length,
    waterfalls: destinations.filter(p => p.category === 'Lakes & Waterfalls').length,
    heritage: destinations.filter(p => p.category === 'Forts & Heritage').length,
    mystery: destinations.filter(p => p.mystery).length
  }), []);

  const selectCategory = (name) => {
    setCategory(name);
    setMysteryOnly(false);
    document.getElementById('tourism-directory')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <PageHero
        eyebrow="Discover Vidarbha"
        title="Explore Achalpur & Melghat"
        description="Discover hill stations, tiger forests, ancient forts, waterfalls, hidden viewpoints and spiritual destinations around Achalpur, Paratwada and Amravati."
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1800&q=85"
      />

      <main className="container subpage-wrap tourism-page">

        <section className="tourism-welcome">
          <div>
            <span className="tourism-eyebrow">EXPLORE • EXPERIENCE • DISCOVER</span>
            <h2>Find your next <span>adventure.</span></h2>
            <p>From the forests of Melghat to the heritage of Achalpur, explore the region's special places.</p>
          </div>
          <div className="tourism-welcome-art"><Mountain /></div>
        </section>

        <section className="tourism-stats">
          <div><span><Compass /></span><strong>{counts.total}</strong><small>Places listed</small></div>
          <div><span><Trees /></span><strong>{counts.wildlife}</strong><small>Wildlife destinations</small></div>
          <div><span><Waves /></span><strong>{counts.waterfalls}</strong><small>Water & nature</small></div>
          <div><span><Sparkles /></span><strong>{counts.mystery}</strong><small>Legends & hidden places</small></div>
        </section>

        <section className="tourism-featured">
          <div className="tourism-featured-image">
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=90"
              alt="Dense green forest landscape"
            />
            <span><Trees /> FEATURED REGION</span>
          </div>
          <div className="tourism-featured-content">
            <span className="tourism-eyebrow">THE WILD HEART OF VIDARBHA</span>
            <h2>Welcome to <span>Melghat</span></h2>
            <p>
              Explore the Satpura hills, teak forests, deep valleys, wildlife,
              forest villages and historic forts of the Melghat region.
            </p>
            <div className="tourism-featured-facts">
              <div><strong>1974</strong><small>Tiger Reserve designation</small></div>
              <div><strong>32 km</strong><small>Paratwada to Chikhaldara</small></div>
              <div><strong>45 km</strong><small>Paratwada to Semadoh</small></div>
            </div>
            <a href="https://amravati.gov.in/en/tourism-melghat/" target="_blank" rel="noopener noreferrer">
              Explore official Melghat guide <ArrowRight />
            </a>
          </div>
        </section>

        <section className="tourism-category-section">
          <div className="tourism-heading">
            <div>
              <span className="tourism-eyebrow">EXPLORE YOUR INTEREST</span>
              <h2>Discover by category</h2>
            </div>
            <span>Choose an experience</span>
          </div>

          <div className="tourism-category-grid">
            {categories.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  className={category === item.name ? 'active' : ''}
                  style={{ '--delay': `${index * 55}ms` }}
                  onClick={() => selectCategory(item.name)}
                >
                  <span><Icon /></span>
                  <strong>{item.name}</strong>
                  <ArrowRight className="tourism-cat-arrow" />
                </button>
              );
            })}
          </div>
        </section>

        <section className="tourism-mystery-banner">
          <div className="mystery-art"><Sparkles /></div>
          <div>
            <span>LOCAL STORIES • LEGENDS • UNUSUAL PLACES</span>
            <h2>Explore the mysterious side of Melghat</h2>
            <p>Discover echo points, ancient ruins, hidden waterfalls and places connected with local legends.</p>
          </div>
          <button onClick={() => {
            setMysteryOnly(true);
            setCategory('All Places');
            document.getElementById('tourism-directory')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explore legends <ArrowRight />
          </button>
        </section>

        <section className="tourism-directory" id="tourism-directory">
          <div className="tourism-heading">
            <div>
              <span className="tourism-eyebrow">PLAN YOUR VISIT</span>
              <h2>Tourist places directory</h2>
              <p>Explore places, check visitor information and open directions.</p>
            </div>
            <span className="tourism-result-count">{filteredPlaces.length} places</span>
          </div>

          <div className="tourism-search-panel">
            <div className="tourism-search-input">
              <Search />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search waterfall, fort, forest, temple..."
                aria-label="Search tourist destinations"
              />
              {query && <button onClick={() => setQuery('')} aria-label="Clear search"><X /></button>}
            </div>

            <select value={area} onChange={e => setArea(e.target.value)} aria-label="Filter by area">
              {areas.map(item => <option key={item}>{item}</option>)}
            </select>

            <button className="tourism-filter-button" onClick={() => setShowFilters(!showFilters)}>
              <Filter /> Categories
            </button>
          </div>

          {showFilters && (
            <div className="tourism-filter-options">
              {categories.map(item => (
                <button
                  key={item.name}
                  className={category === item.name ? 'active' : ''}
                  onClick={() => {
                    setCategory(item.name);
                    setMysteryOnly(false);
                    setShowFilters(false);
                  }}
                >{item.name}</button>
              ))}
            </div>
          )}

          {mysteryOnly && (
            <div className="tourism-active-mystery">
              <Sparkles /> Showing Mystery & Legends places
              <button onClick={() => setMysteryOnly(false)}>Show all places <X /></button>
            </div>
          )}

          <div className="tourism-place-grid">
            {filteredPlaces.length ? filteredPlaces.map((place, index) => (
              <article
                className="tourism-place-card"
                key={place.id}
                style={{ '--delay': `${Math.min(index, 12) * 45}ms` }}
              >
                <div className="tourism-place-image">
                  <img src={place.image} alt={`${place.name} – illustrative landscape`} loading="lazy" />
                  <span className="tourism-place-tag">{place.tag}</span>
                  {place.mystery && <span className="tourism-mystery-tag"><Sparkles /> Legend</span>}
                </div>

                <div className="tourism-place-body">
                  <div className="tourism-place-meta">
                    <span><MapPin /> {place.area}</span>
                    <span>{place.category}</span>
                  </div>

                  <h3>{place.name}</h3>
                  <p className="tourism-place-description">{place.description}</p>

                  <div className="tourism-place-info">
                    <div><MapPin /><span>{place.address}</span></div>
                    <div><Clock3 /><span>{place.hours}</span></div>
                    <div><CalendarDays /><span>Best time: {place.bestTime}</span></div>
                  </div>

                  <div className="tourism-place-actions">
                    <a
                      href={mapLink(place)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tourism-directions"
                    >
                      <Navigation /> Google Maps
                    </a>

                    {place.phone ? (
                      <a className="tourism-call" href={`tel:${place.phone.replace(/[^\d+]/g, '')}`}>
                        <Phone /> Call
                      </a>
                    ) : (
                      <span className="tourism-no-phone">Phone not listed</span>
                    )}
                  </div>

                  {place.official && (
                    <a className="tourism-official-link" href={place.official} target="_blank" rel="noopener noreferrer">
                      Official visitor information <ExternalLink />
                    </a>
                  )}
                </div>
              </article>
            )) : (
              <div className="tourism-empty">
                <Search />
                <h3>No places found</h3>
                <p>Try another keyword or change your filters.</p>
                <button onClick={() => {
                  setQuery('');
                  setCategory('All Places');
                  setArea('All Areas');
                  setMysteryOnly(false);
                }}>Reset filters</button>
              </div>
            )}
          </div>
        </section>

        <section className="tourism-travel-info">
          <div className="tourism-travel-heading">
            <Route />
            <div>
              <h2>Plan your Melghat journey</h2>
              <p>Useful travel information for visitors.</p>
            </div>
          </div>
          <div className="tourism-travel-grid">
            <div><strong>From Paratwada</strong><span>Chikhaldara: approximately 32 km</span><span>Semadoh: approximately 45 km</span></div>
            <div><strong>Nearest railway access</strong><span>Badnera Junction / Amravati railway area</span><span>Check onward road transport before travel</span></div>
            <div><strong>Safari booking</strong><span>Use authorised Forest Department booking channels</span><a href="https://safaribooking.mahaforest.gov.in/" target="_blank" rel="noopener noreferrer">Forest safari booking <ExternalLink /></a></div>
          </div>
        </section>

        <div className="tourism-disclaimer">
          <Info />
          <p>
            <strong>Visitor information:</strong> Opening hours, routes, safari availability,
            entry permissions and phone numbers can change seasonally. Confirm directly with
            the relevant authority before travelling. Forest areas, waterfalls and remote
            viewpoints may have restricted access; follow local safety instructions and
            do not enter closed forest trails.
          </p>
        </div>
      </main>
    </>
  );
}
