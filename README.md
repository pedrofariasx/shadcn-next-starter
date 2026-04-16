# Shadcn Next.js Boilerplate

A modern, production-ready Next.js boilerplate with a robust tech stack.

## Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/) + [Lucide React](https://lucide.dev/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Auth**: [Auth.js v5](https://authjs.dev/)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Toasts**: [Sonner](https://fellfionn.com/sonner/)

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

## Getting Started

1. **Clone and Install**:
   ```bash
   git clone https://github.com/pedrofariasx/shadcn-next-starter
   cd shadcn-next-starter
   npm install
   ```

2. **Environment Setup**:
   Copy the example environment file and fill in the values:
   ```bash
   cp .env.example .env
   ```
   *Note: `AUTH_SECRET` can be generated with `npx auth secret`.*

3. **Database Setup**:
   Configure your `DATABASE_URL` in `.env` and run:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

## AI Development

This project includes an [`AI_RULES.md`](AI_RULES.md) file to guide AI assistants in maintaining code quality and consistency.
# shadcn-next-starter
