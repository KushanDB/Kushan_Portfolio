# 🎨 How to Replace Placeholder Images with Real Ones

The app is now running with placeholder images. Here's how to replace them with your real assets:

## 📸 Step 1: Prepare Your Images

### Hero Profile Image
1. **File**: `hero-profile.png`
2. **Recommended specs**:
   - Size: 800x800px (square)
   - Format: PNG with transparent background
   - Subject: Your professional headshot/portrait
3. **Tips**: Use [remove.bg](https://remove.bg) to remove background

### Contact Illustration
1. **File**: `contact-illustration.png`
2. **Recommended specs**:
   - Size: 400-600px width
   - Format: PNG or SVG
   - Theme: Communication, email, or contact related
3. **Free resources**:
   - [Undraw.co](https://undraw.co) - Customizable illustrations
   - [Freepik.com](https://freepik.com) - Free with attribution
   - [Humaaans.com](https://humaaans.com) - Mix-and-match illustrations

### Project Thumbnails
1. **File**: `project-1.png`, `project-2.png`, etc.
2. **Recommended specs**:
   - Size: 600x400px (landscape, 3:2 ratio)
   - Format: PNG or JPG
   - Subject: Screenshots or mockups of your projects
3. **Tips**: 
   - Take clean screenshots of your projects
   - Use [Mockuuups.studio](https://mockuuups.studio) for device mockups
   - Keep image sizes under 500KB for faster loading

## 🔄 Step 2: Replace Placeholder Images

### Option A: Simple Replacement (Recommended)

1. **Add your images** to `src/assets/images/`:
   ```
   src/assets/images/
   ├── hero-profile.png       ← Add your photo
   ├── contact-illustration.png ← Add illustration
   └── project-1.png          ← Add project screenshot
   ```

2. **Uncomment the imports** in the component files:

   **Hero.jsx** (line 4):
   ```jsx
   // Change this:
   // import heroImg from "../assets/images/hero-profile.png";
   
   // To this:
   import heroImg from "../assets/images/hero-profile.png";
   ```

   **Contact.jsx** (line 2):
   ```jsx
   // Change this:
   // import contactImg from "../assets/images/contact-illustration.png";
   
   // To this:
   import contactImg from "../assets/images/contact-illustration.png";
   ```

   **Projects.jsx** (line 2):
   ```jsx
   // Change this:
   // import proj1 from "../assets/images/project-1.png";
   
   // To this:
   import proj1 from "../assets/images/project-1.png";
   ```

3. **Replace placeholder divs** with actual images:

   **Hero.jsx** (around line 76-91):
   ```jsx
   // Remove the placeholder div and uncomment:
   <img src={heroImg} alt="Kushan Jayathunga" className="hero-image" />
   ```

   **Contact.jsx** (around line 32-52):
   ```jsx
   // Remove the placeholder div and uncomment:
   <img
     src={contactImg}
     alt="Contact illustration"
     className="contact-image"
   />
   ```

   **Projects.jsx** (around line 4):
   ```jsx
   // Remove the placeholder data URL line
   ```

4. **Save files** - The app will auto-reload!

### Option B: Use External Images (Quick Test)

If you want to test with external URLs first:

**Projects.jsx**:
```jsx
const proj1 = "https://your-image-url.com/project1.jpg";
```

## 🔤 Step 3: Add Qasira Font (Optional)

The app works with fallback fonts, but to use Qasira:

1. **Download** the Qasira font (search "Qasira font download")
2. **Replace** the placeholder `src/assets/fonts/Qasira.ttf` with the real file
3. **Uncomment** the font-face in `src/index.css` (lines 3-8):
   ```css
   @font-face {
     font-family: "Qasira";
     src: url("./assets/fonts/Qasira.ttf") format("truetype");
     font-weight: normal;
     font-style: normal;
   }
   ```

## ✅ Verification Checklist

After adding real images:

- [ ] Hero section shows your actual photo
- [ ] Contact section shows your chosen illustration
- [ ] Projects show actual screenshots/mockups
- [ ] Logo uses Qasira font (or acceptable fallback)
- [ ] No console errors about missing files
- [ ] Images load quickly (under 500KB each)

## 🎨 Image Optimization Tips

Before adding images:

1. **Compress** them using:
   - [TinyPNG.com](https://tinypng.com) - PNG compression
   - [Squoosh.app](https://squoosh.app) - Advanced optimization
   
2. **Resize** to recommended dimensions (don't use 4K images!)

3. **Convert** to WebP for better performance (advanced):
   ```bash
   # Using online tools or:
   npm install -g sharp-cli
   sharp -i hero-profile.png -o hero-profile.webp
   ```

## 🚀 Next Level: Multiple Project Images

Want different images for each project?

1. **Add more images**:
   ```
   src/assets/images/
   ├── project-1.png
   ├── project-2.png
   └── project-3.png
   ```

2. **Import them** in `Projects.jsx`:
   ```jsx
   import proj1 from "../assets/images/project-1.png";
   import proj2 from "../assets/images/project-2.png";
   import proj3 from "../assets/images/project-3.png";
   ```

3. **Update the projects array**:
   ```jsx
   const projects = [
     { ..., image: proj1 },
     { ..., image: proj2 },
     { ..., image: proj3 },
   ];
   ```

---

**Need help?** The app runs fine with placeholders - add real images when you're ready! 🎉
