
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import MaintenancePopup from './components/MaintenancePopup/MaintenancePopup.jsx';

import Home from './pages/Home/Home.jsx';
import Government from './pages/Government/Government.jsx';
import Healthcare from './pages/Healthcare/Healthcare.jsx';
import Education from './pages/Education/Education.jsx';
import DirectoryPage from './pages/DirectoryPage.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Login from './pages/Login/Login.jsx';

import './App.scss';

export default function App() {
  return (
    <div className="app-shell">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/government" element={<Government />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/education" element={<Education />} />

          <Route
            path="/business"
            element={<DirectoryPage kind="business" />}
          />

          <Route
            path="/jobs"
            element={<DirectoryPage kind="jobs" />}
          />

          <Route
            path="/news"
            element={<DirectoryPage kind="news" />}
          />

          <Route
            path="/tourism"
            element={<DirectoryPage kind="tourism" />}
          />

          <Route
            path="/transport"
            element={<DirectoryPage kind="transport" />}
          />

          <Route
            path="/complaints"
            element={<DirectoryPage kind="complaints" />}
          />

          <Route
            path="/marketplace"
            element={<DirectoryPage kind="marketplace" />}
          />

          <Route
            path="/offices"
            element={<DirectoryPage kind="offices" />}
          />

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      {/* Website maintenance screen */}
      <MaintenancePopup />
    </div>
  );
}
