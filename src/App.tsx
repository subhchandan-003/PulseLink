import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { VerifyScreen } from './components/VerifyScreen';
import { QuickPatientForm, QuickPatientFormData } from './components/QuickPatientForm';
import { EmergencyGuidance } from './components/EmergencyGuidance';
import { MedicineUpload } from './components/MedicineUpload';
import { EventTimeline } from './components/EventTimeline';
import { ThankYouScreen } from './components/ThankYouScreen';
import { DoctorCaseSnapshot } from './components/DoctorCaseSnapshot';
import { PVOpsDashboard } from './components/PVOpsDashboard';
import { FollowUpData, Medicine, Case } from './types';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import './App.css';

type ScreenType = 'home' | 'verify' | 'quickform' | 'emergency' | 'medicine' | 'guided-questions' | 'timeline' | 'thankyou' | 'doctor' | 'dashboard';

// Mock data
const mockCases: Case[] = [
  {
    id: 'CASE-001',
    patientId: 'PAT-12345',
    patientName: 'Rajesh Kumar',
    patientPhone: '+91-9876543210',
    eventType: 'Adverse Event',
    riskLevel: 'high-risk',
    status: 'in-progress',
    medicines: [
      {
        id: '1',
        name: 'Azithromycin',
        strength: '500mg',
        dosageForm: 'Tablet',
        frequency: 'Once daily',
        confirmed: true,
      },
    ],
    missingFields: ['lab results', 'comorbidity info'],
    createdAt: '2024-01-20',
    dueDate: '2024-01-25',
  },
  {
    id: 'CASE-002',
    patientId: 'PAT-12346',
    patientName: 'Priya Singh',
    patientPhone: '+91-9876543211',
    eventType: 'Follow-up',
    riskLevel: 'routine',
    status: 'completed',
    medicines: [
      {
        id: '2',
        name: 'Paracetamol',
        strength: '650mg',
        dosageForm: 'Tablet',
        frequency: 'Three times daily',
        confirmed: true,
      },
    ],
    missingFields: [],
    createdAt: '2024-01-18',
    dueDate: '2024-01-23',
  },
  {
    id: 'CASE-003',
    patientId: 'PAT-12347',
    patientName: 'Amit Patel',
    patientPhone: '+91-9876543212',
    eventType: 'Serious Adverse Event',
    riskLevel: 'elevated',
    status: 'pending',
    medicines: [
      {
        id: '3',
        name: 'Lisinopril',
        strength: '10mg',
        dosageForm: 'Tablet',
        frequency: 'Once daily',
        confirmed: true,
      },
    ],
    missingFields: ['outcome', 'event timeline'],
    createdAt: '2024-01-19',
    dueDate: '2024-01-24',
  },
  {
    id: 'CASE-004',
    patientId: 'PAT-12348',
    patientName: 'Meera Sharma',
    patientPhone: '+91-9876543213',
    eventType: 'Follow-up',
    riskLevel: 'routine',
    status: 'completed',
    medicines: [],
    missingFields: [],
    createdAt: '2024-01-17',
    dueDate: '2024-01-22',
  },
  {
    id: 'CASE-005',
    patientId: 'PAT-12349',
    patientName: 'Vikas Gupta',
    patientPhone: '+91-9876543214',
    eventType: 'Adverse Event',
    riskLevel: 'high-risk',
    status: 'escalated',
    medicines: [
      {
        id: '4',
        name: 'Metformin',
        strength: '500mg',
        dosageForm: 'Tablet',
        frequency: 'Twice daily',
        confirmed: true,
      },
    ],
    missingFields: ['critical lab data', 'hospitalization status'],
    createdAt: '2024-01-16',
    dueDate: '2024-01-21',
  },
];

