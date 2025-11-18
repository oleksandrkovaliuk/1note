export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 text-center h-screen">
      <div className="flex items-center justify-center">{children}</div>

      <div className="h-full bg-[url('/auth-bg.jpg')] bg-cover bg-no-repeat bg-right" />
    </div>
  );
}
