export const sampleAnimals = [
  {
    id: 'LAKSHMI-COW-01',
    name: 'Lakshmi',
    species: 'Cow',
    breed: 'Gir High-Yield Crossbreed',
    age: '4 Years 2 Months',
    gender: 'Female',
    tagId: 'IN-TG-2024-8891',
    ownerName: 'Ramesh Patel',
    village: 'Rajendranagar, Ranga Reddy District',
    lactationStage: 'Peak Lactation (16 L/day)',
    healthStatus: 'Under Monitoring',
    statusBadge: 'warning',
    lastVaccination: 'FMD (May 14, 2026)',
    nextVaccinationDue: 'Nov 14, 2026',
    activeConcern: 'Foot-and-Mouth Disease Suspected',
    avatar: 'https://images.unsplash.com/photo-1546445317-29f4545f9d52?auto=format&fit=crop&w=600&q=80',
    timelineEvents: [
      {
        id: 'ev-1',
        date: '2026-10-04',
        time: '09:30 AM',
        type: 'Detection',
        title: 'AI Health Assessment — High Fever & Oral Lesions',
        description: 'Farmer reported 104.5°F fever, salivation, and limping. AI flagged FMD Red-Flag.',
        icon: 'AlertTriangle',
        color: 'red'
      },
      {
        id: 'ev-2',
        date: '2026-10-04',
        time: '11:15 AM',
        type: 'Vet Consultation',
        title: 'Emergency Field Visit — Dr. Suresh Kumar',
        description: 'Physical clinical exam confirmed early FMD vesicles on tongue. Isolated from herd.',
        icon: 'Stethoscope',
        color: 'blue'
      },
      {
        id: 'ev-3',
        date: '2026-10-04',
        time: '12:00 PM',
        type: 'Treatment',
        title: 'Prescription & Antiseptic Wash Administered',
        description: 'Potassium permanganate mouth wash, Meloxicam anti-inflammatory, Oxytetracycline spray.',
        icon: 'Pill',
        color: 'purple'
      },
      {
        id: 'ev-4',
        date: '2026-10-07',
        time: '10:00 AM (Scheduled)',
        type: 'Follow-up',
        title: 'Field Vet Healing Assessment',
        description: 'Check ulceration healing status and milk restoration progress.',
        icon: 'CalendarCheck',
        color: 'amber'
      },
      {
        id: 'ev-5',
        date: '2026-11-14',
        time: 'Due Date',
        type: 'Prevention',
        title: 'Booster FMD Ring Vaccination',
        description: 'National Livestock Disease Control Programme booster dose.',
        icon: 'Syringe',
        color: 'emerald'
      }
    ]
  },
  {
    id: 'BHEEM-BUFFALO-02',
    name: 'Bheem',
    species: 'Buffalo',
    breed: 'Murrah Breed',
    age: '5 Years',
    gender: 'Male (Draft/Breeding)',
    tagId: 'IN-TG-2023-4102',
    ownerName: 'Sunita Devi',
    village: 'Medchal Mandal',
    lactationStage: 'N/A',
    healthStatus: 'Healthy',
    statusBadge: 'success',
    lastVaccination: 'HS-BQ Combined (Aug 01, 2026)',
    nextVaccinationDue: 'Feb 01, 2027',
    activeConcern: 'None (Routine Wellness)',
    avatar: 'https://images.unsplash.com/photo-1570042707222-6b944208034a?auto=format&fit=crop&w=600&q=80',
    timelineEvents: [
      {
        id: 'ev-b1',
        date: '2026-08-01',
        time: '10:00 AM',
        type: 'Prevention',
        title: 'Biannual HS & Blackleg Vaccination',
        description: 'Administered by District Mobile Vet Unit. Serial #VAC-8821.',
        icon: 'Syringe',
        color: 'emerald'
      },
      {
        id: 'ev-b2',
        date: '2026-05-10',
        time: '02:30 PM',
        type: 'Treatment',
        title: 'Routine Deworming (Albendazole Bolus)',
        description: 'Prophylactic parasite control prior to monsoon season.',
        icon: 'Pill',
        color: 'emerald'
      }
    ]
  },
  {
    id: 'CHOTA-GOAT-03',
    name: 'Chota',
    species: 'Goat',
    breed: 'Telangana Black Goat',
    age: '1 Year 8 Months',
    gender: 'Male',
    tagId: 'IN-TG-2025-1109',
    ownerName: 'Kishan Rao',
    village: 'Shamshabad',
    lactationStage: 'N/A',
    healthStatus: 'Recovered',
    statusBadge: 'info',
    lastVaccination: 'PPR Vaccine (Jan 2026)',
    nextVaccinationDue: 'Jan 2027',
    activeConcern: 'Mild Skin Scab (Healed)',
    avatar: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=600&q=80',
    timelineEvents: [
      {
        id: 'ev-c1',
        date: '2026-09-12',
        time: '04:00 PM',
        type: 'Detection',
        title: 'AI Scan — Ecthyma / Contagious Ecthyma (Orf)',
        description: 'Labial scab scanned via camera. Rated Moderate Risk.',
        icon: 'Camera',
        color: 'amber'
      }
    ]
  }
];

