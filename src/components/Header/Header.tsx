import React from "react";
import "./header.css";

interface HeaderProps {
  pageHeading: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ pageHeading, children }) => {
  return (
    <div className="header-wrapper">
      <div className="rounded">
        <h1>{pageHeading}</h1>
        {children && <div className="header-children">{children}</div>}
      </div>
    </div>
  );
};

export default Header;
