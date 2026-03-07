import Typography from '../../components/base/Typography';
import logo from '../../assets/logo/Frame 3.png';

interface TopNavProps {
  userName?: string;
}

const TopNav = (props: TopNavProps) => {
  const { userName = 'Admin User' } = props;
  return (
    <nav className="bg-white border-b border-neutrals-20 px-8 py-4 max-lg:px-6 max-sm:px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="QuickHire Logo" className="w-8 h-8" />
          <Typography variant="heading" size="small" className="max-sm:hidden">
            QuickHire
          </Typography>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative max-md:hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 pl-10 border border-neutrals-20 rounded-lg focus:outline-none focus:border-primary transition-colors"
            />
            <svg
              className="w-5 h-5 text-neutrals-60 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <button className="relative p-2 hover:bg-neutrals-10 rounded-lg transition-colors">
            <svg
              className="w-6 h-6 text-neutrals-80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-accents-red rounded-full"></span>
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-neutrals-20">
            <div className="text-right max-sm:hidden">
              <Typography variant="text" size="small" className="font-semibold!">
                {userName}
              </Typography>
              <Typography variant="text" size="small" className="text-neutrals-60!">
                Administrator
              </Typography>
            </div>
            <button className="w-10 h-10 bg-primary! text-white rounded-full flex items-center justify-center font-semibold hover:bg-primary/90 transition-colors">
              {userName.charAt(0).toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
