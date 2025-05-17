// src/app/layout.js or src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'SiteCrafix',
  description: 'Affordable business websites that grow your brand',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
