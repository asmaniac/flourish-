# 🚀 Deploying to Vercel

Deploying Flourish to Vercel is straightforward! Here's a step-by-step guide.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) (free tier works great)
2. **GitHub Account**: Your code should be in a GitHub repository
3. **Neon Database**: Your PostgreSQL database should be set up and accessible

## Step 1: Push Your Code to GitHub

If you haven't already:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/flourish-.git
git push -u origin main
```

## Step 2: Add Prisma Postinstall Script

Vercel needs to generate the Prisma client during build. Update your `package.json`:

```json
{
  "scripts": {
    "postinstall": "prisma generate"
  }
}
```

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. **Add Environment Variables** (see below)
6. Click **"Deploy"**

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow the prompts
```

## Step 4: Set Environment Variables

In your Vercel project settings, add these environment variables:

### Required Variables:

1. **DATABASE_URL**
   - Your Neon PostgreSQL connection string
   - Example: `postgresql://user:password@host/database?sslmode=require`
   - ⚠️ Make sure to remove `channel_binding=require` if present

2. **NEXTAUTH_SECRET**
   - A random secret string (at least 32 characters)
   - Generate one: `openssl rand -base64 32`
   - Or use: `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`

3. **NEXTAUTH_URL**
   - Your production URL: `https://your-project.vercel.app`
   - Vercel will provide this after first deployment

4. **OPENAI_API_KEY**
   - Your OpenAI API key (starts with `sk-`)

### How to Add Environment Variables:

1. Go to your project on Vercel
2. Click **Settings** → **Environment Variables**
3. Add each variable:
   - **Name**: `DATABASE_URL`
   - **Value**: Your connection string
   - **Environment**: Select "Production", "Preview", and "Development"
4. Repeat for all variables

## Step 5: Run Database Migrations

After first deployment, you need to run migrations:

### Option A: Using Vercel CLI

```bash
# Set environment variables locally
export DATABASE_URL="your-neon-connection-string"

# Run migrations
npx prisma migrate deploy
```

### Option B: Using Neon Dashboard

1. Go to your Neon project dashboard
2. Open the SQL Editor
3. Run your migration SQL manually (from `prisma/migrations/`)

### Option C: Add Migration Script

You can also add a build script to run migrations automatically:

```json
{
  "scripts": {
    "build": "prisma migrate deploy && next build"
  }
}
```

⚠️ **Note**: This requires `DATABASE_URL` to be available during build.

## Step 6: Seed Coach Accounts (Optional)

If you need to seed coach accounts in production:

```bash
# Set DATABASE_URL
export DATABASE_URL="your-production-database-url"

# Run seed script
npm run seed:coaches
```

Or use Vercel CLI:
```bash
vercel env pull .env.local
npm run seed:coaches
```

## Step 7: Verify Deployment

1. Visit your deployed URL: `https://your-project.vercel.app`
2. Test login/registration
3. Test journal entries and mood tracking
4. Test AI analysis (if OpenAI key is set)

## Common Issues & Solutions

### Issue: "Prisma Client not generated"
**Solution**: Add `"postinstall": "prisma generate"` to package.json scripts

### Issue: "Database connection failed"
**Solution**: 
- Check your `DATABASE_URL` in Vercel environment variables
- Make sure Neon database allows connections from Vercel IPs
- Remove `channel_binding=require` from connection string

### Issue: "NEXTAUTH_SECRET is missing"
**Solution**: Add `NEXTAUTH_SECRET` to Vercel environment variables

### Issue: "Session not persisting"
**Solution**: Make sure `NEXTAUTH_URL` matches your production domain

### Issue: "Build fails"
**Solution**: 
- Check Vercel build logs
- Make sure all dependencies are in `dependencies` not `devDependencies`
- Ensure TypeScript compiles without errors

## Post-Deployment Checklist

- [ ] Environment variables set in Vercel
- [ ] Database migrations run
- [ ] Coach accounts seeded (if needed)
- [ ] Login/registration works
- [ ] Journal entries save
- [ ] Mood tracking works
- [ ] AI analysis works (if OpenAI key is set)
- [ ] Navigation works correctly
- [ ] Role-based access works (coach vs student)

## Updating Your Deployment

After making changes:

```bash
git add .
git commit -m "Your changes"
git push
```

Vercel will automatically redeploy! 🎉

## Custom Domain (Optional)

1. Go to your Vercel project → **Settings** → **Domains**
2. Add your custom domain
3. Update `NEXTAUTH_URL` to match your custom domain
4. Follow DNS setup instructions

---

**Need Help?** Check [Vercel Docs](https://vercel.com/docs) or [Next.js Deployment](https://nextjs.org/docs/deployment)




