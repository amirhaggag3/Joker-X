import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart | JOKER Store',
  description: 'View your shopping cart',
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
