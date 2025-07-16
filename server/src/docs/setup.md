# Darija AI App Server Setup

## Prerequisites
- Node.js 18+ installed
- PostgreSQL database running locally

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Copy the example environment file and configure your variables:
```bash
cp .env.example .env
```

Update your `.env` file with the following values:
```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/darija-ai?schema=public
PORT=5000
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
JWT_SECRET=your-jwt-secret-here
ADMIN_EMAIL=admin@example.com
```

### 3. Database Setup
Initialize and push the database schema:
```bash
npx prisma db push
```

Generate Prisma client:
```bash
npx prisma generate
```

Run database migrations (if needed):
```bash
npx prisma migrate dev
```

### 4. Start Development Server
```bash
npm run dev
```

Your server should now be running on `http://localhost:5000`

## Additional Commands
- `npm run build`: Build TypeScript to JavaScript
- `npx prisma studio`: Open Prisma Studio (database GUI)
- `npx prisma migrate reset`: Reset database and run all migrations

## Environment Variables Reference
- `DATABASE_URL`: PostgreSQL connection string
- `PORT`: Server port (default: 5000)
- `FRONTEND_URL`: Frontend application URL
- `NODE_ENV`: Environment mode
- `JWT_SECRET`: Secret key for JWT tokens
- `ADMIN_EMAIL`: Administrator email address