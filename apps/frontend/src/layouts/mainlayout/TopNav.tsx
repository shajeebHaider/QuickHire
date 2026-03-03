import logo from '../../assets/logo/Frame 3.png';

const TopNav = () => {
  return (
    <div className="px-31 py-6 w-full h-19.5 flex items-center justify-between bg-lights-gray ml-auto mr-auto">
      <div className="flex items-center gap-12 justify-center">
        <img src={logo} alt="QuickHire Logo" className="w-8 h-8 -mr-10" />
        <a href="/">
          <p className="text-2xl leading-normal font-bold">QuickHire</p>
        </a>
        <a href="#" className="text-sm leading-normal ">
          Find Jobs
        </a>
        <a href="#" className="text-sm leading-normal -ml-9">
          Browse Companies
        </a>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button className="flex font-bold items-center justify-center w-23 h-12.5 text-sm leading-normal px-6 py-3 rounded-sm text-primary">
          Log In
        </button>
        <div className="border-r h-12 border border-neutrals-20" />
        <button className="flex font-bold items-center justify-center w-27 h-12.5 text-sm leading-normal px-6 py-3 rounded-sm bg-primary! text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default TopNav;
