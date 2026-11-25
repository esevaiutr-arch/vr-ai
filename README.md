# VR AI – Starter Project

This is a starter implementation, not a deployed live service.

## Recommended services
- Vercel: host the Next.js website.
- Supabase: email magic-link + Google OAuth, database and cross-device sync.
- OpenAI API: AI chat responses.

## Setup
1. Create a Supabase project.
2. In Supabase SQL Editor, run `supabase-schema.sql`.
3. In Supabase Authentication > URL Configuration, set your local URL (`http://localhost:3000`) and later your Vercel production URL.
4. Enable Email provider. For Google login, configure Google OAuth credentials in Supabase Authentication > Providers > Google.
5. Copy `.env.example` to `.env.local` and fill in your Supabase URL, anon key and OpenAI API key.
6. Run `npm install`, then `npm run dev`.
7. Deploy the project to Vercel and add the same environment variables in Vercel project settings.

## Current starter features
- Email magic-link sign-in and Google sign-in UI.
- Per-user task and reminder storage in Supabase.
- Tasks remain visible until marked complete; completed tasks can be reopened.
- AI chat API route (requires OpenAI API key).
- Installable PWA manifest and a basic push service worker.

## Important limitations before production
- The app is not deployed and no accounts, API keys, domain, or hosting have been connected.
- Scheduled push delivery is NOT implemented yet. A service worker alone cannot send scheduled notifications. Add a secure scheduled job (for example Supabase Edge Function + scheduled trigger) and Web Push subscription storage before relying on alerts.
- Google OAuth requires credentials and a redirect URL configured in Google Cloud and Supabase.
- AI chat currently answers questions but does not yet execute natural-language task/date creation. That requires a secure tool-calling backend and confirmation flow.
- Add rate limiting, audit logging, backups, error monitoring, and privacy policy before public use.
- Never commit `.env.local` or expose the OpenAI API key in browser code.
