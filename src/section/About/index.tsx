import { data } from "../../contents/About";

const About = () => {
  return (
    <>
      <div className="space-y-4 px2 scroll-m-14" id="About-section">
        <div className="text-primaryAccent font-medium">{data.title}</div>
        <div>{data.description}</div>
      </div>
    </>
  );
};
export default About;
