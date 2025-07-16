# Darija AI

A comprehensive annotation platform for Arabic language processing, specializing in Moroccan Darija dialect translation and speech-to-text transcription.

## Overview

Darija AI is designed to facilitate the collection and validation of high-quality training data for Arabic language models, with a special focus on Moroccan Darija (Moroccan Arabic dialect). The platform enables collaborative annotation workflows with role-based access control.

## Architecture

This is a full-stack application with:
- **Backend**: Express.js API server (`/server`)
- **Frontend**: React web application (`/web`)

## Features

### 🎯 Annotation Types
- **Speech-to-Text**: Convert Arabic/Darija audio to text
- **English to Arabic**: Translate English text to Modern Standard Arabic
- **Arabic to Darija**: Translate Modern Standard Arabic to Moroccan Darija

### 👥 User Roles
- **Annotator**: Create and submit annotations
- **Supervisor**: Review, approve, or reject annotations
- **Admin**: Full system access and user management

### 🔄 Workflow Management
- **Pending**: Newly created annotations awaiting review
- **Annotated**: Completed by annotators, pending supervision
- **Confirmed**: Approved by supervisors
- **Rejected**: Rejected by supervisors for quality issues

### 🔐 Authentication & Security
- JWT-based authentication
- Role-based access control
- Secure password hashing
- Session management

## Technology Stack

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JSON Web Tokens (JWT)
- **Password Security**: bcryptjs

### Frontend
- **Framework**: React 19 with TypeScript
- **Routing**: TanStack Router
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **State Management**: React hooks
- **Build Tool**: Vite

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### Project Structure
```
darija-ai/
├── server/              # Backend API
│   ├── src/
│   ├── package.json
│   └── ...
├── web/                 # Frontend React app
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/darija-ai/darija-ai-app.git
   cd darija-ai-app
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   ```
   
   Configure your `.env` file:
   ```env
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/darija-ai?schema=public
   PORT=5000
   FRONTEND_URL=http://localhost:3000
   NODE_ENV=development
   JWT_SECRET=your-jwt-secret-here
   ADMIN_EMAIL=admin@example.com
   ```
   
   Setup database:
   ```bash
   npx prisma db push
   npx prisma migrate reset
   npx prisma migrate dev
   ```

3. **Frontend Setup**
   ```bash
   cd ../web
   npm install
   ```

4. **Start Development Servers**
   
   **Backend** (Terminal 1):
   ```bash
   cd server
   npm run dev
   ```
   
   **Frontend** (Terminal 2):
   ```bash
   cd web
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Frontend Routes

### Public Routes
- `/` - Landing page
- `/about` - About the platform
- `/features` - Platform features
- `/contact` - Contact information
- `/login` - User authentication
- `/sign-up` - User registration

### Protected Routes (Authenticated Users)
- `/dashboard` - Main dashboard
- `/profile` - User profile management
- `/speech-to-text` - Speech-to-text annotation interface

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - User logout

### Annotations
- `POST /api/annotation` - Create new annotation
- `PUT /api/annotation/annotate/:id` - Submit annotation
- `PUT /api/annotation/supervise/:id` - Supervise annotation
- `PUT /api/annotation/reject/:id` - Reject annotation
- `DELETE /api/annotation/:id` - Delete annotation


## Support

For questions, issues, or contributions, please open an issue on the repository or contact the development team.

---

**Darija AI** - Bridging the gap between Modern Standard Arabic and Moroccan Darija through collaborative annotation.