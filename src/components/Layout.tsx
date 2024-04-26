import React from "react";
import BackgroundVideo from "./BackgroundVideo";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="video-background">
        <BackgroundVideo />
      </div>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;
