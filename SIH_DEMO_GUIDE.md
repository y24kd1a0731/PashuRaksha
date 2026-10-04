# PashuRaksha (పశురక్ష / पशुरक्षा) — AI-Powered Livestock Health Assistant & Care Ecosystem
### Smart India Hackathon 2026 Interactive Prototype

PashuRaksha is a production-style, fully responsive web application built to connect the complete animal-health journey:

**Early Detection → Risk Assessment → Veterinary Care → Treatment → Follow-up → Prevention**

---

## 🌟 Key Modules & Features Implemented

### 1. AI Livestock Health Assistant & Triaging
- **Species Selector**: Cow, Buffalo, Goat, Sheep, Poultry, Pig.
- **Voice-Based Farmer Assistant**: 🎙️ Speech-to-text input supporting English, Hindi (हिंदी), and Telugu (తెలుగు). Includes spoken sample quick shortcuts for judges.
- **Clinical Symptom Matrix**: Structured checkboxes for High Fever, Ropy Salivation, Tongue/Hoof Blisters, Limping, Udder Swelling, Skin Nodules, Bloat, and Downer animal state.
- **Structured AI Output**:
  - Possible health concern (e.g., Foot-and-Mouth Disease, Mastitis, Lumpy Skin Disease, Haemorrhagic Septicaemia)
  - Risk Level indicator (Low, Moderate, High, Critical Red-Flag)
  - Confidence Score & Key Observed Indicators
  - Action plan & biosecurity guidance
  - Mandatory Disclaimer: *"AI-assisted preliminary assessment. Veterinary confirmation recommended."*

### 2. AI Image Health Scan ("Scan Animal")
- **Vision Diagnostic Viewport**: Neural scanning overlay animation analyzing animal lesion photos (Oral blisters, skin lumps, udder inflammation).
- **Benchmark Demonstrations & Custom Upload**: Includes pre-loaded high-resolution lesion benchmarks + option to upload photos from device camera.

### 3. Emergency Red-Flag System
- **Urgent Warning Banner**: Triggers 🔴 **URGENT VETERINARY ATTENTION RECOMMENDED** whenever acute high-risk symptom vectors are detected.
- **Immediate Action Protocols**: Herd isolation, 4% sodium carbonate disinfection, and quarantine.
- **1-Touch Emergency Buttons**: Direct call to **1962** (National Toll-Free Animal Helpline) and live GPS hospital locator.

### 4. Smart Veterinary Finder (Live GPS Location)
- **Browser Geolocation API**: Live request (`navigator.geolocation.getCurrentPosition`) asking user to grant location access.
- **Dynamic Haversine Distance**: Calculates exact distance (in KM) from user's live coordinates to nearby government polyclinics, mobile emergency units, and diagnostic labs.
- **Action Buttons**: Call hospital & Directions button (opens Google Maps route).
- **Clear Realism Tagging**: Explicitly labeled `[Demo Facility Data]` while calculating dynamic real distances.

### 5. Connected Animal Care Journey
- **Interactive Visual Pipeline**: 6-stage lifecycle tracking Lakshmi's case from initial AI triage to field vet visit (Dr. Suresh Kumar), prescription wash, recovery check, and FMD booster ring vaccination.

### 6. Animal Health Profile & Chronological Timeline
- **Livestock Passports**: Profiles for Lakshmi (Cow), Bheem (Buffalo), Chota (Goat).
- **Interactive Timeline**: Year 2026 chronological event timeline with color-coded nodes (Vaccination 💉, Consultation 🩺, Treatment 💊, Follow-up ✅). Clickable event modal for viewing full clinical records.

### 7. Disease Prevention & Alert Center
- **Vaccination Calendar**: FMD, HS, Black Quarter, Brucellosis, PPR, and Lumpy Skin Disease schedules.
- **Biosecurity & Deworming Advisories**: Seasonal notifications and pre-monsoon advisories.

### 8. Disease Hotspot & Community Health Map
- **Surveillance Analytics**: District-level disease clusters (Guntur, Rangareddy, Anand, Kolhapur, Hissar).
- **Interactive Trajectory Charts**: Recharts bar & line charts visualizing monthly disease trends.
- **Realism Tag**: Tagged `[Simulated Epidemiological Data — SIH Demo]`.

### 9. 4 Role-Based Dashboards
- 🧑‍🌾 **Farmer Dashboard**: Simple visual cards for health check, photo scan, find vet, and animal list.
- 🩺 **Veterinarian / Field Worker Dashboard**: Case queue, priority flags, diagnosis & prescription updater.
- 🏥 **Veterinary Facility Dashboard**: Inbound emergency OPD queue, 1962 ambulance unit dispatch status.
- 🏛️ **Government Admin Dashboard**: State livestock demographics, total animals (14,280), vaccine inventory, outbreak alerts.

---

## ⚡ How to Run Locally

1. **Start the Express API Backend**:
   ```bash
   node server.js
   ```
   *Runs on http://localhost:5000*

2. **Start the Vite React Frontend**:
   ```bash
   npm run dev
   ```
   *Runs on http://localhost:3000*

---

## 🏆 SIH Judge 60-Second Demonstration Script

1. Open `http://localhost:3000/`.
2. Notice top **SIH Judge Demo Controller Bar** (Default active).
3. **Step 1**: Click "1. AI Assessment & Voice" -> Click spoken Hindi sample -> Click "Generate AI Risk Assessment".
4. **Step 2**: Click "2. Scan Animal Image" -> Observe neural scanning line and visual pathology detection.
5. **Step 3**: Observe Red-Flag modal alert with emergency helpline (1962).
6. **Step 4**: Click "4. Live GPS Vet Finder" -> Allow browser location permission -> View live calculated distance in KM to nearby polyclinics.
7. **Step 5**: Click "5. Connected Journey & Timeline" -> Click through the 6 care stages and Lakshmi's interactive health history.
8. **Step 6**: Click "6. Admin Disease Map" -> Review district disease clusters and Recharts trajectory graphs.
