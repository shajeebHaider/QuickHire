import brandone from '../../assets/logo/vodafone-2017-logo.png';
import brandtwo from '../../assets/logo/intel-3.png';
import brandthree from '../../assets/logo/TESLA.png';
import brandfour from '../../assets/logo/amd-logo-1.png';
import brandfive from '../../assets/logo/talkit 1.png';
import Typography from '../../components/base/Typography';

const brands = [
  { name: 'Vodafone', logo: brandone },
  { name: 'Intel', logo: brandtwo },
  { name: 'Tesla', logo: brandthree },
  { name: 'AMD', logo: brandfour },
  { name: 'Talkit', logo: brandfive }
];

const BrandsSection = () => {
  return (
    <div className="pr-30.5 pl-31 py-12 max-w-360 mx-auto max-lg:px-6 max-sm:px-6">
      <Typography className="text-lg! opacity-50 mb-8" variant="text" size="medium">
        Companies we helped to grow
      </Typography>
      <div className="flex flex-wrap gap-10 items-center justify-between ">
        {brands.map(brand => (
          <img key={brand.name} src={brand.logo} alt={brand.name} className="h-8 object-contain" />
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
