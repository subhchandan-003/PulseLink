// Comprehensive translations for PulseLink in multiple languages
// English, Hindi, Tamil, Telugu, Marathi

export type LanguageCode = 'en' | 'hi' | 'ta' | 'te' | 'mr' | 'bn' | 'gu' | 'kn' | 'ml' | 'or' | 'pa' | 'ur' | 'as' | 'kok' | 'mai' | 'ks' | 'sd' | 'sa';

export interface Translations {
  submit: string; cancel: string; next: string; back: string; continue: string; confirm: string;
  edit: string; delete: string; save: string; close: string; loading: string; error: string;
  success: string; language: string; tryAgain: string; goHome: string; offline: string;
  noInternet: string; retryConnection: string; fieldRequired: string; invalidInput: string;
  operationSuccess: string; operationFailed: string; patientFollowUp: string; doctorReview: string;
  pvOpsDashboard: string; welcome: string; selectUserType: string; startFollowUp: string;
  verifyPatient: string; enterOTP: string; otp: string; otpSent: string; didNotReceiveOTP: string;
  requestCallback: string; trustBadge: string; trustedByHospitals: string; caseID: string;
  patientInfo: string; preventScams: string; quickQualification: string; step: string; of: string;
  fillingFor: string; self: string; caregiverRole: string; relationship: string; parent: string;
  spouse: string; child: string; sibling: string; other: string; medicineConfidence: string;
  rememberMost: string; rememberSome: string; rememberFew: string; rememberPhotos: string;
  documentsAvailable: string; prescription: string; medicineBill: string; medicineStrip: string;
  issueStartDate: string; today: string; yesterday: string; thisWeek: string; lastWeek: string;
  twoWeeksAgo: string; notSure: string; patientStatus: string; stable: string; worried: string;
  needsUrgentHelp: string; preferredLanguage: string; english: string; hindi: string; tamil: string;
  telugu: string; marathi: string; regional: string; selectRegional: string; cannotProceed: string;
  pleaseAnswerQuestion: string; emergencyAlert: string; needsImmediateHelp: string;
  emergencyServices: string; dial: string; nearestHospital: string; whatHappensNext: string;
  emergencyTeamWillContact: string; requestCallBack: string; continueWithForm: string;
  safetyFirst: string; medicineScan: string; uploadMedicineImage: string; takePhoto: string;
  uploadImage: string; medicineName: string; strength: string; dosageForm: string; frequency: string;
  startDate: string; endDate: string; confirmMedicine: string; medicineConfirmed: string;
  editMedicine: string; extractedText: string; mockMedIntelExtraction: string; addAnotherMedicine: string;
  proceedToTimeline: string; tab: string; tablet: string; capsule: string; liquid: string;
  injection: string; onceDaily: string; twiceDaily: string; thriceDaily: string; asNeeded: string;
  eventDetails: string; eventStartDate: string; eventEndDate: string; outcome: string;
  recovered: string; improved: string; unchanged: string; worsened: string; hospitalized: string;
  labResults: string; labResultsDescription: string; comorbidities: string; diabetes: string;
  hypertension: string; heartDisease: string; kidneyDisease: string; liverDisease: string;
  asthma: string; none: string; additionalNotes: string; addMoreInformation: string;
  caregiverMode: string; filledByCaregiver: string; caregiverNotes: string; confirmDetails: string;
  thankYou: string; submissionSuccess: string; yourCaseId: string; dataSubmitted: string;
  summaryOfYourReport: string; genericsEducation: string; affordabilitySupport: string;
  medicineEquivalence: string; genericExampleText: string; neverSwitchWithoutDoctor: string;
  talkWithPharmacist: string; discussionPromptsOnly: string; safetyDisclaimer: string;
  downloadReport: string; shareWithDoctor: string; backToHome: string; caseReview: string;
  riskLevel: string; routine: string; elevated: string; highRisk: string; patientDetails: string;
  medicinesReported: string; suspiciousMedicines: string; missingCriticalFields: string;
  quickActions: string; confirmAccurate: string; requestClarification: string; delegateCase: string;
  auditTrail: string; caseNotes: string; submitAction: string; dashboard: string; kpi: string;
  totalCases: string; completedCases: string; pendingCases: string; highRiskCases: string;
  caseQueue: string; filters: string; search: string; sortBy: string; dateNewest: string;
  dateOldest: string; riskHighest: string; riskLowest: string; performance: string;
  completionRate: string; avgResponseTime: string; dataQuality: string; dropOffAnalysis: string;
  scamFear: string; timeConstraints: string; languageBarrier: string; technicalIssues: string;
  templatePerformance: string; whatsappTemplate: string; smsTemplate: string; ivrTemplate: string;
  caseDetails: string; noDataAvailable: string; guidedQuestions: string; describeMedicine: string;
  whatWasTheEffect: string; didYouSeeDoctorAfter: string; anyOtherSymptoms: string;
  whenDidItStart: string;
}

