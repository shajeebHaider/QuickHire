import { useLocation, useNavigate } from 'react-router-dom';
import Typography from '../../components/base/Typography';
import { paths } from '../../routes/paths';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = location.pathname === paths.applications ? 'applications' : 'dashboard';

  return (
    <aside className="w-64 max-lg:w-56 max-sm:w-52 border-r border-neutrals-20 p-6">
      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            navigate(paths.dashboard);
          }}
          className={`w-full text-left px-4 py-3 rounded transition-colors border-2 ${
            activeTab === 'dashboard'
              ? 'bg-blue-100 text-blue-700 border-primary'
              : 'bg-white hover:bg-neutrals-20 border-transparent'
          }`}
        >
          <Typography variant="text" size="medium" className="font-semibold" component="span">
            Jobs
          </Typography>
        </button>
        <button
          onClick={() => {
            navigate(paths.applications);
          }}
          className={`w-full text-left px-4 py-3 rounded transition-colors border-2 ${
            activeTab === 'applications'
              ? 'bg-blue-100 text-blue-700 border-primary'
              : 'bg-white hover:bg-neutrals-20 border-transparent'
          }`}
        >
          <Typography variant="text" size="medium" className="font-semibold" component="span">
            Applications
          </Typography>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
