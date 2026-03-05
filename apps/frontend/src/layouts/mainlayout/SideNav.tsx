import { useEffect } from 'react';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav = ({ isOpen, onClose }: SideNavProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-neutrals-20">
            <p className="text-xl font-bold">Menu</p>
            <button
              onClick={onClose}
              className="text-2xl cursor-pointer leading-none hover:text-primary"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <nav className="flex flex-col p-6 space-y-6">
            <a
              href="#"
              className="text-base leading-normal hover:text-primary transition-colors"
              onClick={onClose}
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="text-base leading-normal hover:text-primary transition-colors"
              onClick={onClose}
            >
              Browse Companies
            </a>
          </nav>

          <div className="mt-auto p-6 space-y-4 border-t border-neutrals-20">
            <button className="w-full cursor-pointer font-bold flex items-center justify-center h-12 text-sm leading-normal px-6 py-3 rounded-sm text-primary border border-primary hover:bg-primary hover:bg-opacity-10 transition-colors">
              Log In
            </button>
            <button className="w-full cursor-pointer font-bold flex items-center justify-center h-12 text-sm leading-normal px-6 py-3 rounded-sm bg-primary! text-white hover:bg-opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
