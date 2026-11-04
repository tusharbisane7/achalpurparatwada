import React from 'react';
import './PageHero.scss';
export default function PageHero({eyebrow,title,description,image,children}){return <section className="page-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(5,43,80,.93),rgba(5,43,80,.66),rgba(5,43,80,.1)),url(${image})`}}><div className="container page-hero-content"><span>{eyebrow}</span><h1>{title}</h1><p>{description}</p>{children}</div></section>}