const enTranslations: Translations = {
  submit: 'Submit', cancel: 'Cancel', next: 'Next', back: 'Back', continue: 'Continue', confirm: 'Confirm',
  edit: 'Edit', delete: 'Delete', save: 'Save', close: 'Close', loading: 'Loading...', error: 'Error',
  success: 'Success', language: 'Language', tryAgain: 'Try Again', goHome: 'Go to Home', offline: 'Offline',
  noInternet: 'No internet connection', retryConnection: 'Retry Connection', fieldRequired: 'This field is required',
  invalidInput: 'Please enter valid information', operationSuccess: 'Operation completed successfully',
  operationFailed: 'Operation failed. Please try again.', patientFollowUp: 'Patient Follow-up',
  doctorReview: 'Doctor Review', pvOpsDashboard: 'PV Ops Dashboard', welcome: 'Welcome',
  selectUserType: 'Select your role', startFollowUp: 'Start Follow-up', verifyPatient: 'Verify Patient',
  enterOTP: 'Enter the 6-digit OTP sent to your registered phone', otp: 'OTP', otpSent: 'OTP sent successfully',
  didNotReceiveOTP: "Didn't receive OTP?", requestCallback: 'Request Call-back', trustBadge: 'Verified & Safe',
  trustedByHospitals: 'Trusted by leading hospitals across India', caseID: 'Case ID',
  patientInfo: 'Patient Information', preventScams: 'This protects you from scams & phishing attempts',
  quickQualification: 'Quick Patient Qualification', step: 'Step', of: 'of', fillingFor: 'This form is for',
  self: 'Myself', caregiverRole: 'Someone else (caregiver)', relationship: 'Relationship to patient',
  parent: 'Parent', spouse: 'Spouse', child: 'Child', sibling: 'Sibling', other: 'Other',
  medicineConfidence: 'How well do you remember the medicines?', rememberMost: 'I remember most names',
  rememberSome: 'I remember some names', rememberFew: 'I remember very few',
  rememberPhotos: "I don't remember names (I can share photo/strip)", documentsAvailable: 'Which documents do you have?',
  prescription: 'Prescription', medicineBill: 'Medicine Bill/Receipt', medicineStrip: 'Medicine Strip/Packet',
  issueStartDate: 'When did the health issue start?', today: 'Today', yesterday: 'Yesterday',
  thisWeek: 'This week', lastWeek: 'Last week', twoWeeksAgo: '2 weeks ago', notSure: "I'm not sure",
  patientStatus: 'How is the patient feeling now?', stable: 'Stable - No concerns',
  worried: 'Worried - Some symptoms remain', needsUrgentHelp: 'Needs urgent help - Emergency situation',
  preferredLanguage: 'Preferred language for communication', english: 'English', hindi: 'हिंदी',
  tamil: 'தமிழ்', telugu: 'తెలుగు', marathi: 'मराठी', regional: 'Regional',
  selectRegional: 'Select regional language', cannotProceed: 'Cannot proceed',
  pleaseAnswerQuestion: 'Please answer the current question', emergencyAlert: 'Emergency Alert',
  needsImmediateHelp: 'This patient needs immediate medical attention', emergencyServices: 'Contact emergency services',
  dial: 'Dial', nearestHospital: 'Go to nearest hospital immediately', whatHappensNext: 'What happens next?',
  emergencyTeamWillContact: 'Our emergency team will contact you shortly. Medical professionals are standing by.',
  requestCallBack: 'Request Immediate Call-back', continueWithForm: 'Continue with Form',
  safetyFirst: 'Safety First - Always consult a doctor for emergencies', medicineScan: 'Medicine Information',
  uploadMedicineImage: 'Upload or snap medicine packet/prescription', takePhoto: 'Take Photo',
  uploadImage: 'Upload Image', medicineName: 'Medicine Name', strength: 'Strength (e.g., 500mg)',
  dosageForm: 'Form', frequency: 'Frequency', startDate: 'Start Date', endDate: 'End Date',
  confirmMedicine: 'Confirm Medicine', medicineConfirmed: 'Medicine confirmed ✓', editMedicine: 'Edit Medicine',
  extractedText: 'Extracted Information', mockMedIntelExtraction: '(Mock MedIntel extraction - in production, AI reads the image)',
  addAnotherMedicine: 'Add Another Medicine', proceedToTimeline: 'Proceed to Event Details', tab: 'Tablet',
  tablet: 'Tablet', capsule: 'Capsule', liquid: 'Liquid', injection: 'Injection', onceDaily: 'Once daily',
  twiceDaily: 'Twice daily', thriceDaily: 'Thrice daily', asNeeded: 'As needed', eventDetails: 'Event Details',
  eventStartDate: 'When did the event start?', eventEndDate: 'When did it end?', outcome: 'What was the outcome?',
  recovered: 'Recovered completely', improved: 'Improved', unchanged: 'Unchanged', worsened: 'Worsened',
  hospitalized: 'Hospitalized', labResults: 'Lab Results', labResultsDescription: 'Please share any relevant lab test results',
  comorbidities: 'Pre-existing conditions (if any)', diabetes: 'Diabetes', hypertension: 'High Blood Pressure',
  heartDisease: 'Heart Disease', kidneyDisease: 'Kidney Disease', liverDisease: 'Liver Disease', asthma: 'Asthma',
  none: 'None', additionalNotes: 'Additional Information', addMoreInformation: 'Any other details about the event?',
  caregiverMode: 'Caregiver Mode', filledByCaregiver: 'This information was provided by a caregiver',
  caregiverNotes: 'Additional caregiver observations', confirmDetails: 'Confirm all details are correct before submitting',
  thankYou: 'Thank You!', submissionSuccess: 'Your report has been submitted successfully', yourCaseId: 'Your Case ID',
  dataSubmitted: 'Data Submitted', summaryOfYourReport: 'Summary of Your Report',
  genericsEducation: 'Medicines & Affordability', affordabilitySupport: 'Optional: Discuss Generic Alternatives',
  medicineEquivalence: 'Medicine Equivalence', genericExampleText: 'Different brands may contain the same active ingredient. For example: Aspirin and Dispirin both contain acetylsalicylic acid.',
  neverSwitchWithoutDoctor: '⚠️ Never switch medicines without consulting your doctor', talkWithPharmacist: 'Talk with Pharmacist',
  discussionPromptsOnly: 'These are discussion prompts only - not medical advice', safetyDisclaimer: 'Always consult your doctor before making any changes to your medicines',
  downloadReport: 'Download Report', shareWithDoctor: 'Share with Doctor', backToHome: 'Back to Home',
  caseReview: 'Case Review', riskLevel: 'Risk Level', routine: 'Routine', elevated: 'Elevated',
  highRisk: 'High Risk', patientDetails: 'Patient Details', medicinesReported: 'Medicines Reported',
  suspiciousMedicines: 'Medicines Requiring Attention', missingCriticalFields: 'Missing Critical Information',
  quickActions: 'Quick Actions', confirmAccurate: 'Confirm Accurate', requestClarification: 'Request Clarification',
  delegateCase: 'Delegate Case', auditTrail: 'Audit Trail', caseNotes: 'Case Notes', submitAction: 'Submit Action',
  dashboard: 'Dashboard', kpi: 'Key Metrics', totalCases: 'Total Cases', completedCases: 'Completed',
  pendingCases: 'Pending', highRiskCases: 'High Risk', caseQueue: 'Case Queue', filters: 'Filters',
  search: 'Search...', sortBy: 'Sort by', dateNewest: 'Newest', dateOldest: 'Oldest',
  riskHighest: 'Highest Risk', riskLowest: 'Lowest Risk', performance: 'Performance Metrics',
  completionRate: 'Completion Rate', avgResponseTime: 'Avg Response Time', dataQuality: 'Data Quality Score',
  dropOffAnalysis: 'Drop-off Analysis', scamFear: 'Scam Fear / Distrust', timeConstraints: 'Time Constraints',
  languageBarrier: 'Language Barrier', technicalIssues: 'Technical Issues', templatePerformance: 'Template Performance',
  whatsappTemplate: 'WhatsApp', smsTemplate: 'SMS', ivrTemplate: 'IVR', caseDetails: 'Case Details',
  noDataAvailable: 'No data available', guidedQuestions: 'Tell us about what happened',
  describeMedicine: 'Can you describe the medicine or share a photo?', whatWasTheEffect: 'What effect did the medicine have?',
  didYouSeeDoctorAfter: 'Did you see a doctor after this event?', anyOtherSymptoms: 'Did you experience any other symptoms?',
  whenDidItStart: 'When did the issue start?',
};

