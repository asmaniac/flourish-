# Authentication Setup Guide

All authentication files have been created! Here's what you need to do next:

## ✅ Files Created

1. **lib/db/prisma.ts** - Database client
2. **lib/auth/config.ts** - NextAuth configuration
3. **app/api/auth/[...nextauth]/route.ts** - NextAuth API route
4. **app/api/auth/register/route.ts** - Registration API endpoint
5. **app/login/page.tsx** - Login page
6. **app/register/page.tsx** - Sign up page
7. **components/providers.tsx** - Session provider wrapper
8. **scripts/seed-coaches.ts** - Script to create coach accounts
9. **types/next-auth.d.ts** - TypeScript types for NextAuth

## 🚀 Setup Steps

### 1. Make sure your `.env.local` file has:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-random-secret-here"
NEXTAUTH_URL="http://localhost:3000"
OPENAI_API_KEY="your-openai-key"
```

**To generate NEXTAUTH_SECRET**, run:
```bash
openssl rand -base64 32
```

Or use any long random string (at least 32 characters).

### 2. Install tsx (for running the seed script):

```bash
npm install --save-dev tsx
```

### 3. Create the coach accounts:

```bash
npm run seed:coaches
```

This will create three coach accounts:
- `rob@launchpadphilly.org` / `lpuser1`
- `sanaa@launchpadphilly.org` / `lpuser2`
- `taheera@launchpadphilly.org` / `lpuser3`

### 4. Start your dev server:

```bash
npm run dev
```

### 5. Test it out:

1. Go to `http://localhost:3000/register` to create a student account
2. Go to `http://localhost:3000/login` to log in
3. Try logging in with one of the coach accounts

## 📝 How It Works

- **Students** can register at `/register` and will have role "student"
- **Coaches** are pre-seeded with the accounts above and have role "coach"
- **Login** uses NextAuth with credentials provider
- **Sessions** are stored as JWT tokens
- **Passwords** are hashed with bcrypt

## 🔒 Role-Based Access (RBA)

To protect pages for coaches only, you can use:

```typescript
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";

const session = await getServerSession(authOptions);

if (session?.user?.role !== "coach") {
  // Redirect or show error
}
```

## 🐛 Troubleshooting

- **"NEXTAUTH_SECRET is missing"**: Make sure your `.env.local` file has the secret
- **"Cannot find module"**: Run `npm install` to ensure all dependencies are installed
- **Database errors**: Make sure you've run `npx prisma migrate dev` and `npx prisma generate`

