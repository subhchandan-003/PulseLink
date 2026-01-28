export interface Medicine {
  id: string;
  name: string;
  strength: string;
  dosageForm: string;
  frequency: string;
  startDate?: string;
  endDate?: string;
  confirmed: boolean;
}

export interface Case {
  id: string;
  patientId: string;
  patientName: string;
  patientPhone: string;
  eventType: string;
  riskLevel: 'routine' | 'elevated' | 'high-risk';
  status: 'pending' | 'in-progress' | 'completed' | 'escalated';
  medicines: Medicine[];
  missingFields: string[];
  createdAt: string;
  dueDate: string;
}

export interface FollowUpData {
  caseId: string;
  patientConfirmation: boolean;
  medicines: Medicine[];
  eventStartDate: string;
  eventEndDate: string;
  outcome: string;
  labResults?: string;
  comorbidities?: string[];
  additionalNotes?: string;
  submittedAt?: string;
  caregiver?: {
    name: string;
    relationship: string;
  };
}
