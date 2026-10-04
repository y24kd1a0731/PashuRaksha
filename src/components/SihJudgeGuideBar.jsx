import React from 'react';
import { Play, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export default function SihJudgeGuideBar({ currentStep, setStep, activeTab, setActiveTab }) {
  const steps = [
    { num: 1, label: '1. AI Assessment & Voice', tab: 'health-check' },
    { num: 2, label: '2. Scan Animal Image', tab: 'scan-image' },
    { num: 3, label: '3. Red-Flag Alert', tab: 'health-check', isRed: true },
    { num: 4, label: '4. Live GPS Vet Finder', tab: 'vet-care' },
    { num: 5, label: '5. Connected Journey & Timeline', tab: 'timeline' },
    { num: 6, label: '6. Admin Disease Map', tab: 'disease-map' },
  ];

  return (
    <div style={{
      backgroundColor: '#0f172a',
      color: '#ffffff',
      padding: '10px 20px',
      borderBottom: '2px solid #10b981',
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
      position: 'relative',
      zIndex: 90
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap size={18} color="#10b981" />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#34d399' }}>
            SIH JUDGE DEMO CONTROLLER:
          </span>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
            Click steps below to fast-track the connected livestock care journey:
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {steps.map(s => {
            const isActive = currentStep === s.num;
            return (
              <button
                key={s.num}
                onClick={() => {
                  setStep(s.num);
                  setActiveTab(s.tab);
                }}
                style={{
                  backgroundColor: isActive
                    ? (s.isRed ? '#dc2626' : '#059669')
                    : 'rgba(255,255,255,0.08)',
                  color: isActive ? '#ffffff' : '#cbd5e1',
                  border: isActive ? '1px solid #34d399' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '6px 14px',
                  fontSize: '0.775rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.15s ease'
                }}
              >
                {isActive ? <CheckCircle2 size={13} color="#ffffff" /> : null}
                {s.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
