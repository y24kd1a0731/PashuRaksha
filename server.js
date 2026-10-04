import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Database mock state in memory
const DB = {
  vetFacilities: [
    {
      id: 'vet-1',
      name: 'Government Veterinary Hospital & Polyclinic',
      type: 'Government Super-Speciality',
      latitude: 17.3850,
      longitude: 78.4867,
      address: 'Rajendranagar, Hyderabad, Telangana',
      phone: '+91 94401 19620',
      emergency: true,
      openStatus: 'Open 24/7',
      services: ['24x7 Emergency', 'Surgical Unit', 'X-Ray & Ultrasound', 'Vaccination Depot'],
      queueCount: 3,
      rating: 4.8,
      isDemo: true
    },
    {
      id: 'vet-2',
      name: 'Mobile Tele-Veterinary Emergency Unit (Zone 4)',
      type: 'Field Mobile Clinic',
      latitude: 17.4401,
      longitude: 78.3489,
      address: 'Gachibowli Operational Sector, Telangana',
      phone: '1962 (Toll-Free Helpline)',
      emergency: true,
      openStatus: 'On Duty (Mobile Response)',
      services: ['On-Field Emergency Visits', 'Sample Collection', 'First-Aid'],
      queueCount: 1,
      rating: 4.9,
      isDemo: true
    },
    {
      id: 'vet-3',
      name: 'Sri Venkateswara Cattle Care & Dairy Clinic',
      type: 'Private Livestock Clinic',
      latitude: 17.4156,
      longitude: 78.4750,
      address: 'Lakdikapul, Hyderabad, Telangana',
      phone: '+91 98490 22334',
      emergency: false,
      openStatus: 'Open • Closes 8:00 PM',
      services: ['Artificial Insemination', 'General Health Check', 'Deworming'],
      queueCount: 2,
      rating: 4.6,
      isDemo: true
    },
    {
      id: 'vet-4',
      name: 'District Animal Husbandry & Disease Diagnostic Lab',
      type: 'District Govt Facility',
      latitude: 16.5062,
      longitude: 80.6480,
      address: 'NTR District, Vijayawada, Andhra Pradesh',
      phone: '+91 866 2471962',
      emergency: true,
      openStatus: 'Open • 8:00 AM - 6:00 PM',
      services: ['Blood & Milk Testing', 'Epidemic Screening', 'Vaccine Distribution'],
      queueCount: 5,
      rating: 4.7,
      isDemo: true
    },
    {
      id: 'vet-5',
      name: 'Pashu Seva Samiti Emergency Clinic',
      type: 'NGO Supported Clinic',
      latitude: 18.5204,
      longitude: 73.8567,
      address: 'Shivajinagar, Pune, Maharashtra',
      phone: '+91 92230 45678',
      emergency: true,
      openStatus: 'Open 24/7',
      services: ['Rescue Care', 'Isolation Ward', 'Surgery'],
      queueCount: 0,
      rating: 4.9,
      isDemo: true
    }
  ],
  diseaseHotspots: [
    { id: 'h-1', district: 'Guntur', state: 'Andhra Pradesh', disease: 'Foot-and-Mouth Disease (FMD)', cases: 42, riskLevel: 'High', trend: 'Increasing', lat: 16.3067, lng: 80.4365 },
    { id: 'h-2', district: 'Rangareddy', state: 'Telangana', disease: 'Lumpy Skin Disease (LSD)', cases: 18, riskLevel: 'Moderate', trend: 'Stable', lat: 17.2456, lng: 78.4321 },
    { id: 'h-3', district: 'Anand', state: 'Gujarat', disease: 'Mastitis (Subclinical)', cases: 29, riskLevel: 'Moderate', trend: 'Decreasing', lat: 22.5645, lng: 72.9289 },
    { id: 'h-4', district: 'Kolhapur', state: 'Maharashtra', disease: 'Haemorrhagic Septicaemia (HS)', cases: 8, riskLevel: 'Low', trend: 'Controlled', lat: 16.7050, lng: 74.2433 },
    { id: 'h-5', district: 'Hissar', state: 'Haryana', disease: 'Blackleg (Clostridial Infection)', cases: 14, riskLevel: 'Moderate', trend: 'Increasing', lat: 29.1492, lng: 75.7217 }
  ],
  cases: [
    {
      id: 'CASE-2026-001',
      animalId: 'LAKSHMI-COW-01',
      animalName: 'Lakshmi',
      species: 'Cow (Gir Breed)',
      ownerName: 'Ramesh Patel',
      ownerPhone: '+91 98765 43210',
      village: 'Rajendranagar Village',
      reportedAt: '2026-10-04 09:30 AM',
      symptoms: ['High Fever (104.5°F)', 'Excessive Salivation', 'Blisters on Tongue/Hooves', 'Limping'],
      aiConcern: 'Foot-and-Mouth Disease (FMD) suspected',
      riskLevel: 'Critical Red-Flag',
      status: 'Under Review',
      vetAssigned: 'Dr. Suresh Kumar (Senior Vet)',
      notes: 'Animal isolated in shed 2. Hydration therapy initiated.'
    },
    {
      id: 'CASE-2026-002',
      animalId: 'BHEEM-BUFFALO-02',
      animalName: 'Bheem',
      species: 'Buffalo (Murrah)',
      ownerName: 'Sunita Devi',
      ownerPhone: '+91 97112 88900',
      village: 'Medchal Mandal',
      reportedAt: '2026-10-03 04:15 PM',
      symptoms: ['Swollen Udder', 'Drop in Milk Yield', 'Clotted Milk'],
      aiConcern: 'Acute Clinical Mastitis',
      riskLevel: 'Moderate',
      status: 'Treatment in Progress',
      vetAssigned: 'Dr. Anita Sharma',
      notes: 'Intramammary antibiotic infusion administered. Follow-up on Oct 6.'
    }
  ]
};

