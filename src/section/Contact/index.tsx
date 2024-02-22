import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faWhatsapp,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const index = () => {
  return (
    <>
      <div className="flex items-end text-2xl gap-3 font-semibold">
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryTitle transition-all"
          icon={faGithub}
        />
        <FontAwesomeIcon
          className="hover:scale-125  hover:text-primaryTitle transition-all"
          icon={faFacebook}
        />
        <FontAwesomeIcon
          className="hover:scale-125  hover:text-primaryTitle transition-all"
          icon={faInstagram}
        />
        <FontAwesomeIcon
          className="hover:scale-125  hover:text-primaryTitle transition-all"
          icon={faWhatsapp}
        />
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryTitle transition-all"
          icon={faDiscord}
        />
      </div>
    </>
  );
};

export default index;
