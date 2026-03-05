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
import ArrowIcon from '../../assets/icons/ArrowIcon';

const categories = [
  { title: 'Design', jobCount: 1, link: '#', icon: <PencilIcon /> },
  { title: 'Sales', jobCount: 8, link: '#', icon: <AnalyticsIcon /> },
  { title: 'Marketing', jobCount: 5, link: '#', icon: <MarketingIcon /> },
  { title: 'Finance', jobCount: 1, link: '#', icon: <FinanceIcon /> },
  { title: 'Technology', jobCount: 7, link: '#', icon: <TechnologyIcon /> },
  { title: 'Engineering', jobCount: 3, link: '#', icon: <TechnologyIcon /> },
  { title: 'Business', jobCount: 4, link: '#', icon: <BusinessIcon /> },
  { title: 'HR', jobCount: 6, link: '#', icon: <HumanIcon /> }
];

const Category = () => {
  return (
    <div className="px-31 pt-18 flex flex-col gap-8 max-w-360 mx-auto max-lg:px-6 max-sm:px-4 max-sm:items-center">
      <SectionHeader title1="Explore by" title2="category" linkText="Show all jobs" linkHref="#" />

      <div className="grid grid-cols-4 gap-8 max-xl:grid-cols-3 max-lg:grid-cols-3 max-sm:grid-cols-1">
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
      <div className="hidden max-sm:flex">
        <a href="#" className="text-primary font-semibold text-base flex items-center gap-4 ">
          <p>Show all jobs</p>
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
};

export default Category;
