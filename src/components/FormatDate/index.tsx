import React, { ReactNode } from "react";

interface FormatDateProps {
  isHighLight: boolean;
  children: ReactNode;
}

const FormatDate: React.FC<FormatDateProps> = ({ isHighLight, children }) => {
  return (
    <>
      <div>
        <span className={`text-sm ${isHighLight ? "text-primaryBase" : ""}`}>
          {children}
        </span>
      </div>
    </>
  );
};

export default FormatDate;
