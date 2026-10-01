# Joker-X Store

A modern premium storefront built with **Next.js 15**, **React 19**, and **Tailwind CSS**.

## Features

- ✨ Modern, responsive UI with Tailwind CSS
- 🛒 Product catalog with add-to-cart functionality
- 🔐 Admin dashboard with order management
- 📱 Mobile-first design
- 🚀 Optimized for Vercel deployment

## Tech Stack

- **Framework:** Next.js 15
- **UI Library:** React 19
- **Styling:** Tailwind CSS 3.4
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js >= 20.6
- npm or yarn

### Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/amirhaggag5/Joker-X.git
   cd Joker-X
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_URL=your_site_url
```

## Deployment on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Create a new project and select your repository
4. Add environment variables in project settings
5. Deploy!

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── page.tsx        # Home page
│   ├── layout.tsx      # Root layout
│   ├── login/          # Login page
│   ├── admin/          # Admin dashboard
│   ├── cart/           # Cart page
│   └── globals.css     # Global styles
├── components/          # Reusable React components
├── lib/                # Utility functions and types
├── public/             # Static assets
└── styles/             # Additional stylesheets
```

## Pages

- **/** - Home page with product catalog
- **/login** - Login page
- **/admin** - Admin dashboard (requires authentication)
- **/cart** - Shopping cart

## License

MIT
