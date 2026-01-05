# 🌱 Flourish

> **Your Day, Your Thoughts, Your Space to Flourish**

A wellness platform designed for students who want to understand their emotions, track their progress, and grow their mental wellness one day at a time.

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7.0-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [About](#-about)
- [The Problem](#-the-problem)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Reflection](#-reflection)

---

## 🌟 About

Flourish is a wellness tracking application built specifically for students and young people navigating the challenges of academic life. During my time at LaunchPad Philly, I experienced firsthand how overwhelming student life can be—pulled in multiple directions with projects, workshops, deadlines, and learning new tech skills all at once.

I wanted a way to reflect on how I was feeling, track my stress over time, and see patterns, but there wasn't a simple tool for that. Flourish is built for moments like that: a place where students can track mood, reflect through journaling, and get insights from AI to understand and manage stress before it builds up.

---

## 🎯 The Problem

Today's students face unprecedented levels of stress and anxiety. Between academic pressures, social challenges, and the constant demands of modern life, many students struggle to maintain their mental wellness. Without proper tools to track, understand, and manage their emotional well-being, students often find themselves in a cycle of stress that affects every aspect of their lives.

### Consequences of Not Solving This

- **Academic Impact**: Chronic stress leads to decreased focus, memory problems, and lower academic performance
- **Mental Health Decline**: Unmanaged stress can lead to anxiety disorders, depression, and burnout
- **Social Isolation**: High stress levels can strain relationships with friends and family
- **Long-term Effects**: The habits students develop during academic years often carry into adulthood

---

## ✨ Features

### 🌿 Mood Tracking
Log your daily mood on a simple 1-10 scale. Watch your wellness plant grow as you track your emotional patterns over time.

### 📝 Journaling
Reflect on your day with a clean, distraction-free journal. Write freely and process your thoughts in a safe space.

### 🤖 AI-Powered Insights
Get personalized analysis of your journal entries. Understand patterns, identify triggers, and receive actionable insights to improve your wellness.

### 🌱 Wellness Plant
Watch your plant grow based on your mood entries. A visual representation of your wellness journey that motivates you to keep tracking.

### 🔒 Privacy First
Your data stays yours. All entries are stored securely and only you have access to your personal reflections and insights.

### ⚡ Simple & Accessible
No complicated setup or overwhelming features. Flourish is designed to be intuitive and easy to use, so you can focus on your wellness.

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Database** | SQLite (Prisma ORM) |
| **Authentication** | NextAuth.js (beta) |
| **AI Integration** | OpenAI API |
| **Password Hashing** | bcryptjs |
| **Validation** | Zod |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/asmaniac/flourish-.git
   cd flourish-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-secret-key-here-generate-a-random-string"
   NEXTAUTH_URL="http://localhost:3000"
   OPENAI_API_KEY="your-openai-api-key-here"
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
flourish-/
├── app/
│   ├── about/          # About page (problem explanation)
│   ├── features/       # Features showcase page
│   ├── journal/        # Journaling page
│   ├── mood-tracker/   # Mood tracking with plant visualization
│   ├── product/        # Product landing page
│   ├── api/            # API routes
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
├── lib/                # Utility functions
│   ├── auth/          # Authentication helpers
│   ├── db/            # Database client
│   └── ai/            # AI integration
├── prisma/
│   ├── schema.prisma  # Database schema
│   └── migrations/    # Database migrations
└── public/            # Static assets
```

---

## 🎨 Design Philosophy

Flourish uses a calming, natural color palette inspired by earth tones:
- **Background**: Soft tan (#F9F5F0)
- **Cards**: Warm beige (#F5E6D3)
- **Accents**: Sandy brown (#D4A574)
- **Text**: Rich brown (#8B6F47)
- **Plants**: Natural greens (#6B8E23, #7CB342, #8BC34A)

The design emphasizes simplicity, accessibility, and a peaceful aesthetic that encourages reflection and growth.

---

## 🤝 Contributing

This is a school project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

---

## 📝 Reflection

### What I Learned

Building Flourish taught me valuable lessons about:
- **User-Centered Design**: Creating a tool that solves a real problem I experienced
- **Full-Stack Development**: Integrating frontend, backend, database, and AI services
- **Modern Web Technologies**: Working with Next.js, Prisma, and TypeScript
- **Design Thinking**: Balancing functionality with aesthetic appeal

### Challenges Overcome

- Implementing a visual plant growth system based on mood data
- Integrating AI analysis for journal entries
- Creating an intuitive, non-overwhelming user interface
- Balancing feature richness with simplicity

### Future Enhancements

- Mobile app version
- Data export functionality
- More detailed analytics and insights
- Community features (optional, privacy-respecting)
- Integration with calendar apps for better pattern recognition

---

## 📄 License

This project is created for educational purposes.

---

## 👤 Author

Built with care for students navigating the challenges of academic life.

**Flourish** - *Wellness Made Simple* 🌱

---

<div align="center">
  <p>Made with ❤️ for students everywhere</p>
  <p>Start your wellness journey today</p>
</div>

