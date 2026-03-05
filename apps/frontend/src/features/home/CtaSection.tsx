import dashboard from '../../assets/images/dashboard.png';
import Typography from '../../components/base/Typography';

const CtaSection = () => {
  return (
    <div className="py-18 px-31 max-w-360 mx-auto">
      <div className="px-17.5 relative py-16 bg-primary max-w-298 h-103.5 mx-auto">
        <div className="absolute top-0 left-0 h-20 w-30 bg-white z-20 [clip-path:polygon(0_0,100%_0,0_100%)]" />
        <div className="max-w-91 mt-6.25">
          <Typography
            variant="heading"
            size="medium"
            className=" mb-6! text-white! "
            component="h2"
          >
            Start posting jobs today
          </Typography>
          <Typography variant="text" size="medium" className="text-white! mb-6!" component="p">
            Start posting jobs for only $10.
          </Typography>
          <button className="mt-6 px-6 py-3 bg-white text-primary font-semibold hover:bg-gray-100 transition-colors duration-200">
            Sign Up For Free
          </button>
        </div>

        <div>
          <img
            src={dashboard}
            alt="Dashboard"
            className="max-w-141 h-86.5 absolute top-17 right-17.5"
          />
        </div>
        <div className="absolute bottom-0 right-0 h-20 w-30 bg-white z-20 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
      </div>
    </div>
  );
};

export default CtaSection;
