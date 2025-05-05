import React from "react";
import BackgroundVideo from "./BackgroundVideo";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout relative w-full min-h-screen">
      <div className="video-background fixed top-0 left-0 w-full h-full z-0">
        <BackgroundVideo />
      </div>
      <div className="page-content relative z-10 w-full min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
