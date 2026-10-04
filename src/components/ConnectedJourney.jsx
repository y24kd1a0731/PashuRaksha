import React, { useState } from 'react';
import { Activity, ShieldCheck, Stethoscope, Pill, CalendarCheck, Syringe, CheckCircle2, ChevronRight, User, AlertTriangle } from 'lucide-react';
import { sampleAnimals } from '../data/sampleData';

export default function ConnectedJourney({ selectedAnimal = sampleAnimals[0] }) {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 0,
      name: '1. Early Detection',
      icon: Activity,
      color: '#10b981',
      date: '2026-10-04 09:30 AM',
      title: 'Farmer Symptom & Voice Assessment',
      details: 'High fever (104.5°F), excessive ropy salivation, blisters on tongue & limping gait reported via PashuRaksha AI Voice Assistant.',
      status: 'Completed'
    },
    {
      id: 1,
      name: '2. Risk Assessment',
      icon: ShieldCheck,
      color: '#f59e0b',
      date: '2026-10-04 09:31 AM',
      title: 'AI Triaging Engine Flagged FMD Red-Flag',
      details: 'Risk Level evaluated as Critical Red-Flag. Immediate herd isolation protocol and emergency 1962 hotline notification triggered.',
      status: 'Completed'
    },
    {
      id: 2,
      name: '3. Vet Consultation',
      icon: Stethoscope,
      color: '#3b82f6',
      date: '2026-10-04 11:15 AM',
      title: 'Field Consultation — Dr. Suresh Kumar',
      details: 'Government Veterinary Hospital Polyclinic field vet examined Lakshmi. Confirmed early Foot-and-Mouth Disease (FMD) lesions.',
      status: 'Completed'
    },
    {
      id: 3,
      name: '4. Treatment & Meds',
      icon: Pill,
      color: '#8b5cf6',
      date: '2026-10-04 12:00 PM',
      title: 'Prescription & Antiseptic Wash Initiated',
      details: 'Mouth wash with 1% potassium permanganate solution, Meloxicam (NSAID) anti-inflammatory injection, Oxytetracycline wound spray on feet.',
      status: 'In Progress'
    },
    {
      id: 4,
      name: '5. Follow-up Care',
      icon: CalendarCheck,
      color: '#ec4899',
      date: '2026-10-07 10:00 AM',
      title: 'Scheduled Recovery Assessment',
      details: 'Follow-up field check scheduled for post-treatment tongue ulceration recovery and milk yield restoration check.',
      status: 'Upcoming'
    },
    {
      id: 5,
      name: '6. Prevention',
      icon: Syringe,
      color: '#06b6d4',
      date: '2026-11-14',
      title: 'Booster FMD Ring Vaccination Due',
      details: 'National Disease Control Programme booster dose reminder issued for herd immunity protection.',
      status: 'Scheduled'
    }
  ];

  return (
    <div style={{ maxWidth: '1280px', margin: '40px auto', padding: '0 20px' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ecfdf5', color: '#047857', padding: '6px 14px', borderRadius: '20px', fontSize: '0.825rem', fontWeight: 700, marginBottom: '10px' }}>
          <Activity size={16} />
          THE HEART OF PASHURAKSHA: CONNECTED CARE JOURNEY
        </div>
        <h2 style={{ fontSize: '2rem', color: '#0f172a' }}>
          Animal Health Journey: {selectedAnimal.name} ({selectedAnimal.species})
        </h2>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Demonstrating continuous end-to-end livestock healthcare from early AI triage to veterinary treatment and disease prevention.
        </p>
      </div>

      {/* Visual Pipeline Bar */}
      <div style={{
        backgroundColor: '#0f172a',
        borderRadius: '20px',
        padding: '24px',
        marginBottom: '32px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
          {stages.map((st, idx) => {
            const IconComp = st.icon;
            const isSelected = activeStage === idx;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStage(idx)}
                style={{
                  backgroundColor: isSelected ? st.color : 'rgba(255,255,255,0.06)',
                  color: isSelected ? '#ffffff' : '#cbd5e1',
                  border: isSelected ? '2px solid #ffffff' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '14px',
                  padding: '16px 12px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <IconComp size={18} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>
                    {st.name}
                  </span>
                </div>
                <span style={{ fontSize: '0.7rem', opacity: 0.8, display: 'block' }}>
                  {st.status}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Detailed View */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        padding: '32px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '24px'
      }} className="journey-detail-grid">

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid #f1f5f9', paddingBottom: '20px' }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '16px',
            backgroundColor: stages[activeStage].color,
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {React.createElement(stages[activeStage].icon, { size: 28 })}
          </div>

          <div>
            <span className="badge badge-emerald" style={{ fontSize: '0.725rem', padding: '2px 8px' }}>
              Stage {activeStage + 1} of 6 • {stages[activeStage].status}
            </span>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginTop: '2px' }}>
              {stages[activeStage].title}
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#64748b' }}>
              Recorded At: {stages[activeStage].date}
            </p>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
            Clinical Narrative & Action Record:
          </h4>
          <p style={{ fontSize: '1rem', color: '#1e293b', lineHeight: 1.6, backgroundColor: '#f8fafc', padding: '18px', borderRadius: '14px', border: '1px solid #cbd5e1' }}>
            {stages[activeStage].details}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
            disabled={activeStage === 0}
            style={{
              backgroundColor: '#f1f5f9',
              color: '#334155',
              border: 'none',
              borderRadius: '10px',
              padding: '10px 18px',
              fontWeight: 700,
              cursor: activeStage === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            ← Previous Stage
          </button>

          <button
            onClick={() => setActiveStage(Math.min(stages.length - 1, activeStage + 1))}
            disabled={activeStage === stages.length - 1}
            style={{
              backgroundColor: '#047857',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              padding: '10px 18px',
              fontWeight: 700,
              cursor: activeStage === stages.length - 1 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            Next Stage →
          </button>
        </div>

      </div>

    </div>
  );
}
