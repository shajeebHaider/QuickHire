import React from 'react';
import SectionHeader from '../../components/home/SectionHeader';
import PencilIcon from '../../assets/icons/PencilIcon';
import CategoryCard from '../../components/home/CategoryCard';
import AnalyticsIcon from '../../assets/icons/AnalyticsIcon';
import MarketingIcon from '../../assets/icons/MarketingIcon';
import FinanceIcon from '../../assets/icons/FinanceIcon';
import TechnologyIcon from '../../assets/icons/TechnologyIcon';
import BusinessIcon from '../../assets/icons/BusinessIcon';
import HumanIcon from '../../assets/icons/HumanIcon';

const categories = [
  { title: 'Design', jobCount: 12, link: '#', icon: <PencilIcon /> },
  { title: 'Sales', jobCount: 8, link: '#', icon: <AnalyticsIcon /> },
  { title: 'Marketing', jobCount: 5, link: '#', icon: <MarketingIcon /> },
  { title: 'Finance', jobCount: 10, link: '#', icon: <FinanceIcon /> },
  { title: 'Technology', jobCount: 7, link: '#', icon: <TechnologyIcon /> },
  { title: 'Engineering', jobCount: 3, link: '#', icon: <TechnologyIcon /> },
  { title: 'Business', jobCount: 4, link: '#', icon: <BusinessIcon /> },
  { title: 'Human Resource', jobCount: 6, link: '#', icon: <HumanIcon /> }
];

const Category = () => {
  return (
    <div className="px-31 pt-18 flex flex-col gap-8 max-w-360 mx-auto">
      <SectionHeader title1="Explore by" title2="category" linkText="Show all jobs" linkHref="#" />

      <div className="grid grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            title={category.title}
            jobCount={category.jobCount}
            link={category.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
