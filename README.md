# 🤖 AI Website Summarizer

A small web app where users can enter any **public URL**, the app fetches the visible text from that page, sends it to an **AI model (DeepSeek R1 via OpenRouter)**, and displays a short summary. Built for a machine-coding assignment using **React + TypeScript + Vite + Tailwind CSS 4**.

---

## 📌 Assignment Requirements

This project implements the following:

-   Input field for a **URL**
-   Fetches **visible text** from the target webpage (basic implementation)
-   Sends content to an **AI API** (DeepSeek R1 via OpenRouter)
-   Displays a **short AI-generated summary**
-   Shows a **loading indicator** while processing
-   Uses **React with TypeScript**
-   Uses **Tailwind CSS** for styling
-   Implements **light/dark mode** using React Context + Tailwind `dark` class
-   Uses a **clean folder structure** and **basic API handling**

---

## 🧠 How AI Is Used

The app uses **OpenRouter’s Chat Completions API** with the **DeepSeek R1 free model** to generate summaries.

High-level flow:

1. User enters a **public URL**.
2. The app fetches and parses the page HTML via a CORS-friendly proxy.
3. Visible text is extracted and truncated (to keep prompt size safe).
4. This text is sent as a prompt to `deepseek/deepseek-r1-0528:free` via OpenRouter.
5. The model returns a **3–5 sentence summary**, which is displayed in the UI.

Conceptual AI request:

```ts
POST https://openrouter.ai/api/v1/chat/completions
Authorization: Bearer sk-or-v1-...
Content-Type: application/json

{
  "model": "deepseek/deepseek-r1-0528:free",
  "messages": [
    { "role": "system", "content": "You summarize webpages concisely." },
    { "role": "user", "content": "Summarize this content: <page text here>" }
  ]
}
🧱 Tech Stack
React 19 – UI library

TypeScript – Static typing

Vite 7 – Dev server & bundler

Tailwind CSS 4 – Styling (via @tailwindcss/vite)

Axios – HTTP requests

OpenRouter + DeepSeek R1 – AI backend for summarization

📦 Installation & Setup
1. Clone the repository
bash
git clone <YOUR_REPO_URL>.git
cd website-summarizer
2. Install dependencies
bash
npm install
This uses the dependencies defined in your package.json:

"react": "^19.2.0"

"react-dom": "^19.2.0"

"vite": "^7.2.4"

"tailwindcss": "^4.1.18"

"@tailwindcss/vite": "^4.1.18"

"axios": "^1.13.2"

TypeScript + ESLint for development.

3. Environment variables
Create a .env file in the project root:

text
VITE_OPENROUTER_API_KEY=sk-or-v1-your_api_key_here
VITE_SITE_URL=http://localhost:5173
VITE_SITE_NAME=AI Website Summarizer
Never commit .env to Git. It should be listed in .gitignore.
For others, provide a safe template: .env.example.

Example .env.example:

text
VITE_OPENROUTER_API_KEY=sk-or-v1-your_api_key_here
VITE_SITE_URL=http://localhost:5173
VITE_SITE_NAME=AI Website Summarizer
🚀 Running the Project
Development
bash
npm run dev
Open:

text
http://localhost:5173
Production build
bash
npm run build
Preview the build:

bash
npm run preview
Available scripts
From your package.json:

dev – Start Vite dev server

build – Type-check + build (tsc -b && vite build)

lint – Run ESLint

preview – Preview production build

📂 Project Structure (Recommended)
text
website-summarizer/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── UrlInput/
│   │   │   ├── UrlInput.tsx          # URL input + validation
│   │   │   └── index.ts
│   │   ├── SummaryDisplay/
│   │   │   ├── SummaryDisplay.tsx    # Summary UI
│   │   │   └── index.ts
│   │   ├── LoadingSpinner/
│   │   │   ├── LoadingSpinner.tsx    # Spinner / skeleton loader
│   │   │   └── index.ts
│   │   ├── ThemeToggle/
│   │   │   ├── ThemeToggle.tsx       # Light/Dark toggle button
│   │   │   └── index.ts
│   │   └── index.ts                  # Central component exports
│   ├── context/
│   │   ├── ThemeContext.tsx          # Dark/light mode logic
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useSummarizer.ts          # Handles fetch + AI summary flow
│   │   └── index.ts
│   ├── services/
│   │   ├── aiService.ts              # OpenRouter / DeepSeek client
│   │   ├── scraperService.ts         # Web scraping (via CORS proxy)
│   │   └── index.ts
│   ├── types/
│   │   ├── api.types.ts              # Types for AI & scraper responses
│   │   └── index.ts
│   ├── utils/
│   │   ├── validators.ts             # URL validation helpers
│   │   ├── helpers.ts                # Misc utilities (truncate, errors)
│   │   └── index.ts
│   ├── App.tsx                       # Main app layout
│   ├── main.tsx                      # React entry point
│   └── index.css                     # Tailwind v4 + custom CSS
├── .env                              # Local secrets (ignored by Git)
├── .env.example                      # Example env for others
├── .gitignore                        # Ignores node_modules, .env, etc.
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
🌗 Theme & Tailwind 4
Theme is controlled by a ThemeContext that toggles dark / light class on the root element.

Tailwind 4 is configured via @tailwindcss/vite in vite.config.ts and @import "tailwindcss"; in index.css.

Components use dark: variants, e.g.:

tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  ...
</div>
🧪 How to Use
Start the dev server: npm run dev.

Open http://localhost:5173.

Paste a public URL, for example:

text
https://en.wikipedia.org/wiki/Artificial_intelligence
Click “Generate Summary”.

You will see:

The loader/spinner while:

The page content is fetched and parsed.

The AI model (DeepSeek R1) generates a summary.

A Summary card with 3–5 sentences.

Use the theme toggle button in the top-right to switch between light and dark mode.

⚠️ Known Limitations
Some websites block scraping via CORS or bot protections.

Very large pages are truncated before being sent to AI.

The free DeepSeek/OpenRouter tier may have rate limits and occasional delays.

Highly dynamic SPA sites may not yield complete text when fetched as HTML.

✅ For Your Assignment Report
You can briefly explain:

“How AI was used”:
The app sends extracted webpage text to the deepseek/deepseek-r1-0528:free model via OpenRouter’s Chat Completions API, which returns a concise natural language summary.

“Tech choices”:

React + TypeScript for component-based UI with type safety

Vite for fast development and builds

Tailwind 4 for utility-first styling and easy dark mode

Axios for HTTP requests

Context API for global theme state
```