// Helper: Haversine distance in KM
function getHaversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round((R * c) * 10) / 10;
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'PashuRaksha AI Healthcare Engine Active', version: '1.0.0-SIH2026' });
});

// AI Health Assessment Endpoint
app.post('/api/assess-health', (req, res) => {
  const { species, symptoms = [], duration, age, temperature, appetite, milkDrop, additionalNotes } = req.body;

  const symptomString = symptoms.join(' ').toLowerCase() + ' ' + (additionalNotes || '').toLowerCase();

  let concern = 'General Indigestion or Minor Stress';
  let riskLevel = 'Low';
  let isRedFlag = false;
  let confidence = 87;
  let indicators = ['Mild lethargy', 'Routine dietary variation'];
  let action = 'Monitor food & water intake over 24 hours. Ensure clean drinking water.';
  let vetRecommended = false;
  let preventionGuidance = ['Keep shelter clean & dry', 'Ensure bi-monthly deworming', 'Maintain balanced green fodder ratio'];

  // Red Flag conditions
  if (
    symptomString.includes('high fever') ||
    symptomString.includes('blister') ||
    symptomString.includes('salivation') ||
    symptomString.includes('bleeding') ||
    symptomString.includes('severe bloat') ||
    symptomString.includes('downer') ||
    symptomString.includes('gasping')
  ) {
    isRedFlag = true;
    riskLevel = 'Critical Red-Flag';
    confidence = 94;
    vetRecommended = true;

    if (symptomString.includes('blister') || symptomString.includes('salivation') || symptomString.includes('limp')) {
      concern = 'Foot-and-Mouth Disease (FMD) — Suspected Acute Vector Outbreak';
      indicators = ['Erosive oral lesions', 'Profuse ropy salivation', 'Interdigital hoof vesicles', 'High fever (>104°F)'];
      action = '🔴 IMMEDIATELY ISOLATE ANIMAL. Contact nearby Veterinary Hospital or call 1962. Wash mouth/feet with 1% potassium permanganate solution.';
      preventionGuidance = ['Emergency ring vaccination of surrounding 5km herd', 'Disinfect shed with 4% sodium carbonate', 'Do not move animal outside village boundary'];
    } else if (symptomString.includes('swollen neck') || symptomString.includes('gasping') || symptomString.includes('throat')) {
      concern = 'Haemorrhagic Septicaemia (HS) / Gal Ghotu';
      indicators = ['Severe throat swelling (edema)', 'Painful grunting respiration', 'High temperature', 'Sudden onset'];
      action = '🔴 CRITICAL EMERGENCY. Immediate parenteral antibiotic therapy required by qualified vet within 4 hours.';
      preventionGuidance = ['Pre-monsoon biannual HS vaccination mandatory', 'Avoid grazing in stagnant marshy fields'];
    } else if (symptomString.includes('nodule') || symptomString.includes('skin lesion') || symptomString.includes('lump')) {
      concern = 'Lumpy Skin Disease (LSD) — Viral Dermopathy';
      indicators = ['Cutaneous nodules (2-5 cm)', 'Enlarged lymph nodes', 'Edema of legs', 'Fever & ocular discharge'];
      action = 'Isolate infected animal. Apply neem paste/antiseptic spray on burst nodules. Seek immediate vet consultation.';
      preventionGuidance = ['Vector control: Spray mosquito & fly repellents', 'Administer Goat Pox vaccine as preventive measure'];
    } else {
      concern = 'Acute Systemic Infection / Critical Metabolic Distress';
      indicators = ['Hyperthermia / Hypothermia', 'Severe respiratory/gastrointestinal distress'];
      action = '🔴 Urgent veterinary intervention mandatory within 6 hours. Keep animal in shaded, ventilated area.';
    }
  } else if (symptomString.includes('udder') || symptomString.includes('milk') || symptomString.includes('clot')) {
    concern = 'Clinical Mastitis (Mammary Gland Inflammation)';
    riskLevel = 'Moderate';
    confidence = 91;
    vetRecommended = true;
    indicators = ['Asymmetrical udder swelling', 'Flakes/clots in initial milk streams', 'Pain during milking'];
    action = 'Perform California Mastitis Test (CMT). Milking out infected quarter frequently. Request vet for intramammary antibiotic tube infusion.';
    preventionGuidance = ['Post-milking teat dipping in iodine solution', 'Clean dry bedding', 'Never leave calf to suckle infected quarter'];
  } else if (symptomString.includes('bloat') || symptomString.includes('gas') || symptomString.includes('swollen stomach')) {
    concern = 'Ruminal Tympany (Frothy Bloat)';
    riskLevel = 'Moderate';
    confidence = 89;
    vetRecommended = true;
    indicators = ['Distended left flank', 'Frequent kicking at belly', 'Rapid shallow breathing'];
    action = 'Keep animal standing and walking up-slope. Administer 200ml vegetable oil / anti-bloat drench. Consult vet if distension worsens.';
    preventionGuidance = ['Avoid sudden feeding on wet legumes/young clover', 'Feed dry hay prior to lush pasture access'];
  }

  res.json({
    disclaimer: 'AI-assisted preliminary assessment for informational support. Veterinary confirmation recommended before treatment.',
    species,
    possibleConcern: concern,
    riskLevel,
    isRedFlag,
    confidenceScore: `${confidence}%`,
    observedIndicators: indicators,
    recommendedNextStep: action,
    veterinaryAttentionRecommended: vetRecommended,
    preventionGuidance,
    assessedAt: new Date().toISOString(),
    isDemoEngine: true
  });
});

