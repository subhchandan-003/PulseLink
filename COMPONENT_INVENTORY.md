# PulseLink Component Inventory

## 📦 React Components

### **1. VerifyScreen.tsx** (210 lines)
**Purpose**: Anti-fraud patient identity verification  
**Features**:
- OTP verification flow with "Send OTP" and verification input
- Call-back request alternative
- Trust badges (verified account, encryption, privacy notice)
- Case ID and patient greeting
- Time estimate (2-3 minutes)

**Key Props**:
- `onVerify`: Callback when verification succeeds
- `caseId`: Case identifier
- `patientName`: Patient greeting

**State**:
- `otp`: 6-digit code input
- `otpSent`: Track verification stage
- `useCallBack`: Toggle between OTP and callback flows

---

### **2. MedicineUpload.tsx** (250 lines)
**Purpose**: AI-powered medicine extraction from photos  
**Features**:
- Image upload area (prescription, strip, or bill)
- Mock MedIntel extraction (simulates AI text recognition)
- Medicine confirmation with edit capability
- Extracted fields: name, strength, dosage form, frequency, dates
- Batch validation (all medicines must be confirmed)

**Key Props**:
- `onComplete`: Submit confirmed medicines

**State**:
- `uploadedImage`: Base64 image preview
- `extractedMedicines`: Array of detected medicines with confirmation status
- `step`: Current step (upload or confirm)
- `confirmingIndex`: Which medicine is being edited

**Flow**:
1. Upload image → auto-extract
2. Review extracted medicines
3. Confirm or edit each medicine
4. Submit when all confirmed

---

### **3. EventTimeline.tsx** (280 lines)
**Purpose**: Capture event dates, outcomes, and patient context  
**Features**:
- Adaptive form (shows only missing fields)
- Event start/end date input
- Outcome selection (5 options)
- Caregiver mode toggle with name/relationship
- Comorbidity checklist (5 conditions)
- Lab results and additional notes text areas
- Real-time validation

**Key Props**:
- `medicines`: Pre-filled medicines from previous screen
- `onComplete`: Submit follow-up data

**State**:
- `formData`: Main form object with all fields
- `showCaregiverMode`: Toggle caregiver section

**Validations**:
- Both dates required
- Outcome required
- All fields validate before submission

---

### **4. ThankYouScreen.tsx** (180 lines)
**Purpose**: Submission confirmation + optional post-FU support  
**Features**:
- Success confirmation with case ID
- Summary of submitted data (medicines count, dates, outcome)
- Next steps timeline (24-hour review)
- Optional support tile toggle:
  - Medicine brand equivalence education
  - Affordability discussion prompts
  - Pharmacist chat option
- Privacy notice and reference ID

**Key Props**:
- `data`: Submitted FollowUpData object
- `onClose`: Return to home

**State**:
- `showSupport`: Toggle between thank you and support views

**Important**: Post-FU support is framed as "discussion prompts," NOT medical advice.

---

### **5. DoctorCaseSnapshot.tsx** (240 lines)
**Purpose**: 1-page clinical review for healthcare providers  
**Features**:
- Header with patient name, case ID, risk badge
- Patient contact info (phone, event type, due date)
- Reported medicines in structured cards
- Missing critical fields warning (yellow alert box)
- Patient-submitted outcome data (if available)
- Quick action buttons (60-second workflow):
  - Confirm all details ✓
  - Request clarification ❓
  - Request call-back 📞
  - Delegate to staff 👤
- Audit trail note at bottom

**Key Props**:
- `caseData`: Full case object with medicine list
- `onConfirm`: Action callback (confirm, clarify, callback, delegate)

**State**:
- `selectedAction`: Which action doctor chose

**Design**: Minimalist, no long forms. Doctors can review and act in <60 seconds.

---

### **6. PVOpsDashboard.tsx** (380 lines)
**Purpose**: Operations management with risk triage and analytics  
**Features**:
- **KPI Cards** (4): Total, completed, pending, high-risk counts
- **Filters**: Risk level selector, patient search
- **Case Queue**: 
  - Color-coded risk & status badges
  - Event type and due date
  - Missing fields display (up to 2 + count)
  - Click to select and view details
- **Right Panel Metrics**:
  - Completion rate progress bar
  - Response time
  - Data completeness score
  - Drop-off analysis (scam fear, time, language, tech)
  - Template performance (WhatsApp 76%, SMS 42%, IVR 61%)
- **Case Details Panel**: Show missing fields for selected case

**Key Props**:
- `cases`: Array of Case objects

**State**:
- `filterRisk`: Current risk filter
- `searchTerm`: Search query
- `selectedCase`: Clicked case for detail view

**Key Insights**:
- Visualization shows where to improve
- WhatsApp outperforms SMS 2:1
- Scam fear is top drop-off reason
- High-risk cases flagged for immediate attention

---

## 🔗 Type Definitions (types/index.ts)

### **Medicine Interface**
```typescript
interface Medicine {
  id: string;
  name: string;
  strength: string;
  dosageForm: string;
  frequency: string;
  startDate?: string;
  endDate?: string;
  confirmed: boolean;
}
```

### **Case Interface**
```typescript
interface Case {
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
```

