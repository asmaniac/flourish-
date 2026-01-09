# Role-Based Access (RBA) Testing Guide

## ✅ Implementation Complete

### What Was Implemented:

1. **User Roles** ✅
   - Roles exist in database: `student` (default) and `coach`
   - Schema: `prisma/schema.prisma` - User model has `role` field

2. **Coach Accounts** ✅
   - Three coach accounts seeded:
     - `rob@launchpadphilly.org` / `lpuser1`
     - `sanaa@launchpadphilly.org` / `lpuser2`
     - `taheera@launchpadphilly.org` / `lpuser3`

3. **RBA Middleware/Checks** ✅
   - **Server-side**: `lib/auth/middleware.ts`
     - `requireCoach()` - Redirects if not coach
     - `requireAuth()` - Redirects if not authenticated
     - `getSession()` - Returns session without redirect
   - **Client-side**: `lib/auth/use-role.ts`
     - `useRequireCoach()` - Hook for coach-only pages
     - `useRequireAuth()` - Hook for authenticated pages
     - `useRole()` - Hook to check role without redirect

4. **Protected Pages** ✅
   - **Page 6: Rubric Evidence** (`/rubric-evidence`)
     - Coach-only access
     - Redirects students to home page
     - Redirects unauthenticated users to login
   - **Page 7: Reflection** (`/reflection`)
     - Coach-only access
     - Redirects students to home page
     - Redirects unauthenticated users to login

5. **Navigation** ✅
   - Coach-only links appear in navigation for coaches
   - "Rubric Evidence" and "Reflection" links visible only to coaches

## 🧪 Testing Instructions

### Test 1: Coach Access (Should Work)

1. **Login as a coach:**
   - Go to `/login`
   - Email: `rob@launchpadphilly.org`
   - Password: `lpuser1`

2. **Verify coach navigation:**
   - Check navigation bar - you should see:
     - Your name/email
     - "Rubric Evidence" link
     - "Reflection" link
     - "Journal" link
     - "Mood Tracker" link
     - "Logout" button

3. **Access protected pages:**
   - Click "Rubric Evidence" → Should load successfully
   - Click "Reflection" → Should load successfully
   - Direct URL: `/rubric-evidence` → Should work
   - Direct URL: `/reflection` → Should work

### Test 2: Student Access (Should Be Blocked)

1. **Login as a student:**
   - Go to `/register` and create a new account (or use existing student account)
   - Student accounts have role "student" by default

2. **Verify student navigation:**
   - Check navigation bar - you should see:
     - Your name/email
     - "Journal" link
     - "Mood Tracker" link
     - "Logout" button
     - **NO "Rubric Evidence" or "Reflection" links**

3. **Try to access protected pages (should be blocked):**
   - Direct URL: `/rubric-evidence` → Should redirect to home page
   - Direct URL: `/reflection` → Should redirect to home page

### Test 3: Unauthenticated Access (Should Be Blocked)

1. **Logout** (if logged in)

2. **Try to access protected pages:**
   - Direct URL: `/rubric-evidence` → Should redirect to `/login`
   - Direct URL: `/reflection` → Should redirect to `/login`

### Test 4: API Route Protection

1. **As a coach:**
   - Make request to `/api/coach` → Should return 200 with user info

2. **As a student:**
   - Make request to `/api/coach` → Should return 403 Forbidden

3. **Unauthenticated:**
   - Make request to `/api/coach` → Should return 401 Unauthorized

## 📝 Coach Accounts

Use these accounts to test coach access:

| Email | Password | Name |
|-------|----------|------|
| rob@launchpadphilly.org | lpuser1 | Rob |
| sanaa@launchpadphilly.org | lpuser2 | Sanaa |
| taheera@launchpadphilly.org | lpuser3 | Taheera |

## 🔧 How to Use RBA in Your Code

### In Client Components (Pages):

```typescript
import { useRequireCoach } from "@/lib/auth/use-role";

export default function MyCoachPage() {
  const { session, isCoach, isLoading } = useRequireCoach();

  if (isLoading) return <div>Loading...</div>;
  if (!isCoach) return null; // Will redirect

  return <div>Coach-only content</div>;
}
```

### In Server Components:

```typescript
import { requireCoach } from "@/lib/auth/middleware";

export default async function MyCoachPage() {
  const session = await requireCoach(); // Redirects if not coach
  
  return <div>Coach-only content for {session.user.email}</div>;
}
```

### In API Routes:

```typescript
import { auth } from "@/lib/auth/auth";

export async function GET() {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "coach") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Coach-only logic here
}
```

## ✅ Checklist Status

- [x] Create user roles (student, coach/instructor)
- [x] Set up coach accounts
- [x] Add RBA middleware/checks
- [x] Protect Page 6 (Rubric Evidence)
- [x] Protect Page 7 (Reflection)
- [ ] Test access control (Ready for you to test!)




