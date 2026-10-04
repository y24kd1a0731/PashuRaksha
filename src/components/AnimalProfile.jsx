import React from 'react';
import { Tag, Calendar, User, ShieldAlert, Heart, Syringe, Stethoscope, ChevronRight, Activity, Award } from 'lucide-react';
import { sampleAnimals } from '../data/sampleData';

export default function AnimalProfile({ animal = sampleAnimals[0], onSelectAnimal }) {
  return (
    <div style={{ maxWidth: '1280px', margin: '40px auto', padding: '0 20px' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ecfdf5', color: '#047857', padding: '6px 14px', borderRadius: '20px', fontSize: '0.825rem', fontWeight: 700, marginBottom: '10px' }}>
          <User size={16} />
          MODULE H: ANIMAL HEALTH PROFILE & IDENTIFICATION
        </div>
        <h2 style={{ fontSize: '2rem', color: '#0f172a' }}>
          Livestock Passport & Medical Records
        </h2>
      </div>

      {/* Animal Switcher Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        {sampleAnimals.map(a => (
          <div
            key={a.id}
            onClick={() => onSelectAnimal && onSelectAnimal(a)}
            style={{
              backgroundColor: animal.id === a.id ? '#ecfdf5' : '#ffffff',
              border: animal.id === a.id ? '2px solid #047857' : '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}
          >
            <img src={a.avatar} alt={a.name} style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover' }} />
            <div>
              <span className={`badge badge-${a.statusBadge}`} style={{ fontSize: '0.65rem', padding: '2px 6px' }}>
                {a.healthStatus}
              </span>
              <h4 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 800, marginTop: '2px' }}>
                {a.name}
              </h4>
              <p style={{ fontSize: '0.775rem', color: '#64748b' }}>
                {a.species} • Tag: {a.tagId}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Profile Showcase */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        padding: '32px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '32px'
      }} className="profile-grid">

        {/* Profile Card Header */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <img
            src={animal.avatar}
            alt={animal.name}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '20px',
              objectFit: 'cover',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
            }}
          />

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: 800 }}>
                {animal.name}
              </h2>
              <span className={`badge badge-${animal.statusBadge}`} style={{ fontSize: '0.8rem', padding: '4px 12px' }}>
                {animal.healthStatus}
              </span>
            </div>

            <p style={{ fontSize: '1rem', color: '#475569', fontWeight: 600, marginBottom: '12px' }}>
              {animal.breed} • Age: {animal.age} • Tag ID: <code>{animal.tagId}</code>
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.875rem', color: '#64748b' }}>
              <span>🧑‍🌾 Owner: <strong>{animal.ownerName}</strong></span>
              <span>📍 Location: <strong>{animal.village}</strong></span>
              <span>🥛 Milk Yield: <strong>{animal.lactationStage}</strong></span>
            </div>
          </div>
        </div>

        {/* Key Medical Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          
          <div style={{ backgroundColor: '#fef2f2', padding: '18px', borderRadius: '14px', border: '1px solid #fecaca' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#991b1b', textTransform: 'uppercase' }}>
              Active Clinical Concern
            </span>
            <h4 style={{ fontSize: '1rem', color: '#dc2626', fontWeight: 800, marginTop: '4px' }}>
              {animal.activeConcern}
            </h4>
          </div>

          <div style={{ backgroundColor: '#ecfdf5', padding: '18px', borderRadius: '14px', border: '1px solid #a7f3d0' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#065f46', textTransform: 'uppercase' }}>
              Last Vaccination
            </span>
            <h4 style={{ fontSize: '1rem', color: '#047857', fontWeight: 800, marginTop: '4px' }}>
              {animal.lastVaccination}
            </h4>
          </div>

          <div style={{ backgroundColor: '#eff6ff', padding: '18px', borderRadius: '14px', border: '1px solid #bfdbfe' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1e40af', textTransform: 'uppercase' }}>
              Next Vaccine Due
            </span>
            <h4 style={{ fontSize: '1rem', color: '#1d4ed8', fontWeight: 800, marginTop: '4px' }}>
              {animal.nextVaccinationDue}
            </h4>
          </div>

        </div>

      </div>

    </div>
  );
}
