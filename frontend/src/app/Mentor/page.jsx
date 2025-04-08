import  Header  from "./header";
import  MentorsCards  from "./mentorsCards";


export default function FindingMentor() {
  return (
    <div>
      
      <div className="flex h-screen ">
        {/* Sidebar on the left */}

        {/* Main content on the right */}
        <div className="flex-1 p-6 ml-60 mt-20">
          <Header />
          <MentorsCards />
        </div>
      </div>
    </div>
  );
}
