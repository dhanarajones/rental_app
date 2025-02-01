# Rental Property Platform

A modern web application for property rentals where owners can list their properties and tenants can find their next home.

## Project Structure

```
rental-app/
├── client/              # Frontend - Vite React Application
│   ├── src/            # React source files
│   └── package.json    # Frontend dependencies
├── server/             # Backend - Next.js Application
│   ├── src/           # Server source files
│   ├── prisma/        # Database schema and migrations
│   └── package.json   # Backend dependencies
└── README.md          # This file
```

## Tech Stack

### Frontend
- React (Vite)
- TypeScript
- TailwindCSS
- React Query
- React Router
- Axios

### Backend
- Next.js
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Express middleware

## Features

- User authentication (signup, login, password reset)
- Property listing management
- Property search with filters
- Image upload and management
- Booking system
- Real-time chat between tenants and owners
- Reviews and ratings
- Admin dashboard

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

### Backend Setup
```bash
cd server
npm install
# Set up your .env file with database credentials
npm run dev
```

### Database Setup
```bash
cd server
npx prisma migrate dev
npx prisma generate
```

## Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/rental_db"
JWT_SECRET="your-secret-key"
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 