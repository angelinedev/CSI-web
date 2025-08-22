import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'CSI Inauguration 2025',
  description: 'Inauguration event for the CSI Student Chapter.',
};

const ParticleContainer = () => {
  const particles = Array.from({ length: 30 });
  return (
    <div id="particle-container">
      {particles.map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            backgroundColor: `hsl(${Math.random() * 50 + 180}, 70%, 60%)`,
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animation: `particle-animation-${(i % 30) + 1} ${Math.random() * 20 + 10}s alternate infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ParticleContainer />
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
