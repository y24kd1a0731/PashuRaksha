import React from 'react';
import { AlertTriangle, PhoneCall, MapPin, ShieldAlert, X, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function RedFlagModal({ isOpen, onClose, assessmentData, onNavigateToVet }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: 999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        maxWidth: '620px',
        width: '100%',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(220, 38, 38, 0.4)',
        border: '3px solid #dc2626',
        animation: 'pulseGlow 2s infinite'
      }}>
        
        {/* Red Banner Header */}
        <div style={{
          backgroundColor: '#dc2626',
          color: '#ffffff',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              color: '#dc2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <AlertTriangle size={28} />
            </div>
            <div>
              <span className="badge" style={{ backgroundColor: '#ffffff', color: '#dc2626', fontSize: '0.7rem', padding: '2px 8px', marginBottom: '4px' }}>
                EMERGENCY RED-FLAG TRIGGERED
              </span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
                URGENT VETERINARY ATTENTION RECOMMENDED
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '24px' }}>

          <div style={{ marginBottom: '18px' }}>
            <h4 style={{ fontSize: '0.9rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>
              High-Risk Indicator Rationale:
            </h4>
            <p style={{ fontSize: '1.05rem', color: '#991b1b', fontWeight: 800, backgroundColor: '#fef2f2', padding: '12px 16px', borderRadius: '12px', marginTop: '6px' }}>
              {assessmentData?.possibleConcern || 'Foot-and-Mouth Disease (FMD) — Suspected Outbreak'}
            </p>
          </div>

          {/* Protocol Steps */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>
              Immediate Emergency Safety Steps:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ fontSize: '0.875rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#dc2626" />
                <strong>Isolate animal immediately</strong> in a covered, ventilated shed away from healthy stock.
              </li>
              <li style={{ fontSize: '0.875rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#dc2626" />
                Disinfect shed floor and troughs with 4% sodium carbonate or lime powder.
              </li>
              <li style={{ fontSize: '0.875rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#dc2626" />
                <strong>Do NOT</strong> move milk or animals outside the village area to prevent epidemic spread.
              </li>
            </ul>
          </div>

          {/* Quick Action Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            <a
              href="tel:1962"
              style={{
                backgroundColor: '#dc2626',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '14px',
                padding: '14px',
                fontWeight: 800,
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 15px rgba(220,38,38,0.3)'
              }}
            >
              <PhoneCall size={18} />
              Call National Vet Helpline (1962)
            </a>

            <button
              onClick={() => {
                onClose();
                if (onNavigateToVet) onNavigateToVet();
              }}
              style={{
                backgroundColor: '#047857',
                color: '#ffffff',
                border: 'none',
                borderRadius: '14px',
                padding: '14px',
                fontWeight: 800,
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <MapPin size={18} />
              Locate Nearest Vet Hospital GPS
            </button>
          </div>

          <p style={{ fontSize: '0.75rem', color: '#64748b', textAlign: 'center', marginTop: '16px' }}>
            Emergency triage layer active. Dangerous home surgeries are strictly advised against.
          </p>

        </div>

      </div>
    </div>
  );
}
