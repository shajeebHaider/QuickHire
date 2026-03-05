import { useState } from 'react';
import logo from '../../assets/logo/Frame 3.png';
import MenuIcon from '../../assets/icons/MenuIcon';
import SideNav from './SideNav';

const TopNav = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      <div className="px-31 py-6 w-full h-19.5 flex items-center justify-between bg-lights-gray max-w-360 mx-auto max-md:px-4 max-md:py-2 max-lg:px-10">
        <div className="flex items-center gap-12 justify-center">
          <img src={logo} alt="QuickHire Logo" className="w-8 h-8 -mr-10" />
          <a href="/">
            <p className="text-2xl leading-normal font-bold">QuickHire</p>
          </a>
          <a href="#" className="text-sm leading-normal max-sm:hidden">
            Find Jobs
          </a>
          <a href="#" className="text-sm leading-normal -ml-9 max-sm:hidden">
            Browse Companies
          </a>
        </div>

        <div className="flex items-center justify-center gap-4">
          {/* Desktop Auth Buttons */}
          <button className="flex font-bold items-center justify-center w-23 h-12.5 text-sm leading-normal px-6 py-3 rounded-sm text-primary max-sm:hidden">
            Log In
          </button>
          <div className="border-r h-12 border border-neutrals-20 max-sm:hidden" />
          <button className="flex font-bold items-center justify-center w-27 h-12.5 text-sm leading-normal px-6 py-3 rounded-sm bg-primary! text-white max-sm:hidden">
            Sign Up
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsSideNavOpen(true)}
            className="hidden max-sm:flex items-center justify-center p-2 hover:bg-gray-100 rounded-sm transition-colors"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Side Navigation */}
      <SideNav isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)} />
    </>
  );
};

export default TopNav;
