import React from 'react';
import { UserRound, ShieldCheck } from 'lucide-react';
import './Login.scss';
export default function Login(){return <div className="container login-page"><section className="login-card"><span><UserRound/></span><h1>Welcome to Achalpur Paratwada</h1><p>Citizen, business and institution accounts will be enabled when backend authentication is connected.</p><label>Mobile number or email<input placeholder="Enter mobile number or email" disabled/></label><label>Password<input placeholder="Password" type="password" disabled/></label><button disabled>Continue – backend integration pending</button><small><ShieldCheck size={13}/> Your account details will be protected with secure authentication.</small></section></div>}
