# Prep-Master

An AI-powered interview preparation platform that generates custom interview questions and runs realistic voice-based mock interviews.

## Features

- AI-generated interview questions tailored to role and experience level (powered by Google Gemini)
- Realistic voice interview sessions using Vapi
- User authentication and session management via Clerk
- Interview history and feedback stored with Supabase

## Tech Stack

- **Framework:** Next.js (App Router)
- **Auth:** Clerk
- **Database:** Supabase
- **AI:** Google Gemini API
- **Voice:** Vapi

## Getting Started

Install dependencies and run the dev server:

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Environment Variables

You'll need to set up the following in a `.env.local` file:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `GEMINI_API_KEY`
- `NEXT_PUBLIC_VAPI_WEB_TOKEN`

## Deployment

Deployed on [Vercel](https://vercel.com).