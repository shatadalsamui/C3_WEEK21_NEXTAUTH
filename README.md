# Next.js with NextAuth Authentication Project

This project demonstrates authentication in Next.js using NextAuth.js with multiple providers including Credentials and Google.

## Features

- Authentication with Credentials (email/password)
- Google OAuth authentication
- Session management
- Protected routes
- Responsive design with Tailwind CSS

## Technologies Used

- Next.js 15.3.4
- NextAuth.js 4.24.11
- React 19
- TypeScript
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Google OAuth credentials (for Google login)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with your environment variables:
   ```
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

### Running the Application

- Development mode:
  ```bash
  npm run dev
  ```
- Production build:
  ```bash
  npm run build
  npm start
  ```

## Project Structure

Key files and directories:

- `app/api/auth/[...nextauth]/route.ts` - NextAuth configuration with providers
- `app/layout.tsx` - Root layout with session provider
- `app/page.tsx` - Home page with authentication status

## Authentication Providers

Currently configured providers:

1. **Credentials Provider** - Email/Password authentication
2. **Google Provider** - OAuth authentication

## Customization

To add more providers:

1. Import the provider from `next-auth/providers`
2. Add it to the providers array in `[...nextauth]/route.ts`
3. Configure the required environment variables

