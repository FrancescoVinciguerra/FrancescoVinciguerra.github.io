import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Francesco Vinciguerra — Applied Mathematics at EPFL',
  description:
    'Francesco Vinciguerra is a Master’s student in Applied Mathematics at EPFL, interested in AI safety, deep learning, probability and statistics.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
