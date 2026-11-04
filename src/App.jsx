
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import MaintenancePopup from './components/MaintenancePopup/MaintenancePopup.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';

import Home from './pages/Home/Home.jsx';
import Government from './pages/Government/Government.jsx';
import Healthcare from './pages/Healthcare/Healthcare.jsx';
import Education from './pages/Education/Education.jsx';
import Tourism from './pages/Tourism/Tourism.jsx';
import Business from './pages/Business/Business.jsx';
import DirectoryPage from './pages/DirectoryPage.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Login from './pages/Login/Login.jsx';
import Bus from './pages/Bus/Bus.jsx';

import './App.scss';

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/government" element={<Government />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/education" element={<Education />} />
          <Route path="/business" element={<Business />} />

          <Route path="/jobs" element={<DirectoryPage kind="jobs" />} />
          <Route path="/news" element={<DirectoryPage kind="news" />} />

          <Route path="/tourism" element={<Tourism />} />
          <Route path="/transport" element={<Bus />} />
          <Route path="/bus-station" element={<Bus />} />

          <Route path="/complaints" element={<DirectoryPage kind="complaints" />} />
          <Route path="/marketplace" element={<DirectoryPage kind="marketplace" />} />
          <Route path="/offices" element={<DirectoryPage kind="offices" />} />

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      <MaintenancePopup />
    </div>
  );
}
