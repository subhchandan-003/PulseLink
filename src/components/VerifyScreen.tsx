import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Phone } from 'lucide-react';

interface VerifyScreenProps {
  onVerify: () => void;
  caseId: string;
  patientName: string;
}

export const VerifyScreen: React.FC<VerifyScreenProps> = ({ onVerify, caseId, patientName }) => {
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [useCallBack, setUseCallBack] = useState(false);

  const handleSendOtp = () => {
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      onVerify();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-blue to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="flex justify-center mb-6">
          <div className="bg-medical-blue rounded-full p-3">
            <CheckCircle2 className="text-white" size={32} />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Verify Your Identity
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Hi <span className="font-semibold">{patientName}</span>
        </p>

        {/* Trust Badge */}
        <div className="bg-blue-50 border-l-4 border-medical-blue rounded-r-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-medical-blue flex-shrink-0 mt-1" />
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-1">✓ Verified PulseLink Account</p>
              <p className="text-xs">This is a legitimate follow-up from our medical team.</p>
            </div>
          </div>
        </div>

        {/* Purpose */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700">
            <span className="font-semibold block mb-2">Why we're contacting you:</span>
            Safety follow-up about your recent medical case (Case #{caseId})
          </p>
          <p className="text-xs text-gray-500 mt-3">
            ⏱ Takes 2-3 minutes • 🔒 Your data is encrypted
          </p>
        </div>

        {/* OTP Section */}
        {!useCallBack ? (
          <div className="space-y-4 mb-6">
            {!otpSent ? (
              <>
                <p className="text-sm text-gray-700 font-medium">
                  We'll send a one-time code to verify you
                </p>
                <button
                  onClick={handleSendOtp}
                  className="w-full bg-medical-blue hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Send OTP to WhatsApp
                </button>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-700 font-medium">
                  Enter the 6-digit code sent to your WhatsApp
                </p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="000000"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    className="w-full border-2 border-gray-300 rounded-lg py-3 px-4 text-center text-2xl font-mono focus:outline-none focus:border-medical-blue"
                  />
                  <button
                    onClick={handleVerifyOtp}
                    disabled={otp.length !== 6}
                    className="w-full bg-medical-green hover:bg-green-700 disabled:bg-gray-300 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Verify
                  </button>
                </div>
                <button
                  onClick={() => setOtpSent(false)}
                  className="w-full text-medical-blue text-sm font-medium hover:underline"
                >
                  Didn't receive code? Resend
                </button>
              </>
            )}
          </div>
        ) : null}

        {/* Call-back option */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
        </div>

        {useCallBack ? (
          <div className="bg-green-50 border-2 border-medical-green rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Phone size={20} className="text-medical-green" />
              <p className="font-semibold text-gray-800">We'll call you in 30 seconds</p>
            </div>
            <p className="text-sm text-gray-700">
              A team member will call to verify your identity and walk you through the follow-up form.
            </p>
            <button
              onClick={onVerify}
              className="w-full mt-4 bg-medical-green hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Proceed
            </button>
          </div>
        ) : (
          <button
            onClick={() => setUseCallBack(true)}
            className="w-full border-2 border-medical-blue text-medical-blue hover:bg-blue-50 font-semibold py-3 rounded-lg transition-colors"
          >
            <Phone size={18} className="inline mr-2" />
            Request a Call-back
          </button>
        )}

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center mt-6">
          Your data is secure and used only for this follow-up. <a href="#" className="text-medical-blue hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};