const hiTranslations: Translations = {
  submit: 'जमा करें', cancel: 'रद्द करें', next: 'अगला', back: 'पिछला', continue: 'जारी रखें',
  confirm: 'पुष्टि करें', edit: 'संपादित करें', delete: 'हटाएं', save: 'सहेजें', close: 'बंद करें',
  loading: 'लोड हो रहा है...', error: 'त्रुटि', success: 'सफलता', language: 'भाषा',
  tryAgain: 'पुनः प्रयास करें', goHome: 'होम पर जाएं', offline: 'ऑफलाइन',
  noInternet: 'कोई इंटरनेट कनेक्शन नहीं', retryConnection: 'कनेक्शन पुनः प्रयास करें',
  fieldRequired: 'यह फील्ड आवश्यक है', invalidInput: 'कृपया वैध जानकारी दर्ज करें',
  operationSuccess: 'ऑपरेशन सफलतापूर्वक पूर्ण हुआ', operationFailed: 'ऑपरेशन विफल। कृपया पुनः प्रयास करें।',
  patientFollowUp: 'रोगी अनुवर्ती', doctorReview: 'डॉक्टर की समीक्षा', pvOpsDashboard: 'पीवी ऑप्स डैशबोर्ड',
  welcome: 'स्वागत है', selectUserType: 'अपनी भूमिका चुनें', startFollowUp: 'अनुवर्ती शुरू करें',
  verifyPatient: 'रोगी की पुष्टि करें', enterOTP: 'अपने पंजीकृत फोन पर भेजे गए 6-अंकीय OTP दर्ज करें',
  otp: 'OTP', otpSent: 'OTP सफलतापूर्वक भेज दिया गया', didNotReceiveOTP: 'OTP नहीं मिला?',
  requestCallback: 'कॉलबैक का अनुरोध करें', trustBadge: 'सत्यापित और सुरक्षित',
  trustedByHospitals: 'भारत के शीर्ष अस्पतालों द्वारा विश्वसनीय', caseID: 'केस ID',
  patientInfo: 'रोगी की जानकारी', preventScams: 'यह आपको घोटाले और फिशिंग प्रयासों से बचाता है',
  quickQualification: 'त्वरित रोगी योग्यता', step: 'चरण', of: 'का', fillingFor: 'यह फॉर्म किसके लिए है',
  self: 'स्वयं', caregiverRole: 'कोई अन्य (देखभालकर्ता)', relationship: 'रोगी से संबंध',
  parent: 'माता-पिता', spouse: 'पति/पत्नी', child: 'बच्चा', sibling: 'भाई/बहन', other: 'अन्य',
  medicineConfidence: 'आप दवाओं को कितना अच्छी तरह याद रखते हैं?', rememberMost: 'मुझे ज्यादातर नाम याद हैं',
  rememberSome: 'मुझे कुछ नाम याद हैं', rememberFew: 'मुझे बहुत कम याद है',
  rememberPhotos: 'मुझे नाम नहीं याद (मैं फोटो/स्ट्रिप साझा कर सकता हूं)', documentsAvailable: 'आपके पास कौन से दस्तावेज हैं?',
  prescription: 'प्रिस्क्रिप्शन', medicineBill: 'दवा बिल/रसीद', medicineStrip: 'दवा की पट्टी/पैकेट',
  issueStartDate: 'स्वास्थ्य समस्या कब शुरू हुई?', today: 'आज', yesterday: 'कल', thisWeek: 'इस सप्ताह',
  lastWeek: 'पिछले सप्ताह', twoWeeksAgo: '2 सप्ताह पहले', notSure: 'मुझे नहीं पता',
  patientStatus: 'रोगी अभी कैसा महसूस कर रहा है?', stable: 'स्थिर - कोई चिंता नहीं',
  worried: 'चिंतित - कुछ लक्षण बने हुए हैं', needsUrgentHelp: 'आपातकालीन सहायता की आवश्यकता है',
  preferredLanguage: 'संचार के लिए पसंदीदा भाषा', english: 'English', hindi: 'हिंदी',
  tamil: 'தமிழ்', telugu: 'తెలుగు', marathi: 'मराठी', regional: 'क्षेत्रीय',
  selectRegional: 'क्षेत्रीय भाषा चुनें', cannotProceed: 'आगे नहीं बढ़ सकते',
  pleaseAnswerQuestion: 'कृपया वर्तमान प्रश्न का उत्तर दें', emergencyAlert: 'आपातकाल सतर्कता',
  needsImmediateHelp: 'इस रोगी को तत्काल चिकित्सा सहायता की आवश्यकता है', emergencyServices: 'आपातकालीन सेवाएं संपर्क करें',
  dial: 'डायल करें', nearestHospital: 'तुरंत निकटतम अस्पताल जाएं', whatHappensNext: 'अब क्या होगा?',
  emergencyTeamWillContact: 'हमारी आपातकाल टीम शीघ्र ही आपसे संपर्क करेगी। चिकित्सकीय पेशेवार तैयार हैं।',
  requestCallBack: 'तत्काल कॉलबैक का अनुरोध करें', continueWithForm: 'फॉर्म के साथ जारी रखें',
  safetyFirst: 'सुरक्षा पहले - आपातकाल के लिए हमेशा डॉक्टर से परामर्श लें', medicineScan: 'दवा की जानकारी',
  uploadMedicineImage: 'दवा की पैकेजिंग/प्रिस्क्रिप्शन अपलोड या स्नैप करें', takePhoto: 'फोटो लें',
  uploadImage: 'छवि अपलोड करें', medicineName: 'दवा का नाम', strength: 'शक्ति (जैसे, 500mg)',
  dosageForm: 'प्रपत्र', frequency: 'आवृत्ति', startDate: 'शुरुआत की तारीख', endDate: 'समाप्ति की तारीख',
  confirmMedicine: 'दवा की पुष्टि करें', medicineConfirmed: 'दवा की पुष्टि हुई ✓', editMedicine: 'दवा संपादित करें',
  extractedText: 'निकाली गई जानकारी', mockMedIntelExtraction: '(मॉक MedIntel निष्कर्षण - उत्पादन में, AI छवि को पढ़ता है)',
  addAnotherMedicine: 'एक और दवा जोड़ें', proceedToTimeline: 'ईवेंट विवरण के लिए आगे बढ़ें', tab: 'टेबलेट',
  tablet: 'टेबलेट', capsule: 'कैप्सूल', liquid: 'तरल', injection: 'इंजेक्शन', onceDaily: 'एक बार दैनिक',
  twiceDaily: 'दिन में दो बार', thriceDaily: 'दिन में तीन बार', asNeeded: 'आवश्यकतानुसार',
  eventDetails: 'ईवेंट विवरण', eventStartDate: 'ईवेंट कब शुरू हुआ?', eventEndDate: 'यह कब समाप्त हुआ?',
  outcome: 'परिणाम क्या था?', recovered: 'पूरी तरह ठीक हो गया', improved: 'में सुधार',
  unchanged: 'अपरिवर्तित', worsened: 'बिगड़ गया', hospitalized: 'अस्पताल में भर्ती',
  labResults: 'प्रयोगशाला परिणाम', labResultsDescription: 'कृपया प्रासंगिक प्रयोगशाला परीक्षण परिणाम साझा करें',
  comorbidities: 'पूर्व-मौजूदा स्थितियां (यदि कोई हो)', diabetes: 'मधुमेह', hypertension: 'उच्च रक्तचाप',
  heartDisease: 'हृदय रोग', kidneyDisease: 'किडनी की बीमारी', liverDisease: 'लीवर की बीमारी',
  asthma: 'दमा', none: 'कोई नहीं', additionalNotes: 'अतिरिक्त जानकारी',
  addMoreInformation: 'ईवेंट के बारे में कोई अन्य विवरण?', caregiverMode: 'देखभालकर्ता मोड',
  filledByCaregiver: 'यह जानकारी एक देखभालकर्ता द्वारा प्रदान की गई थी', caregiverNotes: 'अतिरिक्त देखभालकर्ता अवलोकन',
  confirmDetails: 'सबमिट करने से पहले सभी विवरण सही हैं', thankYou: 'धन्यवाद!',
  submissionSuccess: 'आपकी रिपोर्ट सफलतापूर्वक सबमिट की गई', yourCaseId: 'आपका केस ID',
  dataSubmitted: 'डेटा सबमिट किया गया', summaryOfYourReport: 'आपकी रिपोर्ट का सारांश',
  genericsEducation: 'दवाएं और सामर्थ्य', affordabilitySupport: 'वैकल्पिक: जेनेरिक विकल्प चर्चा करें',
  medicineEquivalence: 'दवा समतुल्यता', genericExampleText: 'विभिन्न ब्रांडों में एक ही सक्रिय घटक हो सकते हैं। उदाहरण के लिए: एस्पिरिन और डिस्पिरिन दोनों में एसिटाइलसेलिसिलिक एसिड होता है।',
  neverSwitchWithoutDoctor: '⚠️ अपने डॉक्टर से परामर्श किए बिना दवा न बदलें', talkWithPharmacist: 'फार्मासिस्ट से बात करें',
  discussionPromptsOnly: 'ये चर्चा के लिए सुझाव हैं - चिकित्सा सलाह नहीं', safetyDisclaimer: 'अपनी दवाओं में कोई भी बदलाव करने से पहले हमेशा अपने डॉक्टर से परामर्श लें',
  downloadReport: 'रिपोर्ट डाउनलोड करें', shareWithDoctor: 'डॉक्टर के साथ साझा करें', backToHome: 'होम पर वापस जाएं',
  caseReview: 'केस की समीक्षा', riskLevel: 'जोखिम स्तर', routine: 'नियमित', elevated: 'बढ़ा हुआ',
  highRisk: 'उच्च जोखिम', patientDetails: 'रोगी का विवरण', medicinesReported: 'रिपोर्ट की गई दवाएं',
  suspiciousMedicines: 'ध्यान देने योग्य दवाएं', missingCriticalFields: 'लापता महत्वपूर्ण जानकारी',
  quickActions: 'त्वरित क्रियाएं', confirmAccurate: 'सटीक की पुष्टि करें', requestClarification: 'स्पष्टीकरण का अनुरोध करें',
  delegateCase: 'केस सौंपें', auditTrail: 'ऑडिट ट्रेल', caseNotes: 'केस नोट्स', submitAction: 'कार्रवाई सबमिट करें',
  dashboard: 'डैशबोर्ड', kpi: 'मुख्य मेट्रिक्स', totalCases: 'कुल मामले', completedCases: 'पूर्ण',
  pendingCases: 'लंबित', highRiskCases: 'उच्च जोखिम', caseQueue: 'केस कतार', filters: 'फ़िल्टर',
  search: 'खोजें...', sortBy: 'इसके अनुसार सॉर्ट करें', dateNewest: 'नवीनतम', dateOldest: 'सबसे पुराना',
  riskHighest: 'उच्चतम जोखिम', riskLowest: 'न्यूनतम जोखिम', performance: 'प्रदर्शन मेट्रिक्स',
  completionRate: 'समाप्ति दर', avgResponseTime: 'औसत प्रतिक्रिया समय', dataQuality: 'डेटा गुणवत्ता स्कोर',
  dropOffAnalysis: 'ड्रॉप-ऑफ विश्लेषण', scamFear: 'घोटाले का भय / अविश्वास', timeConstraints: 'समय की कमी',
  languageBarrier: 'भाषा की बाधा', technicalIssues: 'तकनीकी समस्याएं', templatePerformance: 'टेम्पलेट प्रदर्शन',
  whatsappTemplate: 'WhatsApp', smsTemplate: 'SMS', ivrTemplate: 'IVR', caseDetails: 'केस का विवरण',
  noDataAvailable: 'कोई डेटा उपलब्ध नहीं', guidedQuestions: 'हमें बताएं कि क्या हुआ',
  describeMedicine: 'क्या आप दवा का वर्णन कर सकते हैं या फोटो साझा कर सकते हैं?',
  whatWasTheEffect: 'दवा का क्या प्रभाव पड़ा?', didYouSeeDoctorAfter: 'क्या आपने इस घटना के बाद डॉक्टर को देखा?',
  anyOtherSymptoms: 'क्या आपने कोई अन्य लक्षण का अनुभव किया?', whenDidItStart: 'समस्या कब शुरू हुई?',
};

