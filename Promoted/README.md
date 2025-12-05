# **Promoted – React Landing Page README**

## **Overview**

Promoted is a responsive landing page built with **React**, designed to communicate the product’s value proposition through clean UI sections such as hero banners, feature highlights, testimonials, and CTAs. The project uses standard **CSS modules / global CSS** (no Tailwind) and follows a modular React component structure.

---

## **Features**

* ⚛️ **React functional components**
* 🎨 **Pure CSS styling (no Tailwind)**
* 📱 **Fully responsive layout**
* 🧩 **Modular and reusable components**
* 💬 **Testimonial slider with pagination dots**
* 🚀 **Optimized for fast load times**
* 🔍 **SEO-friendly structure & semantic HTML**
* 🔧 **Easy to customize and extend**

---

## **Tech Stack**

* **React** (Vite or Create React App)
* **CSS / CSS Modules / SCSS** (depending on what you used)
* **Swiper.js** or **custom slider** (if included)
* **React Icons** or local assets

---

## **Project Structure**

```
src/
 ├─ components/
 │   ├─ Hero.jsx
 │   ├─ Features.jsx
 │   ├─ Testimonials.jsx
 │   ├─ Footer.jsx
 │   └─ ...other components
 ├─ assets/
 │   ├─ images/
 │   └─ icons/
 ├─ styles/
 │   ├─ global.css
 │   └─ component-specific CSS files
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
```

---

## **Getting Started**

### **Install Dependencies**

```bash
npm install
```

### **Run Development Server**

```bash
npm run dev
```

### **Build for Production**

```bash
npm run build
```

---

## **Customization**

* Update text and layout in the components inside `/src/components`
* Replace images and icons inside `/src/assets`
* Modify global or component-level CSS in `/src/styles`
* Adjust responsive breakpoints in your CSS media queries
* Add or remove sections by editing `App.jsx`

---

## **Deployment**

You can deploy the build folder to:

* **Vercel**
* **Netlify**
* **Cloudflare Pages**
* **GitHub Pages**
* **Any static hosting service**

Build the project:

```bash
npm run build
```
