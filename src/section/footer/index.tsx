import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-end">
          <a href="#">
            <span>
              Power by Ract.js Tailwind{" "}
              <FontAwesomeIcon className="ml-2" icon={faGithub} />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
