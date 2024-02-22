import Header from "../Header";
import Navbar from "../Navbar";
import Contact from "../Contact";

const LeftSection = () => {
  return (
    <>
      <div className="px-5">
        <div className="sticky top-14 grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[86vh]">
          <Header></Header>
          <Navbar></Navbar>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
