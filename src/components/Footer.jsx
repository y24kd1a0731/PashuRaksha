import React from 'react';
import { Shield, Heart } from 'lucide-react';
import { translations } from '../data/translations';

export default function Footer({ currentLang, setActiveTab }) {
  const t = translations[currentLang] || translations.en;

  return (
    <footer style={{
      backgroundColor: '#064e3b',
      color: '#ffffff',
      padding: '48px 20px 24px 20px',
      borderTop: '4px solid #10b981',
      marginTop: '60px'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '40px',
        marginBottom: '40px'
      }}>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <Shield size={26} color="#34d399" />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
              {t.appTitle}
            </h3>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#a7f3d0', lineHeight: 1.6 }}>
            {t.appSubtitle}
          </p>
          <p style={{ fontSize: '0.775rem', color: '#6ee7b7', marginTop: '8px' }}>
            {t.tagline}
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '1rem', color: '#34d399', fontWeight: 700, marginBottom: '14px' }}>
            Core Modules
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#d1fae5' }}>
            <li onClick={() => setActiveTab('health-check')} style={{ cursor: 'pointer' }}>✓ AI Health Assistant & Triaging</li>
            <li onClick={() => setActiveTab('scan-image')} style={{ cursor: 'pointer' }}>✓ Vision AI Lesion Scanner</li>
            <li onClick={() => setActiveTab('vet-care')} style={{ cursor: 'pointer' }}>✓ Live GPS Smart Vet Finder</li>
            <li onClick={() => setActiveTab('timeline')} style={{ cursor: 'pointer' }}>✓ Animal Health Profile & Timeline</li>
            <li onClick={() => setActiveTab('disease-map')} style={{ cursor: 'pointer' }}>✓ Community Disease Hotspot Map</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '1rem', color: '#34d399', fontWeight: 700, marginBottom: '14px' }}>
            Role Interfaces
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#d1fae5' }}>
            <li onClick={() => setActiveTab('dashboard')} style={{ cursor: 'pointer' }}>🧑‍🌾 Farmer Care Portal</li>
            <li onClick={() => setActiveTab('dashboard')} style={{ cursor: 'pointer' }}>🩺 Veterinarian & Field Worker</li>
            <li onClick={() => setActiveTab('dashboard')} style={{ cursor: 'pointer' }}>🏥 Veterinary Hospital OPD</li>
            <li onClick={() => setActiveTab('dashboard')} style={{ cursor: 'pointer' }}>🏛️ Government Surveillance</li>
          </ul>
        </div>

      </div>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        paddingTop: '20px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        fontSize: '0.8rem',
        color: '#6ee7b7'
      }}>
        <div>
          {t.footerText}
        </div>
        <div>
          Designed for SIH 2026 Presentation & Demonstration
        </div>
      </div>
    </footer>
  );
}