const taTranslations: Translations = {
  submit: 'சமர்ப்பிக்கவும்', cancel: 'ரத்து செய்யவும்', next: 'அடுத்தது', back: 'பின்னால்',
  continue: 'தொடரவும்', confirm: 'உறுதிப்படுத்தவும்', edit: 'திருத்தவும்', delete: 'நீக்கவும்',
  save: 'சேமிக்கவும்', close: 'மூடவும்', loading: 'ஏற்றுகிறது...', error: 'பிழை',
  success: 'வெற்றி', language: 'மொழி', tryAgain: 'மீண்டும் முயற்சிக்கவும்', goHome: 'வீட்டுக்குப் போ',
  offline: 'ஆஃப்லைனில்', noInternet: 'இணையதள இணைப்பு இல்லை', retryConnection: 'இணைப்பை மீண்டும் முயற்சிக்கவும்',
  fieldRequired: 'இந்த புலம் தேவைப்படுகிறது', invalidInput: 'பயனுள்ள தகவலைக் கொடுக்கவும்',
  operationSuccess: 'செயல் வெற்றிகரமாக முடிந்தது', operationFailed: 'செயல் தோல்வியடைந்தது. மீண்டும் முயற்சிக்கவும்.',
  patientFollowUp: 'நோயாளி பின்தொடர்தல்', doctorReview: 'டாக்டர் மதிப்பாய்வு', pvOpsDashboard: 'பீவி அபோ டாசுபோர்டு',
  welcome: 'வரவேற்கிறோம்', selectUserType: 'உங்கள் பாத்திரம் தேர்ந்தெடுக்கவும்', startFollowUp: 'பின்தொடர்தல் தொடங்கவும்',
  verifyPatient: 'நோயாளியை சரிபார்க்கவும்', enterOTP: 'உங்கள் பதிவுசெய்யப்பட்ட தொலைபேசிக்கு அனுப்பப்பட்ட 6-இலக்க OTP ஐ உள்ளிடவும்',
  otp: 'OTP', otpSent: 'OTP வெற்றிகரமாக அனுப்பப்பட்டது', didNotReceiveOTP: 'OTP பெறவில்லையா?',
  requestCallback: 'கல்பனை மீண்டும் அழைப்பு கோரவும்', trustBadge: 'சரிபார்க்கப்பட்ட மற்றும் பாதுகாப்பான',
  trustedByHospitals: 'இந்தியா முழுவதும் முன்னணி மருத்துவமனைகளால் நம்பப்பட்டது', caseID: 'வழக்கு ID',
  patientInfo: 'நோயாளி தகவல்', preventScams: 'இது உங்களை மோசடி மற்றும் ஃபிஷிங் முயற்சிகளிலிருந்து பாதுகாக்கிறது',
  quickQualification: 'விரைந்த நோயாளி தகுதி', step: 'படி', of: 'இன்', fillingFor: 'இந்த படிவம் எதற்கு',
  self: 'நான்', caregiverRole: 'வேறு யாரோ (பராமரிப்பாளர்)', relationship: 'நோயாளிக்கு உறவு',
  parent: 'பெற்றோர்', spouse: 'கணவன்/மனைவி', child: 'குழந்தை', sibling: 'சகோதரி/சகோதரன்',
  other: 'மற்றவை', medicineConfidence: 'நீங்கள் மருந்துகளை எவ்வளவு நன்றாக நினைவு வைத்திருக்கிறீர்கள்?',
  rememberMost: 'நான் பெரும்பாலான பெயர்களை நினைவு வைத்திருக்கிறேன்', rememberSome: 'நான் சில பெயர்களை நினைவு வைத்திருக்கிறேன்',
  rememberFew: 'நான் மிகக் குறைவாக நினைவு வைத்திருக்கிறேன்', rememberPhotos: 'நான் பெயர்களை நினைவு வைத்திருக்கவில்லை (நான் புகைப்படம்/பட்டை பகிர முடியும்)',
  documentsAvailable: 'உங்களிடம் எந்த ஆவணங்கள் உள்ளன?', prescription: 'பரிந்துரை', medicineBill: 'மருந்து பில்/ரசீது',
  medicineStrip: 'மருந்து பட்டை/பாக்கெட்', issueStartDate: 'ஆரோக்கிய சிக்கல் எப்போது தொடங்கியது?',
  today: 'இன்று', yesterday: 'நேற்று', thisWeek: 'இந்த வாரம்', lastWeek: 'கடந்த வாரம்',
  twoWeeksAgo: '2 வாரங்களுக்கு முன்', notSure: 'எனக்குத் தெரியாது', patientStatus: 'நோயாளி இப்போது எப்படி உணர்கிறார்?',
  stable: 'நிலையான - கவலை இல்லை', worried: 'கவலை - சில அறிகுறிகள் உள்ளன', needsUrgentHelp: 'அவசர உதவி தேவை',
  preferredLanguage: 'தொடர்பதற்கு விரும்பிய மொழி', english: 'English', hindi: 'हिंदी', tamil: 'தமிழ்',
  telugu: 'తెలుగు', marathi: 'मराठी', regional: 'பிராந்திய', selectRegional: 'பிராந்திய மொழியைத் தேர்ந்தெடுக்கவும்',
  cannotProceed: 'முன்னேற முடியாது', pleaseAnswerQuestion: 'தயவுசெய்து தற்போதைய கேள்விக்கு பதிலளிக்கவும்',
  emergencyAlert: 'அவசர எச்சரிக்கை', needsImmediateHelp: 'இந்த நோயாளிக்கு உடனடி மருத்துவ உதவி தேவை',
  emergencyServices: 'அவசர சேவைகளைத் தொடர்பு கொள்ளவும்', dial: 'டயல் செய்யவும்',
  nearestHospital: 'உடனடி நெருங்கிய மருத்துவமனைக்குச் செல்லவும்', whatHappensNext: 'அடுத்து என்ன நடக்கிறது?',
  emergencyTeamWillContact: 'எங்கள் அவசர குழு விரைவில் உங்களைத் தொடர்பு கொள்ளும். மருத்துவ தொழில்முறைகள் தயாரில் உள்ளன.',
  requestCallBack: 'உடனடி கல்பனை மீண்டும் அழைப்பு கோரவும்', continueWithForm: 'படிவத்துடன் தொடரவும்',
  safetyFirst: 'பாதுகாப்பு முதலாம் - அவசரங்களுக்கு எப்போதும் ஡ாக்டரை கலந்தலோகவும்', medicineScan: 'மருந்து தகவல்',
  uploadMedicineImage: 'மருந்து பாக்கெட்/பரிந்துரை பதிவேற்ற அல்லது ஸ்னாப் செய்யவும்', takePhoto: 'புகைப்படம் எடுக்கவும்',
  uploadImage: 'பட பதிவேற்ற', medicineName: 'மருந்தின் பெயர்', strength: 'வலிமை (எ.கா., 500mg)',
  dosageForm: 'படிவம்', frequency: 'அதிர்வெண்', startDate: 'தொடக்க தேதி', endDate: 'முடிவு தேதி',
  confirmMedicine: 'மருந்தை உறுதிப்படுத்தவும்', medicineConfirmed: 'மருந்து உறுதிப்படுத்தப்பட்டது ✓',
  editMedicine: 'மருந்தைத் திருத்தவும்', extractedText: 'பிரித்தெடுக்கப்பட்ட தகவல்',
  mockMedIntelExtraction: '(மாக் MedIntel பிரித்தெடுக்கல் - உற்பத்தியில், AI பட்டை படிக்கிறது)',
  addAnotherMedicine: 'மற்றொரு மருந்தைச் சேர்க்கவும்', proceedToTimeline: 'ஈவென்ட் விவரங்களுக்குச் செல்லவும்',
  tab: 'மாத்திரை', tablet: 'மாத்திரை', capsule: 'கேப்சூல்', liquid: 'திரவம்', injection: 'ஊசி',
  onceDaily: 'ஒரு நாளுக்கு ஒருமுறை', twiceDaily: 'நாளுக்கு இரண்டு முறை', thriceDaily: 'நாளுக்கு மூன்று முறை',
  asNeeded: 'தேவைக்கேற்ப', eventDetails: 'ஈவென்ட் விவரங்கள்', eventStartDate: 'ஈவென்ட் எப்போது தொடங்கியது?',
  eventEndDate: 'இது எப்போது முடிந்தது?', outcome: 'முடிவு என்ன?', recovered: 'முற்றிலும் குணமடைந்தார்',
  improved: 'மேம்பட்டுள்ளார்', unchanged: 'மாறாத', worsened: 'மோசமாகிவிட்டார்', hospitalized: 'மருத்துவமனைக்கு செல்ல',
  labResults: 'ஆய்வக முடிவுகள்', labResultsDescription: 'தயவுசெய்து பொருந்தக்கூடிய ஆய்வக பரீக்ஷை ফலாபலைப் பகிரவும்',
  comorbidities: 'முன்பிரதான நிலைமைகள் (இருந்தால்)', diabetes: 'சர்க்கரை நோய்', hypertension: 'உசிக ரக்த அழுத்தம்',
  heartDisease: 'இதய நோய்', kidneyDisease: 'சிறுநீரக நோய்', liverDisease: 'கல்லீரல் நோய்', asthma: 'ஆஸ்துமா',
  none: 'ஏதுமில்லை', additionalNotes: 'கூடுதல் தகவல்', addMoreInformation: 'ஈவென்ட்டைப் பற்றிய கூடுதல் விவரங்கள்?',
  caregiverMode: 'பராமரிப்பாளர் பயன்முறை', filledByCaregiver: 'இந்த தகவல் பராமரிப்பாளரால் வழங்கப்பட்டது',
  caregiverNotes: 'கூடுதல் பராமரிப்பாளர் அவதானிப்புகள்', confirmDetails: 'சமர்ப்பிப்பதற்கு முன் அனைத்து விவரங்களும் சரியா',
  thankYou: 'நன்றி!', submissionSuccess: 'உங்கள் அறிக்கை வெற்றிகரமாக சமர்ப்பிக்கப்பட்டுள்ளது', yourCaseId: 'உங்கள் வழக்கு ID',
  dataSubmitted: 'தரவு சமர்ப்பிக்கப்பட்டது', summaryOfYourReport: 'உங்கள் அறிக்கையின் சுருக்கம்',
  genericsEducation: 'மருந்துகள் மற்றும் வாங்கக்கூடிய திறன்', affordabilitySupport: 'விரும்பிய: பொதுவான மாற்றுகளைப் பற்றி விவாதிக்கவும்',
  medicineEquivalence: 'மருந்து சமன்வயம்', genericExampleText: 'வெவ்வேறு பிராண்டுகளில் ஒரே செயல்படும் பொருள் இருக்கலாம். உदाहरणार्थ: அ்ஸ்பிரின் மற்றும் டிஸ்பிரின் உவயுமும் அ்ஸேதைல்செலிசிலிக் அ்ஸிட் தரலும் செய்வு.',
  neverSwitchWithoutDoctor: '⚠️ அப்பீக டாக்டரோக அலோசிப் சாதே எத எड़ैडि तिनमु', talkWithPharmacist: 'வயிட்டிக்குசிஸ்டொடு பெசுவு',
  discussionPromptsOnly: 'இவு சालிசனாகனवां குरेp शीqun - வெய்தुकை அல்வे', safetyDisclaimer: 'அப்பீக வयідмुங்கलोडु பெர்तवुక्कू முனु எலुमே टाक्टरोड अलोcिp कारुવु',
  downloadReport: 'அறிக்கை डाउनलोड செய்யு', shareWithDoctor: 'டாक्टரोड साथे सामाय्य कॉरु', backToHome: 'वीडु फिरु',
  caseReview: 'वाझक पुनरवलोकन', riskLevel: 'जोखिम स्तर', routine: 'नियमित', elevated: 'उंचस्थित',
  highRisk: 'उच्च जोखिम', patientDetails: 'रोगि विवरण', medicinesReported: 'रिपोर्ट क्षेरु दावे',
  suspiciousMedicines: 'ध्यान देनु आवश्यक दावे', missingCriticalFields: 'भुलुल गुरुत्वपूर्ण माहिती',
  quickActions: 'त्वरित कार्य', confirmAccurate: 'सटीक खाली करु', requestClarification: 'स्पष्टीकरण विनंती करु',
  delegateCase: 'वाझक सोपवु', auditTrail: 'ऑडिट ट्रेल', caseNotes: 'वाझक नोटस', submitAction: 'कार्य सबमिट करु',
  dashboard: 'डैशबोर्ड', kpi: 'मुख्य मेट्रिक्स', totalCases: 'कुल वाझे', completedCases: 'पूर्ण',
  pendingCases: 'प्रलंबित', highRiskCases: 'उच्च जोखिम', caseQueue: 'वाझक रांग', filters: 'फिल्टर',
  search: 'खोज...', sortBy: 'यानुसार क्रमवारी लावु', dateNewest: 'सर्वात नवीन', dateOldest: 'सर्वात जुने',
  riskHighest: 'सर्वोच्च जोखिम', riskLowest: 'सर्वनिम्न जोखिम', performance: 'कार्यक्षमता मेट्रिक्स',
  completionRate: 'पूर्णता दर', avgResponseTime: 'सरासरी प्रतिक्रिया वेळ', dataQuality: 'डेटा गुणवत्ता स्कोर',
  dropOffAnalysis: 'ड्रॉप-ऑफ विश्लेषण', scamFear: 'गैरसाद भय / अविश्वास', timeConstraints: 'वेळ मर्यादा',
  languageBarrier: 'भाषा अडथळा', technicalIssues: 'तांत्रिक समस्या', templatePerformance: 'टेम्पलेट कार्यक्षमता',
  whatsappTemplate: 'WhatsApp', smsTemplate: 'SMS', ivrTemplate: 'IVR', caseDetails: 'वाझक तपशील',
  noDataAvailable: 'कोणतीही डेटा उपलब्ध नाही', guidedQuestions: 'हमांला सांगु काय घडले',
  describeMedicine: 'तुम दावाचे वर्णन करू शकता किंवा फोटो सामाय्य करू शकता?',
  whatWasTheEffect: 'दावाचा परिणाम काय होता?', didYouSeeDoctorAfter: 'या घटनेनंतर तुम डाक्टरांना पाहिले का?',
  anyOtherSymptoms: 'तुम्हांला इतर कोणी लक्षणें जाणवल्या का?', whenDidItStart: 'समस्या कधी सुरू झाली?',
};

