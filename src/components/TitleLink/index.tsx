import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TitleLinkProps {
  isHighLight: boolean;
  title: string;
  link: string;
}

const TitleLink: React.FC<TitleLinkProps> = ({ isHighLight, title, link }) => {
  if (!link)
    return (
      <div
        className={`text-primaryAccent ${
          isHighLight ? "text-primaryBase" : ""
        }`}
      >
        {title}
      </div>
    );

  return (
    <>
      <div
        className={`text-primaryAccent ${
          isHighLight ? "text-primaryBase" : ""
        }`}
      >
        <a href={link} target="_blank">
          {title}
          <FontAwesomeIcon
            className={`text-xs -rotate-45 duration-500 ease-out ${
              isHighLight ? "translate-x-1 -translate-y-1" : ""
            }`}
            icon={faArrowRight}
          />
        </a>
      </div>
    </>
  );
};

export default TitleLink;
