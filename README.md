# Trust

A modern financial contribution platform built with React, TypeScript, and a powerful stack of tools for rapid development and scalability.

## 🚀 Tech Stack

| Technology                       | Purpose                                              |
| -------------------------------- | ---------------------------------------------------- |
| **React 19**                     | UI library for building user interfaces              |
| **TypeScript**                   | Type-safe JavaScript for better developer experience |
| **Vite**                         | Blazing fast build tool and dev server               |
| **Tailwind CSS**                 | Utility-first CSS framework for rapid UI development |
| **Zustand**                      | Lightweight state management                         |
| **TanStack Query (React Query)** | Server state management and data fetching            |
| **React Router**                 | Client-side routing                                  |
| **Axios**                        | HTTP client for API requests                         |

---

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd trust

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks (React Query hooks)
├── lib/            # Utilities and configurations
├── pages/          # Page components
├── services/       # API service functions
├── stores/         # Zustand stores
├── types/          # TypeScript type definitions
├── App.tsx         # Main app component with routes
├── main.tsx        # App entry point with providers
└── index.css       # Global styles + Tailwind
```

---

## 📄 License

MIT
