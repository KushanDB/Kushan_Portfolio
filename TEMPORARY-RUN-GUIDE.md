# Temporary Workaround - How to Run Without Images

If you want to test the app **before** adding real images, follow these steps:

## Option 1: Comment Out Image Imports (Quick Test)

### 1. Edit `src/components/Hero.jsx`

Comment out the image import and usage:

```jsx
// Line 4 - Comment this out:
// import heroImg from "../assets/images/hero-profile.png";

// Lines 76-78 - Comment this out:
// <img src={heroImg} alt="Kushan Jayathunga" className="hero-image" />

// Replace with:
<div className="hero-image" style={{
  background: 'linear-gradient(135deg, #7b001c, #f4c542)',
  borderRadius: '50%'
}} />
```

### 2. Edit `src/components/Contact.jsx`

Comment out the image import and usage:

```jsx
// Line 2 - Comment this out:
// import contactImg from "../assets/images/contact-illustration.png";

// Lines 32-37 - Comment this out:
// <img
//   src={contactImg}
//   alt="Contact illustration"
//   className="contact-image"
// />

// Replace with:
<div className="contact-image" style={{
  background: 'linear-gradient(135deg, #7b001c, #f4c542)',
  borderRadius: '18px',
  width: '320px',
  height: '320px'
}} />
```

### 3. Edit `src/components/Projects.jsx`

Comment out the image import:

```jsx
// Line 2 - Comment this out:
// import proj1 from "../assets/images/project-1.png";

// Line 11 - Change to:
image: "https://via.placeholder.com/600x400/7b001c/f4c542?text=Project+1",

// Line 18 - Change to:
image: "https://via.placeholder.com/600x400/7b001c/f4c542?text=Project+2",

// Line 25 - Change to:
image: "https://via.placeholder.com/600x400/7b001c/f4c542?text=Project+3",
```

Now you can run:
```bash
npm start
```

## Option 2: Use External Placeholder Images

### Create a temporary images file

Create `src/assets/images/placeholders.js`:

```javascript
// Placeholder images using external services
export const heroImg = "https://via.placeholder.com/800x800/7b001c/f4c542?text=Profile+Photo";
export const contactImg = "https://via.placeholder.com/600x600/7b001c/f4c542?text=Contact+Us";
export const proj1 = "https://via.placeholder.com/600x400/7b001c/f4c542?text=Project+1";
```

Then update imports in components:

**Hero.jsx:**
```jsx
import { heroImg } from "../assets/images/placeholders";
```

**Contact.jsx:**
```jsx
import { contactImg } from "../assets/images/placeholders";
```

**Projects.jsx:**
```jsx
import { proj1 } from "../assets/images/placeholders";
```

## ⚠️ Remember

These are **temporary workarounds** only. For the final version:

1. Add your real images to `src/assets/images/`
2. Revert all changes back to the original imports
3. Make sure image filenames match exactly:
   - `hero-profile.png`
   - `contact-illustration.png`
   - `project-1.png`

## Where to Get Images

### Profile Photo
- Take a professional photo
- Remove background using: remove.bg or photoshop
- Save as PNG with transparent background

### Contact Illustration
- Undraw.co (free illustrations)
- Freepik.com (free with attribution)
- Or create your own in Figma/Illustrator

### Project Screenshots
- Take screenshots of your actual projects
- Use Figma/Photoshop to create mockups
- Or use: mockup.photos, smartmockups.com

---

**This file is for testing only!** Replace with real images for production.
