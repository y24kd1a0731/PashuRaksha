import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SihJudgeGuideBar from './components/SihJudgeGuideBar';
import HeroSection from './components/HeroSection';
import TrustTransparency from './components/TrustTransparency';
import AiHealthCheck from './components/AiHealthCheck';
import AiImageScanner from './components/AiImageScanner';
import RedFlagModal from './components/RedFlagModal';
import SmartVetFinder from './components/SmartVetFinder';
import ConnectedJourney from './components/ConnectedJourney';
import AnimalProfile from './components/AnimalProfile';
import HealthTimeline from './components/HealthTimeline';
import DiseaseHotspotMap from './components/DiseaseHotspotMap';
import PreventionAlerts from './components/PreventionAlerts';

// Dashboards
import FarmerDashboard from './components/dashboards/FarmerDashboard';
import VetDashboard from './components/dashboards/VetDashboard';
import FacilityDashboard from './components/dashboards/FacilityDashboard';
import AdminDashboard from './components/dashboards/AdminDashboard';

import { sampleAnimals } from './data/sampleData';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentRole, setCurrentRole] = useState('farmer');
  const [currentLang, setCurrentLang] = useState('en');
  
  // SIH Demo Mode State
  const [sihDemoMode, setSihDemoMode] = useState(true); // Default enabled for instant judging!
  const [demoStep, setDemoStep] = useState(1);

  // Selected Animal State
  const [selectedAnimal, setSelectedAnimal] = useState(sampleAnimals[0]);

  // Red Flag Modal State
  const [redFlagOpen, setRedFlagOpen] = useState(false);
  const [redFlagData, setRedFlagData] = useState(null);

  const handleTriggerRedFlag = (assessment) => {
    setRedFlagData(assessment);
    setRedFlagOpen(true);
  };

  const renderRoleDashboard = () => {
    switch (currentRole) {
      case 'vet':
        return <VetDashboard />;
      case 'facility':
        return <FacilityDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'farmer':
      default:
        return <FarmerDashboard setActiveTab={setActiveTab} onSelectAnimal={setSelectedAnimal} />;
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'animals':
        return <AnimalProfile animal={selectedAnimal} onSelectAnimal={setSelectedAnimal} />;
      case 'health-check':
        return (
          <AiHealthCheck
            onTriggerRedFlag={handleTriggerRedFlag}
            onNavigateToVet={() => setActiveTab('vet-care')}
            onSaveCase={() => setActiveTab('timeline')}
          />
        );
      case 'scan-image':
        return (
          <AiImageScanner
            onNavigateToVet={() => setActiveTab('vet-care')}
            onTriggerRedFlag={handleTriggerRedFlag}
          />
        );
      case 'vet-care':
        return <SmartVetFinder currentLang={currentLang} />;
      case 'timeline':
        return (
          <>
            <ConnectedJourney selectedAnimal={selectedAnimal} />
            <HealthTimeline animal={selectedAnimal} />
          </>
        );
      case 'disease-map':
        return <DiseaseHotspotMap />;
      case 'prevention':
        return <PreventionAlerts />;
      case 'dashboard':
        return renderRoleDashboard();
      case 'home':
      default:
        return (
          <>
            <HeroSection setActiveTab={setActiveTab} setSihDemoMode={setSihDemoMode} currentLang={currentLang} />
            <TrustTransparency />
            <AiHealthCheck
              onTriggerRedFlag={handleTriggerRedFlag}
              onNavigateToVet={() => setActiveTab('vet-care')}
              onSaveCase={() => setActiveTab('timeline')}
            />
            <SmartVetFinder currentLang={currentLang} />
            <ConnectedJourney selectedAnimal={selectedAnimal} />
            <DiseaseHotspotMap />
          </>
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
      
      {/* Global Header */}
      <Header
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sihDemoMode={sihDemoMode}
        setSihDemoMode={setSihDemoMode}
        triggerDemoStep={(step) => {
          setDemoStep(step);
          if (step === 1) setActiveTab('health-check');
        }}
      />

      {/* SIH Judge Demo Walkthrough Controller Bar */}
      {sihDemoMode && (
        <SihJudgeGuideBar
          currentStep={demoStep}
          setStep={setDemoStep}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}

      {/* Main App Content Viewport */}
      <main style={{ flex: 1 }}>
        {renderContent()}
      </main>

      {/* Emergency Red-Flag Modal */}
      <RedFlagModal
        isOpen={redFlagOpen}
        onClose={() => setRedFlagOpen(false)}
        assessmentData={redFlagData}
        onNavigateToVet={() => setActiveTab('vet-care')}
      />

      {/* Footer */}
      <Footer currentLang={currentLang} setActiveTab={setActiveTab} />

    </div>
  );
}
