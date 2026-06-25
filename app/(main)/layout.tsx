import TopNav from "@/components/layout/TopNav";
import BottomNav from "@/components/layout/BottomNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="pt-16 pb-20 md:pb-0">{children}</main>
      <BottomNav />
    </div>
  );
}
