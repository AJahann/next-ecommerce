import type { Metadata } from 'next';

import './globals.css';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import UserHydration from '@/components/UserHydration';
import { AuthProvider } from '@/context/useAuth';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS e-commerce',
  description: 'Remmember me to complete this section...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider
          initialAuthState={{
            loggedIn: false,
            user: null,
          }}
        >
          <UserHydration />
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
