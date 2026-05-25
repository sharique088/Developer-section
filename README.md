# Hayy.AI — Developer Panel

Next.js implementation of the public Figma design **Developer panel** ([Figma file](https://www.figma.com/design/rkdN4R2XKQeJyf7NnRYGhT/Developer-panel)).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Prototype flows

| Action | Behavior |
|--------|----------|
| **Book a Demo** (hero) | Opens the demo request modal |
| **Book a Demo** (footer CTA) | Opens the same modal |
| **List your Project** | Opens the demo request modal |
| **Developer Login** | Redirects to https://developer.hayy.ai |
| **Escape** / backdrop click | Closes the modal |

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- Work Sans (Google Fonts)

Design tokens match Figma: `#303044`, `#22B1B7`, `#5E5E6D`, `#8E8E93`, `#19192F`.

Assets are exported from Figma into `public/images/`.
