import { Tilt_Warp } from 'next/font/google';
import { satoshi } from './fonts';

import './globals.css';

const tiltWarp = Tilt_Warp({ weight: ['400'], subsets: ['latin'], variable: '--font-tilt-warp' });

export const metadata = {
  title: 'PROJECT NAME',
  description: 'PROJECT DESCRIPTION',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${satoshi.className} ${tiltWarp.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
