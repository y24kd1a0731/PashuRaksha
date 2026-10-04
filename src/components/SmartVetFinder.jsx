import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, PhoneCall, Clock, ShieldCheck, AlertCircle, RefreshCw, ExternalLink, Search, Stethoscope } from 'lucide-react';
import { sampleVetFacilities } from '../data/sampleData';

export default function SmartVetFinder({ currentLang }) {
  const [locationStatus, setLocationStatus] = useState('prompt'); // 'prompt', 'loading', 'granted', 'denied'
  const [userCoords, setUserCoords] = useState(null);
  const [facilities, setFacilities] = useState([]);
  const [searchDistrict, setSearchDistrict] = useState('Hyderabad');

  // Haversine Distance Helper in KM
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round((R * c) * 10) / 10;
  };

  const requestLocation = () => {
    setLocationStatus('loading');
    if (!navigator.geolocation) {
      setLocationStatus('denied');
      loadFallbackFacilities();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setUserCoords({ lat, lng });
        setLocationStatus('granted');

        // Fetch from API or calculate locally
        fetch(`/api/vet-facilities?lat=${lat}&lng=${lng}`)
          .then(res => res.json())
          .then(data => {
            if (data.facilities) {
              setFacilities(data.facilities);
            } else {
              computeDistances(lat, lng);
            }
          })
          .catch(() => computeDistances(lat, lng));
      },
      (error) => {
        console.warn('Location access denied or timed out:', error);
        setLocationStatus('denied');
        loadFallbackFacilities();
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  const computeDistances = (lat, lng) => {
    const sorted = sampleVetFacilities.map(fac => {
      const dist = calculateDistance(lat, lng, fac.latitude, fac.longitude);
      return {
        ...fac,
        distanceKm: dist,
        formattedDistance: `${dist} km away`
      };
    }).sort((a, b) => a.distanceKm - b.distanceKm);

    setFacilities(sorted);
  };

  const loadFallbackFacilities = () => {
    const defaultCoords = { lat: 17.3850, lng: 78.4867 }; // Hyderabad center
    computeDistances(defaultCoords.lat, defaultCoords.lng);
  };

  useEffect(() => {
    // Attempt location request on view mount
    requestLocation();
  }, []);

  return (
    <div style={{ maxWidth: '1280px', margin: '40px auto', padding: '0 20px' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ecfdf5', color: '#047857', padding: '6px 14px', borderRadius: '20px', fontSize: '0.825rem', fontWeight: 700, marginBottom: '10px' }}>
          <MapPin size={16} />
          MODULE E: SMART VETERINARY FINDER
        </div>
        <h2 style={{ fontSize: '2rem', color: '#0f172a' }}>
          Find Nearby Veterinary Care & Mobile Clinics
        </h2>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Connects livestock owners directly to government veterinary polyclinics, mobile 1962 units, and certified field doctors.
        </p>
      </div>

      {/* Location Status Bar */}
      <div style={{
        backgroundColor: locationStatus === 'granted' ? '#f0fdf4' : (locationStatus === 'denied' ? '#fffbebfb' : '#ffffff'),
        border: locationStatus === 'granted' ? '1px solid #a7f3d0' : '1px solid #cbd5e1',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: locationStatus === 'granted' ? '#10b981' : '#f59e0b',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Navigation size={20} />
          </div>

          <div>
            {locationStatus === 'granted' && (
              <>
                <span className="badge badge-emerald" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                  Live Browser Location Active
                </span>
                <h4 style={{ fontSize: '1rem', color: '#064e3b', fontWeight: 700, marginTop: '2px' }}>
                  User GPS: {userCoords?.lat.toFixed(4)}° N, {userCoords?.lng.toFixed(4)}° E
                </h4>
              </>
            )}

            {locationStatus === 'denied' && (
              <>
                <span className="badge badge-amber" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                  Location Access Required
                </span>
                <h4 style={{ fontSize: '0.95rem', color: '#92400e', fontWeight: 700, marginTop: '2px' }}>
                  "Enable location access to find veterinary facilities near you."
                </h4>
              </>
            )}

            {locationStatus === 'loading' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#047857', fontWeight: 600 }}>
                <RefreshCw className="animate-spin" size={16} />
                Acquiring live browser GPS coordinates...
              </div>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={requestLocation}
            style={{
              backgroundColor: '#047857',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              padding: '10px 18px',
              fontSize: '0.85rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <RefreshCw size={14} />
            {locationStatus === 'granted' ? 'Refresh GPS Location' : 'Allow Live Location'}
          </button>
        </div>

      </div>

      {/* Facilities Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
        {facilities.map((fac) => (
          <div
            key={fac.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '18px',
              padding: '24px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>

              {/* Card Top */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                    {fac.type}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: 800, marginTop: '2px' }}>
                    {fac.name}
                  </h3>
                </div>

                <span className="badge badge-emerald" style={{ fontSize: '0.75rem', whitespace: 'nowrap' }}>
                  {fac.formattedDistance || `${fac.distanceKm || 3.2} km`}
                </span>
              </div>

              <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={15} color="#047857" />
                {fac.address}
              </p>

              {/* Services Tags */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                {fac.services.map((srv, idx) => (
                  <span key={idx} style={{ backgroundColor: '#f1f5f9', color: '#334155', fontSize: '0.725rem', padding: '4px 8px', borderRadius: '6px', fontWeight: 600 }}>
                    ✓ {srv}
                  </span>
                ))}
              </div>

              {/* Status */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.825rem', color: '#64748b', borderTop: '1px solid #f1f5f9', paddingTop: '12px', marginBottom: '16px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#059669', fontWeight: 700 }}>
                  <Clock size={14} />
                  {fac.openStatus}
                </span>

                <span style={{ fontSize: '0.7rem', backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px', color: '#475569' }}>
                  Demo Facility Data
                </span>
              </div>

            </div>

            {/* Action Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <a
                href={`tel:${fac.phone}`}
                style={{
                  backgroundColor: '#047857',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '10px',
                  padding: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <PhoneCall size={14} />
                Call Hospital
              </a>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${fac.latitude},${fac.longitude}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: '#1e293b',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '10px',
                  padding: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <ExternalLink size={14} />
                Directions
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
