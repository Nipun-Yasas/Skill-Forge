"use client";

import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <body className={isClient ? 'default-body-class' : ''}>
        {children}
      </body>
    </html>
  );
}
