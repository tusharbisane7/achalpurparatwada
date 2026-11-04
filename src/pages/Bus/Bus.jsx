import React, { useMemo, useState } from 'react';
import {
  Bus as BusIcon,
  MapPin,
  Phone,
  Clock,
  Search,
  ArrowUpRight,
  Ticket,
  CalendarDays,
  Info,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Navigation,
  Route,
  Building2,
  RefreshCw,
} from 'lucide-react';
import './Bus.scss';

const MSRTC_BOOKING_URL =
  'https://npublic.msrtcors.com/reservation-home?faces-redirect=true&deviceType=browser';

const busStands = [
  {
    name: 'Paratwada MSRTC Bus Stand & Depot',
    area: 'Paratwada',
    address: 'Harde Nagar, Paratwada, Achalpur, Amravati, Maharashtra - 444805',
    phone: '07223220177',
    description: 'Main bus stand and depot serving Paratwada and nearby routes.',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Paratwada+MSRTC+Bus+Stand',
  },
  {
    name: 'Achalpur MSRTC Bus Stand & Depot',
    area: 'Achalpur',
    address: 'Sarmaspura, Achalpur, Maharashtra - 444806',
    phone: '',
    description: 'MSRTC bus stand serving Achalpur and surrounding villages.',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Achalpur+MSRTC+Bus+Stand',
  },
];

// Existing route schedules supplied earlier. Duplicate times are retained
// where the source listed separate services.
const timetable = [
  {
    destination: 'Amravati', group: 'Major Cities', origin: 'Paratwada',
    busType: 'ORDINARY / SLEEPER ORDINARY', fare: 'Check MSRTC fare',
    times: [
      '06:00','06:15','06:45','07:00','07:45','08:15','08:30','09:00',
      '09:15','09:45','10:00','10:10','10:30','11:15','11:30','11:50',
      '12:45','13:00','13:15','14:00','14:15','14:30','15:00','15:10',
      '15:15','16:00','16:15','16:30','16:45','17:00','17:30','18:00',
      '18:45','19:00','19:15','19:30','20:00','20:30'
    ],
    sleeperTimes: ['09:00','11:50'],
  },
  {
    destination: 'Nagpur', group: 'Major Cities', origin: 'Paratwada',
    busType: 'ORDINARY', fare: 'Check MSRTC fare',
    times: ['05:15','06:00','07:00','09:00','10:05','11:15','11:30','14:00','14:00','15:00','16:15','18:30'],
    sleeperTimes: [],
  },
  {
    destination: 'Morshi', group: 'Regional', origin: 'Paratwada',
    busType: 'ORDINARY', fare: 'Check MSRTC fare',
    times: ['06:15','07:00','07:40','09:00','09:30','10:00','10:30','11:00','11:40','12:30','13:00','13:30','14:00','14:30','15:00','15:45','16:00','16:00','16:00','16:45','17:00','17:30','17:30','17:45','18:00','18:30','19:15','19:45'],
    sleeperTimes: [],
  },
  {
    destination: 'Shegaon', group: 'Regional', origin: 'Paratwada',
    busType: 'ORDINARY', fare: 'Check MSRTC fare',
    times: ['17:00','17:00'], sleeperTimes: [],
  },
  {
    destination: 'Akola', group: 'Major Cities', origin: 'Paratwada',
    busType: 'ORDINARY', fare: 'Check MSRTC fare',
    times: ['06:00','06:00','07:00','07:00','07:30','08:00','08:30','09:00','09:00','09:15','09:30','09:45','10:15','10:30','10:45','11:00','11:00','11:15','11:30','12:00','12:00','13:00','13:30','14:30','14:30','15:00','15:15','15:30','15:30','16:00','16:00','16:15','16:45','17:00','17:15','17:30','17:45','17:45','18:00','18:00','18:00','18:15','18:45','21:15'],
    sleeperTimes: [],
  },
  {
    destination: 'Tumsar', group: 'Long Distance', origin: 'Paratwada',
    busType: 'ORDINARY', fare: 'Check MSRTC fare',
    times: ['06:30','06:30','14:00','14:30'], sleeperTimes: [],
  },
];

