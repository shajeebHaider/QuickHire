import React from 'react';
import SectionHeader from '../../components/home/SectionHeader';
import CategoryCard from '../../components/home/CategoryCard';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import { paths } from '../../routes/paths';
import { useCategories } from '../../api-hooks/useCategories';
import type { Category } from '../../pages/AllJobs';

const Category = () => {
  const { data: categories = [], isLoading, isError } = useCategories();

  return (
    <div className="px-31 pt-18 flex flex-col gap-8 max-w-360 mx-auto max-lg:px-6 max-sm:px-4 max-sm:items-center">
      <SectionHeader title1="Explore by" title2="category" />

      {isLoading && <p>Loading categories...</p>}
      {isError && <p>Failed to load categories.</p>}

      <div className="grid grid-cols-4 gap-8 max-xl:grid-cols-3 max-lg:grid-cols-3 max-sm:grid-cols-1">
        {categories.map((category: Category) => (
          <CategoryCard
            key={category.id}
            icon={category.icon}
            name={category.name}
          />
        ))}
      </div>

      <div className="hidden max-sm:flex">
        <a
          href={paths.jobs}
          className="text-primary font-semibold text-base flex items-center gap-4 "
        >
          <p>Show all jobs</p>
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
};

export default Category;
