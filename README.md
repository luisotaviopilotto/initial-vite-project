# Vite + React + TypeScript + TailwindCSS + ShadCN

This is a modern React project template built with Vite, featuring a powerful tech stack for rapid development:

- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React 19](https://react.dev/) - JavaScript library for user interfaces
- 🔷 [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- 🎨 [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- 🎯 [ShadCN](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS

## Features

- Fast development and build times with Vite
- Type-safe development with TypeScript
- Modern CSS with Tailwind's utility-first approach
- Beautiful, accessible components from ShadCN
- ESLint configuration for code quality
- Path aliases for clean imports (@/ prefix)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/luisotaviopilotto/initial-vite-project.git

# Navigate to project directory
cd initial-vite-project

# Install dependencies
pnpm install
```

## Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run ESLint
pnpm lint
```

## Project Structure

```
├── src/
│   ├── components/     # React components
│   │   └── ui/        # ShadCN UI components
│   ├── lib/           # Utility functions
│   ├── assets/        # Static assets
│   ├── App.tsx        # Main App component
│   └── main.tsx       # Application entry point
├── public/            # Public static files
└── [config files]     # Various configuration files
```

## Adding ShadCN Components

This project uses ShadCN for UI components. To add a new component:

```bash
pnpx shadcn-ui@latest add [component-name]
```

Example:

```bash
pnpx shadcn-ui@latest add button
```

## Development Guidelines

- Use TypeScript for type-safe development
- Follow the existing project structure
- Utilize ShadCN components when available
- Write clean, maintainable code
- Follow ESLint rules for consistent code style

## ESLint Configuration

The project includes a robust ESLint configuration for TypeScript and React. It includes:

- Type-aware lint rules
- React-specific linting with eslint-plugin-react-x
- DOM-specific rules with eslint-plugin-react-dom

## License

MIT
