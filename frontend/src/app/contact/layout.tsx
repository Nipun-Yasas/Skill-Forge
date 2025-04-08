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
    <div>
      <TopNav />
      <SideNav />
      {children}
    </div>
  );
}
