#!/bin/bash
set -e

# Build the Next.js application
echo "🔨 Building application..."
npm run build

echo "✅ Build successful!"
echo "📦 Ready for deployment to Vercel"
