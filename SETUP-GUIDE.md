# 🚀 Quick Setup Guide

## ✅ What's Done

Your React portfolio is now set up with:
- ✅ All React components created
- ✅ Crimson velvet & gold color theme applied
- ✅ Dependencies installed (React, react-icons)
- ✅ Port configured to 5000
- ✅ Project structure ready

## 📋 Next Steps

### 1️⃣ Add Required Assets

**IMPORTANT:** The app won't run properly until you add these files:

#### **Fonts** (`src/assets/fonts/`)
- Download and add **Qasira.ttf** font file
  - You can find Qasira font online or use an alternative elegant font
  - Place it at: `src/assets/fonts/Qasira.ttf`

#### **Images** (`src/assets/images/`)
- **hero-profile.png** - Your profile photo (transparent background recommended)
- **contact-illustration.png** - Contact section illustration
- **project-1.png** - Project thumbnail (you can add more: project-2.png, etc.)

### 2️⃣ Customize Your Information

Edit these files to add your personal information:

1. **Hero.jsx** - Update social media links:
   ```jsx
   // Replace these URLs with your actual profiles:
   https://github.com/your-username
   https://www.linkedin.com/in/your-linkedin
   https://facebook.com/your-profile
   https://wa.me/94700000000  // Your WhatsApp number
   ```

2. **Footer.jsx** - Update email:
   ```jsx
   youremail@example.com  // Replace with your email
   ```

3. **Education.jsx** - Update school names:
   ```jsx
   "Your School Name"  // Replace with actual school names
   ```

4. **Hero.jsx** - Update stats (optional):
   - Years of experience
   - Number of projects
   - Number of clients

### 3️⃣ Run the Development Server

Once you've added the assets:

```bash
npm start
```

The app will open at **http://localhost:5000**

### 4️⃣ Optional Enhancements

- Add your CV file to `public/Kushan-Jayathunga-CV.pdf`
- Update project details in `Projects.jsx`
- Add more project images
- Customize the about text
- Update skills list

## 🎨 Color Theme

Your portfolio uses:
- **Crimson Velvet**: `#7b001c` (primary accent)
- **Gold**: `#f4c542` (secondary accent)
- **Dark Background**: `#050507` (main background)

## 📁 Project Structure

```
kushan-portfolio/
├── .env                  ✅ Created (PORT=5000)
├── package.json          ✅ Created
├── .gitignore           ✅ Created
├── README.md            ✅ Created
├── ASSETS-README.md     ✅ Created
├── SETUP-GUIDE.md       ✅ This file
├── public/
│   └── index.html       ✅ Created
└── src/
    ├── assets/
    │   ├── fonts/       ⚠️ ADD Qasira.ttf HERE
    │   └── images/      ⚠️ ADD IMAGES HERE
    ├── components/      ✅ All 9 components created
    ├── App.jsx          ✅ Created
    ├── index.js         ✅ Created
    └── index.css        ✅ Created (full styling)
```

## ⚠️ Important Notes

1. **Images are required** - The app imports images, so you need to add them or it will show errors
2. **Font is optional** - The site will work without Qasira.ttf, but will use fallback fonts
3. **Customization needed** - Replace all placeholder URLs and text with your actual information

## 🆘 Troubleshooting

**If you see import errors:**
- Make sure all image files are in `src/assets/images/`
- Image names must match exactly: `hero-profile.png`, `contact-illustration.png`, `project-1.png`

**If fonts don't load:**
- Verify `Qasira.ttf` is in `src/assets/fonts/`
- Font name is case-sensitive

**If the port is already in use:**
- Change the PORT in `.env` file to another number (e.g., 3000, 8000)

---

Need help? Check `README.md` and `ASSETS-README.md` for more details!
