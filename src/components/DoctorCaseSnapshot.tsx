import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Flag, Phone, FileText } from 'lucide-react';
import { Case, Medicine } from '../types';

interface DoctorCaseSnapshotProps {
  caseData: Case & {
    submittedData?: {
      outcome: string;
      labResults?: string;
      comorbidities?: string[];
      notes?: string;
    };
  };
  onConfirm: (action: string) => void;
}

export const DoctorCaseSnapshot: React.FC<DoctorCaseSnapshotProps> = ({ caseData, onConfirm }) => {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high-risk':
        return 'bg-red-100 border-red-300 text-red-800';
      case 'elevated':
        return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      default:
        return 'bg-green-100 border-green-300 text-green-800';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'high-risk':
        return <Flag size={18} className="text-red-600" />;
      case 'elevated':
        return <AlertCircle size={18} className="text-yellow-600" />;
      default:
        return <CheckCircle2 size={18} className="text-green-600" />;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-medical-blue to-blue-600 text-white p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">{caseData.patientName}</h1>
              <p className="text-blue-100">Case ID: {caseData.id}</p>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${getRiskColor(caseData.riskLevel)}`}>
              {getRiskIcon(caseData.riskLevel)}
              <span className="font-semibold capitalize">{caseData.riskLevel.replace('-', ' ')}</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-blue-100">Phone</p>
              <p className="font-semibold">{caseData.patientPhone}</p>
            </div>
            <div>
              <p className="text-blue-100">Event Type</p>
              <p className="font-semibold">{caseData.eventType}</p>
            </div>
            <div>
              <p className="text-blue-100">Due Date</p>
              <p className="font-semibold">{caseData.dueDate}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Suspect Medicines */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FileText size={20} /> Reported Medicines
            </h2>
            <div className="space-y-3">
              {caseData.medicines.map((med, idx) => (
                <div key={idx} className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-gray-800">{med.name}</p>
                      <p className="text-sm text-gray-600">
                        {med.strength} • {med.dosageForm}
                      </p>
                    </div>
                    <span className="text-xs bg-medical-blue text-white px-2 py-1 rounded">
                      {med.frequency}
                    </span>
                  </div>
                  {med.startDate && (
                    <p className="text-xs text-gray-500">
                      {med.startDate} to {med.endDate || 'Ongoing'}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Missing Critical Items */}
          {caseData.missingFields.length > 0 && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle size={24} className="text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Missing Critical Information</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {caseData.missingFields.map((field, idx) => (
                      <li key={idx}>• {field}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Submitted Data (if available) */}
          {caseData.submittedData && (
            <div className="bg-green-50 border border-medical-green rounded-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-medical-green" /> Patient-Submitted Outcome
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-700">Outcome</p>
                  <p className="text-gray-600 capitalize">{caseData.submittedData.outcome}</p>
                </div>
                {caseData.submittedData.labResults && (
                  <div>
                    <p className="font-semibold text-gray-700">Lab Results</p>
                    <p className="text-gray-600">{caseData.submittedData.labResults}</p>
                  </div>
                )}
                {caseData.submittedData.comorbidities && caseData.submittedData.comorbidities.length > 0 && (
                  <div>
                    <p className="font-semibold text-gray-700">Comorbidities</p>
                    <p className="text-gray-600">{caseData.submittedData.comorbidities.join(', ')}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="border-t pt-8">
            <h3 className="font-bold text-gray-800 mb-4">Action Required (60 seconds)</h3>
            <div className="space-y-3">
              {[
                { id: 'confirm', label: '✓ Confirm all details are correct', color: 'bg-medical-green' },
                { id: 'clarify', label: '❓ Request patient to clarify', color: 'bg-yellow-500' },
                { id: 'callback', label: '📞 Request call-back with patient', color: 'bg-medical-blue' },
                { id: 'delegate', label: '👤 Delegate to staff for follow-up', color: 'bg-gray-600' },
              ].map((action) => (
                <button
                  key={action.id}
                  onClick={() => {
                    setSelectedAction(action.id);
                    onConfirm(action.id);
                  }}
                  className={`w-full ${action.color} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-opacity text-left px-6`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Audit Trail */}
          <div className="text-xs text-gray-500 border-t pt-6">
            <p>Case opened: {caseData.createdAt}</p>
            <p>Status: {caseData.status}</p>
            <p>All actions are logged and audited for compliance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
