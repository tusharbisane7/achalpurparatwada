import { Landmark, HeartPulse, GraduationCap, Store, BriefcaseBusiness, Newspaper, Mountain, BusFront, MessageSquareWarning, ShoppingBag, FlaskConical, Pill, Stethoscope, School, Building2, MapPin, FileText, ShieldCheck, CalendarDays, Users, Trees, Church, TrainFront } from 'lucide-react';

export const services = [
  { title: 'Government Services', subtitle: 'Aaple Sarkar, Setu & certificates', icon: Landmark, color: 'blue', path: '/government' },
  { title: 'Healthcare', subtitle: 'Hospitals, clinics, labs & pharmacies', icon: HeartPulse, color: 'rose', path: '/healthcare' },
  { title: 'Education', subtitle: 'Schools, colleges & scholarships', icon: GraduationCap, color: 'violet', path: '/education' },
  { title: 'Business Directory', subtitle: 'Shops, marts & local services', icon: Store, color: 'orange', path: '/business' },
  { title: 'Jobs & Careers', subtitle: 'Local and government vacancies', icon: BriefcaseBusiness, color: 'amber', path: '/jobs' },
  { title: 'Local News', subtitle: 'Updates from our region', icon: Newspaper, color: 'cyan', path: '/news' },
  { title: 'Tourism & Places', subtitle: 'Discover Melghat and more', icon: Mountain, color: 'green', path: '/tourism' },
  { title: 'Bus Timetable', subtitle: 'Stations, routes & schedules', icon: BusFront, color: 'purple', path: '/transport' },
  { title: 'Complaint Portal', subtitle: 'Report and track civic issues', icon: MessageSquareWarning, color: 'red', path: '/complaints' },
  { title: 'Buy & Sell', subtitle: 'Local new and used listings', icon: ShoppingBag, color: 'pink', path: '/marketplace' },
];

export const news = [
  { title: 'Road improvement and civic development updates', category: 'Development', time: 'Recently updated', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=700&q=85' },
  { title: 'Healthcare services and diagnostic facilities in the region', category: 'Healthcare', time: 'Local update', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=85' },
  { title: 'Admissions, scholarships and student notifications', category: 'Education', time: 'Education update', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=85' },
];

export const healthcareCategories = [
  { title: 'Hospitals', icon: Building2, text: 'General and multispeciality hospitals' },
  { title: 'Clinics', icon: Stethoscope, text: 'General and specialist clinics' },
  { title: 'Laboratories', icon: FlaskConical, text: 'Pathology and diagnostic labs' },
  { title: 'Pharmacies', icon: Pill, text: 'Medical stores and pharmacies' },
  { title: 'Doctors', icon: HeartPulse, text: 'Find doctors by specialization' },
  { title: 'Ambulance', icon: ShieldCheck, text: 'Emergency contact information' },
];

export const educationCategories = [
  { title: 'Schools', icon: School, text: 'Primary and secondary schools' },
  { title: 'Junior Colleges', icon: GraduationCap, text: '11th and 12th standard' },
  { title: 'Degree Colleges', icon: Building2, text: 'Arts, commerce and science' },
  { title: 'Engineering', icon: FlaskConical, text: 'Engineering and diploma' },
  { title: 'Professional', icon: BriefcaseBusiness, text: 'MBA, MCA, B.Pharm and more' },
  { title: 'Skill & Vocational', icon: FileText, text: 'ITI and skill development' },
];

export const sampleListings = [
  { name: 'Zeinth Heart and Multispeciality Hospital', type: 'Hospital', location: 'Achalpur – Paratwada', detail: 'Multispeciality healthcare services', image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=700&q=85' },
  { name: 'Shri Krishna Multispeciality Hospital', type: 'Hospital', location: 'Paratwada', detail: 'Healthcare and specialist services', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=85' },
  { name: 'Hi-Tech Diagnostic Centre', type: 'Laboratory', location: 'Achalpur', detail: 'Diagnostic and pathology services', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=700&q=85' },
];

export const places = [
  { name: 'Chikhaldara', text: 'Hill station and scenic viewpoints', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900&q=85', icon: Mountain },
  { name: 'Melghat', text: 'Forests and wildlife landscapes', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=85', icon: Trees },
  { name: 'Temples & Heritage', text: 'Local culture and historic places', image: 'https://images.unsplash.com/photo-1606293926075-69a00dbd2f7c?w=900&q=85', icon: Church },
];
