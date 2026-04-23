<div align="center">

# 📱  Play Store

**A modern, responsive app marketplace UI built with React — browse, explore, and discover mobile apps with ease.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)](https://reactrouter.com)

</div>

---

## Overview

SK Play Store is a Google Play-inspired app marketplace built as a frontend project. It loads apps from a local JSON dataset and lets users browse listings and view full app details on dedicated pages.

The focus is on clean UI design, dynamic rendering, and a smooth routing experience.

---

## Features

- Browse a collection of apps with images, ratings, and categories
- Dedicated detail page for each app
- Category-based app organization
- Fully responsive across mobile, tablet, and desktop
- Fast dev experience powered by Vite

---

## Tech Stack

| Layer | Tool |
|---|---|
| UI | React 19 |
| Build | Vite |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| Data | Local JSON (`public/data.json`) |

---

## Project Structure

```
SK-PLAY-STORE/
├── public/
│   └── data.json
└── src/
    ├── Components/
    │   ├── AppCard/
    │   └── AppDetails/
    ├── Pages/
    ├── Router/
    ├── App.jsx
    └── main.jsx
```

---

## Getting Started

```bash
git clone <repo-url>
cd PLAY-STORE
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Routes

| Route | Page |
|---|---|
| `/` | Home — app listing |
| `/app/:id` | App details |

---

## Sample Data

```json
{
  "id": 1,
  "name": "WhatsApp",
  "category": "Social",
  "rating": 4.8,
  "image": "url",
  "description": "Messaging app for communication"
}
```



---

<div align="center">

Built with ❤️ for learning React & modern UI design

</div>
