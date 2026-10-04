import React, { useState } from 'react';
import { Camera, Upload, Sparkles, CheckCircle2, AlertTriangle, ShieldAlert, ArrowRight, Eye, RefreshCw } from 'lucide-react';
import { sampleScans } from '../data/sampleData';

export default function AiImageScanner({ onNavigateToVet, onTriggerRedFlag }) {
  const [selectedScan, setSelectedScan] = useState(sampleScans[0]);
  const [customImage, setCustomImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleCustomUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
      setSelectedScan({
        id: 'custom-1',
        title: 'Custom User Uploaded Image',
        suspectedCondition: 'Foot-and-Mouth Disease (FMD) — Oral Lesions',
        confidence: '93.8%',
        riskLevel: 'Critical Red-Flag',
        imageUrl: url,
        observations: [
          'Erosive ulceration on dorsum of tongue',
          'Hyperemic mucosal margin detected',
          'Consistent with aphthous viral syndrome'
        ],
        recommendedAction: '🔴 URGENT: Isolate animal immediately and request emergency veterinary assistance.'
      });
      runScanProcess();
    }
  };

  const runScanProcess = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 2000);
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '40px auto', padding: '0 20px' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ecfdf5', color: '#047857', padding: '6px 14px', borderRadius: '20px', fontSize: '0.825rem', fontWeight: 700, marginBottom: '10px' }}>
          <Camera size={16} />
          MODULE B: AI IMAGE HEALTH SCAN
        </div>
        <h2 style={{ fontSize: '2rem', color: '#0f172a' }}>
          AI Animal Lesion & Vision Diagnostic Scanner
        </h2>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Upload or capture a photo of visible animal skin lumps, mouth blisters, or udder swelling for vision-assisted preliminary detection.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }} className="scanner-grid">
        
        {/* Left Column: Image Selector & Scanning Viewport */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '28px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
        }}>

          {/* Sample Benchmark Selectors */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: '#1e293b', marginBottom: '8px' }}>
              Select Benchmark Demonstration Lesion Photo:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
              {sampleScans.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => {
                    setSelectedScan(sc);
                    setCustomImage(null);
                    runScanProcess();
                  }}
                  style={{
                    backgroundColor: selectedScan.id === sc.id && !customImage ? '#ecfdf5' : '#f8fafc',
                    border: selectedScan.id === sc.id && !customImage ? '2px solid #10b981' : '1px solid #cbd5e1',
                    borderRadius: '12px',
                    padding: '10px',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <img src={sc.imageUrl} alt={sc.title} style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '8px', marginBottom: '6px' }} />
                  <span style={{ fontSize: '0.775rem', fontWeight: 700, color: '#1e293b', display: 'block', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {sc.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Custom File Upload Option */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: '#1e293b', marginBottom: '8px' }}>
              Or Upload Animal Lesion Photo from Device:
            </label>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              backgroundColor: '#f0fdf4',
              border: '2px dashed #059669',
              borderRadius: '12px',
              padding: '16px',
              cursor: 'pointer',
              color: '#047857',
              fontWeight: 700,
              fontSize: '0.9rem'
            }}>
              <Upload size={18} />
              Choose Photo from Camera / Gallery
              <input type="file" accept="image/*" onChange={handleCustomUpload} style={{ display: 'none' }} />
            </label>
          </div>

          {/* Neural Scanning Viewport Frame */}
          <div style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#0f172a',
            height: '340px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #334155'
          }}>
            <img
              src={selectedScan.imageUrl}
              alt="Scan Target"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: isScanning ? 0.7 : 1,
                transition: 'opacity 0.3s ease'
              }}
            />

            {/* Neural Bounding Overlay */}
            {isScanning && (
              <>
                <div className="scanner-line"></div>
                <div style={{
                  position: 'absolute',
                  border: '2px dashed #10b981',
                  borderRadius: '12px',
                  width: '60%',
                  height: '50%',
                  boxShadow: '0 0 20px rgba(16,185,129,0.5)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  padding: '8px'
                }}>
                  <span style={{ backgroundColor: '#10b981', color: '#fff', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                    ANALYZING PATHOLOGY...
                  </span>
                </div>
              </>
            )}

            {!isScanning && (
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                color: '#ffffff',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Eye size={14} color="#34d399" />
                Vision AI Target: {selectedScan.title}
              </div>
            )}
          </div>

          <button
            onClick={runScanProcess}
            disabled={isScanning}
            style={{
              width: '100%',
              marginTop: '20px',
              backgroundColor: isScanning ? '#94a3b8' : '#059669',
              color: '#ffffff',
              border: 'none',
              borderRadius: '12px',
              padding: '14px',
              fontWeight: 800,
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            {isScanning ? <RefreshCw className="animate-spin" size={18} /> : <Sparkles size={18} />}
            {isScanning ? 'Executing Vision AI Inference...' : 'Run Vision AI Analysis'}
          </button>

        </div>

        {/* Right Column: Scan Observations & Recommendations */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '28px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
        }}>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span className={selectedScan.riskLevel.includes('Critical') ? 'badge badge-red' : 'badge badge-emerald'}>
              {selectedScan.riskLevel}
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#047857' }}>
              Match Confidence: {selectedScan.confidence}
            </span>
          </div>

          <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '8px' }}>
            AI Vision Observation Report:
          </h3>
          <div style={{
            backgroundColor: '#ecfdf5',
            color: '#065f46',
            padding: '12px 16px',
            borderRadius: '12px',
            fontWeight: 800,
            fontSize: '1.1rem',
            marginBottom: '20px',
            borderLeft: '4px solid #10b981'
          }}>
            {selectedScan.suspectedCondition}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
              Detected Visual Features:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedScan.observations.map((obs, i) => (
                <li key={i} style={{ fontSize: '0.875rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  {obs}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
              Recommended Immediate Action:
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#1e293b', backgroundColor: '#f8fafc', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
              {selectedScan.recommendedAction}
            </p>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => onNavigateToVet && onNavigateToVet()}
              style={{
                backgroundColor: '#10b981',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '14px',
                fontWeight: 700,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              Locate Nearby Vet Hospitals for Confirmation
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Disclaimer */}
          <p style={{ fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic', textAlign: 'center', marginTop: '20px', borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>
            ⚠️ <strong>Disclaimer:</strong> Image analysis is an AI assistance tool and does not replace physical examination by a licensed veterinarian.
          </p>

        </div>

      </div>

    </div>
  );
}
