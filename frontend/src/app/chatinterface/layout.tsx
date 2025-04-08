import SideNav from "../(components)/SideNav";
import TopNav from "../(components)/TopNav";

export const metadata = {
  title: "Contact",
  description: "Contact and exchanges page",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 h-[60px] z-10">
        <TopNav />
      </div>
      {/* Main Content Area */}
      <div className="flex flex-1 pt-[60px]">
        {/* Side Navigation */}
        <div className="fixed left-0 top-[60px] bottom-0 w-[250px] z-10">
          <SideNav />
        </div>
        {/* ChatInterface Content */}
        <main className="flex-1 ml-[250px] p-6 overflow-auto mr-[50px]">
          {children}
        </main>
      </div>
    </div>
  );
}
