
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      <footer style={
          {
            backgroundColor:"purple"
          }
        }>
        <p className="bg-yellow-800">Footer</p>
      </footer>
      </body>
    </html>
  );
}
