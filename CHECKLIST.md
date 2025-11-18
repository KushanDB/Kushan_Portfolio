# ✅ Pre-Launch Checklist

Use this checklist before running your portfolio for the first time!

## 📁 Files to Add

### Required Files (App won't run without these)
- [ ] `src/assets/images/hero-profile.png` - Your profile photo
- [ ] `src/assets/images/contact-illustration.png` - Contact section image  
- [ ] `src/assets/images/project-1.png` - Project thumbnail

### Recommended Files
- [ ] `src/assets/fonts/Qasira.ttf` - Logo font (will use fallback if missing)
- [ ] `public/Kushan-Jayathunga-CV.pdf` - Your CV/resume for download

## ✏️ Content to Customize

### src/components/Hero.jsx
- [ ] GitHub URL (line ~20): `https://github.com/your-username`
- [ ] LinkedIn URL (line ~26): `https://www.linkedin.com/in/your-linkedin`
- [ ] Facebook URL (line ~32): `https://facebook.com/your-profile`
- [ ] WhatsApp Number (line ~38): `https://wa.me/94XXXXXXXXX`
- [ ] Years Experience (line ~57): Currently "5+"
- [ ] Projects Done (line ~61): Currently "20+"
- [ ] Happy Clients (line ~65): Currently "80+"

### src/components/Footer.jsx
- [ ] Email Address (line ~18): `youremail@example.com`

### src/components/Education.jsx
- [ ] School Name - A/L (line ~35): Replace "Your School Name"
- [ ] School Name - O/L (line ~41): Replace "Your School Name"

### src/components/About.jsx (Optional)
- [ ] Review and customize the about text to match your story

### src/components/Projects.jsx (Optional)
- [ ] Add real project titles, descriptions, and images
- [ ] Add more projects if needed

### src/components/Skills.jsx (Optional)
- [ ] Update skills to match your actual stack
- [ ] Add or remove items as needed

## 🔧 Configuration Check

- [ ] `.env` file exists with `PORT=5000`
- [ ] `node_modules` folder exists (run `npm install` if missing)
- [ ] All 9 component files exist in `src/components/`
- [ ] `src/index.css` has the full styling code

## 🚀 Ready to Launch?

Once all checkboxes above are checked:

```bash
npm start
```

Then open: **http://localhost:5000**

## 🎨 Quick Customization Guide

### Change Color Theme
Edit `src/index.css` variables (lines 11-20):
- `--accent` - Main crimson color
- `--gold` - Gold accent color
- `--bg-main` - Background color

### Change Logo Text
Edit `src/components/Navbar.jsx` (line 8) and `src/components/Footer.jsx` (line 8)

### Add More Sections
1. Create new component in `src/components/`
2. Import in `src/App.jsx`
3. Add to the layout with an id
4. Add navigation link in `Navbar.jsx`

---

**Need help?** Check the other README files:
- `README.md` - Full documentation
- `SETUP-GUIDE.md` - Detailed setup
- `ASSETS-README.md` - Asset requirements
- `PROJECT-SUMMARY.md` - What's included

Happy coding! 🎉
