import React, { useState } from 'react';
import { Calendar, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { FollowUpData, Medicine } from '../types';

interface EventTimelineProps {
  medicines: Medicine[];
  onComplete: (data: FollowUpData) => void;
}

export const EventTimeline: React.FC<EventTimelineProps> = ({ medicines, onComplete }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    eventStartDate: '',
    eventEndDate: '',
    outcome: 'ongoing',
    labResults: '',
    comorbidities: [] as string[],
    additionalNotes: '',
    caregiverName: '',
    caregiverRelationship: '',
  });

  const [showCaregiverMode, setShowCaregiverMode] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleComorbidityChange = (comorbidity: string) => {
    setFormData((prev) => ({
      ...prev,
      comorbidities: prev.comorbidities.includes(comorbidity)
        ? prev.comorbidities.filter((c) => c !== comorbidity)
        : [...prev.comorbidities, comorbidity],
    }));
  };

  const handleSubmit = () => {
    const followUpData: FollowUpData = {
      caseId: 'CASE-001',
      patientConfirmation: true,
      medicines,
      eventStartDate: formData.eventStartDate,
      eventEndDate: formData.eventEndDate,
      outcome: formData.outcome,
      labResults: formData.labResults,
      comorbidities: formData.comorbidities,
      additionalNotes: formData.additionalNotes,
      submittedAt: new Date().toISOString(),
      caregiver: showCaregiverMode
        ? {
            name: formData.caregiverName,
            relationship: formData.caregiverRelationship,
          }
        : undefined,
    };
    onComplete(followUpData);
  };

  const isComplete =
    formData.eventStartDate && formData.eventEndDate && formData.outcome;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('eventDetails')}</h2>
        <p className="text-gray-600 mb-8">{t('addMoreInformation')}</p>

        {/* Caregiver Toggle */}
        <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={showCaregiverMode}
              onChange={(e) => setShowCaregiverMode(e.target.checked)}
              className="w-5 h-5 text-medical-blue cursor-pointer"
            />
            <span className="text-gray-700 font-medium">I'm filling this on behalf of the patient</span>
          </label>
        </div>

        {showCaregiverMode && (
          <div className="mb-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200 space-y-4">
            <p className="text-sm font-semibold text-gray-800">Caregiver Information</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={formData.caregiverName}
                onChange={(e) => handleInputChange('caregiverName', e.target.value)}
                className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-medical-blue"
              />
              <select
                value={formData.caregiverRelationship}
                onChange={(e) => handleInputChange('caregiverRelationship', e.target.value)}
                className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-medical-blue"
              >
                <option value="">Select relationship</option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="parent">Parent</option>
                <option value="sibling">Sibling</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        )}

        {/* Event Dates */}
        <div className="mb-8">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Calendar size={18} /> When did the event occur?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Start Date</label>
              <input
                type="date"
                value={formData.eventStartDate}
                onChange={(e) => handleInputChange('eventStartDate', e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-medical-blue"
              />
              <p className="text-xs text-gray-500 mt-1">When did symptoms/event start?</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">End Date (if resolved)</label>
              <input
                type="date"
                value={formData.eventEndDate}
                onChange={(e) => handleInputChange('eventEndDate', e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-medical-blue"
              />
              <p className="text-xs text-gray-500 mt-1">When did it end or resolve?</p>
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className="mb-8">
          <h3 className="font-semibold text-gray-800 mb-4">What was the outcome?</h3>
          <div className="space-y-3">
            {[
              { value: 'recovered', label: 'Recovered completely' },
              { value: 'improving', label: 'Improving but not fully recovered' },
              { value: 'ongoing', label: 'Ongoing/No change' },
              { value: 'worsened', label: 'Worsened' },
              { value: 'unknown', label: 'Unknown' },
            ].map((option) => (
              <label key={option.value} className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="outcome"
                  value={option.value}
                  checked={formData.outcome === option.value}
                  onChange={(e) => handleInputChange('outcome', e.target.value)}
                  className="w-4 h-4 text-medical-blue cursor-pointer"
                />
                <span className="text-gray-700 font-medium">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mb-8">
          <h3 className="font-semibold text-gray-800 mb-4">Additional Information</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Lab Results (if any)
              </label>
              <textarea
                placeholder="e.g., Blood work results, imaging findings..."
                value={formData.labResults}
                onChange={(e) => handleInputChange('labResults', e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-medical-blue h-24 resize-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-3">
                Do you have any of these conditions?
              </label>
              <div className="space-y-2">
                {[
                  { value: 'diabetes', label: 'Diabetes' },
                  { value: 'hypertension', label: 'High Blood Pressure' },
                  { value: 'kidney_disease', label: 'Kidney Disease' },
                  { value: 'liver_disease', label: 'Liver Disease' },
                  { value: 'heart_disease', label: 'Heart Disease' },
                ].map((condition) => (
                  <label key={condition.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.comorbidities.includes(condition.value)}
                      onChange={() => handleComorbidityChange(condition.value)}
                      className="w-4 h-4 text-medical-blue cursor-pointer"
                    />
                    <span className="text-gray-700">{condition.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Any other details?
              </label>
              <textarea
                placeholder="Share any other important information..."
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-medical-blue h-24 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Validation */}
        {isComplete && (
          <div className="mb-8 flex items-center gap-3 bg-green-50 border border-medical-green rounded-lg p-4">
            <CheckCircle2 size={20} className="text-medical-green flex-shrink-0" />
            <p className="text-green-800 font-medium">All required fields are complete!</p>
          </div>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={!isComplete}
          className="w-full bg-medical-green hover:bg-green-700 disabled:bg-gray-300 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Submit Follow-up Form
        </button>
      </div>
    </div>
  );
};
