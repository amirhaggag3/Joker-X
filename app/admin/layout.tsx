import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | JOKER Store',
  description: 'Admin dashboard',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
