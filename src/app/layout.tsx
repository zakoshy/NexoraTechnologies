
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Nexora Technologies',
  description: 'Building the Next Generation of Digital Solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased min-h-screen flex flex-col')}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
        <Link href="https://wa.me/254741157757?text=hello%20the%20CEO%20of%20nexora%20i%20need%20your%20services" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            viewBox="0 0 24 24"
            role="img"
            aria-label="WhatsApp"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.42 1.29 4.89L2 22l5.34-1.38c1.42.78 3.01 1.23 4.7 1.23h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.15c-1.48 0-2.91-.4-4.16-1.15l-.3-.18-3.11.81.82-3.03-.2-.31c-.82-1.29-1.29-2.82-1.29-4.41 0-4.54 3.69-8.23 8.24-8.23 4.54 0 8.23 3.69 8.23 8.23s-3.7 8.23-8.24 8.23zm4.71-5.19c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.12-.17.25-.65.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.38-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.76-1.84c-.2-.48-.41-.42-.56-.42-.15 0-.31-.02-.48-.02s-.43.06-.66.31c-.23.25-.87.85-1.07 2.07-.21 1.22.89 2.4 1.02 2.56.12.17 1.75 2.67 4.24 3.73.59.25 1.05.4 1.41.52.59.18 1.13.16 1.56.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.07.15-1.18-.06-.12-.2-.18-.44-.3z"/>
          </svg>
        </Link>
      </body>
    </html>
  );
}
