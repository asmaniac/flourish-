# Server Error Troubleshooting Guide

## Common Causes of "Server Error" Related to Database/Authentication

### Issue 1: Missing or Incorrect DATABASE_URL

**Problem**: The application is configured for PostgreSQL, but the `DATABASE_URL` environment variable is either:
- Missing entirely
- Set to SQLite format (`file:./dev.db`) instead of PostgreSQL
- Incorrectly formatted PostgreSQL connection string

**Solution**: 

1. **Check if `.env.local` exists** in the root directory (`flourish-/`)

2. **Create or update `.env.local`** with a valid PostgreSQL connection string:

```env
# PostgreSQL connection string format:
DATABASE_URL="postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE?sslmode=require"

# Example for local PostgreSQL:
DATABASE_URL="postgresql://postgres:password@localhost:5432/flourish?sslmode=prefer"

# Example for cloud providers (Neon, Supabase, etc.):
DATABASE_URL="postgresql://user:pass@host.neon.tech:5432/dbname?sslmode=require"
```

**Important Notes**:
- The schema is configured for PostgreSQL (`provider = "postgresql"` in `prisma/schema.prisma`)
- SQLite format (`file:./dev.db`) will NOT work with the current setup
- Make sure your PostgreSQL database exists and is accessible

### Issue 2: Missing NEXTAUTH_SECRET

**Problem**: NextAuth requires a secret key for session encryption, but it's missing from environment variables.

**Solution**:

1. **Generate a secret key** using one of these methods:

**On Windows (PowerShell)**:
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

**On Mac/Linux**:
```bash
openssl rand -base64 32
```

**Or use an online generator**: Any random string of at least 32 characters

2. **Add to `.env.local`**:
```env
NEXTAUTH_SECRET="your-generated-secret-here"
NEXTAUTH_URL="http://localhost:3000"
```

### Issue 3: Database Not Migrated

**Problem**: Even with correct `DATABASE_URL`, the database tables might not exist.

**Solution**:

Run Prisma migrations:
```bash
cd flourish-
npx prisma migrate dev
npx prisma generate
```

### Issue 4: Database Connection Authentication Failed

**Problem**: The PostgreSQL connection string has incorrect credentials, includes unsupported parameters, or the database server is not accessible.

**Common Causes**:
- **`channel_binding=require` parameter**: This parameter in Neon connection strings can cause authentication failures with the `pg` library. Remove it from your connection string.
- Incorrect credentials
- Database server not accessible

**Solution**:

1. **Remove `channel_binding=require` from DATABASE_URL** (if present):
   
   **Before (problematic)**:
   ```env
   DATABASE_URL="postgresql://user:pass@host.neon.tech:5432/dbname?sslmode=require&channel_binding=require"
   ```
   
   **After (fixed)**:
   ```env
   DATABASE_URL="postgresql://user:pass@host.neon.tech:5432/dbname?sslmode=require"
   ```

2. **Verify PostgreSQL is running** (if using local database)
3. **Check credentials** in the connection string match your database
4. **Test connection** using a PostgreSQL client (pgAdmin, DBeaver, etc.)
5. **Check firewall/network** if using a remote database

## Complete `.env.local` Template

Create a file named `.env.local` in the `flourish-/` directory with:

```env
# Database (PostgreSQL required)
DATABASE_URL="postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE?sslmode=require"

# NextAuth Configuration
NEXTAUTH_SECRET="generate-a-random-32-character-string"
NEXTAUTH_URL="http://localhost:3000"

# Optional: OpenAI API Key (if using AI features)
OPENAI_API_KEY="your-openai-key-here"
```

## Quick Diagnostic Steps

1. **Check if `.env.local` exists**: Look in `flourish-/` directory
2. **Verify DATABASE_URL format**: Should start with `postgresql://`, not `file:`
3. **Check NEXTAUTH_SECRET**: Should be a long random string
4. **Check server logs**: Look for specific error messages in the terminal where `npm run dev` is running
5. **Test database connection**: Try connecting with a PostgreSQL client using the same connection string

## Common Error Messages

- **"DATABASE_URL is required but not found"**: Missing `.env.local` or `DATABASE_URL` variable
- **"Connection refused"**: PostgreSQL server not running or wrong host/port
- **"password authentication failed"**: Wrong username/password in connection string OR `channel_binding=require` parameter issue
- **"database does not exist"**: Database name in connection string doesn't exist
- **"NEXTAUTH_SECRET is missing"**: Missing `NEXTAUTH_SECRET` in environment variables
- **"Server error" with no details**: Often caused by `channel_binding=require` in Neon connection strings - remove this parameter

## Still Having Issues?

1. Check the terminal/console where the dev server is running for detailed error messages
2. Verify all environment variables are loaded: Add `console.log(process.env.DATABASE_URL)` temporarily to see if it's being read
3. Make sure you're in the correct directory when running commands
4. Restart the dev server after changing `.env.local` (environment variables are loaded at startup)

