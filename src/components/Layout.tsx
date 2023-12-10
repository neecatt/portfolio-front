// Layout.tsx
import React from "react";
import BackgroundVideo from "./BackgroundVideo";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      {/* Video Background */}
      <div className="video-background">
        <BackgroundVideo />
      </div>

      {/* Navbar */}
      {/* Include your navbar and its buttons here */}

      {/* Page Content */}
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;
