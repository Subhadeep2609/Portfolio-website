# Subhadeep Saha Portfolio Website

A modern, high-performance personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. It features 3D elements, smooth animations, and a responsive design to showcase skills and projects effectively.

## ✨ Features

- **3D Visuals**: Immersive 3D background elements using Three.js and React Three Fiber.
- **Glowing Name Animation**: Eyecatching, color-cycling cursive name in the Hero section.
- **Dynamic Hero Section**: Typewriter effect cycling through developer roles ("FULL STACK DEVELOPER", "FRONTEND DEVELOPER", etc.).
- **Interactive Contact Form**: Fully functional contact form integrated with EmailJS.
- **Smooth Animations**: Powered by Framer Motion for seamless transitions and entrance effects.
- **Glassmorphism Design**: Modern UI with glass-like components.
- **Responsive Layout**: Optimized for all devices, from mobile to desktop.
- **Smooth Scrolling**: Enhanced scrolling experience.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) / [Drei](https://github.com/pmndrs/drei)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Deployment**: [Vercel](https://vercel.com/) (Recommended)

## 🚀 Getting Started

Follow these steps to run the project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Subhadeep2609/Portfolio-website.git
    cd Portfolio-website
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**

    Create a `.env.local` file in the root directory and add your EmailJS credentials:

    ```env
    NEXT_PUBLIC_SERVICE_ID=your_service_id
    NEXT_PUBLIC_TEMPLATE_ID=your_template_id
    NEXT_PUBLIC_KEY=your_public_key
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  **Open in browser:**

    Navigate to `http://localhost:3000` to view the application.

## 📁 Project Structure

```
├── app/                # Next.js App Router pages and layouts
├── components/         # Reusable React components
│   ├── 3d/             # Three.js scene components
│   ├── sections/       # Landing page sections (Hero, About, Contact, etc.)
│   └── ...
├── public/             # Static assets (images, models)
└── ...
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
