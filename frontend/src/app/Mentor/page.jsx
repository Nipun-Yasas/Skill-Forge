import { Header } from "./header";
import { MentorsCards } from "./mentorsCards";

export default function FindingMentor() {
  return (
    <div className="flex">
      {/* Main content area */}
      <div className="flex-1 ml-84">
        <div className="flex justify-center items-center flex-col">
          <Header />
          <MentorsCards />
        </div>
      </div>
    </div>
  );
}
