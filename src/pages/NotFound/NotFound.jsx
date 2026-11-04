import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';
export default function NotFound(){return <div className="container not-found"><strong>404</strong><h1>Page not found</h1><p>The page you're looking for may have moved or is not available yet.</p><Link to="/">Back to homepage</Link></div>}
