import React from 'react';
import { CheckCircle2, AlertTriangle, ShieldCheck, Info } from 'lucide-react';

export default function TrustTransparency() {
  return (
    <section style={{
      maxWidth: '1280px',
      margin: '40px auto',
      padding: '0 20px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        padding: '32px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            backgroundColor: '#d1fae5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ShieldCheck size={24} color="#047857" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.4rem', color: '#0f172a' }}>
              Trust, Ethics & Clinical Transparency
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Designed for SIH 2026 Evaluation Standards & Real-World Rural Reliability
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>

          {/* What PashuRaksha DOES */}
          <div style={{
            backgroundColor: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{ fontSize: '1.1rem', color: '#166534', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={20} color="#16a34a" />
              What PashuRaksha DOES
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#15803d' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ fontWeight: 'bold' }}>✓</span>
                Provides instant AI-assisted symptom triage & preliminary risk assessment.
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ fontWeight: 'bold' }}>✓</span>
                Triggers urgent emergency Red-Flag warnings for acute contagious outbreaks.
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ fontWeight: 'bold' }}>✓</span>
                Calculates live GPS distance to verified government & field veterinary hospitals.
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ fontWeight: 'bold' }}>✓</span>
                Maintains continuous animal health timelines, vaccination schedules & medical history.
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ fontWeight: 'bold' }}>✓</span>
                Enables district-level disease hotspot monitoring for epidemic control.
              </li>
            </ul>
          </div>

          {/* What PashuRaksha DOES NOT DO */}
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{ fontSize: '1.1rem', color: '#991b1b', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={20} color="#dc2626" />
              What PashuRaksha DOES NOT DO
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#b91c1c' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ fontWeight: 'bold' }}>✕</span>
                Does NOT replace physical examination or diagnosis by a licensed veterinarian.
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ fontWeight: 'bold' }}>✕</span>
                Does NOT issue unverified prescription drugs without veterinary confirmation.
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ fontWeight: 'bold' }}>✕</span>
                Does NOT fabricate fake hospitals or fake GPS distances — demo data is explicitly labeled.
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ fontWeight: 'bold' }}>✕</span>
                Does NOT claim full offline capabilities unless local caching is active.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
