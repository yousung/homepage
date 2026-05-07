import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0D1B2A',
          secondary: '#1E3A5F',
          accent: '#4F46E5',
          'accent-hover': '#4338CA',
          bg: '#F8FAFC',
          text: '#0F172A',
          'text-muted': '#475569',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
