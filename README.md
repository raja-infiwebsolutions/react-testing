React Testing App (migrated contact page)

This folder contains a Vite + React application that reproduces the UI found at htmlfiles/contact.html.

Getting started

1. Change into the react-testing folder:
   cd react-testing

2. Install dependencies:
   npm install

3. Run the dev server:
   npm run dev

4. Build for production:
   npm run build

Notes

- The original HTML file remains at htmlfiles/contact.html and was used as the source of truth for this migration.
- This project uses the Tailwind browser CDN and Lucide icon CDN as the original page did; if you prefer a local build of Tailwind, install and configure Tailwind locally.
- Any referenced image assets from the original page should be copied into src/assets/ if available; currently this folder contains only a .gitkeep placeholder. If assets from htmlfiles/contact.html are missing, add them to src/assets/ using the same filenames.
