import logo from '../../assets/logo/Frame 3.png';
import facebookIcon from '../../assets/icons/facebook.png';
import twitterIcon from '../../assets/icons/twitter.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import instagramIcon from '../../assets/icons/instagram.png';
import driblbleIcon from '../../assets/icons/dribbble.png';

const Footer = () => {
  return (
    <div className="bg-black h-124.25 px-31 pt-16 w-full">
      <div className="flex justify-between w-full ml-auto mr-auto">
        <div className="flex flex-col gap-8 w-94 h-36.5">
          <div className="flex gap-3">
            <img src={logo} alt="QuickHire Logo" className="w-8 h-8 " />
            <a href="/">
              <p className="text-2xl leading-normal font-bold text-white">QuickHire</p>
            </a>
          </div>
          <p className="text-neutrals-20 text-base">
            Great platform for the job seeker that passionate about startups. Find your dream job
            easier.
          </p>
        </div>
        <div className="ml-22">
          <p className="text-white font-semibold mb-4.5">About</p>
          <ul className="space-y-4.5">
            <li className="text-neutrals-20 text-sm">Companies</li>
            <li className="text-neutrals-20 text-sm">Pricing</li>
            <li className="text-neutrals-20 text-sm">Terms</li>
            <li className="text-neutrals-20 text-sm">Advice</li>
            <li className="text-neutrals-20 text-sm">Privacy Policy</li>
          </ul>
        </div>
        <div className="ml-23">
          <p className="text-white font-semibold mb-4.5">Resources</p>
          <ul className="space-y-4.5">
            <li className="text-neutrals-20 text-sm">Companies</li>
            <li className="text-neutrals-20 text-sm">Pricing</li>
            <li className="text-neutrals-20 text-sm">Terms</li>
            <li className="text-neutrals-20 text-sm">Advice</li>
            <li className="text-neutrals-20 text-sm">Privacy Policy</li>
          </ul>
        </div>
        <div className="ml-18">
          <p className="text-white font-semibold mb-4.5">Get job notifications</p>
          <p className="text-neutrals-20 text-base mb-10 max-w-76.5">
            The latest job news, articles, sent to your inbox weekly.
          </p>
          <div className="flex items-center justify-start gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-72 h-12.5 px-4 py-3 rounded-sm text-sm leading-normal bg-lights-gray text-black focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="flex font-bold items-center justify-center w-27 h-12.5 text-sm leading-normal px-6 py-3 rounded-sm bg-primary! text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t py-11 border-neutrals-80 mt-10 flex justify-between">
        <p className="text-neutrals-20 text-base ">© 2024 QuickHire. All rights reserved.</p>
        <div className="flex gap-6">
          <img src={facebookIcon} alt="Facebook" className="w-8 h-8 inline-block mx-2" />
          <img src={twitterIcon} alt="Twitter" className="w-8 h-8 inline-block mx-2" />
          <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 inline-block mx-2" />
          <img src={instagramIcon} alt="Instagram" className="w-8 h-8 inline-block mx-2" />
          <img src={driblbleIcon} alt="Dribbble" className="w-8 h-8 inline-block mx-2" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
