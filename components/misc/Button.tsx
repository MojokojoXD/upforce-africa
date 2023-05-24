import { FC, ReactNode } from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  enableBlock?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { children,enableBlock, ...rest } = props;
  let buttonClasses: string | string[] = [
    'btn btn-primary tracking-wide font-light rounded text-xs sm:text-base',
  ];
  if (enableBlock) buttonClasses.push('enableBlock w-full sm:btn-wide sm:inline');

  buttonClasses = buttonClasses.join(' ');

  return (
    <button
      className={buttonClasses}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
    enableBlock: false,
}

export default Button;
