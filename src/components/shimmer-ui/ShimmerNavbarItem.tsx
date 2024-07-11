import React from "react";
import { LOGO } from "../../utils/constants";
import { useLocation } from "react-router-dom";

export const ShimmerNavbarItem: React.FC = () => {
  return <div className="h-4 w-20 bg-zinc-800 rounded animate-pulse"></div>;
};

const ShimmerNavbar: React.FC = () => {
  const location = useLocation();
  console.log(location);

  return (
    <nav className="w-full fixed z-40">
      <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500">
        <img src={LOGO} alt="logo" className="h-6 lg:h-16" />
        {location.pathname !== "/" && (
          <>
            <div className="flex-row ml-8 gap-7 hidden lg:flex">
              <ShimmerNavbarItem />
              <ShimmerNavbarItem />
              <ShimmerNavbarItem />
            </div>
            <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
              <div className="h-4 w-20 bg-zinc-800 rounded animate-pulse"></div>
            </div>
            <div className="flex flex-row ml-auto gap-7 items-center">
              <div className="h-6 w-6 bg-zinc-800 rounded-full animate-pulse"></div>
              <div className="h-6 w-6 bg-zinc-800 rounded-full animate-pulse"></div>
              <div className="flex flex-row items-center gap-2 cursor-pointer relative">
                <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md bg-zinc-800 animate-pulse"></div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default ShimmerNavbar;
