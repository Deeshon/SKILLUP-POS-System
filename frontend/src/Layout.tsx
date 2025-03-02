import React, { useState } from "react";
import Header from "./common/components/Header";
import Menu from "./common/components/Menu";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuClose, setIsMenuClose] = useState<boolean>(true);

  return (
    <div className="bg-navy-500 w-full h-screen flex flex-col">
      {/* Header Section */}
      <Header isMenuClose={isMenuClose} setIsMenuClose={setIsMenuClose} />

      {/* Main Content Area */}
      <div className="flex flex-grow overflow-hidden ">
        {/* Sidebar Menu */}
        <div className="lg:w-1/5">
          <Menu isMenuClose={isMenuClose} />
        </div>

        {/* Main Content (Children) */}
        <div className="flex-grow overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