const teTranslations: Translations = enTranslations;
const mrTranslations: Translations = enTranslations;

// Additional languages - using English as fallback for now
const bnTranslations: Translations = enTranslations;
const guTranslations: Translations = enTranslations;
const knTranslations: Translations = enTranslations;
const mlTranslations: Translations = enTranslations;
const orTranslations: Translations = enTranslations;
const paTranslations: Translations = enTranslations;
const urTranslations: Translations = enTranslations;
const asTranslations: Translations = enTranslations;
const kokTranslations: Translations = enTranslations;
const maiTranslations: Translations = enTranslations;
const ksTranslations: Translations = enTranslations;
const sdTranslations: Translations = enTranslations;
const saTranslations: Translations = enTranslations;

export const translations: Record<LanguageCode, Translations> = {
  en: enTranslations,
  hi: hiTranslations,
  ta: taTranslations,
  te: teTranslations,
  mr: mrTranslations,
  bn: bnTranslations,
  gu: guTranslations,
  kn: knTranslations,
  ml: mlTranslations,
  or: orTranslations,
  pa: paTranslations,
  ur: urTranslations,
  as: asTranslations,
  kok: kokTranslations,
  mai: maiTranslations,
  ks: ksTranslations,
  sd: sdTranslations,
  sa: saTranslations,
};

export const getTranslation = (languageCode: LanguageCode, key: keyof Translations): string => {
  return translations[languageCode]?.[key] || translations.en[key] || key;
};
