# AI Website Scaffold Prompt

You are an expert frontend developer, UX/UI designer, and web architect. Read this entire prompt carefully and use it as the only context. Your task is to generate a complete website scaffold, including all required configuration files, package setup, folder structure, component files, and styling. Produce the full code for every file exactly as requested.

---

## Website Concept

Create a modern landing website for a fitness brand called **IRONX**. The site should be a polished single-page fitness/gym landing page with a strong, dark look and red accent branding. The website must be fully responsive, accessible, and visually consistent across desktop, tablet, and mobile.

## Technology Stack

- React 19
- Vite
- Tailwind CSS v4
- React Router DOM
- Supabase JS (client helper only)
- Framer Motion
- Lucide React icons
- ESLint for linting

## High-level Requirements

1. Build a frontend-only project with React, Vite, and Tailwind.
2. Use a single route for a one-page layout.
3. Provide a complete folder structure with exact file names.
4. Use a dark fitness theme with red accent colors.
5. Include component-based sections: Hero, Stats, WhyChooseUs, Gallery, Testimonials, Contact.
6. Provide `Navbar` and `Footer` layout components.
7. Include reusable hooks and a Supabase helper file.
8. Use descriptive CSS classes and Tailwind utilities.
9. Use a consistent color palette and typography guidelines.
10. Explain the folder structure and file responsibilities in the prompt only; actual output should be code only.

## Color Theme

- Primary background: `#0f172a` (very dark navy)
- Surface background: `#111827`
- Secondary surface: `#181b2a`
- Primary text: `#f8fafc`
- Secondary text: `#94a3b8`
- Accent red: `#ef4444`
- Accent red dark: `#dc2626`
- Muted border: `#334155`
- Soft white: `#e2e8f0`

## Fonts and Typography

- Body font: system UI stack or a neutral sans-serif.
- Headline style: uppercase, heavy weight, large font size.
- Button text: uppercase, tracking-widest.
- Paragraph text: slightly muted with high readability.

## Folder Structure

Create this exact folder and file structure:

```
client/
  .gitignore
  package.json
  vite.config.js
  index.html
  src/
    main.jsx
    App.jsx
    index.css
    assets/
      fonts/
      images/
    components/
      layout/
        Navbar.jsx
        Footer.jsx
      sections/
        Hero.jsx
        StatsBanner.jsx
        WhyChooseUs.jsx
        Gallery.jsx
        Testimonials.jsx
        Contact.jsx
      ui/
    hooks/
      useTypingEffect.js
      useScrollReveal.js
      useSwipeGallery.js
    lib/
      supabase.js
    pages/
      Home.jsx
```

## Configuration Files

Include these files and settings:

- `package.json` with dependencies and scripts
- `vite.config.js` configured for React
- `index.html` with a root div and page title
- `src/main.jsx` as React entry point
- `src/App.jsx` with `BrowserRouter` and route setup
- `src/index.css` with Tailwind directives and base theme utilities

## Required File Details

### `package.json`
- `scripts`: `dev`, `build`, `preview`, `lint`
- dependencies: `react`, `react-dom`, `react-router-dom`, `@supabase/supabase-js`, `framer-motion`, `lucide-react`
- devDependencies: `vite`, `@vitejs/plugin-react`, `tailwindcss`, `postcss`, `autoprefixer`, `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `@types/react`, `@types/react-dom`, `globals`

### `vite.config.js`
- Import `defineConfig` from `vite`
- Import `react` from `@vitejs/plugin-react`
- Export setup for React plugin

### `index.html`
- Add viewport, charset, title `IRONX Gym` and `div#root`

### `src/main.jsx`
- Render `<App />` inside `StrictMode`
- Import `index.css`

### `src/App.jsx`
- Use `BrowserRouter`
- Always render `Navbar` and `Footer`
- Have a route `/` for `Home`

### `src/index.css`
- Include Tailwind base, components, utilities
- Add custom styles for background, body, anchor reset, and global scroll behavior
- Add utility classes for text selection and section spacing

