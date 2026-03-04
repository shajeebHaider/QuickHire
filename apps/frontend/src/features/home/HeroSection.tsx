import vector from '../../assets/images/Vector.png';
import herocharacter from '../../assets/images/849d976651c585cf41e864d6b53eba0a93aec63f.png';
import backgroundPattern from '../../assets/images/Pattern.png';
import SearchJob from '../../components/home/SearchJob';

const HeroSection = () => {
  return (
    <section className="relative h-198.5 overflow-hidden bg-lights-gray max-w-360 mx-auto">
      <img
        src={backgroundPattern}
        alt="Background Pattern"
        className="absolute right-0 top-0 h-full w-auto object-contain z-0"
      />

      <div className="relative z-30 max-w-315 mx-auto px-6 xl:px-0 h-full">
        <div className="max-w-133 pt-35">
          <h1 className="text-7xl leading-[110%] font-semibold ">
            Discover more than <br />
            <span className="text-accents-blue">5000+ Jobs</span>
          </h1>
          <img src={vector} alt="Hero Image" className="w-114 h-auto mb-6" />
          <p className="text-xl leading-[160%] text-neutrals-80 mb-6">
            Great platform for the job seeker that searching for new career heights and passionate
            about startups.
          </p>
        </div>
        <SearchJob />
      </div>

      <img
        src={herocharacter}
        alt="Hero Character"
        className="absolute bottom-0 right-20 w-135 max-w-none z-10"
      />

      <div className="absolute bottom-0 right-0 h-57.5 w-115 bg-white z-20 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
    </section>
  );
};

export default HeroSection;
