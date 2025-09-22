# Source Code Overview

This document provides a comprehensive overview of the ACM Illinois Tech website codebase, designed to help contributors understand the project structure, architecture, and key components.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Main Application Logic](#main-application-logic)
- [Component Architecture](#component-architecture)
- [Data Management](#data-management)
- [Styling & Design System](#styling--design-system)
- [API Routes](#api-routes)
- [Key Features](#key-features)
- [Development Guidelines](#development-guidelines)
- [Configuration Files](#configuration-files)

## Tech Stack

### Core Framework
- **Next.js 15.1.6** - React framework with App Router
- **React 19.0.0** - Frontend library
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Tailwind Animate** - Animation utilities
- **Class Variance Authority** - Component variant management
- **Clsx & Tailwind Merge** - Conditional class utilities

### UI Components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library
- **React Icons** - Additional icon sets
- **Heroicons** - Icon library
- **Iconoir** - Icon library

### Animations & Interactions
- **Motion (Framer Motion)** - Animation library
- **Embla Carousel** - Carousel component with autoplay

### Database & Data Fetching
- **Neon Database** - PostgreSQL database
- **SWR** - Data fetching and caching

### Development Tools
- **ESLint 9** - Code linting
- **PostCSS** - CSS processing
- **Date-fns-tz** - Date manipulation with timezone support

## Project Structure

```
├── app/                     # Next.js App Router pages
│   ├── api/                # API routes
│   │   ├── board-members/  # Board member endpoints
│   │   └── events/         # Event management endpoints
│   ├── contact/            # Contact page
│   ├── events/             # Events page
│   ├── get-involved/       # Get involved page
│   ├── team/               # Team page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── ui/                 # Base UI components
│   ├── contact/            # Contact-specific components
│   ├── events/             # Event-specific components
│   ├── get-involved/       # Get involved components
│   └── team/               # Team-specific components
├── lib/                    # Utilities and shared logic
│   ├── database/           # Database operations
│   ├── hooks/              # Custom React hooks
│   ├── interfaces.ts       # TypeScript interfaces
│   ├── functions.ts        # Utility functions
│   └── utils.ts            # Shared utilities
├── data/                   # Static data files
├── public/                 # Static assets
│   └── assets/             # Images and media
└── fonts/                  # Custom font files
```

## Main Application Logic

### App Router Structure
The application uses Next.js App Router with the following key pages:

1. **Home Page (`app/page.tsx`)**
   - Landing page with hero section, carousel, gallery, and team preview
   - Features background decorative elements and responsive design

2. **Team Page (`app/team/page.tsx`)**
   - Displays board members with modal interactions
   - Categorized by Leadership, Operations, and Technical teams

3. **Events Page (`app/events/page.tsx`)**
   - Dynamic event listing with tabs for upcoming/past events
   - Calendar integration and event management

4. **Contact Page (`app/contact/page.tsx`)**
   - Contact information and forms

5. **Get Involved Page (`app/get-involved/page.tsx`)**
   - Information for potential members and contributors

### Layout System
- **Root Layout (`app/layout.tsx`)**: Defines global metadata, fonts, and HTML structure
- **Page-specific Layouts**: Each major section has its own layout with consistent navigation and footer

## Component Architecture

### UI Components (`components/ui/`)
- **NavigationBar**: Responsive navigation with scroll effects and mobile menu
- **Footer**: Site-wide footer component
- **Button**: Styled button component with variants
- **Card**: Flexible card component for content display
- **Carousel**: Image carousel with autoplay functionality
- **Loading Components**: Various loading states and spinners
- **Page Header**: Reusable header component for pages

### Feature Components
- **Gallery**: Interactive image gallery
- **Team Section**: Team member display with modal interactions
- **Newsletter Signup**: Email subscription component
- **Events Tabs**: Event filtering and display system
- **Board Members**: Team member management with detailed profiles

### Component Patterns
- **Compound Components**: Card, Button, and other UI primitives
- **Render Props**: Used in carousel and modal components
- **Custom Hooks**: Data fetching and state management
- **TypeScript Integration**: Full type safety across all components

## Data Management

### Database Schema
The application uses PostgreSQL (Neon) with the following main entities:

#### Events Table
```sql
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  location TEXT,
  place TEXT,
  timezone TEXT NOT NULL,
  link TEXT
);
```

#### Board Members
Stored in JSON format (`data/board_members.json`) with the following structure:
- Personal information (name, position, year, major)
- Social media links
- Profile images
- Team categorization

### Data Fetching Strategy
- **SWR**: Used for client-side data fetching with caching
- **Server Components**: Leverage Next.js server components for initial data loading
- **API Routes**: RESTful endpoints for CRUD operations

### Custom Hooks
- **useEvents**: Manages event data fetching and state
- Event filtering and status computation
- Automatic refetching and error handling

## Styling & Design System

### Tailwind Configuration
- **Custom Colors**: Brand-specific color palette
- **Typography**: Raleway (primary) and Bree Serif (accent) fonts
- **Responsive Design**: Mobile-first approach with lg: breakpoints
- **CSS Variables**: Dynamic theming support

### Design Tokens
```css
:root {
  --font-color: #1a1a1a;
  --background-color: #ffffff;
  --accent-color: #dc2626;
  --accent-color-2: #991b1b;
  --light-red: #fecaca;
  --gray: #6b7280;
}
```

### Component Styling Patterns
- **Class Variance Authority**: Consistent component variants
- **Conditional Classes**: Dynamic styling with clsx
- **Animation Integration**: Smooth transitions and hover effects

## API Routes

### Events API (`app/api/events/route.ts`)
- **GET**: Retrieve all events with filtering
- **POST**: Create new events (with validation)
- Full CRUD operations with error handling
- Database integration with Neon PostgreSQL

### Board Members API (`app/api/board-members/route.ts`)
- **GET**: Retrieve team member information
- JSON-based data source
- Category-based filtering

### API Patterns
- **Error Handling**: Consistent error responses
- **Validation**: Input validation for POST requests
- **CORS**: Proper cross-origin handling
- **Type Safety**: Full TypeScript integration

## Key Features

### Event Management System
- Dynamic event creation and management
- Calendar integration with timezone support
- Event status computation (upcoming/ongoing/past)
- Add-to-calendar functionality

### Team Management
- Modal-based member profiles
- Social media integration
- Categorized team display
- Responsive image handling

### Interactive Elements
- Image carousels with autoplay
- Responsive navigation with scroll effects
- Modal interactions
- Loading states and animations

### Performance Optimizations
- Next.js Image optimization
- Component lazy loading
- SWR caching strategy
- Static asset optimization

## Development Guidelines

### Code Organization
- **Feature-based Structure**: Components organized by feature
- **Separation of Concerns**: Clear separation between UI, logic, and data
- **Reusable Components**: DRY principles with shared UI components

### TypeScript Usage
- **Strict Type Checking**: Full type safety across the application
- **Interface Definitions**: Clear data contracts in `lib/interfaces.ts`
- **Generic Components**: Flexible, reusable component patterns

### Styling Conventions
- **Utility-First**: Tailwind CSS for consistent styling
- **Component Variants**: Systematic approach to component variations
- **Responsive Design**: Mobile-first responsive patterns

### Performance Considerations
- **Image Optimization**: Next.js Image component usage
- **Code Splitting**: Automatic route-based code splitting
- **Caching Strategy**: SWR for client-side caching

## Configuration Files

### Core Configuration
- **`next.config.ts`**: Next.js configuration (currently minimal)
- **`tailwind.config.ts`**: Tailwind CSS customization with theme extensions
- **`tsconfig.json`**: TypeScript compiler configuration
- **`components.json`**: UI component library configuration

### Development Tools
- **`eslint.config.mjs`**: ESLint configuration for code quality
- **`postcss.config.mjs`**: PostCSS configuration for CSS processing
- **`.gitignore`**: Comprehensive ignore patterns for development files

### Package Management
- **`package.json`**: Dependencies and scripts
- **`package-lock.json`**: Locked dependency versions (gitignored for flexibility)

## Getting Started for Contributors

1. **Environment Setup**
   - Node.js 18+ required
   - Install dependencies with `npm install`
   - Set up environment variables for database connection

2. **Development Workflow**
   - Run `npm run dev` for development server
   - Use `npm run build` to test production builds
   - Follow ESLint rules for code consistency

3. **Database Setup**
   - Configure Neon PostgreSQL connection
   - Set `ACM_IIT_POSTGRES_DATABASE_URL` environment variable
   - Initialize event table schema

4. **Component Development**
   - Follow existing component patterns
   - Use TypeScript for all new components
   - Implement responsive design with Tailwind CSS

This overview provides the foundation for understanding and contributing to the ACM Illinois Tech website. For specific implementation details, refer to the individual component files and their documentation.
