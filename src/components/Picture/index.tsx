import React from "react";

interface pictureProps {
  picture: string;
  title: string;
}

const picture: React.FC<pictureProps> = ({ picture, title }) => {
  if (!picture) return null;
  return (
    <>
      <div>
        <img
          src={picture}
          alt={title}
          className="w-5/6 rounded-md border-2 border-primaryAccent"
        />
      </div>
    </>
  );
};

export default picture;
