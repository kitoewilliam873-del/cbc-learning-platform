export const metadata = {
  title: 'Senior School CBC Platform',
  description: 'STEM Learning Framework',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f8fafc' }}>
        {children}
      </body>
    </html>
  )
}
