# JOKER X - Premium Storefront

> A modern, production-ready e-commerce storefront built with Next.js 14, React 19, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/amirhaggag3/Joker-X.git
cd Joker-X

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
joker-x/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Home page with hero and featured products
│   ├── globals.css             # Global Tailwind styles
│   ├── shop/
│   │   └── page.tsx            # Product listing with filters
│   ├── product/
│   │   └── [slug]/
│   │       └── page.tsx        # Product detail page
│   ├── cart/
│   │   └── page.tsx            # Shopping cart page
│   ├── checkout/
│   │   └── page.tsx            # Checkout flow
│   └── admin/
│       └── page.tsx            # Admin dashboard
├── components/
│   ├── Navigation.tsx          # Header navigation
│   ├── Footer.tsx              # Site footer
│   ├── Hero.tsx                # Hero section
│   ├── ProductCard.tsx         # Product card component
│   ├── ProductCard.tsx         # Reusable product card
│   ├── FeaturedProducts.tsx    # Featured products section
│   ├── CartItem.tsx            # Cart item component
│   └── NewsletterSection.tsx   # Newsletter signup
├── lib/
│   ├── store.tsx               # Zustand cart store
│   ├── data.ts                 # Product data
│   ├── types.ts                # TypeScript interfaces
│   └── constants.ts            # App constants
├── public/                     # Static assets
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.mjs             # Next.js configuration
```

## 🛍️ Features

### Pages
- **Home** (`/`) - Landing page with hero section and featured products
- **Shop** (`/shop`) - Product listing with category and price filters
- **Product Details** (`/product/[slug]`) - Individual product page with size/color selection
- **Cart** (`/cart`) - Shopping cart with quantity adjustment
- **Checkout** (`/checkout`) - Complete checkout form
- **Admin** (`/admin`) - Product management dashboard

### Components
- Responsive navigation bar
- Product filtering and sorting
- Shopping cart state management (Zustand)
- Size and color selection
- Admin product CRUD interface
- Newsletter signup

## 🎨 Design

- **Theme**: Dark premium aesthetic with purple/pink accents
- **Responsive**: Mobile-first design, works on all screen sizes
- **Styling**: Tailwind CSS v3.4.10
- **Fonts**: System fonts with modern typography

## 💾 State Management

Cart state is managed using [Zustand](https://github.com/pmndrs/zustand) for simple, efficient state management.

```typescript
const { items, addItem, removeItem, updateQuantity, total } = useCart();
```

## 📦 Build & Deploy

### Build
```bash
npm run build
```

### Production Server
```bash
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel automatically detects Next.js and deploys

## 🔧 Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.15
- **UI Library**: React 18.2.0
- **Styling**: Tailwind CSS 3.4.10 + PostCSS
- **State**: Zustand 4.5.2
- **Language**: TypeScript 5.4.5
- **Linting**: ESLint 8.57.0

## 📝 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=JOKER
```

## 🚀 Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Static site generation where possible
- CSS optimization with Tailwind purging

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💻 Author

JOKER Store - [GitHub](https://github.com/amirhaggag3/Joker-X)