### **FollowUpData Interface**
```typescript
interface FollowUpData {
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
  caregiver?: { name: string; relationship: string };
}
```

---

## 🎯 Main App Navigation (App.tsx)

**ScreenType Options**:
- `home`: Main menu
- `verify`: Patient verification
- `medicine`: Medicine upload
- `timeline`: Event timeline form
- `thankyou`: Submission confirmation
- `doctor`: Doctor case review
- `dashboard`: PV ops dashboard

**Flow Management**:
```
home
├── verify → medicine → timeline → thankyou → home
├── doctor → home
└── dashboard → home
```

**Global State**:
- `currentScreen`: Which screen to display
- `submittedData`: Patient-submitted follow-up data
- `medicines`: Confirmed medicines list

---

## 🎨 Styling & UI Library

### **Tailwind CSS**
- Utility-first CSS framework
- Custom color palette (medical-blue, medical-green, medical-red)
- Responsive breakpoints (mobile-first)
- Shadow, border-radius, spacing predefined

### **Lucide React Icons**
```typescript
import {
  CheckCircle2,    // Confirmations
  AlertCircle,     // Warnings
  Phone,          // Call-back actions
  Upload,         // File operations
  Calendar,       // Date inputs
  Flag,           // Risk indicators
  BarChart3,      // Dashboard metrics
  TrendingUp,     // Performance indicators
  Search,         // Search functionality
  Heart,          // Next steps
  HelpCircle,     // Support options
  MessageCircle   // Chat actions
} from 'lucide-react';
```

---

## 📊 Mock Data Structure

Located in **App.tsx**, `mockCases` array:

```typescript
const mockCases: Case[] = [
  {
    id: 'CASE-001',
    patientName: 'Rajesh Kumar',
    riskLevel: 'high-risk',     // Flagged for immediate attention
    status: 'in-progress',
    medicines: [...],
    missingFields: ['lab results', 'comorbidity info'],
    dueDate: '2024-01-25'
  },
  // ... 4 more cases with varied risk levels and statuses
]
```

**Cases represent**:
- CASE-001: High-risk with missing data
- CASE-002: Routine, completed
- CASE-003: Elevated risk, pending
- CASE-004: Routine, completed
- CASE-005: High-risk, escalated

---

## 🚀 Component Usage Examples

### **Add Patient Flow**
```typescript
import { VerifyScreen } from './components/VerifyScreen';

<VerifyScreen 
  onVerify={() => setCurrentScreen('medicine')}
  caseId="CASE-001"
  patientName="Rajesh Kumar"
/>
```

### **Show Medicine Confirmation**
```typescript
import { MedicineUpload } from './components/MedicineUpload';

<MedicineUpload 
  onComplete={(meds) => {
    setMedicines(meds);
    setCurrentScreen('timeline');
  }}
/>
```

### **Display Dashboard**
```typescript
import { PVOpsDashboard } from './components/PVOpsDashboard';

<PVOpsDashboard cases={mockCases} />
```

---

## 🔄 Component Communication

**State Flow** (Unidirectional):
```
App (global state) → ScreenType, medicines, submittedData
  ↓
Component (reads state) → VerifyScreen, MedicineUpload, etc.
  ↓
User action → onClick, onChange handlers
  ↓
Callback props (onVerify, onComplete, onConfirm)
  ↓
Update global state in App.tsx
  ↓
Re-render with new screen/data
```

**Data Passing**:
- Patient flow: Medicines → Timeline → ThankYou (cumulative)
- Doctor flow: Independent case review (no state passing)
- Dashboard: Independent metrics view (no state passing)

---

## 🧪 Testing Checklist

- [ ] Verify screen: OTP and callback flows both work
- [ ] Medicine upload: Image upload triggers extraction, edit works
- [ ] Timeline: All form fields validate before submit
- [ ] Thank you: Displays submitted data, support toggle works
- [ ] Doctor view: Risk badges, missing fields, actions functional
- [ ] Dashboard: Search/filter work, click case shows details
- [ ] Navigation: All buttons return to home correctly
- [ ] Responsive: Resize browser, all screens adapt
- [ ] Accessibility: Tab through forms, read content with reader

---

## 📈 Scalability Notes

**To Add New Features**:
1. Create new component in `src/components/`
2. Define interfaces in `src/types/index.ts`
3. Add new ScreenType to App.tsx
4. Import component and wire navigation
5. Pass data via props following established patterns

**To Integrate Real APIs**:
1. Keep component structure the same
2. Replace mock data with API calls (axios, fetch)
3. Update interfaces if API response differs
4. Add error handling for API failures
5. Implement loading states (spinners, skeletons)

---

## 🎓 Code Quality

- **TypeScript**: Full type safety, no `any` types
- **Components**: Functional components with hooks only
- **Props**: Explicit interfaces for each component
- **State**: Managed with useState in App.tsx
- **Styling**: Utility-first Tailwind, no CSS-in-JS
- **Icons**: Lucide for consistency
- **Accessibility**: Semantic HTML, labels, ARIA attributes

---

This inventory provides everything needed to understand, modify, or extend the PulseLink prototype! 🚀
