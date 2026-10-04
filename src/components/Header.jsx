import React, { useState } from 'react';
import { Shield, Globe, UserCheck, Play, Menu, X, Activity, AlertCircle } from 'lucide-react';
import { translations } from '../data/translations';

export default function Header({ 
  currentRole, 
  setCurrentRole, 
  currentLang, 
  setCurrentLang, 
  activeTab, 
  setActiveTab,
  sihDemoMode,
  setSihDemoMode,
  triggerDemoStep
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[currentLang] || translations.en;

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'animals', label: t.navAnimals },
    { id: 'health-check', label: t.navCheckHealth },
    { id: 'scan-image', label: t.navScanImage },
    { id: 'vet-care', label: t.navVetCare },
    { id: 'timeline', label: t.navTimeline },
    { id: 'disease-map', label: t.navDiseaseMap },
    { id: 'prevention', label: t.navPrevention },
    { id: 'dashboard', label: t.navDashboard },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(6, 78, 59, 0.96)',
      backdropFilter: 'blur(12px)',
      color: '#ffffff',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
    }}>
      {/* Top Banner for SIH Judge Demo Indicator */}
      <div style={{
        backgroundColor: '#042f2e',
        padding: '6px 16px',
        fontSize: '0.8rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(20, 184, 166, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="badge badge-emerald" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
            {t.demoBadge}
          </span>
          <span style={{ color: '#99f6e4', fontWeight: 500 }}>
            🇮🇳 Smart India Hackathon 2026 Innovation Submission
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#6ee7b7' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
            AI Rule & Diagnostic Engine: Online
          </div>

          <button
            onClick={() => {
              setSihDemoMode(!sihDemoMode);
              if (!sihDemoMode && triggerDemoStep) triggerDemoStep(1);
            }}
            style={{
              backgroundColor: sihDemoMode ? '#dc2626' : '#10b981',
              color: '#ffffff',
              border: 'none',
              borderRadius: '20px',
              padding: '4px 14px',
              fontSize: '0.75rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: sihDemoMode ? '0 0 10px rgba(220,38,38,0.5)' : '0 0 10px rgba(16,185,129,0.4)',
              transition: 'all 0.2s ease'
            }}
          >
            <Play size={12} fill="#ffffff" />
            {sihDemoMode ? 'Exit Judge Demo Mode' : t.btnDemoMode}
          </button>
        </div>
      </div>

      {/* Main Header Container */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            backgroundColor: '#10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)'
          }}>
            <Shield size={24} color="#ffffff" strokeWidth={2.5} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.5px', color: '#ffffff' }}>
              {t.appTitle}
            </h1>
            <p style={{ fontSize: '0.725rem', color: '#a7f3d0', marginTop: '-2px' }}>
              AI Livestock Healthcare Platform
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: '4px', alignItems: 'center' }} className="desktop-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                backgroundColor: activeTab === item.id ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                color: activeTab === item.id ? '#ffffff' : '#d1fae5',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 14px',
                fontSize: '0.875rem',
                fontWeight: activeTab === item.id ? 700 : 500,
                transition: 'all 0.15s ease'
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Language & Role Selectors */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Language Picker */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '8px' }}>
            <Globe size={16} color="#a7f3d0" />
            <select
              value={currentLang}
              onChange={(e) => setCurrentLang(e.target.value)}
              style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: 'none',
                fontSize: '0.825rem',
                fontWeight: 600,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="en" style={{ color: '#000' }}>English</option>
              <option value="hi" style={{ color: '#000' }}>हिंदी (Hindi)</option>
              <option value="te" style={{ color: '#000' }}>తెలుగు (Telugu)</option>
            </select>
          </div>

          {/* Role Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#047857', padding: '6px 12px', borderRadius: '10px' }}>
            <UserCheck size={16} color="#34d399" />
            <select
              value={currentRole}
              onChange={(e) => setCurrentRole(e.target.value)}
              style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: 'none',
                fontSize: '0.825rem',
                fontWeight: 700,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="farmer" style={{ color: '#000' }}>🧑‍🌾 {t.roles.farmer}</option>
              <option value="vet" style={{ color: '#000' }}>🩺 {t.roles.vet}</option>
              <option value="facility" style={{ color: '#000' }}>🏥 {t.roles.facility}</option>
              <option value="admin" style={{ color: '#000' }}>🏛️ {t.roles.admin}</option>
            </select>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#ffffff',
              padding: '6px'
            }}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div style={{
          backgroundColor: '#047857',
          padding: '16px 20px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              style={{
                textAlign: 'left',
                backgroundColor: activeTab === item.id ? '#064e3b' : 'transparent',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 14px',
                fontSize: '0.95rem',
                fontWeight: 600
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* CSS to handle responsive display */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