function AppContent() {
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage();
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [submittedData, setSubmittedData] = useState<FollowUpData | null>(null);
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [quickFormData, setQuickFormData] = useState<QuickPatientFormData | null>(null);
  const [languageSelectorOpen, setLanguageSelectorOpen] = useState(false);

  const handleVerify = () => {
    setCurrentScreen('quickform');
  };

  const handleQuickFormComplete = (data: QuickPatientFormData) => {
    setQuickFormData(data);
    // Branch based on documents availability
    if (data.documentsAvailable.length > 0) {
      setCurrentScreen('medicine'); // Branch A: Upload available
    } else {
      setCurrentScreen('guided-questions'); // Branch B: Guided questions instead
    }
  };

  const handleEmergency = () => {
    setCurrentScreen('emergency');
  };

  const handleEmergencyContinue = () => {
    setCurrentScreen('medicine');
  };

  const handleMedicinesComplete = (meds: Medicine[]) => {
    setMedicines(meds);
    setCurrentScreen('timeline');
  };

  const handleTimelineComplete = (data: FollowUpData) => {
    setSubmittedData(data);
    setCurrentScreen('thankyou');
  };

  const handleThankYouClose = () => {
    setCurrentScreen('home');
    setMedicines([]);
    setSubmittedData(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setLanguageSelectorOpen(!languageSelectorOpen)}
            className="bg-medical-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg flex items-center gap-2 transition-colors"
          >
            <Globe size={20} />
            <span className="text-sm">{currentLanguage.toUpperCase()}</span>
          </button>

          {languageSelectorOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-2xl border border-gray-200 py-2 z-50">
              {availableLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setLanguageSelectorOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex justify-between items-center ${
                    currentLanguage === lang.code ? 'bg-blue-50 font-bold text-medical-blue' : 'text-gray-700'
                  }`}
                >
                  <span>{lang.name}</span>
                  {currentLanguage === lang.code && <span className="text-medical-blue">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {currentScreen === 'home' && (
        <div className="min-h-screen bg-gradient-to-br from-medical-blue to-blue-600 flex items-center justify-center p-4">
          <div className="max-w-2xl text-center text-white">
            <h1 className="text-5xl font-bold mb-4">PulseLink</h1>
            <p className="text-xl text-blue-100 mb-12">
              Intelligent Follow-up Data Collection for Patient Safety
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-lg">
                <h3 className="text-lg font-bold mb-2">Patient Experience</h3>
                <p className="text-blue-100 text-sm">Zero-friction FU via WhatsApp</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-lg">
                <h3 className="text-lg font-bold mb-2">Medicine Accuracy</h3>
                <p className="text-blue-100 text-sm">AI-powered MedIntel extraction</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-lg">
                <h3 className="text-lg font-bold mb-2">Risk Automation</h3>
                <p className="text-blue-100 text-sm">Auto-escalate high-risk cases</p>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setCurrentScreen('verify')}
                className="w-full md:w-auto bg-white text-medical-blue hover:bg-blue-50 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Patient Follow-up Flow
              </button>
              <button
                onClick={() => setCurrentScreen('doctor')}
                className="w-full md:w-auto bg-medical-green hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors ml-0 md:ml-4 mt-4 md:mt-0"
              >
                Doctor Case Review
              </button>
              <button
                onClick={() => setCurrentScreen('dashboard')}
                className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors ml-0 md:ml-4 mt-4 md:mt-0"
              >
                PV Ops Dashboard
              </button>
            </div>

            <p className="text-blue-100 text-sm mt-12 max-w-md mx-auto">
              This prototype demonstrates the PulseLink MVP for patient follow-up, doctor review, and PV operations management.
            </p>
          </div>
        </div>
      )}

      {currentScreen === 'verify' && (
        <div className="min-h-screen py-12">
          <VerifyScreen onVerify={handleVerify} caseId="CASE-001" patientName="Rajesh Kumar" />
        </div>
      )}

      {currentScreen === 'quickform' && (
        <div className="min-h-screen py-12">
          <QuickPatientForm
            hospitalName="Apollo Hospitals"
            onComplete={handleQuickFormComplete}
            onEmergency={handleEmergency}
          />
        </div>
      )}

      {currentScreen === 'emergency' && (
        <EmergencyGuidance
          onCallBack={() => {
            alert('Call-back requested. Safety team will contact you shortly.');
            setCurrentScreen('home');
          }}
          onContinueAnyway={handleEmergencyContinue}
        />
      )}

      {currentScreen === 'medicine' && (
        <div className="min-h-screen py-12">
          <div className="max-w-2xl mx-auto mb-8 px-4">
            {quickFormData && (
              <div className="bg-blue-50 border-l-4 border-medical-blue rounded-r-lg p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Based on your answers:</span> Since you have{' '}
                  <strong>
                    {quickFormData.documentsAvailable.join(', ') || 'documents'}
                  </strong>
                  , you can upload photos below. (Optional: Type or skip if easier)
                </p>
              </div>
            )}
          </div>
          <MedicineUpload onComplete={handleMedicinesComplete} />
        </div>
      )}

      {currentScreen === 'guided-questions' && (
        <div className="min-h-screen bg-gradient-to-br from-medical-blue to-blue-600 py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center space-y-6">
              <h1 className="text-3xl font-bold text-gray-800">
                Let's Capture Medicine Information
              </h1>
              <p className="text-gray-600">
                Since you don't have photos right now, we'll ask you a few guided questions. You can always upload photos later!
              </p>

              <div className="bg-green-50 border border-medical-green rounded-lg p-6 space-y-3 text-left">
                <p className="font-semibold text-gray-800">We'll ask:</p>
                <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                  <li>How many medicines were you taking?</li>
                  <li>Do you remember their names? (even approximate)</li>
                  <li>Strength and how often you took them?</li>
                  <li>When you started and stopped them?</li>
                </ul>
              </div>

              <button
                onClick={() => setCurrentScreen('medicine')}
                className="w-full bg-medical-blue hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors"
              >
                Continue to Form
              </button>
            </div>
          </div>
        </div>
      )}

      {currentScreen === 'timeline' && (
        <div className="min-h-screen py-12">
          <EventTimeline medicines={medicines} onComplete={handleTimelineComplete} />
        </div>
      )}

      {currentScreen === 'thankyou' && submittedData && (
        <ThankYouScreen data={submittedData} onClose={handleThankYouClose} />
      )}

      {currentScreen === 'doctor' && (
        <div className="min-h-screen py-12">
          <DoctorCaseSnapshot
            caseData={{
              ...mockCases[0],
              submittedData: {
                outcome: 'improving',
                labResults: 'WBC: 12,000/μL (elevated)',
                comorbidities: ['diabetes'],
                notes: 'Patient reports partial recovery. Follow-up advised.',
              },
            }}
            onConfirm={(action) => {
              alert(`Doctor action: ${action}`);
              setCurrentScreen('home');
            }}
          />
        </div>
      )}

      {currentScreen === 'dashboard' && (
        <PVOpsDashboard cases={mockCases} />
      )}

      {/* Back Button */}
      {currentScreen !== 'home' && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => setCurrentScreen('home')}
            className="bg-medical-blue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
