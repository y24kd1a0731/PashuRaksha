import React from 'react';
import { Bell, Syringe, ShieldCheck, AlertTriangle, CheckCircle2, Calendar, Info } from 'lucide-react';
import { sampleVaccinations } from '../data/sampleData';

export default function PreventionAlerts() {
  return (
    <div style={{ maxWidth: '1280px', margin: '40px auto', padding: '0 20px' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ecfdf5', color: '#047857', padding: '6px 14px', borderRadius: '20px', fontSize: '0.825rem', fontWeight: 700, marginBottom: '10px' }}>
          <Bell size={16} />
          MODULE J: DISEASE PREVENTION & ALERT CENTER
        </div>
        <h2 style={{ fontSize: '2rem', color: '#0f172a' }}>
          Vaccination Schedules & Preventive Advisories
        </h2>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Automated biosecurity alerts, vaccination timelines, and seasonal livestock wellness guidance.
        </p>
      </div>

      {/* Active Notifications Panel */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        
        <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '16px', padding: '18px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <Bell size={24} color="#2563eb" style={{ flexShrink: 0 }} />
          <div>
            <span className="badge badge-blue" style={{ fontSize: '0.65rem', padding: '2px 6px', marginBottom: '4px' }}>
              Upcoming Reminder
            </span>
            <h4 style={{ fontSize: '0.95rem', color: '#1e40af', fontWeight: 800 }}>
              🔔 FMD Ring Vaccine Booster Due
            </h4>
            <p style={{ fontSize: '0.8rem', color: '#1e3a8a', marginTop: '4px' }}>
              Lakshmi (Cow) is due for FMD booster in 5 days. Contact Rajendranagar Govt Vet Hospital.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#fffbebfb', border: '1px solid #fde68a', borderRadius: '16px', padding: '18px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <AlertTriangle size={24} color="#d97706" style={{ flexShrink: 0 }} />
          <div>
            <span className="badge badge-amber" style={{ fontSize: '0.65rem', padding: '2px 6px', marginBottom: '4px' }}>
              Seasonal Advisory
            </span>
            <h4 style={{ fontSize: '0.95rem', color: '#92400e', fontWeight: 800 }}>
              ⚠️ Pre-Monsoon Deworming Alert
            </h4>
            <p style={{ fontSize: '0.8rem', color: '#78350f', marginTop: '4px' }}>
              Monsoon parasite risk elevated. Administer Albendazole / Ivermectin drench to all cattle.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '16px', padding: '18px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <ShieldCheck size={24} color="#059669" style={{ flexShrink: 0 }} />
          <div>
            <span className="badge badge-emerald" style={{ fontSize: '0.65rem', padding: '2px 6px', marginBottom: '4px' }}>
              Biosecurity Protocol
            </span>
            <h4 style={{ fontSize: '0.95rem', color: '#065f46', fontWeight: 800 }}>
              ℹ️ Foot Bath & Shed Hygiene
            </h4>
            <p style={{ fontSize: '0.8rem', color: '#044e3b', marginTop: '4px' }}>
              Ensure farm entrance foot bath with 2% copper sulfate to prevent hoof pathogen transfer.
            </p>
          </div>
        </div>

      </div>

      {/* Master Vaccination Schedule */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        padding: '28px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
      }}>
        <h3 style={{ fontSize: '1.2rem', color: '#0f172a', fontWeight: 800, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Syringe size={20} color="#047857" />
          National Livestock Vaccination Calendar & Guidelines
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {sampleVaccinations.map((vac, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #cbd5e1',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                    {vac.status}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>
                    {vac.target}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 800, marginBottom: '4px' }}>
                  {vac.disease}
                </h4>

                <p style={{ fontSize: '0.85rem', color: '#047857', fontWeight: 600, marginBottom: '8px' }}>
                  Vaccine: {vac.vaccine}
                </p>

                <p style={{ fontSize: '0.8rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={14} color="#64748b" />
                  Frequency: <strong>{vac.schedule}</strong>
                </p>
              </div>

              <button
                style={{
                  marginTop: '16px',
                  backgroundColor: '#ffffff',
                  color: '#047857',
                  border: '1px solid #047857',
                  borderRadius: '10px',
                  padding: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Set Calendar Reminder
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
