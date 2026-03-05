import type { ElementType, PropsWithChildren } from 'react';
import classNames from 'classnames';

interface TypographyProps {
  size: 'large' | 'medium' | 'small';
  variant?: 'heading' | 'text';
  component?: ElementType;
  className?: string;
}

const Typography = ({
  size,
  variant = 'text',
  component: Component = 'p',
  className,
  children
}: PropsWithChildren<TypographyProps>) => {
  return (
    <Component className={classNames(`typography-${size} typography-${variant}`, className)}>
      {children}
    </Component>
  );
};

export default Typography;
