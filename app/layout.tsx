import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'VR AI – Personal Assistant', description: 'Your personal AI, dates and task assistant', manifest: '/manifest.json' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="ta"><body>{children}</body></html>;
}
