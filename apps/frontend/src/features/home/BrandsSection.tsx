import brandone from '../../assets/logo/vodafone-2017-logo.png';
import brandtwo from '../../assets/logo/intel-3.png';
import brandthree from '../../assets/logo/TESLA.png';
import brandfour from '../../assets/logo/amd-logo-1.png';
import brandfive from '../../assets/logo/talkit 1.png';

const brands = [
  { name: 'Vodafone', logo: brandone },
  { name: 'Intel', logo: brandtwo },
  { name: 'Tesla', logo: brandthree },
  { name: 'AMD', logo: brandfour },
  { name: 'Talkit', logo: brandfive }
];

const BrandsSection = () => {
  return (
    <div className="pr-30.5 pl-31 py-12">
      <p className="text-lg font-normal text-black opacity-50 mb-8">Companies we helped to grow</p>
      <div className="flex items-center justify-between ">
        {brands.map(brand => (
          <img key={brand.name} src={brand.logo} alt={brand.name} className="h-8" />
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