// Nearby Vet Facilities Endpoint with Live GPS distance calculation
app.get('/api/vet-facilities', (req, res) => {
  const userLat = parseFloat(req.query.lat);
  const userLng = parseFloat(req.query.lng);

  if (isNaN(userLat) || isNaN(userLng)) {
    return res.json({
      success: true,
      hasUserCoordinates: false,
      message: 'Location access required to calculate dynamic distance. Displaying reference facilities.',
      facilities: DB.vetFacilities
    });
  }

  // Calculate dynamic real distances
  const calculatedFacilities = DB.vetFacilities.map(fac => {
    const dist = getHaversineDistance(userLat, userLng, fac.latitude, fac.longitude);
    return {
      ...fac,
      distanceKm: dist,
      formattedDistance: `${dist} km away`
    };
  }).sort((a, b) => a.distanceKm - b.distanceKm);

  res.json({
    success: true,
    hasUserCoordinates: true,
    userLocation: { lat: userLat, lng: userLng },
    facilities: calculatedFacilities
  });
});

// Disease Hotspots / Community Health Endpoint
app.get('/api/disease-hotspots', (req, res) => {
  res.json({
    success: true,
    isSimulatedData: true,
    label: 'Demographic & Epidemiological Surveillance (SIH Demo Simulation)',
    totalCasesReported: 111,
    highRiskAreas: 2,
    hotspots: DB.diseaseHotspots,
    monthlyTrends: [
      { month: 'May 2026', fmdCases: 12, mastitisCases: 24, lsdCases: 8 },
      { month: 'Jun 2026', fmdCases: 19, mastitisCases: 28, lsdCases: 15 },
      { month: 'Jul 2026', fmdCases: 35, mastitisCases: 31, lsdCases: 22 },
      { month: 'Aug 2026', fmdCases: 48, mastitisCases: 25, lsdCases: 19 },
      { month: 'Sep 2026', fmdCases: 42, mastitisCases: 29, lsdCases: 18 }
    ]
  });
});

// Cases CRUD
app.get('/api/cases', (req, res) => {
  res.json({ success: true, cases: DB.cases });
});

app.post('/api/cases', (req, res) => {
  const newCase = {
    id: `CASE-2026-${String(DB.cases.length + 1).padStart(3, '0')}`,
    reportedAt: new Date().toLocaleString(),
    status: 'New Case',
    ...req.body
  };
  DB.cases.unshift(newCase);
  res.status(201).json({ success: true, message: 'Case created successfully', case: newCase });
});

app.put('/api/cases/:id', (req, res) => {
  const { id } = req.params;
  const index = DB.cases.findIndex(c => c.id === id);
  if (index !== -1) {
    DB.cases[index] = { ...DB.cases[index], ...req.body };
    return res.json({ success: true, case: DB.cases[index] });
  }
  res.status(404).json({ success: false, message: 'Case not found' });
});

app.listen(PORT, () => {
  console.log(`[PashuRaksha Express Backend] Running on http://localhost:${PORT}`);
});
