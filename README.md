# Bowlvana.in Website

A professional React website for Bowlvana.in — a healthy cloud kitchen in Hyderabad.

## Features

- React + Vite project structure
- White, black, and mustard orange brand palette
- Clear page navigation for Intro, Menu, Subscription, Contact Us, and About Us
- External CSS with clean layout and responsive design
- Subscription form that opens email draft to `vsaishiva99@gmail.com`
- Contact details and founder information displayed professionally

## Files

- `index.html` — Vite entry page
- `package.json` — project configuration
- `vite.config.js` — Vite React plugin config
- `src/main.jsx` — application bootstrap
- `src/App.jsx` — main app component
- `src/components/PageNav.jsx` — page navigation component
- `src/components/SectionHeader.jsx` — section header component
- `src/styles.css` — global styles

## How to run

1. Open PowerShell in `C:\Users\vamsh\bowlvana-website`
2. Copy `.env.example` to `.env` and fill in your SMTP configuration
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL shown in the console

## Notes

- The subscription form now sends collected data directly to `vsaishiva99@gmail.com` via server-side email.
- No mail client opens when users submit the form.
- You must copy `.env.example` to `.env` and fill in SMTP credentials before email sending works.
- Use a valid SMTP provider (for example `smtp.gmail.com` with app-password credentials for Gmail).
- For development, `npm run dev` starts both Vite and the email API server.
- For production, run `npm run build` and then `npm run start` to serve the built app and API from the same server.

## Deploying to your domain

1. Deploy the project to a Node-capable host such as Render, Railway, Fly.io, or a VPS.
2. Make sure the host uses `npm install`, `npm run build`, and `npm run start`.
3. Configure your host’s custom domain settings with `bowlvana.in`.
4. Update your domain DNS:
   - Add an A record pointing `@` to your host’s IP address, or
   - Add a CNAME record for `www` pointing to your host’s domain target.
5. In the hosting dashboard, verify the custom domain and wait for DNS propagation.

If you only want a static landing page, you can also deploy the built `dist` folder to Netlify or Cloudflare Pages, but the email backend will need a separate Node host.
