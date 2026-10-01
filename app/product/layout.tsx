import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product | JOKER Store',
  description: 'Explore premium JOKER products',
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children;
}
