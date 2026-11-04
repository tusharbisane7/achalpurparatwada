import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MapPin, CalendarDays, Search, Menu, X, UserRound, ChevronDown, Languages } from 'lucide-react';
import './Header.scss';

const links = [
  ['Government', '/government'], ['Healthcare', '/healthcare'], ['Education', '/education'], ['Business', '/business'], ['Jobs', '/jobs'], ['News', '/news'], ['Tourism', '/tourism'], ['More', '/transport']
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('English');
  return <header className="site-header">
    <div className="utility-bar"><div className="container utility-inner"><span><MapPin size={13}/> Achalpur – Paratwada, Maharashtra</span><span className="utility-date"><CalendarDays size={13}/> Local information portal</span><div className="utility-links"><Link to="/government">Aaple Sarkar</Link><Link to="/offices">Government Offices</Link><Link to="/business">Add Your Business</Link><button onClick={() => setLang(lang === 'English' ? 'मराठी' : 'English')}><Languages size={14}/>{lang}</button></div></div></div>
    <div className="main-header container"><Link to="/" className="brand"><span className="brand-mark">AP</span><span><strong>Achalpur Paratwada</strong><small>Digital Regional Portal</small></span></Link><div className="brand-tagline">आपले शहर,<br/>आपली डिजिटल ओळख!</div>
      <nav className={open ? 'primary-nav is-open' : 'primary-nav'}>{links.map(([label,path]) => <NavLink key={label} to={path} onClick={() => setOpen(false)}>{label}{['Government','Healthcare','Education','Business','More'].includes(label) && <ChevronDown size={13}/>}</NavLink>)}</nav>
      <div className="header-actions"><button className="icon-button" aria-label="Search"><Search size={19}/></button><Link className="login-button" to="/login"><UserRound size={16}/> Login / Register</Link><button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button></div>
    </div>
  </header>;
}
