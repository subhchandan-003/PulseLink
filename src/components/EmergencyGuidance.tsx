import React from 'react';
import { AlertTriangle, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface EmergencyGuidanceProps {
  onCallBack: () => void;
  onContinueAnyway: () => void;
}

export const EmergencyGuidance: React.FC<EmergencyGuidanceProps> = ({
  onCallBack,
  onContinueAnyway,
}) => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-8">
          {/* Alert Header */}
          <div className="flex justify-center">
            <div className="bg-red-100 rounded-full p-4">
              <AlertTriangle className="text-red-600" size={40} />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-3">
              {t('emergencyAlert')}
            </h1>
            <p className="text-center text-gray-700">
              {t('needsImmediateHelp')}
            </p>
          </div>

          {/* Emergency Guidance */}
          <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-6 space-y-4">
            <p className="font-bold text-red-900 text-lg">
              🚨 {t('emergencyServices')}
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: '📞',
                  label: 'Ambulance',
                  number: '108 (All India)',
                  subtext: 'Free emergency ambulance',
                },
                {
                  icon: '📱',
                  label: 'Police / Emergency',
                  number: '112 (All India)',
                  subtext: 'Multi-purpose emergency number',
                },
                {
                  icon: '🏥',
                  label: 'Nearest Hospital',
                  number: 'Ask for directions or use Google Maps',
                  subtext: 'Go immediately if symptoms are severe',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-red-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900">{item.label}</p>
                      <p className="text-red-700 font-semibold">{item.number}</p>
                      <p className="text-xs text-gray-600 mt-1">{item.subtext}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-red-900 font-semibold mt-4">
              ⚠️ Do not wait for this form if you need immediate help. Get to a hospital first.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-3">
            <p className="font-bold text-gray-900">If you need continued support after emergency care:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">1.</span>
                <span>Once the patient is stable, continue with this follow-up form</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">2.</span>
                <span>Share your hospital admission details in the next step</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">3.</span>
                <span>A doctor will review your case for additional follow-up</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={onCallBack}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              {t('requestCallBack')}
            </button>

            <button
              onClick={onContinueAnyway}
              className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-4 rounded-lg transition-colors"
            >
              {t('continueWithForm')}
            </button>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-600 border-t border-gray-200 pt-6">
            <p>Your safety is our highest priority. Do not hesitate to seek emergency care.</p>
            <p className="mt-2">This form is for follow-up documentation only.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
