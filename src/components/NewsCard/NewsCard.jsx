import React from 'react';
import './NewsCard.scss';
export default function NewsCard({item}) { return <article className="news-card"><img src={item.image} alt="Local update"/><div><span className="eyebrow">{item.category}</span><h3>{item.title}</h3><small>{item.time}</small></div></article>; }
