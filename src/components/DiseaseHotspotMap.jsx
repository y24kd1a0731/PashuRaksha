import React from 'react';
import { Map, Activity, ShieldAlert, TrendingUp, AlertCircle, BarChart2 } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LineChart, Line } from 'recharts';

export default function DiseaseHotspotMap() {
  const hotspotData = [
    { district: 'Guntur', state: 'Andhra Pradesh', disease: 'Foot-and-Mouth Disease (FMD)', cases: 42, risk: 'High Risk 🔴', trend: 'Increasing' },
    { district: 'Rangareddy', state: 'Telangana', disease: 'Lumpy Skin Disease (LSD)', cases: 18, risk: 'Moderate Risk 🟡', trend: 'Stable' },
    { district: 'Anand', state: 'Gujarat', disease: 'Mastitis (Subclinical)', cases: 29, risk: 'Moderate Risk 🟡', trend: 'Decreasing' },
    { district: 'Kolhapur', state: 'Maharashtra', disease: 'Haemorrhagic Septicaemia (HS)', cases: 8, risk: 'Low Risk 🟢', trend: 'Controlled' },
    { district: 'Hissar', state: 'Haryana', disease: 'Blackleg (Clostridial)', cases: 14, risk: 'Moderate Risk 🟡', trend: 'Increasing' }
  ];

  const chartData = [
    { month: 'May 2026', FMD: 12, Mastitis: 24, LSD: 8 },
    { month: 'Jun 2026', FMD: 19, Mastitis: 28, LSD: 15 },
    { month: 'Jul 2026', FMD: 35, Mastitis: 31, LSD: 22 },
    { month: 'Aug 2026', FMD: 48, Mastitis: 25, LSD: 19 },
    { month: 'Sep 2026', FMD: 42, Mastitis: 29, LSD: 18 }
  ];

  return (
    <div style={{ maxWidth: '1280px', margin: '40px auto', padding: '0 20px' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ecfdf5', color: '#047857', padding: '6px 14px', borderRadius: '20px', fontSize: '0.825rem', fontWeight: 700, marginBottom: '10px' }}>
          <Map size={16} />
          MODULE K: DISEASE HOTSPOT & SURVEILLANCE MAP
        </div>
        <h2 style={{ fontSize: '2rem', color: '#0f172a' }}>
          Community Health & Epidemiological Surveillance
        </h2>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Provides regional disease cluster insights and vector outbreak trajectories for district veterinary authorities.
        </p>
      </div>

      {/* Realism Notice Tag */}
      <div style={{
        backgroundColor: '#fffbebfb',
        border: '1px solid #fde68a',
        borderRadius: '14px',
        padding: '14px 20px',
        marginBottom: '28px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        color: '#92400e',
        fontSize: '0.85rem'
      }}>
        <AlertCircle size={20} color="#d97706" />
        <div>
          <strong>[Simulated Epidemiological Data — SIH Demo]</strong>: Demonstrating how PashuRaksha aggregates anonymized farmer reports for government disease surveillance and veterinary resource deployment.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }} className="map-grid">

        {/* Hotspot Table */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '24px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
        }}>
          <h3 style={{ fontSize: '1.2rem', color: '#0f172a', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldAlert size={20} color="#dc2626" />
            Active District Disease Clusters
          </h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#475569' }}>
                  <th style={{ padding: '12px' }}>District & State</th>
                  <th style={{ padding: '12px' }}>Prevalent Concern</th>
                  <th style={{ padding: '12px' }}>Reported Cases</th>
                  <th style={{ padding: '12px' }}>Risk Indicator</th>
                  <th style={{ padding: '12px' }}>Outbreak Trend</th>
                </tr>
              </thead>
              <tbody>
                {hotspotData.map((hs, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '12px', fontWeight: 700, color: '#1e293b' }}>
                      {hs.district}, {hs.state}
                    </td>
                    <td style={{ padding: '12px', color: '#047857', fontWeight: 600 }}>
                      {hs.disease}
                    </td>
                    <td style={{ padding: '12px', fontWeight: 800, color: '#0f172a' }}>
                      {hs.cases} Cases
                    </td>
                    <td style={{ padding: '12px', fontWeight: 700 }}>
                      {hs.risk}
                    </td>
                    <td style={{ padding: '12px', color: hs.trend === 'Increasing' ? '#dc2626' : '#059669', fontWeight: 700 }}>
                      {hs.trend}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Epidemic Trend Visualizer (Recharts) */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '24px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
        }}>
          <h3 style={{ fontSize: '1.2rem', color: '#0f172a', fontWeight: 800, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BarChart2 size={20} color="#047857" />
            Monthly Disease Trajectory (May - Sep 2026)
          </h3>

          <div style={{ width: '100%', height: 320 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '10px' }} />
                <Legend />
                <Bar dataKey="FMD" fill="#dc2626" name="Foot & Mouth Disease" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Mastitis" fill="#2563eb" name="Mastitis" radius={[4, 4, 0, 0]} />
                <Bar dataKey="LSD" fill="#f59e0b" name="Lumpy Skin Disease" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </div>
  );
}