// Individual services transcribed from the six screenshots.
// Some vehicle numbers are hard to read because the last digit wraps in the
// screenshot; verify them in the MSRTC app before publishing as definitive.
const additionalServices = [
  { time:'09:30', vehicle:'MH06S8819', from:'PARATWADA', to:'MORSHI' },
  { time:'09:30', vehicle:'MH14MH6662', from:'BURHANPUR', to:'BADNERA' },
  { time:'10:00', vehicle:'MH40Y5021', from:'PARATWADA', to:'MORSHI' },
  { time:'10:00', vehicle:'MH40Y5641', from:'PARATWADA', to:'AMRAVATI' },
  { time:'10:00', vehicle:'MH14MH3045', from:'PARATWADA', to:'CHANDUR BAZAR' },
  { time:'10:30', vehicle:'MH07C9322', from:'PARATWADA', to:'MORSHI' },
  { time:'11:00', vehicle:'MH14BT4293', from:'PARATWADA', to:'MUKTAGIRI' },
  { time:'11:00', vehicle:'MH14MT0255', from:'CHANDUR BAZAR', to:'CHHATRAPATI SAMBHAJI NAGAR' },
  { time:'11:30', vehicle:'MH40Y5838', from:'PARATWADA', to:'CHANDUR BAZAR' },
  { time:'12:00', vehicle:'MH40Y5714', from:'PARATWADA', to:'MANGRULPIR' },
  { time:'12:00', vehicle:'MH07C9153', from:'PARATWADA', to:'MANGRULPIR' },
  { time:'12:15', vehicle:'MH40N9967', from:'PARATWADA', to:'CHANDUR BAZAR' },
  { time:'12:30', vehicle:'MH14BT4360', from:'KHAMGAON', to:'CHANDUR BAZAR' },
  { time:'14:00', vehicle:'MH14MH3045', from:'PARATWADA', to:'NAGPUR' },

  { time:'07:00', vehicle:'MH14LX8831', from:'CHINDWARA', to:'AKOLA' },
  { time:'07:00', vehicle:'MH40AQ6269', from:'MULTAI', to:'DARYAPUR' },
  { time:'07:00', vehicle:'MH14BT4309', from:'PARATWADA', to:'BULDHANA' },
  { time:'07:30', vehicle:'MH20BL2230', from:'PARATWADA', to:'KANDHAR' },
  { time:'07:30', vehicle:'MH14BT4360', from:'CHANDUR BAZAR', to:'KHAMGAON' },
  { time:'07:30', vehicle:'MH40Y5457', from:'PARATWADA', to:'CHANDUR BAZAR' },
  { time:'07:30', vehicle:'MH14BT4293', from:'PARATWADA', to:'AKOT' },
  { time:'07:40', vehicle:'MH20GC3876', from:'PARATWADA', to:'AMRAVATI' },
  { time:'08:30', vehicle:'MH14BT2281', from:'PARATWADA', to:'PARALI' },
  { time:'08:45', vehicle:'MH40Y5392', from:'PARATWADA', to:'CHANDUR BAZAR' },
  { time:'09:00', vehicle:'MH40Y5314', from:'PARATWADA', to:'CHANDUR BAZAR' },
  { time:'09:00', vehicle:'MH06S8873', from:'PARATWADA', to:'CHIKHALDARA' },

  { time:'20:00', vehicle:'MH40AQ6276', from:'PARATWADA', to:'ASADPUR' },
  { time:'20:15', vehicle:'MH40Y5457', from:'PARATWADA', to:'KONDWARDHA' },
  { time:'20:30', vehicle:'MH14LX8821', from:'PARATWADA', to:'AMRAVATI' },
  { time:'22:00', vehicle:'MH09EM1962', from:'PARATWADA', to:'AMRAVATI' },
  { time:'05:30', vehicle:'MH40CM6290', from:'INDORE', to:'NAGPUR' },
  { time:'05:45', vehicle:'MH14LX7590', from:'PARATWADA', to:'PARALI' },
  { time:'06:00', vehicle:'MH14MH9863', from:'BHOKARBADI', to:'AMRAVATI' },
  { time:'06:00', vehicle:'MH20GC3931', from:'AMRAVATI', to:'DHARNI' },
  { time:'06:00', vehicle:'MH14NE0047', from:'CHIKHALDARA', to:'YAVATMAL' },
  { time:'06:15', vehicle:'MH07C9322', from:'PARATWADA', to:'MORSHI' },
  { time:'06:15', vehicle:'MH40Y5392', from:'PARATWADA', to:'CHANDUR BAZAR' },
  { time:'06:15', vehicle:'MH14MH9314', from:'AKOT', to:'RAMTEK' },
  { time:'06:30', vehicle:'MH14KQ8673', from:'PARATWADA', to:'TUMSAR' },
  { time:'07:00', vehicle:'MH14MT0256', from:'CHHATRAPATI SAMBHAJI NAGAR', to:'CHANDUR BAZAR' },

  { time:'15:00', vehicle:'MH14BT2920', from:'PARATWADA', to:'CHANDUR BAZAR' },
  { time:'15:00', vehicle:'MH14NE0047', from:'YAVATMAL', to:'CHIKHALDARA' },
  { time:'15:00', vehicle:'MH20GC3876', from:'PARATWADA', to:'AMRAVATI' },
  { time:'15:15', vehicle:'MH40AQ6135', from:'PARATWADA', to:'AMRAVATI' },
  { time:'15:30', vehicle:'MH20GC3960', from:'PARATWADA', to:'AMRAVATI' },
  { time:'15:30', vehicle:'MH14NE8621', from:'PARATWADA', to:'AKOLA' },
  { time:'15:30', vehicle:'MH14MT8635', from:'PARATWADA', to:'BHANDARA' },
  { time:'15:30', vehicle:'MH14NE8869', from:'KHANDWA', to:'AMRAVATI' },
  { time:'15:30', vehicle:'MH40Y5523', from:'PARATWADA', to:'CHIKHALDARA' },
  { time:'15:30', vehicle:'MH14NP0079', from:'PARATWADA', to:'AKOLA' },
  { time:'15:30', vehicle:'MH40Y5314', from:'PARATWADA', to:'CHANDUR BAZAR' },
  { time:'15:45', vehicle:'MH40Y5641', from:'PARATWADA', to:'AMRAVATI' },
  { time:'15:45', vehicle:'MH07C9380', from:'PARATWADA', to:'AMRAVATI' },
  { time:'15:45', vehicle:'MH40Y5838', from:'PARATWADA', to:'BHANDUM' },
  { time:'16:00', vehicle:'MH14NP1098', from:'PARATWADA', to:'MORSHI' },
  { time:'16:00', vehicle:'MH06S8819', from:'PARATWADA', to:'MORSHI' },
  { time:'16:00', vehicle:'MH06BW3525', from:'PARATWADA', to:'AKOLA' },
  { time:'16:10', vehicle:'MH14MH9862', from:'NAGPUR', to:'DARYAPUR' },
  { time:'16:10', vehicle:'MH14MH9862', from:'NAGPUR', to:'DARYAPUR' },
  { time:'16:15', vehicle:'MH06BW0292', from:'PARATWADA', to:'AMRAVATI' },
  { time:'16:15', vehicle:'MH40Y5457', from:'PARATWADA', to:'CHANDUR BAZAR' },
  { time:'16:30', vehicle:'MH40Y5593', from:'PARATWADA', to:'AMRAVATI' },
  { time:'16:30', vehicle:'MH40Y5236', from:'PARATWADA', to:'ASADPUR' },
  { time:'16:45', vehicle:'MH40AQ6399', from:'PARATWADA', to:'AKOT' },
  { time:'16:45', vehicle:'MH14MH9863', from:'AMRAVATI', to:'BHOKARBADI' },
  { time:'16:45', vehicle:'MH40Y5099', from:'PARATWADA', to:'ANJANGAON SURJI' },
  { time:'17:00', vehicle:'MH09EM2265', from:'PARATWADA', to:'AKOLA' },
  { time:'17:00', vehicle:'MH14LX8821', from:'PARATWADA', to:'AMRAVATI' },
  { time:'17:15', vehicle:'MH14MH3349', from:'ACHALPUR', to:'MURTIZAPUR' },
  { time:'17:15', vehicle:'MH14BT4293', from:'PARATWADA', to:'KUSHTA' },
  { time:'17:30', vehicle:'MH14NE8625', from:'PARATWADA', to:'AKOLA' },
  { time:'17:30', vehicle:'MH40AQ6276', from:'PARATWADA', to:'ASADPUR' },
  { time:'17:45', vehicle:'MH40Y5029', from:'PARATWADA', to:'CHANDUR BAZAR' },
  { time:'17:45', vehicle:'MH07C9322', from:'PARATWADA', to:'MORSHI' },
  { time:'17:45', vehicle:'MH40Y5355', from:'PARATWADA', to:'AKOLA' },
  { time:'18:00', vehicle:'MH09EM2264', from:'PARATWADA', to:'AKOLA' },
  { time:'18:29', vehicle:'MH06S8873', from:'PARATWADA', to:'KHONGADA' },
  { time:'18:30', vehicle:'MH40Y5905', from:'PARATWADA', to:'MORSHI' },
  { time:'18:30', vehicle:'MH20GC3919', from:'PARATWADA', to:'NAGPUR' },
  { time:'18:45', vehicle:'MH40Y5922', from:'PARATWADA', to:'CHANDUR BAZAR' },
  { time:'19:00', vehicle:'MH20GC3960', from:'PARATWADA', to:'AMRAVATI' },
  { time:'19:00', vehicle:'MH14BT4293', from:'PARATWADA', to:'KOLHA' },
  { time:'19:15', vehicle:'MH14MH1955', from:'PARATWADA', to:'MORSHI' },
  { time:'19:30', vehicle:'MH20GC3931', from:'PARATWADA', to:'AMRAVATI' },
];

