# PulseLink - React Prototype

A comprehensive follow-up (FU) data collection system prototype for patient safety, featuring zero-friction patient experience, anti-fraud mechanisms, and risk-based automation.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will be available at **http://localhost:5173/**

---

## 📋 Prototype Screens

### **1. Patient Experience Flow**

#### **Verify Screen**
- OTP verification via WhatsApp/SMS
- Call-back request option for enhanced trust
- Verified sender identity + branding
- Anti-phishing design with security badges
- Privacy notice and compliance messaging

**Path**: Click "Patient Follow-up Flow" from home

#### **Medicine Upload (MedIntel Integration)**
- Photo upload for prescription/strip/bill
- AI-powered medicine extraction simulation
- Structured medicine confirmation with:
  - Medicine name
  - Strength & dosage form
  - Frequency & duration
- Edit capability for uncertain fields
- Batch upload support

**Auto-extracts** based on mock MedIntel engine

#### **Event Timeline & Outcomes**
- Adaptive form with only missing fields
- Caregiver mode toggle
- Guided event date input (exact or approximate)
- Outcome selection (recovered, improving, ongoing, worsened)
- Comorbidity checklist
- Lab results & notes capture
- Real-time validation

#### **Thank You Screen**
- Case submission confirmation
- Summary of captured data
- What happens next (next 24 hours)
- **Optional Support Tile** (post-FU):
  - Medicine brand equivalence education
  - Affordability discussion prompts
  - Pharmacist chat option
  - No substitution advice (FU-focused)

---

### **2. Doctor/HCP Interface**

#### **Case Snapshot (1-Page Clinical Review)**
- **Risk badge** (high-risk, elevated, routine)
- Patient details & contact info
- Suspect medicines (structured list)
- Event summary
- Missing critical fields (flagged)
- Patient-submitted outcome data
- **Quick actions** (60-second workflow):
  - ✓ Confirm all details
  - ❓ Request clarification
  - 📞 Request call-back
  - 👤 Delegate to staff
- Audit trail + compliance logging

**Path**: Click "Doctor Case Review" from home

---

### **3. PV Operations Dashboard**

#### **KPI Cards**
- Total cases
- Completed cases + completion rate
- Pending cases
- High-risk cases (alert)

#### **Risk-Based Case Queue**
- Filter by risk level (all, high-risk, elevated, routine)
- Search by patient name or case ID
- Case cards with:
  - Risk & status badges
  - Event type & due date
  - Missing fields display
  - Click-to-select case details

#### **Performance Metrics**
- Completion rate (progress bar)
- Average response time
- Data completeness score

#### **Drop-off Analysis**
- Scam fear (32%)
- Time constraints (20%)
- Language barrier (16%)
- Tech issues (12%)

#### **Message Template Performance**
- WhatsApp (Hindi): 76% completion ⬆️
- SMS fallback: 42% completion
- IVR voice (beta): 61% completion ⬆️

#### **Case Details Panel**
- Missing fields for selected case
- Quick action to view full case

**Path**: Click "PV Ops Dashboard" from home

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── VerifyScreen.tsx          # OTP + call-back verification
│   ├── MedicineUpload.tsx        # MedIntel photo extraction & confirm
│   ├── EventTimeline.tsx         # Event dates, outcomes, comorbidities
│   ├── ThankYouScreen.tsx        # Submission confirmation + optional support
│   ├── DoctorCaseSnapshot.tsx    # 1-page clinical review for HCP
│   └── PVOpsDashboard.tsx        # Risk queue, metrics, analytics
├── types/
│   └── index.ts                  # TypeScript interfaces
├── App.tsx                       # Main app with navigation
├── App.css                       # Global styles
├── index.css                     # Tailwind directives
└── main.tsx                      # React entry point

