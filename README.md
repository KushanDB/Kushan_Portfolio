# Kushan Jayathunga Portfolio

A modern, fully responsive portfolio website built with React featuring a crimson velvet & gold color theme.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add required assets:**
   - See `ASSETS-README.md` for detailed instructions
   - Add `Qasira.ttf` font to `src/assets/fonts/`
   - Add your images to `src/assets/images/`:
     - `hero-profile.png` (your photo)
     - `contact-illustration.png` (contact section image)
     - `project-1.png` (project thumbnails)

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   - The app will run at **http://localhost:5000**

## 📁 Project Structure

```
kushan-portfolio/
├── .env                          # Environment variables (PORT=5000)
├── package.json                  # Dependencies and scripts
├── ASSETS-README.md              # Asset setup instructions
├── public/
│   └── index.html                # HTML template
└── src/
    ├── assets/
    │   ├── fonts/
    │   │   └── Qasira.ttf        # Logo font (add this)
    │   └── images/
    │       ├── hero-profile.png  # Your photo (add this)
    │       ├── contact-illustration.png  # Contact image (add this)
    │       └── project-1.png     # Project thumbnails (add this)
    ├── components/
    │   ├── Navbar.jsx            # Navigation bar
    │   ├── Hero.jsx              # Hero section with typewriter effect
    │   ├── About.jsx             # About me section
    │   ├── Skills.jsx            # Skills organized by category
    │   ├── Education.jsx         # Education timeline
    │   ├── Projects.jsx          # Projects showcase
    │   ├── Contact.jsx           # Contact form
    │   ├── Footer.jsx            # Footer
    │   └── Typewriter.jsx        # Typewriter animation component
    ├── App.jsx                   # Main app component
    ├── index.js                  # App entry point
    └── index.css                 # Global styles & theme
```

## 🎨 Features

- ✨ **Animated Typewriter Effect** - Dynamic role display
- 🎨 **Crimson Velvet & Gold Theme** - Elegant dark color scheme
- 📱 **Fully Responsive** - Works on all devices
- 🔤 **Custom Qasira Font** - Unique logo typography
- 📊 **Skills Categories** - Languages, Frameworks, Tools, Databases
- 🎓 **Education Timeline** - Academic background display
- 💼 **Projects Showcase** - Portfolio work presentation
- 📧 **Contact Form** - Get in touch section
- 🔗 **Social Media Links** - GitHub, LinkedIn, Facebook, WhatsApp

## 🛠️ Customization

### Update Personal Information

1. **Social Media Links** (`src/components/Hero.jsx`):
   - Replace placeholder URLs with your actual profiles

2. **Email** (`src/components/Footer.jsx`):
   - Update with your real email address

3. **Education** (`src/components/Education.jsx`):
   - Replace "Your School Name" with actual school names

4. **Projects** (`src/components/Projects.jsx`):
   - Add your own project details and images

5. **Stats** (`src/components/Hero.jsx`):
   - Update years of experience, projects count, clients count

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🎯 Next Steps

After setup, you can:
- Add smooth scrolling animations
- Implement a mobile menu
- Add more project details
- Connect the contact form to a backend
- Add blog section
- Implement dark/light mode toggle

## 📝 License

All rights reserved - Kushan Jayathunga

---

**Built with React** ⚛️ | **Designed with passion** 
