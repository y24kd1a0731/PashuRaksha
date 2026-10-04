import React from 'react';
import { Hospital, Clock, PhoneCall, Activity, ShieldCheck, Ambulance } from 'lucide-react';

export default function FacilityDashboard() {
  return (
    <div style={{ maxWidth: '1280px', margin: '30px auto', padding: '0 20px' }}>
      
      <div style={{
        backgroundColor: '#042f2e',
        color: '#ffffff',
        borderRadius: '20px',
        padding: '24px',
        marginBottom: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <span className="badge badge-emerald" style={{ backgroundColor: '#14b8a6', color: '#042f2e', marginBottom: '4px' }}>
            🏥 Facility Portal • Govt Veterinary Hospital Polyclinic
          </span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>
            Hospital OPD Queue & Emergency Desk
          </h2>
          <p style={{ color: '#99f6e4', fontSize: '0.875rem' }}>
            Rajendranagar Unit • Operational Status: Open 24/7 • Mobile Response Active
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>Inbound Emergency Cases Today</span>
          <h3 style={{ fontSize: '2rem', color: '#dc2626', fontWeight: 800, marginTop: '4px' }}>3 Cases</h3>
        </div>

        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>Current OPD Queue</span>
          <h3 style={{ fontSize: '2rem', color: '#047857', fontWeight: 800, marginTop: '4px' }}>3 Animals Waiting</h3>
        </div>

        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>1962 Mobile Vet Unit</span>
          <h3 style={{ fontSize: '1.2rem', color: '#2563eb', fontWeight: 800, marginTop: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Ambulance size={20} />
            Dispatched (Zone 4)
          </h3>
        </div>
      </div>

    </div>
  );
}
