
export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <header style={
          {
            backgroundColor: "yellow"
          }
        }>
          <p className="bg-green-500">Header</p>
        </header>
        {children}
        <footer>
          <p style={
          {
            backgroundColor:"green"
          }
        }>footer</p>
        </footer>
      </body>
    </html>
  );
}
