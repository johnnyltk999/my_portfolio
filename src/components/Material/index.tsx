import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface MaterialProps {
  icon: FontAwesomeIconProps[`icon`];
  link: string;
}

const Material: React.FC<MaterialProps> = ({ icon, link }) => {
  return (
    <>
      <div className="flex gap-2 text-xl">
        <a href={link} target="_blank" className="hover:scale-110">
          <FontAwesomeIcon icon={icon} />
        </a>
      </div>
    </>
  );
};
export default Material;
