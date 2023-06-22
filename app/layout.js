import './globals.css'


export const metadata = {
  title: 'Mail News',
  description: 'Mail news delivers news via mail with easily',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full">{children}</body>
    </html>
  )
}
