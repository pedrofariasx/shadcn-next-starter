# AI Development Rules - Next.js Boilerplate

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Components**: Shadcn UI + Lucide React
- **ORM**: Prisma
- **Auth**: Auth.js (v5)
- **State/Data Fetching**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod
- **Toasts**: Sonner

## Coding Standards

### 1. Components
- Use Server Components by default.
- Add `"use client"` only when interactivity (hooks, event listeners) is required.
- Place reusable UI components in `src/components/ui`.
- Group feature-specific components in `src/features/[feature-name]/components`.

### 2. Data Fetching
- Favor Server Components for initial data fetching via Prisma.
- Use TanStack Query for client-side state, mutations, and revalidation.
- Keep Prisma logic in `src/lib/prisma.ts` or Server Actions.

### 3. Server Actions
- Use Server Actions for all mutations (forms, buttons).
- Place actions in `src/actions` or `src/features/[feature-name]/actions.ts`.
- Always validate input using Zod schemas.

### 4. Naming Conventions
- Components: PascalCase (e.g., `UserCard.tsx`).
- Utilities/Hooks: camelCase (e.g., `useAuth.ts`, `formatDate.ts`).
- Directories: kebab-case (e.g., `feature-name`).

### 5. Type Safety
- Avoid `any` at all costs.
- Define interfaces/types for all data structures.
- Use Zod for runtime validation and type inference.

### 6. Styling
- Use Tailwind utility classes.
- Follow Shadcn UI patterns for consistency.
- Use `cn()` utility from `src/lib/utils.ts` for conditional classes.

## Project Structure
```text
src/
├── actions/        # Global Server Actions
├── app/           # App Router (pages, layouts, api)
├── components/    # Global components
│   └── ui/        # Shadcn UI components
├── features/      # Feature-based modules
├── hooks/         # Custom React hooks
├── lib/           # Library configurations (prisma, auth, utils)
├── providers/     # React context providers
└── types/         # Global TypeScript definitions
```