### `src/components/layout/Navbar.jsx`
- Responsive navigation with desktop links and mobile menu
- Brand text `IRONX`
- Active menu toggle buttons using `Menu` and `X` icons from `lucide-react`
- Use anchor links for section IDs

### `src/components/layout/Footer.jsx`
- Brand area and footer navigation links
- Copyright text and small brand note

### `src/components/sections/Hero.jsx`
- Full-screen hero section with background image overlay
- Typing effect for heading text using `useTypingEffect`
- CTA button `Contact Us`

### `src/components/sections/StatsBanner.jsx`
- A stats section with 3 or 4 stats cards
- Each card uses accent colors and bold numbers

### `src/components/sections/WhyChooseUs.jsx`
- Section with a heading and three benefit cards
- Use short paragraphs and icons or accent markers

### `src/components/sections/Gallery.jsx`
- Simple hero gallery grid with 4 fitness image cards
- Use uniform sizing, overlay text, and rounded corners

### `src/components/sections/Testimonials.jsx`
- Section with 2 or 3 testimonial cards
- Include author name and small quote

### `src/components/sections/Contact.jsx`
- A contact CTA with email, location, or simple input fields
- Include a join button or contact button

### `src/hooks/useTypingEffect.js`
- Hook that animates typed text from a string value
- Should return current typed substring

### `src/hooks/useScrollReveal.js`
- Hook with reveal-on-scroll class toggling
- Use `IntersectionObserver` and a ref

### `src/hooks/useSwipeGallery.js`
- Hook to add swipe behavior to a gallery container
- Add pointer or touch event handling

### `src/lib/supabase.js`
- Basic Supabase client helper stub
- Import `createClient` from `@supabase/supabase-js`
- Export `supabase` instance with placeholder URL and key variables

### `src/pages/Home.jsx`
- Import layout and all sections
- Render the page sections inside a top-level `div`
- Ensure the page background uses the dark theme

## Prompt Output Requirements

When generating code from this prompt, follow these rules:

1. Only output code file contents.
2. Do not provide extra explanation, analysis, or commentary.
3. Use the requested file tree structure exactly.
4. Provide each file using a clear separator comment such as:
   - `--- file: src/App.jsx ---`
   - `--- file: src/components/layout/Navbar.jsx ---`
5. Include full file contents in each block.
6. Do not omit import statements or closing tags.
7. Do not write partial snippets; return each file complete.

## Website Behavior and UX

- The homepage should scroll to anchored sections when nav links are clicked.
- The hero section should feel immersive, with a background image and dark overlay.
- The overall look should be polished, modern, and fitness-oriented.
- Buttons should have hover states and clear CTA styling.
- Section headings should be bold, uppercase, and easy to scan.
- The layout should work smoothly on mobile and desktop.

## Use Cases for This Prompt

- Ask an AI to generate the full website source code from scratch.
- Ask an AI to provide the complete file tree and contents.
- Ask an AI to output all code for each file in one response.

## Phase-wise Plan

The AI should respond in two clear phases:

1. **Phase 1: Setup commands and folder structure**
   - Provide the exact command line sequence to create the project folder and files.
   - Include `mkdir`, `cd`, and `npm create vite@latest` or `npm init` style commands.
   - Include commands to install dependencies and devDependencies.
   - Include commands to initialize Tailwind CSS if needed.
   - Do not generate code in this phase; only generate the shell commands and folder structure plan.

2. **Phase 2: File code generation**
   - Provide the full source code for every file in the exact structure.
   - Use section headers such as `--- file: src/App.jsx ---` before each file.
   - Include code for configuration files, entry files, components, hooks, and helpers.
   - Keep the code complete and self-contained.

## Prompt Execution Rules

When the AI generates output, it must:

- First output the Phase 1 command plan.
- Then output Phase 2 complete code for all files.
- Never mix command lines and file code in the same block.
- Use the exact folder structure and file names from this prompt.
- Use the dark red fitness theme colors and responsive layout.

## Final Instruction

Create the website with the exact folder structure and colors above. Use the dark red accent theme. Respond with the complete code for every file. No additional text.