index.html                        # HTML template
package.json                      # Dependencies & scripts
vite.config.ts                    # Vite configuration
tailwind.config.js                # Tailwind CSS config
tsconfig.json                     # TypeScript config
```

---

## 🎨 Design Features

### **Color Scheme**
- **Medical Blue** (#0066CC) - Primary action, trust
- **Medical Green** (#00A86B) - Success, confirmation
- **Medical Red** (#DC143C) - Alerts, high-risk
- **Gray Scale** - Neutral UI, secondary text

### **Component Highlights**
- ✅ Responsive design (mobile-first)
- ✅ Tailwind CSS for modern styling
- ✅ Lucide React icons for visual clarity
- ✅ Accessibility-conscious (semantic HTML, labels, ARIA)
- ✅ Form validation with visual feedback

---

## 📱 Key Features Demonstrated

### **Patient Flow**
1. **Zero-friction onboarding** - No app install, WhatsApp-first
2. **Anti-fraud trust system** - Verified sender, OTP, callback option
3. **MedIntel accuracy** - Photo-first medicine capture with confirmation
4. **Adaptive form** - Ask only missing fields, minimize questions
5. **Real-time validation** - Flag errors before submission
6. **Optional post-FU support** - Education & affordability discussion prompts

### **Doctor Flow**
1. **1-page snapshot** - Clinical review in <60 seconds
2. **Context-aware** - Patient details, suspect meds, missing info
3. **Quick actions** - Confirm, clarify, escalate, delegate
4. **Minimal burden** - No long forms, only essential decisions

### **PV Ops Flow**
1. **Risk-based queue** - High-risk cases first
2. **Completion tracking** - Real-time metrics & progress
3. **Drop-off analysis** - Identify friction points
4. **Template performance** - Data on channel & message effectiveness
5. **Audit trail** - Compliance logging for all actions

---

## 🔒 Security & Privacy (Prototype Notes)

This prototype demonstrates the **design patterns** for:
- ✅ Consent-first architecture
- ✅ OTP verification flows
- ✅ Role-based access (patient, doctor, PV ops)
- ✅ Audit logging design
- ✅ Data minimization (ask only FU-relevant fields)

**Production requirements** (not in MVP prototype):
- Encryption in transit (HTTPS/TLS)
- Encryption at rest (database)
- Secure API authentication
- Full audit trail implementation
- GDPR/local compliance configuration
- Multi-language support (currently UI-ready, strings in config)

---

## 🧪 Mock Data

All screens use realistic mock data:
- **5 sample cases** with varying risk levels & statuses
- **Extracted medicines** from simulated MedIntel engine
- **Patient outcomes** with lab results & comorbidities
- **Analytics data** with response rates & drop-off trends

To modify mock data, edit the `mockCases` array in **[src/App.tsx](src/App.tsx#L14)**

---

## 📊 Metrics Tracked

### **Patient Level**
- Response rate by channel (WhatsApp, SMS, IVR)
- Time to complete FU form
- Completeness score (fields filled)
- Drop-off points (where users abandon)

### **Case Level**
- Risk score + triage priority
- Touchpoints required (patient + doctor)
- Time-to-closure
- Data quality score

### **System Level**
- Completion rate %
- Average response time
- Missing field patterns
- Template performance

---

## 🚀 MVP Roadmap (4-6 weeks)

### **Phase 1 (Current Prototype)**
- ✅ Patient verify screen (OTP + callback)
- ✅ MedIntel photo extraction + confirm
- ✅ Adaptive event timeline form
- ✅ Real-time validation
- ✅ PV ops risk queue + metrics
- ✅ Doctor 1-page snapshot

### **Phase 2**
- 🔄 IVR multilingual voice flow
- 🔄 Real SMS/WhatsApp API integration
- 🔄 Advanced contradiction detection
- 🔄 Caregiver mode refinement
- 🔄 Real OCR/MedIntel engine integration

### **Phase 3**
- 🔄 Template lab (A/B testing framework)
- 🔄 Cross-country governance console
- 🔄 Post-FU patient support module
- 🔄 Doctor mobile app
- 🔄 Advanced analytics dashboards

---

## 🛠️ Tech Stack

- **Framework**: React 18.2 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.3
- **Icons**: Lucide React
- **Package Manager**: npm

---

## 📝 Notes

1. **This is a UI prototype** - All data is mocked. Integration with real APIs (WhatsApp, SMS, MedIntel, EHR systems) requires backend implementation.

2. **Screens are connected** - Use buttons to navigate between flows or the "Back to Home" button.

3. **Responsive design** - All screens work on mobile, tablet, and desktop.

4. **Color-blind friendly** - Uses color + icons for distinction (risk badges, status indicators).

5. **Accessibility** - Semantic HTML, proper labels, ARIA where needed. Further testing with screen readers recommended.

---

## 📞 Support

For questions or feedback on the prototype, refer to the **PulseLink product spec** for detailed workflow explanations.

---

**PulseLink** - Simplifying patient safety follow-ups, globally. India-first, human-centered, risk-automated.
