import { Header } from "./header";
import { MentorsCards } from "./mentorsCards";
import { SideNav } from "../Components/SideNav";
import { TopNav } from "../Components/TopNav";

export default function FindingMentor() {
  return (
    <div>
      <TopNav />
      <div className="flex h-screen ">
        {/* Sidebar on the left */}
        <SideNav />

        {/* Main content on the right */}
        <div className="flex-1 p-6 ml-60 mt-20">
          <Header />
          <MentorsCards />
        </div>
      </div>
    </div>
  );
}
