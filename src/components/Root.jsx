import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";
import TopBar from "./TopBar";
import Footer from "./Footer";
import "../components/Root.css";

const Root = () => {
  const observeNav = useRef(null);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        setShowNav(!entry[0].isIntersecting); // show nav when TopBar is out of view
      },
      { threshold: 0 }
    );

    if (observeNav.current) {
      observer.observe(observeNav.current);
    }

    return () => {
      if (observeNav.current) {
        observer.unobserve(observeNav.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div ref={observeNav}>
        <TopBar />
      </div>
      {/* Element de referință pentru observer */}
      <MainNav sendCls={showNav ? "absolutify" : ""} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
