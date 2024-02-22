import "./App.css";

//sections
import LeftSection from "./section/LeftSection";
import RightSection from "./section/RightSection";

function App() {
  return (
    <>
      <div className="mt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">
        <LeftSection></LeftSection>
        <RightSection></RightSection>
        <div></div>
      </div>
    </>
  );
}

export default App;