// Derive individual route cards from the original route schedules plus
// screenshot services. The original six routes remain available.
const categories = ['All Routes', 'Major Cities', 'Regional', 'Long Distance'];

function formatTime(time) {
  const [hours, minutes] = time.split(':').map(Number);
  const suffix = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  return `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${suffix}`;
}

function getRouteGroup(destination) {
  const major = ['AMRAVATI', 'NAGPUR', 'AKOLA', 'BHANDARA', 'BULDHANA', 'YAVATMAL'];
  const longDistance = ['TUMSAR', 'PARALI', 'MANGRULPIR', 'KANDHAR', 'MURTIZAPUR', 'RAMTEK', 'CHHATRAPATI SAMBHAJI NAGAR'];
  if (major.includes(destination)) return 'Major Cities';
  if (longDistance.includes(destination)) return 'Long Distance';
  return 'Regional';
}

function Bus() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Routes');
  const [expandedRoute, setExpandedRoute] = useState('');
  const [activeStand, setActiveStand] = useState('Paratwada');
  const [serviceSearch, setServiceSearch] = useState('');
  const [serviceOrigin, setServiceOrigin] = useState('ALL');

  const routeCards = useMemo(() => {
    const map = new Map();

    timetable.forEach((route) => {
      const key = `${route.origin.toUpperCase()}|${route.destination.toUpperCase()}`;
      map.set(key, {
        ...route,
        times: [...route.times],
        sleeperTimes: [...(route.sleeperTimes || [])],
      });
    });

    additionalServices.forEach((service) => {
      const key = `${service.from}|${service.to}`;
      if (!map.has(key)) {
        map.set(key, {
          origin: service.from[0] + service.from.slice(1).toLowerCase(),
          destination: service.to[0] + service.to.slice(1).toLowerCase(),
          group: getRouteGroup(service.to),
          busType: 'MSRTC service (confirm at depot)',
          fare: 'Check MSRTC fare',
          times: [],
          sleeperTimes: [],
        });
      }
      map.get(key).times.push(service.time);
    });

    return [...map.values()].map((route) => ({
      ...route,
      times: route.times.slice().sort(),
    }));
  }, []);

  const filteredRoutes = useMemo(() => routeCards.filter((route) => {
    const haystack = `${route.origin} ${route.destination} ${route.group}`.toLowerCase();
    const matchesSearch = haystack.includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All Routes' || route.group === activeCategory;
    return matchesSearch && matchesCategory;
  }), [routeCards, search, activeCategory]);

  const filteredServices = useMemo(() => additionalServices
    .filter((bus) => {
      const query = serviceSearch.toLowerCase();
      const matchesSearch = `${bus.time} ${bus.vehicle} ${bus.from} ${bus.to}`.toLowerCase().includes(query);
      const matchesOrigin = serviceOrigin === 'ALL' || bus.from === serviceOrigin;
      return matchesSearch && matchesOrigin;
    })
    .slice()
    .sort((a, b) => a.time.localeCompare(b.time)), [serviceSearch, serviceOrigin]);

  const totalDepartures = routeCards.reduce((sum, route) => sum + route.times.length, 0);
  const selectedStand = busStands.find((stand) => stand.area === activeStand);

  return (
    <div className="bus-page">
      <section className="bus-hero">
        <div className="bus-hero__pattern" />
        <div className="bus-container bus-hero__content">
          <div className="bus-hero__eyebrow"><BusIcon size={16} /><span>ACHALPUR - PARATWADA TRANSPORT GUIDE</span></div>
          <h1>Your Journey,<span> Our Local Routes.</span></h1>
          <p>Explore MSRTC bus routes, individual vehicle schedules and bus stand information for Paratwada, Achalpur and nearby destinations.</p>
          <div className="bus-hero__actions">
            <a href="#bus-timetable" className="bus-btn bus-btn--primary">Explore Timetable <ArrowUpRight size={17} /></a>
            <a href={MSRTC_BOOKING_URL} target="_blank" rel="noreferrer" className="bus-btn bus-btn--outline">MSRTC Booking <ExternalLink size={16} /></a>
          </div>
          <div className="bus-hero__stats">
            <div><strong>{routeCards.length}</strong><span>Routes listed</span></div>
            <div><strong>{totalDepartures + additionalServices.length}</strong><span>Schedule entries</span></div>
            <div><strong>02</strong><span>Bus stands</span></div>
          </div>
        </div>
        <div className="bus-hero__visual" aria-hidden="true">
          <div className="bus-hero__circle bus-hero__circle--one" />
          <div className="bus-hero__circle bus-hero__circle--two" />
          <BusIcon className="bus-hero__big-icon" />
          <span className="bus-hero__visual-label">MSRTC</span>
        </div>
      </section>

      <section className="bus-container bus-stand-section">
        <div className="bus-section-heading">
          <span className="bus-section-kicker">LOCAL BUS TERMINALS</span>
          <h2>Bus Stands & Depots</h2>
          <p>Find bus stand locations and available contact information.</p>
        </div>
        <div className="bus-stand-grid">
          {busStands.map((stand) => (
            <article className="bus-stand-card" key={stand.area}>
              <div className="bus-stand-card__top">
                <div className="bus-stand-card__icon"><Building2 size={23} /></div>
                <span className="bus-stand-card__tag">{stand.area}</span>
              </div>
              <h3>{stand.name}</h3>
              <p>{stand.description}</p>
              <div className="bus-stand-card__detail"><MapPin size={16} /><span>{stand.address}</span></div>
              {stand.phone ? (
                <a className="bus-stand-card__detail bus-stand-card__phone" href={`tel:${stand.phone}`}><Phone size={16} /><span>{stand.phone}</span></a>
              ) : (
                <div className="bus-stand-card__detail"><Phone size={16} /><span>Phone number not available</span></div>
              )}
              <a className="bus-stand-card__map" href={stand.mapUrl} target="_blank" rel="noreferrer">View on Google Maps <Navigation size={15} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="bus-timetable-section" id="bus-timetable">
        <div className="bus-container">
          <div className="bus-section-heading bus-section-heading--row">
            <div>
              <span className="bus-section-kicker">PLAN YOUR JOURNEY</span>
              <h2>Bus Routes & Timetable</h2>
              <p>Original route schedules retained and combined with destinations visible in your latest MSRTC screenshots.</p>
            </div>
            <a href={MSRTC_BOOKING_URL} target="_blank" rel="noreferrer" className="bus-official-link">Official MSRTC Portal <ExternalLink size={15} /></a>
          </div>

          <div className="bus-search-panel">
            <div className="bus-search-box">
              <Search size={19} />
              <input type="search" placeholder="Search origin or destination..." value={search} onChange={(event) => setSearch(event.target.value)} />
              {search && <button type="button" onClick={() => setSearch('')} aria-label="Clear search"><RefreshCw size={15} /></button>}
            </div>
            <div className="bus-category-tabs">
              {categories.map((category) => (
                <button type="button" key={category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>
              ))}
            </div>
          </div>

          <div className="bus-timetable-layout">
            <div className="bus-route-list">
              <div className="bus-results-heading">
                <div><h3>Available Routes</h3><span>{filteredRoutes.length} routes found</span></div>
                <Route size={21} />
              </div>

              {filteredRoutes.length === 0 ? (
                <div className="bus-empty-state">
                  <BusIcon size={35} /><h3>No routes found</h3>
                  <p>Try another destination or category.</p>
                  <button type="button" onClick={() => { setSearch(''); setActiveCategory('All Routes'); }}>Clear filters</button>
                </div>
              ) : filteredRoutes.map((route) => {
                const routeKey = `${route.origin}-${route.destination}`;
                const isExpanded = expandedRoute === routeKey;
                return (
                  <article className={`bus-route-card ${isExpanded ? 'bus-route-card--expanded' : ''}`} key={routeKey}>
                    <div className="bus-route-card__heading">
                      <div className="bus-route-card__icon"><BusIcon size={22} /></div>
                      <div className="bus-route-card__title">
                        <span className="bus-route-card__origin">{route.origin.toUpperCase()} DEPARTURE</span>
                        <h3>{route.origin} → {route.destination}</h3>
                        <small>{route.group} · MSRTC timetable data</small>
                      </div>
                      <span className="bus-route-card__count">{route.times.length} trips</span>
                    </div>
                    <div className="bus-route-card__meta">
                      <div><BusIcon size={15} /><span>{route.busType}</span></div>
                      <div><Ticket size={15} /><span>Fare: {route.fare}</span></div>
                    </div>
                    <div className="bus-route-card__times-heading"><Clock size={16} /><strong>Departure timings</strong><span>All times local</span></div>
                    <div className="bus-time-grid">
                      {route.times.slice(0, isExpanded ? route.times.length : 8).map((time, index) => {
                        const isSleeper = route.sleeperTimes?.includes(time);
                        return (
                          <div className={`bus-time-chip ${isSleeper ? 'bus-time-chip--sleeper' : ''}`} key={`${time}-${index}`}>
                            <strong>{formatTime(time)}</strong>
                            <small>{isSleeper ? 'SLEEPER ORDINARY' : 'ORDINARY / MSRTC'}</small>
                          </div>
                        );
                      })}
                    </div>
                    {route.times.length > 8 && (
                      <button type="button" className="bus-expand-button" onClick={() => setExpandedRoute(isExpanded ? '' : routeKey)}>
                        {isExpanded ? <>Show less <ChevronUp size={16} /></> : <>View all {route.times.length} departures <ChevronDown size={16} /></>}
                      </button>
                    )}
                    <div className="bus-route-card__footer">
                      <span><CalendarDays size={14} />Confirm service before travelling</span>
                      <a href={MSRTC_BOOKING_URL} target="_blank" rel="noreferrer">Book / Check <ArrowUpRight size={14} /></a>
                    </div>
                  </article>
                );
              })}
            </div>

            <aside className="bus-sidebar">
              <div className="bus-sidebar-card">
                <span className="bus-section-kicker">BOARDING INFORMATION</span>
                <h3>Select a Bus Stand</h3>
                <p>The original route schedule is for Paratwada. The screenshot data also includes one service departing from Achalpur.</p>
                <div className="bus-stand-selector">
                  {busStands.map((stand) => (
                    <button type="button" key={stand.area} className={activeStand === stand.area ? 'active' : ''} onClick={() => setActiveStand(stand.area)}>
                      <MapPin size={16} />{stand.area}
                    </button>
                  ))}
                </div>
                {selectedStand && (
                  <div className="bus-selected-stand">
                    <strong>{selectedStand.name}</strong><span>{selectedStand.address}</span>
                    <a href={selectedStand.mapUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={14} /></a>
                  </div>
                )}
              </div>
              <div className="bus-sidebar-card bus-sidebar-card--booking">
                <div className="bus-booking-icon"><Ticket size={25} /></div>
                <h3>Book Your MSRTC Ticket</h3>
                <p>Visit the official MSRTC reservation portal for current availability, booking and applicable fares.</p>
                <a href={MSRTC_BOOKING_URL} target="_blank" rel="noreferrer" className="bus-booking-button">Visit MSRTC Portal <ExternalLink size={16} /></a>
              </div>
            </aside>
          </div>

          <div className="bus-disclaimer">
            <Info size={19} />
            <div>
              <strong>Important timetable notice</strong>
              <p>Schedules are transcribed from data supplied in this conversation and screenshots showing a next-24-hours schedule. They are not a live feed. Services and timings can change. Verify with MSRTC or the depot before travelling. Vehicle numbers may need visual confirmation where digits wrap in the screenshots. Fares were not supplied and are not estimated.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bus-container bus-extra-services">
        <div className="bus-section-heading">
          <span className="bus-section-kicker">INDIVIDUAL MSRTC SERVICES</span>
          <h2>Vehicle-wise Bus Schedule</h2>
          <p>Search individual buses by departure time, vehicle registration, origin or destination.</p>
        </div>
        <div className="bus-extra-filters">
          <input type="search" placeholder="Search destination or vehicle number..." value={serviceSearch} onChange={(event) => setServiceSearch(event.target.value)} />
          <select value={serviceOrigin} onChange={(event) => setServiceOrigin(event.target.value)}>
            <option value="ALL">All origins</option>
            <option value="PARATWADA">Paratwada</option>
            <option value="ACHALPUR">Achalpur</option>
            <option value="AMRAVATI">Amravati</option>
            <option value="CHANDUR BAZAR">Chandur Bazar</option>
            <option value="Other">Other origins</option>
          </select>
        </div>
        <div className="bus-extra-table-wrap">
          <table className="bus-extra-table">
            <thead><tr><th>Departure</th><th>Vehicle Number</th><th>Bus Type</th><th>From</th><th>To</th></tr></thead>
            <tbody>
              {filteredServices.filter((bus) => serviceOrigin !== 'Other' || !['PARATWADA','ACHALPUR','AMRAVATI','CHANDUR BAZAR'].includes(bus.from)).map((bus, index) => (
                <tr key={`${bus.vehicle}-${bus.time}-${bus.from}-${bus.to}-${index}`}>
                  <td><strong>{formatTime(bus.time)}</strong></td>
                  <td className="bus-extra-vehicle">{bus.vehicle}</td>
                  <td>MSRTC bus</td><td>{bus.from}</td><td>{bus.to}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredServices.length === 0 && <p className="bus-extra-empty">No matching buses found.</p>}
        </div>
      </section>

      <section className="bus-help-section">
        <div className="bus-container bus-help-card">
          <div>
            <span className="bus-section-kicker">HELP IMPROVE THIS DIRECTORY</span>
            <h2>Know a missing bus route or updated timing?</h2>
            <p>Help keep local transport information useful by sharing verified route and timetable updates.</p>
          </div>
          <a href="mailto:info@achalpurparatwada.com">Share an Update <ArrowUpRight size={17} /></a>
        </div>
      </section>
    </div>
  );
}

export default Bus;
