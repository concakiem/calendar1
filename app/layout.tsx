import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';
import FloatPhoneButton from '@/components/FloatPhoneButton';

export const metadata = {
  title: 'Quản Lý Sản Phẩm',
  description: 'Ứng dụng quản lý sản phẩm với Next.js, Node.js và MongoDB',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        <main className="max-w-7xl mx-auto py-6 md:py-8 px-4 md:px-6">{children}</main>
        <Footer />
        <FloatPhoneButton />
      </body>
    </html>
  );
}
