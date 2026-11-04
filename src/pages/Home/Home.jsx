import React from 'react';
import { ArrowRight, MapPin, ShieldCheck, Building2, CalendarDays, Users, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, news, places } from '../../data/siteData.js';
import ServiceCard from '../../components/ServiceCard/ServiceCard.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import NewsCard from '../../components/NewsCard/NewsCard.jsx';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import './Home.scss';

export default function Home(){
 return <>
  <section className="home-hero"><div className="hero-shade"/><div className="container hero-content"><span className="hero-kicker">WELCOME TO YOUR REGION</span><h1>Achalpur <em>Paratwada</em></h1><h2>Your local digital information & citizen service portal</h2><p>आपले शहर, आपली माहिती, आपली सेवा!</p><SearchBar/><div className="hero-pills"><span><ShieldCheck size={15}/> Verified local information</span><span><MapPin size={15}/> Local services & places</span></div></div></section>
  <div className="container home-main">
   <div className="quick-strip">{services.slice(0,6).map((item)=><Link key={item.title} to={item.path}><item.icon/><span>{item.title}</span></Link>)}</div>
   <section className="service-section"><SectionTitle title="Explore Services" action={{label:'View all services',href:'/government'}}/><div className="service-grid">{services.map(item=><ServiceCard key={item.title} item={item}/>)}</div></section>
   <section className="home-feature-grid"><div className="panel news-panel"><SectionTitle title="Latest Local Updates" action={{label:'View all news',href:'/news'}}/>{news.map((item,i)=><NewsCard key={i} item={item}/>)}</div><div className="panel quick-panel"><SectionTitle title="Quick Access"/><Link to="/government"><Building2/> Aaple Sarkar & Setu Services <ArrowRight/></Link><Link to="/offices"><MapPin/> Government office directory <ArrowRight/></Link><Link to="/transport"><CalendarDays/> Bus stations & timetable <ArrowRight/></Link><Link to="/complaints"><ShieldCheck/> Submit a civic complaint <ArrowRight/></Link><Link to="/business" className="add-listing"><PlusCircle/> Add your business <ArrowRight/></Link></div></section>
   <section className="join-banner"><div><span className="hero-kicker">GROW WITH YOUR COMMUNITY</span><h2>Are you a local business, hospital or institution?</h2><p>Add your listing and help residents discover your services.</p><Link to="/business">Register your listing <ArrowRight size={16}/></Link></div><div className="join-art"><Users size={90}/></div></section>
   <section className="places-section"><SectionTitle title="Explore Our Region" action={{label:'Explore tourism',href:'/tourism'}}/><div className="place-grid">{places.map(place=><Link to="/tourism" className="place-card" key={place.name} style={{backgroundImage:`linear-gradient(0deg,rgba(5,27,48,.78),transparent 75%),url(${place.image})`}}><strong>{place.name}</strong><span>{place.text}</span></Link>)}</div></section>
   <div className="stats-row"><div><strong>One portal</strong><span>For local information</span></div><div><strong>Many services</strong><span>Across our region</span></div><div><strong>Community first</strong><span>Built for residents</span></div></div>
  </div>
 </>;
}
