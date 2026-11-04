import React from 'react';
import './SectionTitle.scss';
export default function SectionTitle({title, action, children}) { return <div className="section-title"><div><h2>{title}</h2>{children && <p>{children}</p>}</div>{action && <a href={action.href || '#'}>{action.label} <span>→</span></a>}</div>; }
