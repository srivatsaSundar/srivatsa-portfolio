# Srivatsa Sundarraj | AI Engineer Portfolio

An interactive, premium developer portfolio showcasing enterprise-scale Generative AI engineering, Agentic workflows, and machine learning solutions. 

This portfolio is built with a sleek, dark-theme aesthetic, incorporating smooth scroll micro-animations and a dynamic 3D interactive particle background.

---

## 🚀 Tech Stack

- **Core**: React 18 & Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D & Interactive Elements**: Three.js & React Three Fiber (`@react-three/fiber` & `@react-three/drei`)
- **Icons**: Lucide React

---

## 🛠️ Getting Started

Follow these steps to run the portfolio website locally on your machine.

### Prerequisites

Make sure you have **Node.js** (v18.x or higher) installed on your system. You can verify this by running:
```bash
node -v
```

### Installation

1. Clone or navigate into the portfolio directory:
   ```bash
   cd srivatsa-portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally (Development Mode)

Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Once started, open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

### Building for Production

To build the application for deployment (compiles and minifies assets to the `dist/` directory):
```bash
npm run build
```

### Previewing the Production Build

To preview the production build locally to verify all assets load correctly:
```bash
npm run preview
```

---

## 📂 Project Structure

```text
srivatsa-portfolio/
├── public/                 # Static assets (Favicons, OG Image)
├── src/
│   ├── assets/             # Images and design assets
│   ├── components/         # Modular portfolio sections
│   │   ├── About.jsx       # Biography & enterprise stats
│   │   ├── Contact.jsx     # Executable message query payload form & footer
│   │   ├── Experience.jsx  # Detailed career trajectory (Intern -> GET -> Junior Engineer)
│   │   ├── Hero.jsx        # 3D Torus particle background, title & core summary
│   │   ├── Projects.jsx    # Showcase grid of enterprise & academic work
│   │   └── Skills.jsx      # Advanced skill groups (Gen AI, Cloud/MLOps, ML, Databases)
│   ├── App.jsx             # Main layouts and Suspense wrapper
│   ├── index.css           # Styling tokens and Tailwind integration
│   └── main.jsx            # Entry point
├── index.html              # HTML shell & SEO meta-tags
├── tailwind.config.js      # Styling design systems
└── vite.config.js          # Vite configurations
```
