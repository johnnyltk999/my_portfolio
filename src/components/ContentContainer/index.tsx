import React, { useState } from "react";
import FormatDate from "../FormatDate";
import Picture from "../../components/Picture";
import TitleLink from "../TitleLink";
import Material from "../Material";
import Description from "../Description";
import Tech from "../Tech";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ContentContainerProps {
  sectionTitle?: string; // ໃສ່ເຕື່ອງຫມາຍ ? ເພື່ອບອກວ່າເປັນ optional
  data: Array<{
    date: string;
    title: string;
    materials: Array<{
      type: IconDefinition;
      link: string;
    }>;
    description: string[];
    skills: string[][];
    picture?: string; // ໃສ່ເຕື່ອງຫມາຍ ? ເພື່ອບອກວ່າເປັນ optional
    link?: string; // ໃສ່ເຕື່ອງຫມາຍ ? ເພື່ອບອກວ່າເປັນ optional
  }>;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  sectionTitle = "",
  data = [],
}) => {
  const [isMouseEnter, setIsMouseEnter] = useState<Record<string, boolean>>({});

  const SECTION_ID = `${sectionTitle}-section`;
  // Call onInitail only when it changes

  return (
    <>
      <div id={SECTION_ID}>
        <div className="text-primaryAccent font-medium px-2">
          {sectionTitle}
        </div>
        {data.map(
          (
            {
              date = "",
              title = "",
              materials = [],
              description = [],
              skills = [],
              picture = "",
              link = "",
            },
            index
          ) => (
            <div
              key={`${SECTION_ID}-${index}`}
              className={`grid grid-cols-[25%_75%] duration-500 ${
                isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-gray-900" : ""
              } px-2 py-6 rounded-md`}
              onMouseEnter={() =>
                setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })
              }
              onMouseLeave={() =>
                setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })
              }
            >
              <div>
                <FormatDate
                  isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}
                >
                  {date}
                </FormatDate>
                <Picture picture={picture} title={title} />
              </div>

              <div className="grid gap-y-4">
                <TitleLink
                  isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}
                  title={title}
                  link={link}
                />
                {materials.length > 0 ? (
                  <div className="flex gap-4 text-xl item-center">
                    {materials.map((e, i) => (
                      <Material
                        key={`material-${i}`}
                        icon={e.type}
                        link={e.link}
                      />
                    ))}
                  </div>
                ) : null}

                {description.map((e, i) => (
                  <Description key={`description-${i}`} Description={e} />
                ))}

                {skills.map((e, i) => (
                  <Tech
                    key={`skills-${i}`}
                    isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}
                    data={e}
                  />
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
export default ContentContainer;
