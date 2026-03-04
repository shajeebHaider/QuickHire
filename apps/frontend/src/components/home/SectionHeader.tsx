import React from 'react';
import ArrowIcon from '../../assets/icons/ArrowIcon';

interface SectionHeaderProps {
  title1: string;
  title2: string;
  linkText: string;
  linkHref: string;
}

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-5xl font-semibold mb-4">
        {props.title1} <span className="text-accents-blue">{props.title2}</span>
      </h2>
      <a
        href={props.linkHref}
        className="text-primary font-semibold text-base flex items-center gap-4"
      >
        <p>{props.linkText}</p>
        <ArrowIcon />
      </a>
    </div>
  );
};

export default SectionHeader;
