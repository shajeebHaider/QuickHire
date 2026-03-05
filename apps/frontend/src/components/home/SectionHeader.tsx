import ArrowIcon from '../../assets/icons/ArrowIcon';
import { paths } from '../../routes/paths';
import Typography from '../base/Typography';

interface SectionHeaderProps {
  title1: string;
  title2: string;
}

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <Typography
        size="medium"
        variant="heading"
        component="h2"
        className="mb-4 max-md:text-3xl! max-md:leading-[35.2px]!"
      >
        {props.title1} <span className="text-accents-blue">{props.title2}</span>
      </Typography>
      <a
        href={paths.jobs}
        className="text-primary font-semibold text-base flex items-center gap-4 max-md:hidden"
      >
        <p>Show all jobs</p>
        <ArrowIcon />
      </a>
    </div>
  );
};

export default SectionHeader;
