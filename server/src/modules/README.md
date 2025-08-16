# Server Modular Architecture

This server has been refactored to follow a modular architecture pattern, making it more maintainable and scalable.

## Directory Structure

```
src/
├── modules/                     # Feature-based modules
│   ├── auth/                   # Authentication module
│   │   ├── controllers/        # Auth controllers (signup, login, logout)
│   │   ├── services/           # Auth business logic
│   │   ├── routes/             # Auth route definitions
│   │   ├── schemas/            # Auth validation schemas
│   │   └── index.ts            # Module exports
│   ├── users/                  # User management module
│   │   ├── controllers/        # User controllers (profile, user ops)
│   │   ├── services/           # User business logic
│   │   ├── routes/             # User route definitions
│   │   └── index.ts            # Module exports
│   └── annotations/            # Annotation module
│       ├── controllers/        # Annotation controllers
│       ├── services/           # Annotation business logic
│       ├── routes/             # Annotation route definitions
│       └── index.ts            # Module exports
├── shared/                     # Shared utilities and infrastructure
│   ├── middlewares/            # Shared middleware (auth, etc.)
│   ├── prisma/                 # Database client and schema
│   └── utils/                  # Utility functions
├── routes/                     # Main API routing
│   └── api.ts                  # Central router configuration
└── index.ts                    # Server entry point
```

## Module Responsibilities

### Auth Module (`modules/auth/`)
- User authentication (login, signup, logout)
- JWT token generation and validation
- Password hashing and verification
- Authentication-related schemas and validation

**Routes:**
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Users Module (`modules/users/`)
- User profile management
- User data retrieval and updates
- User-specific operations

**Routes:**
- `GET /api/users/me` - Get current user profile
- `GET /api/users/:userId` - Get user by ID
- `PUT /api/users/profile` - Update user profile

### Annotations Module (`modules/annotations/`)
- Annotation creation and management
- Annotation workflow (annotate, supervise, reject)
- Speech-to-text and text-to-text annotations

**Routes:**
- `POST /api/annotation/` - Create annotation
- `PUT /api/annotation/annotate/:id` - Annotate
- `PUT /api/annotation/supervise/:id` - Supervise
- `PUT /api/annotation/reject/:id` - Reject
- `DELETE /api/annotation/:id` - Delete annotation

### Shared (`shared/`)
- **Middlewares**: Authentication middleware, request validation
- **Prisma**: Database client and schema definitions
- **Utils**: Password utilities, helper functions

## Benefits of This Structure

1. **Separation of Concerns**: Each module handles its specific domain
2. **Maintainability**: Easy to locate and modify feature-specific code
3. **Scalability**: New modules can be added without affecting existing ones
4. **Testing**: Each module can be tested independently
5. **Reusability**: Shared utilities are centralized and reusable
6. **Clean Imports**: Module index files provide clean API exports

## Usage

Each module exports its main components through its `index.ts` file:

```typescript
// Import from auth module
import { authRoutes, authService, authController } from './modules/auth';

// Import from users module  
import { usersRoutes, usersService, usersController } from './modules/users';

// Import from annotations module
import { annotationRoutes } from './modules/annotations';
```

## Adding New Modules

To add a new module:

1. Create the module directory: `modules/new-module/`
2. Add subdirectories: `controllers/`, `services/`, `routes/`
3. Implement your feature logic
4. Create an `index.ts` file to export module components
5. Update `routes/api.ts` to include the new module routes