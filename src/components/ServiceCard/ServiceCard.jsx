import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.scss';
export default function ServiceCard({item, compact=false}) { const Icon=item.icon; return <Link to={item.path || '#'} className={`service-card ${item.color || 'blue'} ${compact?'compact':''}`}><span className="service-icon"><Icon size={compact?23:27}/></span><strong>{item.title}</strong>{!compact && <small>{item.subtitle}</small>}<span className="service-arrow">↗</span></Link>; }
