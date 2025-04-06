export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="font-sans" suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
