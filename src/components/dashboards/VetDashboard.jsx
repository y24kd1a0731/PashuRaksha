import React, { useState } from 'react';
import { Stethoscope, AlertTriangle, CheckCircle2, Clock, FileText, User, Plus, Search } from 'lucide-react';

export default function VetDashboard() {
  const [cases, setCases] = useState([
    {
      id: 'CASE-2026-001',
      animalName: 'Lakshmi',
      species: 'Cow (Gir)',
      ownerName: 'Ramesh Patel',
      ownerPhone: '+91 98765 43210',
      village: 'Rajendranagar Village',
      reportedAt: '2026-10-04 09:30 AM',
      symptoms: ['High Fever (104.5°F)', 'Ropy Salivation', 'Oral Vesicles', 'Limping'],
      aiConcern: 'Foot-and-Mouth Disease (FMD) Suspected',
      riskLevel: 'Critical Red-Flag 🔴',
      status: 'Under Review',
      vetAssigned: 'Dr. Suresh Kumar (Senior Vet)',
      treatmentPlan: 'Potassium permanganate mouth wash + Meloxicam anti-inflammatory injection'
    },
    {
      id: 'CASE-2026-002',
      animalName: 'Bheem',
      species: 'Buffalo (Murrah)',
      ownerName: 'Sunita Devi',
      ownerPhone: '+91 97112 88900',
      village: 'Medchal Mandal',
      reportedAt: '2026-10-03 04:15 PM',
      symptoms: ['Swollen Udder', 'Drop in Milk Yield', 'Flaky Milk'],
      aiConcern: 'Acute Clinical Mastitis',
      riskLevel: 'Moderate Risk 🟡',
      status: 'Treatment in Progress',
      vetAssigned: 'Dr. Anita Sharma',
      treatmentPlan: 'Intramammary antibiotic tube infusion administered.'
    }
  ]);

  const [selectedCase, setSelectedCase] = useState(null);
  const [newDiagnosis, setNewDiagnosis] = useState('');
  const [newPrescription, setNewPrescription] = useState('');

  const handleUpdateCaseStatus = (caseId, newStatus) => {
    setCases(cases.map(c => c.id === caseId ? { ...c, status: newStatus } : c));
    if (selectedCase && selectedCase.id === caseId) {
      setSelectedCase({ ...selectedCase, status: newStatus });
    }
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '30px auto', padding: '0 20px' }}>
      
      {/* Banner */}
      <div style={{
        backgroundColor: '#1e293b',
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
          <span className="badge badge-emerald" style={{ backgroundColor: '#047857', color: '#ffffff', marginBottom: '4px' }}>
            🩺 Veterinarian Portal • Dr. Suresh Kumar
          </span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>
            Field Case Queue & Clinical Consultations
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
            Zone 4 Field Duty • 2 Cases Pending Review (1 Critical Red-Flag Outbreak Case)
          </p>
        </div>
      </div>

      {/* Case Queue Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
        {cases.map(c => (
          <div
            key={c.id}
            style={{
              backgroundColor: c.riskLevel.includes('Critical') ? '#fef2f2' : '#ffffff',
              borderRadius: '18px',
              padding: '24px',
              border: c.riskLevel.includes('Critical') ? '2px solid #dc2626' : '1px solid #e2e8f0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span className={c.riskLevel.includes('Critical') ? 'badge badge-red' : 'badge badge-amber'}>
                {c.riskLevel}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                {c.status}
              </span>
            </div>

            <h3 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: 800, marginBottom: '4px' }}>
              {c.animalName} ({c.species})
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '12px' }}>
              Farmer: <strong>{c.ownerName}</strong> ({c.ownerPhone}) • {c.village}
            </p>

            <div style={{ backgroundColor: '#ffffff', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.725rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
                AI Triaged Concern:
              </span>
              <p style={{ fontSize: '0.9rem', color: '#0f172a', fontWeight: 700, marginTop: '2px' }}>
                {c.aiConcern}
              </p>
            </div>

            {/* Status Change Selector */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                Update Clinical Case Lifecycle:
              </label>
              <select
                value={c.status}
                onChange={(e) => handleUpdateCaseStatus(c.id, e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem', fontWeight: 700 }}
              >
                <option value="New Case">New Case</option>
                <option value="Under Review">Under Review</option>
                <option value="Consultation">Consultation Scheduled</option>
                <option value="Treatment in Progress">Treatment in Progress</option>
                <option value="Follow-up Scheduled">Follow-up Scheduled</option>
                <option value="Resolved">Resolved & Closed</option>
              </select>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
