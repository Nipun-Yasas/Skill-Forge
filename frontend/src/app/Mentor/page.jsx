import { Header } from "./header";
import { MentorsCards } from "./mentorsCards";

export default function FindingMentor() {
  return (
    <div>
        <div className="flex-1 p-6 ml-55 ">
          <Header />
          <MentorsCards />
        </div>
      </div>
  );
}
