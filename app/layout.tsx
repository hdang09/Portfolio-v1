import './globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import ToastProvider from '@/components/ToastProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Tran Hai Dang - Fullstack Developer',
    description: 'A fullstack developer, designer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ToastProvider />
                {children}
            </body>
        </html>
    );
}
