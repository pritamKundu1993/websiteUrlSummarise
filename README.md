# 🤖 AI Website Summarizer

An AI-powered web application that takes any **public website URL**, fetches the visible text, sends it to an **AI model (DeepSeek R1 via OpenRouter)**, and displays a concise summary. Built with **React 19**, **TypeScript**, **Vite 7**, **Tailwind CSS v4**, and **Axios**.

---

## ✨ Features

-   🔗 **URL-based summarization** – Paste any public URL, get a short summary.
-   🤖 **DeepSeek R1 AI** – Uses `deepseek/deepseek-r1-0528:free` via OpenRouter.
-   🌗 **Dark/Light mode** – Theme toggle using React Context + Tailwind `dark` class.
-   🎨 **Modern UI** – Tailwind CSS v4 with responsive, clean layout.
-   ⏳ **Clear loading state** – Animated spinner/skeleton loader while AI works.
-   ✅ **Form validation** – Basic URL validation before sending requests.
-   🧩 **Typed codebase** – Full TypeScript support.
-   ⚡ **Fast dev experience** – Powered by Vite 7.

---

## 🧠 How AI Is Used

The app uses **OpenRouter’s Chat Completions API** with the **DeepSeek R1** model to generate summaries:

1. User enters a **website URL** in the input field.
2. The app fetches the HTML via a CORS-friendly proxy and extracts visible text.
3. The extracted text is **truncated** to a safe length and sent as a prompt to DeepSeek R1.
4. The model responds with a **3–5 sentence summary**.
5. The UI displays the summary in a formatted card.

The AI call looks conceptually like this (simplified):

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
```

folder structure

website-summarizer/
├── public/
│ └── vite.svg
├── src/
│ ├── components/
│ │ ├── UrlInput/
│ │ │ ├── UrlInput.tsx # URL input + validation
│ │ │ └── index.ts
│ │ ├── SummaryDisplay/
│ │ │ ├── SummaryDisplay.tsx # Summary UI
│ │ │ └── index.ts
│ │ ├── LoadingSpinner/
│ │ │ ├── LoadingSpinner.tsx # Spinner / skeleton loader
│ │ │ └── index.ts
│ │ ├── ThemeToggle/
│ │ │ ├── ThemeToggle.tsx # Light/Dark switch
│ │ │ └── index.ts
│ │ └── index.ts
│ ├── context/
│ │ ├── ThemeContext.tsx # Theme state via Context
│ │ └── index.ts
│ ├── hooks/
│ │ ├── useSummarizer.ts # Handles fetch + AI summary flow
│ │ └── index.ts
│ ├── services/
│ │ ├── aiService.ts # OpenRouter / DeepSeek R1 client
│ │ ├── scraperService.ts # Fetch + parse webpage content
│ │ └── index.ts
│ ├── types/
│ │ ├── api.types.ts # Types for AI and scraper responses
│ │ └── index.ts
│ ├── utils/
│ │ ├── validators.ts # URL validation helpers
│ │ ├── helpers.ts # Misc utilities (truncate, error text)
│ │ └── index.ts
│ ├── App.tsx # Main app layout & wiring
│ ├── main.tsx # React root + Vite entry
│ └── index.css # Tailwind v4 base + custom CSS
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
