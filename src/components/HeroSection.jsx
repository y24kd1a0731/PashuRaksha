import React from 'react';
import { ShieldCheck, Stethoscope, Camera, MapPin, ArrowRight, Activity, Bell, FileText, CheckCircle } from 'lucide-react';
import { translations } from '../data/translations';

export default function HeroSection({ setActiveTab, setSihDemoMode, currentLang }) {
  const t = translations[currentLang] || translations.en;

  const journeyPills = [
    { title: 'Early Detection', icon: Activity, color: '#10b981', desc: 'AI Symptom & Voice Check' },
    { title: 'Risk Assessment', icon: ShieldCheck, color: '#f59e0b', desc: 'Red-Flag Urgency Rules' },
    { title: 'Veterinary Care', icon: MapPin, color: '#3b82f6', desc: 'Live GPS Hospital Finder' },
    { title: 'Treatment & Meds', icon: Stethoscope, color: '#8b5cf6', desc: 'Prescriptions & Consult' },
    { title: 'Follow-up', icon: CheckCircle, color: '#ec4899', desc: 'Recovery Progress Tracking' },
    { title: 'Prevention', icon: Bell, color: '#06b6d4', desc: 'Vaccine & Alert System' },
  ];

  return (
    <section style={{
      background: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #065f46 100%)',
      color: '#ffffff',
      padding: '60px 20px 80px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Circles */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '40px',
        alignItems: 'center'
      }} className="hero-grid">

        {/* Hero Text Content */}
        <div style={{ maxWidth: '720px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <ShieldCheck size={16} color="#34d399" />
            <span>Smart India Hackathon 2026 • AI Livestock Healthcare</span>
          </div>

          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-1px',
            marginBottom: '18px',
            color: '#ffffff'
          }}>
            {t.heroTitle}
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#d1fae5',
            lineHeight: 1.6,
            marginBottom: '32px',
            maxWidth: '640px'
          }}>
            «“What could be wrong with my animal, how urgent is it, and what should I do next?”»
            <br />
            <span style={{ fontSize: '1rem', color: '#a7f3d0' }}>
              {t.tagline}
            </span>
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <button
              onClick={() => setActiveTab('health-check')}
              style={{
                backgroundColor: '#10b981',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '14px 24px',
                fontSize: '1rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)',
                transition: 'transform 0.2s ease'
              }}
            >
              <Activity size={20} />
              {t.btnCheckHealth}
            </button>

            <button
              onClick={() => setActiveTab('scan-image')}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                padding: '14px 24px',
                fontSize: '1rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backdropFilter: 'blur(8px)'
              }}
            >
              <Camera size={20} />
              {t.btnScanAnimal}
            </button>

            <button
              onClick={() => setActiveTab('vet-care')}
              style={{
                backgroundColor: '#042f2e',
                color: '#6ee7b7',
                border: '1px solid #14b8a6',
                borderRadius: '12px',
                padding: '14px 24px',
                fontSize: '1rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <MapPin size={20} />
              {t.btnFindVet}
            </button>
          </div>
        </div>

        {/* Connected Journey Preview Pills */}
        <div>
          <div style={{
            backgroundColor: 'rgba(4, 47, 46, 0.85)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#34d399', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={18} />
              The Connected PashuRaksha Ecosystem
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
              {journeyPills.map((jp, idx) => {
                const IconComp = jp.icon;
                return (
                  <div key={idx} style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    padding: '14px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        backgroundColor: jp.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <IconComp size={15} color="#ffffff" />
                      </div>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff' }}>
                        {jp.title}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{jp.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
