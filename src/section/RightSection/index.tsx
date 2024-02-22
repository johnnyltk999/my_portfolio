import ContentContainer from "../../components/ContentContainer";
import About from "../About";
import Footer from "../footer";

import { data } from "../../contents/Experience";
import { data as projectData } from "../../contents/Project";
import { data as articleData } from "../../contents/Project";

const RightSection = () => {
  console.count("right section");
  return (
    <>
      <div className="grid gap-y-40 px-5 ">
        <About></About>

        <div className="scroll-m-14" id="Experience-section">
          <ContentContainer sectionTitle="Experience" data={data} />
        </div>

        <div className="scroll-m-14" id="Project-section">
          <ContentContainer sectionTitle="Project" data={projectData} />
        </div>

        <div className="scroll-m-14" id="Article-section">
          <ContentContainer sectionTitle="Article" data={articleData} />
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};
export default RightSection;
