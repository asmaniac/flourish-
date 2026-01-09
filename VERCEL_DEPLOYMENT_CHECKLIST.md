# 🚀 Vercel Deployment Checklist

## ✅ Pre-Deployment Checklist

### Step 1: Verify Your Code is Ready
- [x] **Build passes locally** - ✅ Just verified!
- [ ] **All environment variables documented** - See below
- [ ] **Code is committed to Git** - Need to verify
- [ ] **GitHub repository exists** - Need to verify

### Step 2: Prepare Your Environment Variables

You'll need these **4 environment variables** in Vercel:

1. **DATABASE_URL**
   - Your Neon PostgreSQL connection string
   - ⚠️ **IMPORTANT**: Remove `channel_binding=require` if present
   - Format: `postgresql://user:password@host:5432/database?sslmode=require`

2. **NEXTAUTH_SECRET**
   - A random secret string (at least 32 characters)
   - Generate one using: `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`
   - Or use: `openssl rand -base64 32`

3. **NEXTAUTH_URL**
   - Will be: `https://your-project-name.vercel.app`
   - You'll get this after first deployment
   - Can update later if needed

4. **OPENAI_API_KEY**
   - Your OpenAI API key (starts with `sk-`)
   - Already tested and working! ✅

---

## 📋 Step-by-Step Deployment Process

### Phase 1: Prepare Your GitHub Repository

**What I need from you:**
1. Do you already have a GitHub repository for this project?
   - If YES: What's the repository URL?
   - If NO: We'll create one together

2. Is your code already committed to Git?
   - Run this to check: `git status`
   - If not, we'll commit everything

**Actions needed:**
```bash
# If not already a git repo:
git init
git add .
git commit -m "Prepare for Vercel deployment"

# If you have a GitHub repo:
git remote add origin https://github.com/YOUR_USERNAME/flourish-.git
git push -u origin main
```

---

### Phase 2: Deploy to Vercel

**Option A: Using Vercel Dashboard (Recommended for first time)**

1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub (recommended)

2. **Create New Project**
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings ✅

3. **Configure Project Settings**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Add Environment Variables** (BEFORE clicking Deploy!)
   - Click "Environment Variables" section
   - Add each variable:
     - **Name**: `DATABASE_URL`
     - **Value**: Your Neon connection string (without `channel_binding=require`)
     - **Environments**: Select all (Production, Preview, Development)
     - Click "Add"
   
   - Repeat for:
     - `NEXTAUTH_SECRET` (generate a new one for production!)
     - `NEXTAUTH_URL` (leave empty for now, we'll update after first deploy)
     - `OPENAI_API_KEY`

5. **Deploy!**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)

---

### Phase 3: Post-Deployment Setup

**After first deployment:**

1. **Get Your Production URL**
   - Vercel will show: `https://your-project-name.vercel.app`
   - Copy this URL

2. **Update NEXTAUTH_URL**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Update `NEXTAUTH_URL` to: `https://your-project-name.vercel.app`
   - Redeploy (or it will auto-redeploy on next push)

3. **Run Database Migrations**
   - Your database needs the schema tables
   - **Option 1**: Use Vercel CLI (recommended)
     ```bash
     npm i -g vercel
     vercel login
     vercel env pull .env.local
     npx prisma migrate deploy
     ```
   - **Option 2**: Use Neon Dashboard SQL Editor
     - Go to your Neon project
     - Open SQL Editor
     - Run the migration SQL from `prisma/migrations/`

4. **Seed Coach Accounts** (if needed)
   ```bash
   vercel env pull .env.local
   npm run seed:coaches
   ```

---

### Phase 4: Verify Everything Works

Test these features:
- [ ] Home page loads
- [ ] Registration works
- [ ] Login works
- [ ] Journal entries save
- [ ] Mood tracking works
- [ ] AI analysis works
- [ ] Navigation works
- [ ] Coach-only pages (if logged in as coach)

---

## 🔧 Troubleshooting

### Build Fails
- Check Vercel build logs
- Verify all environment variables are set
- Make sure `DATABASE_URL` doesn't have `channel_binding=require`

### Database Connection Fails
- Verify `DATABASE_URL` is correct in Vercel
- Check Neon allows connections from Vercel IPs
- Remove `channel_binding=require` from connection string

### Session Not Working
- Verify `NEXTAUTH_URL` matches your Vercel domain
- Check `NEXTAUTH_SECRET` is set

### Prisma Client Errors
- Already handled with `postinstall: "prisma generate"` ✅

---

## 📝 Next Steps

**Tell me:**
1. Do you have a GitHub repository? (Yes/No + URL if yes)
2. Is your code committed to Git? (Run `git status` and tell me)
3. Do you have a Vercel account? (Yes/No)

Once you answer these, I'll guide you through the exact steps! 🚀

