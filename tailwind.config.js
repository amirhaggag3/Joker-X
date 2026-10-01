module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',
        secondary: '#ec4899',
        accent: '#f59e0b',
        ink: '#0b0b0f',
      },
      boxShadow: {
        glow: '0 0 30px rgba(139, 92, 246, 0.35)',
      },
    },
  },
  plugins: [],
};
