# Sanskriti Mishra — AI/ML Portfolio
**My Portfolio : https://portfolio-9oac36bdg-sanskriti234s-projects.vercel.app/ **

**A world-class, premium AI-native portfolio website** that feels like an advanced AI operating system.

Built for recruiters at OpenAI, Google DeepMind, Anthropic, NVIDIA, Meta AI, etc.

## Features

- **AI Console Hero** — Realistic initialization sequence + greeting
- **Smart AI Assistant** — Fully functional embedded chat with quick prompts
- **Neural Network Background** — Interactive cursor-reactive canvas
- **Capability Modules** — Beautiful animated skill bars
- **Project Model Cards** — Real Kaggle ML projects with full modal details
- **Live Project Recommender** — Dynamic interest-based recommendations
- **Knowledge Graph** — Visual connections between skills & projects
- **Command Palette** — ⌘K navigation
- **Glassmorphism + Premium Design** — Original futuristic design language
- **Recruiter-optimized** — Resume, GitHub, top projects visible in < 10s

## Tech Stack

Next.js 16 + TypeScript + Tailwind + Framer Motion + Three.js + Lucide

## Quick Start

```bash
npm install
npm run dev
```

Build:
```bash
npm run build
```

## Links (included)

- GitHub: https://github.com/sanskriti234
- LinkedIn: https://www.linkedin.com/in/sanskriti-mishra-718884331/
- Kaggle: https://www.kaggle.com/sakshi231204
- HackerRank: https://www.hackerrank.com/profile/mishrasanskriti3

## Projects Included (All ML, student-friendly)

1. Game Academic Performance Predictor
2. Naive Bayes Classifier (from scratch)
3. Student Performance Prediction
4. Breast Cancer Diagnosis
5. Sentiment Analysis on Reviews
6. House Price Regression

All have real Kaggle datasets and GitHub links.

## 📧 Contact Form - Real Email Sending (EmailJS)

The "Communication Terminal" now **actually sends emails** to your inbox using **EmailJS**.

### Step-by-step Setup

1. **Go to EmailJS** → [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up (free)
3. Create a new **Email Service** (choose **Gmail** — easiest)
4. Create an **Email Template** (you can use this example):

   **Template Content** (copy this):

   ```html
   Name: {{from_name}}
   Email: {{from_email}}

   {{message}}

   ---
   Reply to: {{reply_to}}
   ```

5. Go to **Account → API Keys** and copy:
   - **Service ID**
   - **Template ID**
   - **Public Key**

6. In your project, create a file named `.env.local` in the root folder:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

7. Restart the dev server:
   ```bash
   npm run dev
   ```

Now when someone submits the form, you will receive a **real email** in your inbox.

---

## Files Related to Contact

- `app/components/Contact.tsx` → The actual working form
- `.env.local` → (you create this) → Contains your EmailJS keys

---

## Other Links

- GitHub: https://github.com/sanskriti234
- LinkedIn: https://www.linkedin.com/in/sanskriti-mishra-718884331/
- Kaggle: https://www.kaggle.com/sakshi231204

---

**Built with:** Next.js 16 • TypeScript • Tailwind • Framer Motion • EmailJS

This portfolio is production-ready and recruiter-focused.


## Design

Completely original design language inspired by advanced AI systems: Glassmorphism + Neural grid + High-contrast premium dark theme.

**This is production-ready and ready to deploy to Vercel.**
