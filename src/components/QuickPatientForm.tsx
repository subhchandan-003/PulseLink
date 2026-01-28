import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Heart, Phone, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface QuickPatientFormProps {
  hospitalName: string;
  onComplete: (formData: QuickPatientFormData) => void;
  onEmergency: () => void;
}

export interface QuickPatientFormData {
  fillingFor: 'self' | 'caregiver';
  relationship?: string;
  medicineConfidence: 'most' | 'some' | 'none' | 'unsure';
  documentsAvailable: string[];
  issueStartDate: 'today' | 'yesterday' | '3days' | '7days' | 'older' | 'unsure';
  patientStatus: 'stable' | 'worried' | 'urgent';
  preferredLanguage: string;
}

export const QuickPatientForm: React.FC<QuickPatientFormProps> = ({
  hospitalName,
  onComplete,
  onEmergency,
}) => {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState<QuickPatientFormData>({
    fillingFor: 'self',
    medicineConfidence: 'most',
    documentsAvailable: [],
    issueStartDate: 'today',
    patientStatus: 'stable',
    preferredLanguage: 'English',
  });

  const updateFormData = (field: keyof QuickPatientFormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleToggleDocument = (doc: string) => {
    setFormData((prev) => ({
      ...prev,
      documentsAvailable: prev.documentsAvailable.includes(doc)
        ? prev.documentsAvailable.filter((d) => d !== doc)
        : [...prev.documentsAvailable, doc],
    }));
  };

  const handleNext = () => {
    if (formData.patientStatus === 'urgent') {
      onEmergency();
      return;
    }
    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(formData);
    }
  };

  const canProceed = () => {
    if (currentQuestion === 0) return true; // Verify screen
    if (currentQuestion === 1) return formData.fillingFor !== undefined; // Q1
    if (currentQuestion === 2) return formData.medicineConfidence !== undefined; // Q2
    if (currentQuestion === 3) return formData.documentsAvailable.length >= 0; // Q3
    if (currentQuestion === 4) return formData.issueStartDate !== undefined; // Q4
    if (currentQuestion === 5) return formData.patientStatus !== undefined; // Q5
    if (currentQuestion === 6) return formData.preferredLanguage !== undefined; // Q6
    return false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-blue to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-3xl font-bold text-white">Patient Quick Form</h1>
            <span className="text-blue-100 text-sm font-medium">
              Question {currentQuestion + 1} of 7
            </span>
          </div>
          <div className="w-full bg-blue-400 h-2 rounded-full overflow-hidden">
            <div
              className="bg-white h-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / 7) * 100}%` }}
            />
          </div>
        </div>

        {/* SCREEN 0: Verify + Trust */}
        {currentQuestion === 0 && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-medical-blue rounded-full p-3">
                <CheckCircle2 className="text-white" size={32} />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify & Trust</h2>
              <p className="text-gray-600">
                Before we start, let's make sure you're in the right place.
              </p>
            </div>

            {/* Hospital Badge */}
            <div className="bg-blue-50 border-l-4 border-medical-blue rounded-r-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-medical-blue" />
                <h3 className="font-bold text-gray-800">{hospitalName}</h3>
              </div>
              <p className="text-sm text-gray-700 ml-7">
                ✓ Verified medical facility
              </p>
            </div>

            {/* Purpose Statement */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-gray-800">
                <span className="font-bold block mb-2">Why we're asking:</span>
                "This is for patient safety follow-up, not marketing."
              </p>
              <p className="text-xs text-gray-600 mt-3">
                Your information helps us understand what happened and improve care. We won't use it for sales or advertising.
              </p>
            </div>

            {/* Trust Elements */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={18} className="text-medical-green flex-shrink-0" />
                <span>Your data is encrypted and secure</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={18} className="text-medical-green flex-shrink-0" />
                <span>Takes only 2–3 minutes</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle2 size={18} className="text-medical-green flex-shrink-0" />
                <span>Optional: Upload photos or answer questions</span>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-medical-blue hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Continue <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Q1: For self or caregiver? */}
        {currentQuestion === 1 && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Q1. Who are you filling this form for?
            </h2>
            <p className="text-gray-600">
              This helps us understand if there's additional context we should know.
            </p>

            <div className="space-y-3">
              {[
                { value: 'self', label: 'For myself', icon: '👤' },
                {
                  value: 'caregiver',
                  label: 'For a family member / caregiver',
                  icon: '👨‍👩‍👧',
                },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateFormData('fillingFor', option.value)}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                    formData.fillingFor === option.value
                      ? 'border-medical-blue bg-blue-50'
                      : 'border-gray-300 hover:border-medical-blue'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{option.icon}</span>
                    <span className="font-semibold text-gray-800">
                      {option.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {formData.fillingFor === 'caregiver' && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <label className="text-sm font-semibold text-gray-800 block mb-2">
                  Relationship to patient (optional)
                </label>
                <select
                  value={formData.relationship || ''}
                  onChange={(e) => updateFormData('relationship', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:border-medical-blue"
                >
                  <option value="">Select relationship...</option>
                  <option value="spouse">Spouse</option>
                  <option value="child">Child</option>
                  <option value="parent">Parent</option>
                  <option value="sibling">Sibling</option>
                  <option value="other">Other</option>
                </select>
              </div>
            )}

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="w-full bg-medical-blue hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Next <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Q2: Medicine Confidence */}
        {currentQuestion === 2 && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Q2. How confident are you about remembering the medicines you took?
            </h2>
            <p className="text-gray-600">
              This helps us know the best way to capture medicine details.
            </p>

            <div className="space-y-3">
              {[
                { value: 'most', label: 'I remember most names' },
                { value: 'some', label: 'I remember some, not all' },
                {
                  value: 'none',
                  label: "I don't remember names (I can share photo/strip)",
                },
                { value: 'unsure', label: "I'm not sure" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateFormData('medicineConfidence', option.value)}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                    formData.medicineConfidence === option.value
                      ? 'border-medical-blue bg-blue-50'
                      : 'border-gray-300 hover:border-medical-blue'
                  }`}
                >
                  <span className="font-semibold text-gray-800">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="w-full bg-medical-blue hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Next <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Q3: Documents Available */}
        {currentQuestion === 3 && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Q3. Which of these do you have right now?
            </h2>
            <p className="text-gray-600">
              Select all that apply. (Check as many as you'd like)
            </p>

            <div className="space-y-3">
              {[
                { value: 'prescription', label: 'Prescription photo (Rx)', icon: '📄' },
                {
                  value: 'strip',
                  label: 'Medicine strip/box photo',
                  icon: '📦',
                },
                { value: 'bill', label: 'Pharmacy bill', icon: '🧾' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleToggleDocument(option.value)}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all flex items-center gap-3 ${
                    formData.documentsAvailable.includes(option.value)
                      ? 'border-medical-blue bg-blue-50'
                      : 'border-gray-300 hover:border-medical-blue'
                  }`}
                >
                  <div className="text-2xl">{option.icon}</div>
                  <span className="font-semibold text-gray-800">
                    {option.label}
                  </span>
                  {formData.documentsAvailable.includes(option.value) && (
                    <CheckCircle2 size={20} className="text-medical-blue ml-auto" />
                  )}
                </button>
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <span className="font-semibold block mb-2">No documents right now?</span>
                No problem! We'll ask simple questions. You can upload photos anytime.
              </p>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-medical-blue hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Next <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Q4: When did issue start? */}
        {currentQuestion === 4 && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Q4. When did the issue/side-effect start?
            </h2>
            <p className="text-gray-600">
              Approximate is okay. This helps us understand the timeline.
            </p>

            <div className="space-y-3">
              {[
                { value: 'today', label: 'Today' },
                { value: 'yesterday', label: 'Yesterday' },
                { value: '3days', label: 'In the last 3 days' },
                { value: '7days', label: 'In the last 7 days' },
                { value: 'older', label: 'More than 7 days ago' },
                { value: 'unsure', label: 'Not sure' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateFormData('issueStartDate', option.value)}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                    formData.issueStartDate === option.value
                      ? 'border-medical-blue bg-blue-50'
                      : 'border-gray-300 hover:border-medical-blue'
                  }`}
                >
                  <span className="font-semibold text-gray-800">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="w-full bg-medical-blue hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Next <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Q5: Is patient okay? (with EMERGENCY branch) */}
        {currentQuestion === 5 && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Q5. Is the patient okay right now?
            </h2>
            <p className="text-gray-600">
              Your safety is our priority.
            </p>

            <div className="space-y-3">
              {[
                {
                  value: 'stable',
                  label: 'Yes, stable',
                  icon: '✅',
                  color: 'green',
                },
                {
                  value: 'worried',
                  label: 'Not sure / worried',
                  icon: '⚠️',
                  color: 'yellow',
                },
                {
                  value: 'urgent',
                  label: 'Needs urgent help',
                  icon: '🚨',
                  color: 'red',
                },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateFormData('patientStatus', option.value)}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all flex items-center gap-3 ${
                    formData.patientStatus === option.value
                      ? option.color === 'green'
                        ? 'border-medical-green bg-green-50'
                        : option.color === 'yellow'
                          ? 'border-yellow-400 bg-yellow-50'
                          : 'border-medical-red bg-red-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <span className="font-semibold text-gray-800">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>

            {formData.patientStatus === 'worried' && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4">
                <p className="text-sm text-gray-800">
                  If you're concerned, it's always safe to contact your doctor or nearest hospital for guidance.
                </p>
              </div>
            )}

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="w-full bg-medical-blue hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Next <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Q6: Preferred Language */}
        {currentQuestion === 6 && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Q6. Preferred language for next steps
            </h2>
            <p className="text-gray-600">
              We'll communicate in your preferred language.
            </p>

            <div className="space-y-3">
              {[
                { value: 'English', label: '🇬🇧 English' },
                { value: 'Hindi', label: '🇮🇳 Hindi (हिंदी)' },
                {
                  value: 'Regional',
                  label: '🌍 Regional language',
                  isDropdown: true,
                },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    if (!option.isDropdown) {
                      updateFormData('preferredLanguage', option.value);
                    }
                  }}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                    formData.preferredLanguage === option.value
                      ? 'border-medical-blue bg-blue-50'
                      : 'border-gray-300 hover:border-medical-blue'
                  }`}
                >
                  <span className="font-semibold text-gray-800">
                    {option.label}
                  </span>
                </button>
              ))}

              {formData.preferredLanguage === 'Regional' && (
                <select
                  value={formData.preferredLanguage || ''}
                  onChange={(e) => updateFormData('preferredLanguage', e.target.value)}
                  className="w-full border-2 border-medical-blue rounded-lg p-4 text-sm focus:outline-none"
                >
                  <option value="Regional">Select language...</option>
                  <option value="Marathi">मराठी - Marathi</option>
                  <option value="Tamil">தமிழ் - Tamil</option>
                  <option value="Telugu">తెలుగు - Telugu</option>
                  <option value="Kannada">ಕನ್ನಡ - Kannada</option>
                  <option value="Bengali">বাঙালি - Bengali</option>
                  <option value="Gujarati">ગુજરાતી - Gujarati</option>
                </select>
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="w-full bg-medical-green hover:bg-green-700 disabled:bg-gray-300 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Complete Setup <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
