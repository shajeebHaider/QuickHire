import dashboard from '../../assets/images/dashboard.png';
import Typography from '../../components/base/Typography';

const CtaSection = () => {
  return (
    <div className="py-18 px-6 lg:px-16 max-w-[1440px] mx-auto">
      <div className="relative bg-primary rounded-lg px-6 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
        <div className="absolute -top-[1px] -left-[1px] h-20 w-30 bg-white z-20 [clip-path:polygon(0_0,100%_0,0_100%)]" />
        <div className="max-w-md text-center lg:text-left z-10">
          <Typography variant="heading" size="medium" className="text-white! mb-6!" component="h2">
            Start posting jobs today
          </Typography>

          <Typography variant="text" size="medium" className="text-white! mb-6!" component="p">
            Start posting jobs for only $10.
          </Typography>

          <button className="px-6 py-3 cursor-pointer bg-white text-primary font-semibold hover:bg-gray-100 transition">
            Sign Up For Free
          </button>
        </div>

        <div className="relative z-10 w-full lg:w-auto flex justify-center ">
          <img src={dashboard} alt="Dashboard" className="w-full max-w-[520px] h-auto" />
        </div>

        <div className="absolute -bottom-[1px] -right-[1px] h-20 w-30 bg-white z-20 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
      </div>
    </div>
  );
};

export default CtaSection;
