import React from 'react';
import { ShieldCheck, Activity, Map, BarChart2, AlertCircle, Syringe, Users, Globe } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

export default function AdminDashboard() {
  const speciesData = [
    { name: 'Cattle (Cows)', value: 8420, color: '#047857' },
    { name: 'Buffaloes', value: 3890, color: '#0284c7' },
    { name: 'Goats & Sheep', value: 1650, color: '#d97706' },
    { name: 'Poultry & Others', value: 320, color: '#9333ea' }
  ];

  return (
    <div style={{ maxWidth: '1280px', margin: '30px auto', padding: '0 20px' }}>
      
      {/* Banner */}
      <div style={{
        backgroundColor: '#0f172a',
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
          <span className="badge badge-emerald" style={{ backgroundColor: '#10b981', color: '#0f172a', marginBottom: '4px' }}>
            🏛️ Government Administration & Disease Surveillance
          </span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>
            State Livestock Health Analytics & Resource Allocation
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
            Department of Animal Husbandry • SIH 2026 National Surveillance Prototype
          </p>
        </div>

        <span style={{ fontSize: '0.75rem', backgroundColor: '#334155', padding: '6px 12px', borderRadius: '8px', color: '#cbd5e1' }}>
          Simulated Data • SIH Demo Mode
        </span>
      </div>

      {/* KPI Metrics Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        
        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <span style={{ fontSize: '0.775rem', color: '#64748b', fontWeight: 700 }}>Total Registered Livestock</span>
          <h3 style={{ fontSize: '2rem', color: '#0f172a', fontWeight: 800, marginTop: '4px' }}>14,280</h3>
          <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>↑ +8.4% this month</span>
        </div>

        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <span style={{ fontSize: '0.775rem', color: '#64748b', fontWeight: 700 }}>Active Health Cases</span>
          <h3 style={{ fontSize: '2rem', color: '#047857', fontWeight: 800, marginTop: '4px' }}>111</h3>
          <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Triage resolved: 82%</span>
        </div>

        <div style={{ backgroundColor: '#fef2f2', padding: '20px', borderRadius: '16px', border: '1px solid #fecaca', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <span style={{ fontSize: '0.775rem', color: '#991b1b', fontWeight: 700 }}>Active Red-Flag Outbreaks</span>
          <h3 style={{ fontSize: '2rem', color: '#dc2626', fontWeight: 800, marginTop: '4px' }}>2 Areas</h3>
          <span style={{ fontSize: '0.75rem', color: '#b91c1c', fontWeight: 600 }}>Guntur (FMD) & Rangareddy</span>
        </div>

        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <span style={{ fontSize: '0.775rem', color: '#64748b', fontWeight: 700 }}>FMD Vaccine Stock Level</span>
          <h3 style={{ fontSize: '2rem', color: '#2563eb', fontWeight: 800, marginTop: '4px' }}>42,500 Doses</h3>
          <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>Adequate herd supply</span>
        </div>

      </div>

      {/* Species Distribution Chart */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        padding: '28px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
      }}>
        <h3 style={{ fontSize: '1.2rem', color: '#0f172a', fontWeight: 800, marginBottom: '20px' }}>
          State Livestock Demographics & Species Breakdown
        </h3>

        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={speciesData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
              >
                {speciesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