export const symptomOptions = [
  { id: 'fever', label: 'High Fever (>103°F / Hot ears & horns)', category: 'General', highRisk: true },
  { id: 'salivation', label: 'Excessive / Ropy Salivation & Drooling', category: 'Oral/Head', highRisk: true },
  { id: 'blisters', label: 'Blisters / Lesions on Tongue, Gums or Hooves', category: 'Skin/Mouth', highRisk: true },
  { id: 'limping', label: 'Limping / Reluctance to Walk / Lameness', category: 'Locomotion', highRisk: false },
  { id: 'appetite', label: 'Complete Loss of Appetite (Anorexia)', category: 'Digestive', highRisk: false },
  { id: 'milk_drop', label: 'Sudden Drop in Milk Yield (>40%)', category: 'Production', highRisk: false },
  { id: 'udder_swelling', label: 'Swollen, Warm or Hard Udder', category: 'Udder', highRisk: false },
  { id: 'clotted_milk', label: 'Milk contains Blood, Clots or Flakes', category: 'Udder', highRisk: false },
  { id: 'skin_nodules', label: 'Lumps / Nodules on Skin (LSD Type)', category: 'Skin', highRisk: true },
  { id: 'bloat', label: 'Swollen Left Flank / Gas Distension', category: 'Digestive', highRisk: true },
  { id: 'respiratory', label: 'Rapid Breathing, Gasping or Grunting', category: 'Respiratory', highRisk: true },
  { id: 'throat_swelling', label: 'Swelling around Throat & Brisket', category: 'Respiratory', highRisk: true },
  { id: 'nasal_discharge', label: 'Thick Mucus / Discharge from Nose & Eyes', category: 'Respiratory', highRisk: false },
  { id: 'diarrhea', label: 'Profuse or Bloody Diarrhea', category: 'Digestive', highRisk: true },
  { id: 'downer', label: 'Animal Unable to Stand (Downer State)', category: 'Critical', highRisk: true }
];

export const sampleScans = [
  {
    id: 'scan-1',
    title: 'Oral Vesicles & Tongue Erosions',
    suspectedCondition: 'Foot-and-Mouth Disease (FMD)',
    confidence: '95.4%',
    riskLevel: 'Critical Red-Flag',
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545f9d52?auto=format&fit=crop&w=600&q=80',
    observations: [
      'Visible mucosal epithelial sloughing on dorsum of tongue',
      'Hyperemia and profuse clear saliva dripping',
      'Typical viral aphthous fever symptom pattern'
    ],
    recommendedAction: 'Immediate herd quarantine. Apply antiseptic glycerin wash. Contact local veterinary hospital.'
  },
  {
    id: 'scan-2',
    title: 'Cutaneous Nodular Lesions (Skin Lumps)',
    suspectedCondition: 'Lumpy Skin Disease (LSD)',
    confidence: '92.1%',
    riskLevel: 'High Risk',
    imageUrl: 'https://images.unsplash.com/photo-1570042707222-6b944208034a?auto=format&fit=crop&w=600&q=80',
    observations: [
      'Multiple circumscribed firm skin nodules (2-4cm)',
      'Localized swelling on shoulder and dewlap area',
      'Associated vector infestation observed'
    ],
    recommendedAction: 'Isolate animal, apply topical herbal antiseptic paste, spray fly/mosquito repellent.'
  },
  {
    id: 'scan-3',
    title: 'Asymmetrical Udder Swelling & Clotted Milk',
    suspectedCondition: 'Acute Clinical Mastitis',
    confidence: '89.7%',
    riskLevel: 'Moderate Risk',
    imageUrl: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=600&q=80',
    observations: [
      'Left posterior quarter enlarged & erythematous',
      'Viscous yellow milk secretion containing fibrin flakes',
      'Local hyperthermia on palpation'
    ],
    recommendedAction: 'Perform strip cup test, perform frequent complete milking out, request vet for intramammary infusion.'
  }
];

export const sampleVaccinations = [
  { disease: 'Foot-and-Mouth Disease (FMD)', vaccine: 'FMD Trivalent Oil Adjuvant', schedule: 'Biannual (May & Nov)', target: 'Cattle, Buffalo, Sheep, Goat', status: 'Mandatory' },
  { disease: 'Haemorrhagic Septicaemia (HS)', vaccine: 'Alum Precipitated HS Vaccine', schedule: 'Annual (Pre-Monsoon May/Jun)', target: 'Cattle & Buffalo', status: 'Mandatory' },
  { disease: 'Black Quarter (BQ)', vaccine: 'Anacultured BQ Vaccine', schedule: 'Annual (Pre-Monsoon May)', target: 'Young Cattle (6m - 2yrs)', status: 'High Priority' },
  { disease: 'Brucellosis', vaccine: 'Cotton Strain-19 / S19 Vaccine', schedule: 'Once in Lifetime (Female Calves 4-8m)', target: 'Female Calves', status: 'Essential' },
  { disease: 'Peste des Petits Ruminants (PPR)', vaccine: 'Sungri 96 Strain PPR Vaccine', schedule: 'Every 3 Years', target: 'Goats & Sheep', status: 'Mandatory' },
  { disease: 'Lumpy Skin Disease (LSD)', vaccine: 'Goat Pox Virus Vaccine (Heterologous)', schedule: 'Annual (Feb/Mar)', target: 'Cattle & Buffalo', status: 'High Priority' }
];

export const sampleVetFacilities = [
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
    name: 'District Animal Husbandry & Diagnostic Lab',
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
  }
];
