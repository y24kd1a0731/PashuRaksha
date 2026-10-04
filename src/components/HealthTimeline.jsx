import React, { useState } from 'react';
import { Calendar, Syringe, Stethoscope, Pill, CalendarCheck, AlertTriangle, CheckCircle2, FileText, X } from 'lucide-react';
import { sampleAnimals } from '../data/sampleData';

export default function HealthTimeline({ animal = sampleAnimals[0] }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Syringe': return <Syringe size={18} />;
      case 'Stethoscope': return <Stethoscope size={18} />;
      case 'Pill': return <Pill size={18} />;
      case 'CalendarCheck': return <CalendarCheck size={18} />;
      case 'AlertTriangle': return <AlertTriangle size={18} />;
      default: return <FileText size={18} />;
    }
  };

  const getColorClass = (color) => {
    switch (color) {
      case 'red': return { bg: '#fef2f2', border: '#dc2626', text: '#991b1b', badge: 'badge-red' };
      case 'blue': return { bg: '#eff6ff', border: '#2563eb', text: '#1e40af', badge: 'badge-blue' };
      case 'purple': return { bg: '#faf5ff', border: '#9333ea', text: '#6b21a8', badge: 'badge-amber' };
      case 'emerald': return { bg: '#ecfdf5', border: '#10b981', text: '#065f46', badge: 'badge-emerald' };
      default: return { bg: '#f8fafc', border: '#64748b', text: '#334155', badge: 'badge-emerald' };
    }
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '40px auto', padding: '0 20px' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ecfdf5', color: '#047857', padding: '6px 14px', borderRadius: '20px', fontSize: '0.825rem', fontWeight: 700, marginBottom: '10px' }}>
          <Calendar size={16} />
          MODULE I: CHRONOLOGICAL ANIMAL HEALTH TIMELINE
        </div>
        <h2 style={{ fontSize: '2rem', color: '#0f172a' }}>
          Interactive Health History Timeline: {animal.name}
        </h2>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Proves PashuRaksha provides continuous long-term livestock care rather than one-time disease diagnosis.
        </p>
      </div>

      {/* Vertical Timeline Card */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        padding: '36px 28px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        position: 'relative'
      }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#047857', backgroundColor: '#d1fae5', padding: '6px 16px', borderRadius: '12px' }}>
            📅 Year 2026
          </span>
          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
            5 Chronological Clinical & Preventive Events Recorded
          </span>
        </div>

        {/* Timeline Spine */}
        <div style={{ position: 'relative', paddingLeft: '32px', borderLeft: '3px solid #e2e8f0' }}>

          {animal.timelineEvents.map((ev, index) => {
            const styleTheme = getColorClass(ev.color);
            return (
              <div
                key={ev.id}
                onClick={() => setSelectedEvent(ev)}
                style={{
                  marginBottom: '28px',
                  position: 'relative',
                  cursor: 'pointer'
                }}
              >
                {/* Node Bullet Icon */}
                <div style={{
                  position: 'absolute',
                  left: '-49px',
                  top: '0',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: styleTheme.border,
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 10px rgba(0,0,0,0.15)'
                }}>
                  {getIcon(ev.icon)}
                </div>

                {/* Event Box */}
                <div style={{
                  backgroundColor: styleTheme.bg,
                  border: `1px solid ${styleTheme.border}`,
                  borderRadius: '16px',
                  padding: '20px',
                  transition: 'transform 0.2s ease',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                    <span className={`badge ${styleTheme.badge}`} style={{ fontSize: '0.7rem' }}>
                      {ev.type}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                      {ev.date} • {ev.time}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.15rem', color: styleTheme.text, fontWeight: 800, marginBottom: '6px' }}>
                    {ev.title}
                  </h4>

                  <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.5 }}>
                    {ev.description}
                  </p>

                  <div style={{ marginTop: '10px', fontSize: '0.775rem', color: styleTheme.text, fontWeight: 700, textDecoration: 'underline' }}>
                    Click to view full clinical details & prescription records →
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(6px)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            maxWidth: '540px',
            width: '100%',
            padding: '28px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="badge badge-emerald">
                {selectedEvent.type} Record
              </span>
              <button onClick={() => setSelectedEvent(null)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: 800, marginBottom: '8px' }}>
              {selectedEvent.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '16px' }}>
              Event Timestamp: {selectedEvent.date} ({selectedEvent.time})
            </p>

            <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #cbd5e1', marginBottom: '20px' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                Full Clinical Log:
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#1e293b', lineHeight: 1.5 }}>
                {selectedEvent.description}
              </p>
            </div>

            <button
              onClick={() => setSelectedEvent(null)}
              style={{
                width: '100%',
                backgroundColor: '#047857',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                padding: '12px',
                fontWeight: 700
              }}
            >
              Close Record View
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
