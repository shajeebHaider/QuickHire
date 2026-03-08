import vector from '../../assets/images/Vector.png';
import herocharacter from '../../assets/images/849d976651c585cf41e864d6b53eba0a93aec63f.png';
import backgroundPattern from '../../assets/images/Pattern.png';
import SearchJob from '../../components/home/SearchJob';
import Typography from '../../components/base/Typography';

const HeroSection = () => {
  return (
    <section className="relative min-h-[790px] overflow-hidden bg-lights-gray max-w-360 mx-auto">
      <img
        src={backgroundPattern}
        alt="Background Pattern"
        className="absolute right-0 top-0 h-full w-auto object-cover z-0 pointer-events-none"
      />

      <div className="relative z-30 max-w-315 mx-auto px-6 xl:px-0">
        <div className="max-w-133 pt-35 max-sm:pt-20 max-sm:max-w-85.75">
          <Typography
            className="max-sm:text-5xl! max-sm:leading-[52px]!"
            size="large"
            variant="heading"
            component="h1"
          >
            Discover more than <br />
            <span className="text-accents-blue max-sm:text-5xl!">5000+ Jobs</span>
          </Typography>

          <img src={vector} alt="Hero Vector" className="w-full max-w-[456px] mb-6" />

          <Typography
            className="text-neutrals-80! mb-6!"
            size="medium"
            variant="text"
            component="p"
          >
            Great platform for the job seeker that searching for new career heights and passionate
            about startups.
          </Typography>
        </div>

        <SearchJob />
      </div>

      <img
        src={herocharacter}
        alt="Hero Character"
        className="absolute bottom-0 right-10 xl:right-20 w-[540px] max-w-none z-10 max-lg:hidden"
      />

      <div className="absolute bottom-0 right-0 h-57.5 w-115 bg-white z-20 [clip-path:polygon(100%_0%,100%_100%,0%_100%)]" />
    </section>
  );
};

export default HeroSection;
