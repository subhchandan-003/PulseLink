import React, { useState } from 'react';
import { Upload, CheckCircle2, AlertCircle, Edit2 } from 'lucide-react';
import { Medicine } from '../types';

interface MedicineUploadProps {
  onComplete: (medicines: Medicine[]) => void;
}

export const MedicineUpload: React.FC<MedicineUploadProps> = ({ onComplete }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [extractedMedicines, setExtractedMedicines] = useState<Medicine[]>([]);
  const [step, setStep] = useState<'upload' | 'confirm'>('upload');
  const [confirmingIndex, setConfirmingIndex] = useState<number | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        // Simulate MedIntel extraction
        simulateMedicineExtraction();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateMedicineExtraction = () => {
    // Mock MedIntel response
    const mockMedicines: Medicine[] = [
      {
        id: '1',
        name: 'Azithromycin',
        strength: '500mg',
        dosageForm: 'Tablet',
        frequency: 'Once daily',
        startDate: '2024-01-15',
        endDate: '2024-01-20',
        confirmed: false,
      },
      {
        id: '2',
        name: 'Paracetamol',
        strength: '650mg',
        dosageForm: 'Tablet',
        frequency: 'Three times daily',
        startDate: '2024-01-15',
        confirmed: false,
      },
    ];
    setExtractedMedicines(mockMedicines);
    setStep('confirm');
  };

  const handleConfirmMedicine = (id: string) => {
    setExtractedMedicines(
      extractedMedicines.map((med) =>
        med.id === id ? { ...med, confirmed: true } : med
      )
    );
    setConfirmingIndex(null);
  };

  const handleEditMedicine = (id: string, field: string, value: string) => {
    setExtractedMedicines(
      extractedMedicines.map((med) =>
        med.id === id ? { ...med, [field]: value } : med
      )
    );
  };

  const handleComplete = () => {
    if (extractedMedicines.every((med) => med.confirmed)) {
      onComplete(extractedMedicines);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {step === 'upload' ? (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Upload Medicine Information</h2>
          <p className="text-gray-600 mb-8">
            Take a photo of your prescription, medicine strip, or medical bill
          </p>

          {!uploadedImage ? (
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-medical-blue rounded-xl p-12 cursor-pointer hover:bg-blue-50 transition-colors">
              <Upload size={48} className="text-medical-blue mb-4" />
              <p className="text-lg font-semibold text-gray-800 mb-2">Upload Image</p>
              <p className="text-sm text-gray-600 mb-6">
                Prescription • Medicine Strip • Medical Bill
              </p>
              <span className="text-xs text-gray-500">JPG, PNG - up to 10MB</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          ) : (
            <div className="space-y-6">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <img src={uploadedImage} alt="Uploaded prescription" className="w-full h-auto" />
                <button
                  onClick={() => setUploadedImage(null)}
                  className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Change Image
                </button>
              </div>
              <div className="flex items-center gap-3 bg-green-50 border border-medical-green rounded-lg p-4">
                <CheckCircle2 size={20} className="text-medical-green flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Extracting medicines...</span>
                  <br />
                  <span className="text-sm">Found 2 medicines. Please confirm below.</span>
                </p>
              </div>
            </div>
          )}

          {uploadedImage && (
            <button
              onClick={() => setStep('confirm')}
              className="w-full mt-8 bg-medical-blue hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Review & Confirm Medicines
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Confirm Your Medicines</h2>

            {extractedMedicines.map((medicine, index) => (
              <div key={medicine.id} className="mb-6 last:mb-0 border-b last:border-b-0 pb-6 last:pb-0">
                {confirmingIndex === index ? (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                      <Edit2 size={18} /> Editing: {medicine.name}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Medicine Name"
                        value={medicine.name}
                        onChange={(e) => handleEditMedicine(medicine.id, 'name', e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-medical-blue"
                      />
                      <input
                        type="text"
                        placeholder="Strength (e.g., 500mg)"
                        value={medicine.strength}
                        onChange={(e) => handleEditMedicine(medicine.id, 'strength', e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-medical-blue"
                      />
                      <input
                        type="text"
                        placeholder="Form (Tablet, Capsule, etc.)"
                        value={medicine.dosageForm}
                        onChange={(e) => handleEditMedicine(medicine.id, 'dosageForm', e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-medical-blue"
                      />
                      <input
                        type="text"
                        placeholder="Frequency (e.g., Once daily)"
                        value={medicine.frequency}
                        onChange={(e) => handleEditMedicine(medicine.id, 'frequency', e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-medical-blue"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleConfirmMedicine(medicine.id)}
                        className="flex-1 bg-medical-green hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors text-sm"
                      >
                        Confirm Changes
                      </button>
                      <button
                        onClick={() => setConfirmingIndex(null)}
                        className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-2 rounded-lg transition-colors text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {medicine.confirmed ? (
                          <CheckCircle2 size={20} className="text-medical-green flex-shrink-0" />
                        ) : (
                          <AlertCircle size={20} className="text-yellow-500 flex-shrink-0" />
                        )}
                        <div>
                          <p className="font-semibold text-gray-800">{medicine.name}</p>
                          <p className="text-sm text-gray-600">
                            {medicine.strength} • {medicine.dosageForm} • {medicine.frequency}
                          </p>
                          {medicine.startDate && (
                            <p className="text-xs text-gray-500 mt-1">
                              {medicine.startDate} to {medicine.endDate || 'Ongoing'}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    {!medicine.confirmed && (
                      <button
                        onClick={() => setConfirmingIndex(index)}
                        className="ml-4 px-4 py-2 text-sm text-medical-blue hover:bg-blue-50 rounded-lg border border-medical-blue font-medium"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-8 space-y-3">
              <button
                onClick={handleComplete}
                disabled={!extractedMedicines.every((med) => med.confirmed)}
                className="w-full bg-medical-green hover:bg-green-700 disabled:bg-gray-300 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Medicines Confirmed - Continue
              </button>
              <button
                onClick={() => setStep('upload')}
                className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 rounded-lg transition-colors"
              >
                Upload Another Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
