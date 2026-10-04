import React from 'react';
import { Activity, Camera, MapPin, Calendar, Bell, Plus, ShieldCheck, Heart, ChevronRight, Stethoscope } from 'lucide-react';
import { sampleAnimals } from '../../data/sampleData';

export default function FarmerDashboard({ setActiveTab, onSelectAnimal }) {
  return (
    <div style={{ maxWidth: '1280px', margin: '30px auto', padding: '0 20px' }}>
      
      {/* Welcome Banner */}
      <div style={{
        backgroundColor: '#047857',
        color: '#ffffff',
        borderRadius: '20px',
        padding: '28px',
        marginBottom: '32px',
        boxShadow: '0 10px 25px rgba(4,120,87,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <span className="badge badge-emerald" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#ffffff', marginBottom: '6px' }}>
            🧑‍🌾 Farmer Dashboard • Ramesh Patel
          </span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
            Welcome to PashuRaksha Care Portal
          </h2>
          <p style={{ color: '#d1fae5', fontSize: '0.95rem' }}>
            3 Livestock Animals Registered • 1 Active Monitoring Case (Lakshmi FMD)
          </p>
        </div>

        <button
          onClick={() => setActiveTab('health-check')}
          style={{
            backgroundColor: '#ffffff',
            color: '#047857',
            border: 'none',
            borderRadius: '12px',
            padding: '14px 20px',
            fontWeight: 800,
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}
        >
          <Activity size={18} />
          New Animal Health Assessment
        </button>
      </div>

      {/* Quick Action Tiles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        
        <div
          onClick={() => setActiveTab('health-check')}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid #e2e8f0',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            transition: 'transform 0.2s ease'
          }}
        >
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#ecfdf5', color: '#047857', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
            <Activity size={24} />
          </div>
          <h4 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 800 }}>
            Check Animal Health
          </h4>
          <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px' }}>
            Symptom triaging & AI risk assessment
          </p>
        </div>

        <div
          onClick={() => setActiveTab('scan-image')}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid #e2e8f0',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
          }}
        >
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
            <Camera size={24} />
          </div>
          <h4 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 800 }}>
            Scan Animal Photo
          </h4>
          <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px' }}>
            Vision AI mouth & skin lesion scanner
          </p>
        </div>

        <div
          onClick={() => setActiveTab('vet-care')}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid #e2e8f0',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
          }}
        >
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
            <MapPin size={24} />
          </div>
          <h4 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 800 }}>
            Find Veterinary Care
          </h4>
          <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px' }}>
            Live GPS nearby hospital locator
          </p>
        </div>

        <div
          onClick={() => setActiveTab('timeline')}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid #e2e8f0',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
          }}
        >
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#faf5ff', color: '#9333ea', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
            <Calendar size={24} />
          </div>
          <h4 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 800 }}>
            Health Timeline
          </h4>
          <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px' }}>
            Prescriptions & vaccination logs
          </p>
        </div>

      </div>

      {/* My Animals Grid */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        padding: '24px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        marginBottom: '32px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: 800 }}>
            My Registered Livestock Animals
          </h3>
          <button onClick={() => setActiveTab('animals')} style={{ color: '#047857', border: 'none', background: 'none', fontWeight: 700, cursor: 'pointer' }}>
            View All Records →
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {sampleAnimals.map(a => (
            <div key={a.id} style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '16px', padding: '16px', display: 'flex', gap: '14px', alignItems: 'center' }}>
              <img src={a.avatar} alt={a.name} style={{ width: '70px', height: '70px', borderRadius: '12px', objectFit: 'cover' }} />
              <div>
                <span className={`badge badge-${a.statusBadge}`} style={{ fontSize: '0.65rem' }}>
                  {a.healthStatus}
                </span>
                <h4 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 800, marginTop: '2px' }}>
                  {a.name} ({a.species})
                </h4>
                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  Breed: {a.breed}
                </p>
                <button
                  onClick={() => {
                    if (onSelectAnimal) onSelectAnimal(a);
                    setActiveTab('timeline');
                  }}
                  style={{ backgroundColor: '#047857', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '4px 10px', fontSize: '0.725rem', fontWeight: 700, marginTop: '6px', cursor: 'pointer' }}
                >
                  View Timeline
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
