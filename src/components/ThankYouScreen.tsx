import React from 'react';
import { CheckCircle2, Heart, HelpCircle, MessageCircle } from 'lucide-react';
import { FollowUpData } from '../types';

interface ThankYouScreenProps {
  data: FollowUpData;
  onClose: () => void;
}

export const ThankYouScreen: React.FC<ThankYouScreenProps> = ({ data, onClose }) => {
  const [showSupport, setShowSupport] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-green to-green-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {!showSupport ? (
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-medical-green rounded-full p-4">
                <CheckCircle2 className="text-white" size={40} />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-3">Thank You!</h1>
            <p className="text-gray-600 mb-2">Your follow-up form has been submitted successfully</p>
            <p className="text-sm text-gray-500 mb-8">
              Case ID: <span className="font-mono font-semibold">{data.caseId}</span>
            </p>

            {/* Summary */}
            <div className="bg-green-50 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-semibold text-gray-800 mb-4">What we've received:</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-medical-green font-bold">✓</span>
                  <span><span className="font-semibold">{data.medicines.length} medicines</span> documented</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-medical-green font-bold">✓</span>
                  <span>Event timeline from <span className="font-semibold">{data.eventStartDate}</span> to <span className="font-semibold">{data.eventEndDate}</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-medical-green font-bold">✓</span>
                  <span>Outcome: <span className="font-semibold capitalize">{data.outcome}</span></span>
                </li>
              </ul>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Heart size={18} className="text-medical-blue" /> What happens next?
              </h3>
              <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                <li>Our team reviews your information</li>
                <li>If we need clarification, we'll contact you within 24 hours</li>
                <li>Your case is stored securely for future reference</li>
              </ol>
            </div>

            {/* Support Tile */}
            <button
              onClick={() => setShowSupport(true)}
              className="w-full border-2 border-medical-blue text-medical-blue hover:bg-blue-50 font-semibold py-3 rounded-lg transition-colors mb-4 flex items-center justify-center gap-2"
            >
              <HelpCircle size={18} />
              Need Help With Medicines?
            </button>

            <button
              onClick={onClose}
              className="w-full bg-medical-green hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Done
            </button>

            <p className="text-xs text-gray-500 text-center mt-6">
              Reference this case ID if you contact us: <span className="font-mono font-semibold">{data.caseId}</span>
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Medicine Support Resources</h2>

            <div className="space-y-4 mb-8">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-medical-blue">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  💊 Understanding Different Medicine Brands
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  Different brands can contain the same active ingredient. For example, both "Aspirin" and "Dispirin" contain acetylsalicylic acid.
                </p>
                <p className="text-xs text-gray-600 font-medium">
                  💬 Discussion prompt: Ask your doctor or pharmacist about equivalent options
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-medical-green">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  💰 Affordability Support
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  If medicine costs are a concern, your doctor might discuss:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>Generic alternatives (same molecule, different brand)</li>
                  <li>Patient assistance programs</li>
                  <li>Government medicine schemes</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  ⚠️ Important Reminder
                </p>
                <p className="text-sm text-gray-700">
                  Never switch medicines without consulting your doctor. This information is for discussion only, not medical advice.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="#"
                className="block w-full border-2 border-medical-blue text-medical-blue hover:bg-blue-50 font-semibold py-3 rounded-lg transition-colors text-center flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} /> Chat with Pharmacist
              </a>
              <button
                onClick={() => setShowSupport(false)}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
              >
                Back to Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
