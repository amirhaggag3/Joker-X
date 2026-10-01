import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop | JOKER Store',
  description: 'Browse our premium collection',
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
