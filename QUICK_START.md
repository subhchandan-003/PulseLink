# 🚀 Quick Start Guide - PulseLink Prototype

## ⚡ 30-Second Setup

```bash
# Navigate to project
cd "c:\Users\LENOVO\Desktop\PulseLink"

# Start development server (if not already running)
npm run dev

# Open in browser
http://localhost:5173/
```

**That's it!** The prototype is now running.

---

## 👀 What to Explore

### **Option 1: See Patient Experience** (3 min)
1. Click **"Patient Follow-up Flow"**
2. Verify with OTP (enter any 6 digits)
3. Upload a medicine photo (any image works)
4. Fill in event dates and outcome
5. View thank you screen with optional support

### **Option 2: See Doctor Interface** (1 min)
1. Click **"Doctor Case Review"**
2. Review 1-page case snapshot
3. Pick an action (confirm/clarify/callback/delegate)

### **Option 3: See Operations Dashboard** (2 min)
1. Click **"PV Ops Dashboard"**
2. Filter cases by risk level
3. Search for patients
4. Review metrics and drop-off analysis

---

## 📖 Where to Read More

| Need | Read This |
|------|-----------|
| Full walkthrough | [DEMO_GUIDE.md](DEMO_GUIDE.md) |
| Technical details | [COMPONENT_INVENTORY.md](COMPONENT_INVENTORY.md) |
| What was built | [PROTOTYPE_SUMMARY.md](PROTOTYPE_SUMMARY.md) |
| Project overview | [README.md](README.md) |
| Build status | [BUILD_CHECKLIST.md](BUILD_CHECKLIST.md) |

---

## 🔧 Useful Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check dependencies
npm list
```

---

## 🎨 Customizing

### **Change Colors**
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'medical-blue': '#0066CC',  // Change this
      'medical-green': '#00A86B',
      'medical-red': '#DC143C',
    }
  }
}
```

### **Change Mock Data**
Edit `src/App.tsx`:
```typescript
const mockCases: Case[] = [
  // Modify these cases
]
```

### **Change Text/Labels**
Edit any component in `src/components/`

---

## 🐛 Troubleshooting

**Q: Port 5173 already in use?**
```bash
# Kill the process using port 5173
# Windows: Open Task Manager → Find node.exe → End task
# Then: npm run dev
```

**Q: npm install failed?**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -r node_modules package-lock.json
npm install
```

**Q: Page not loading?**
```bash
# Clear browser cache
# Press: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
# Or: Check http://localhost:5173/ is exactly correct
```

---

## 📱 Mobile Testing

The prototype is fully responsive! Test it:

1. **In Browser DevTools**:
   - Press `F12`
   - Click device toolbar icon
   - Select "iPhone 12" or "Pixel 5"
   - Refresh page

2. **On Real Phone**:
   - Get your computer's IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
   - In browser, go to: `http://YOUR_IP:5173/`

---

## 🎬 Demo Tips

**If demoing to someone**:

1. **Start with home screen** - Shows all three paths
2. **Pick patient flow first** - Most impressive (2-3 min completion)
3. **Show doctor view next** - Highlights minimal burden (<1 min)
4. **End with dashboard** - Shows data/metrics

**Timing**: ~5 minutes total for all three paths

---

## 📝 File Locations

```
src/
├── App.tsx                  ← Add new screens here
├── components/              ← Individual screen components
│   ├── VerifyScreen.tsx
│   ├── MedicineUpload.tsx
│   ├── EventTimeline.tsx
│   ├── ThankYouScreen.tsx
│   ├── DoctorCaseSnapshot.tsx
│   └── PVOpsDashboard.tsx
└── types/
    └── index.ts            ← Data structure definitions
```

---

## 🚀 Next Steps

### **To Extend the Prototype**:
1. Open `src/App.tsx`
2. Add new `ScreenType`
3. Create new component in `src/components/`
4. Wire it in the navigation
5. `npm run dev` to test

### **To Deploy to Production**:
1. Run `npm run build`
2. Upload `dist/` folder to:
   - Vercel (easiest): `vercel deploy`
   - AWS S3: Upload to bucket
   - Any static host (GitHub Pages, Netlify, etc.)

### **To Add Real API**:
1. Keep all React components as-is
2. Replace `mockCases` with API calls
3. Update data types in `src/types/index.ts` if needed
4. Test with real data

---

## 💡 Key Features Explained

### **Patient Flow**
- **Verify**: OTP or callback (prevents fraud)
- **Medicine**: Photo + AI extraction (accuracy)
- **Timeline**: Event dates + outcomes (context)
- **Thank you**: Confirmation + optional support (trust)

### **Doctor Flow**
- **Snapshot**: 1 page, <60 seconds (no burden)
- **Actions**: 4 quick options (simple decisions)

### **Dashboard**
- **Queue**: Risk-sorted cases (priority)
- **Metrics**: Completion rate, response time (tracking)
- **Analytics**: Drop-off reasons, template performance (improvement)

---

## ✨ Pro Tips

1. **Try different scenarios** - Click different case cards in dashboard
2. **Test mobile view** - Resize browser to see responsiveness
3. **Read the code** - It's well-documented and easy to understand
4. **Check the docs** - Each file has comments explaining logic
5. **Modify mock data** - Change case details to test different flows

---

## 🎯 What You're Seeing

A **production-ready UI prototype** of a patient safety follow-up system that:
- ✅ Takes 2-3 min (vs 20+ traditional)
- ✅ Uses AI for medicine accuracy
- ✅ Risk-focuses automation
- ✅ Minimizes doctor burden
- ✅ Tracks measurable metrics
- ✅ Works globally (India-first configurable)

---

## 📞 Questions?

Check these files:
- **How does component X work?** → [COMPONENT_INVENTORY.md](COMPONENT_INVENTORY.md)
- **How do I demo it?** → [DEMO_GUIDE.md](DEMO_GUIDE.md)
- **What was built?** → [PROTOTYPE_SUMMARY.md](PROTOTYPE_SUMMARY.md)
- **Full docs?** → [README.md](README.md)

---

## 🎉 Ready?

```bash
npm run dev
# Open: http://localhost:5173/
# Click: Any of the three demo flows
# Explore!
```

---

**PulseLink** - Building the global standard for patient safety follow-ups, starting with India.

Enjoy! 🚀
