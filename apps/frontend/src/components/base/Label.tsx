import classNames from 'classnames';

interface LabelProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const Label = ({ text, variant = 'primary' }: LabelProps) => {
  return (
    <div
      className={classNames(
        'px-4 py-1 rounded-full text-sm font-semibold flex item-center justify-center',
        variant === 'primary'
          ? 'bg-primary/10 text-primary'
          : variant === 'secondary'
            ? 'bg-gray-500 text-white'
            : variant === 'success'
              ? 'bg-accents-green/10 text-accents-green'
              : variant === 'warning'
                ? 'bg-accents-yellow/10 text-accents-yellow'
                : variant === 'error'
                  ? 'bg-accents-red/10 text-accents-red'
                  : ''
      )}
    >
      {text}
    </div>
  );
};

export default Label;
