import { FC, ReactNode } from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  enableBlock?: boolean;
  mobile?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { children,enableBlock,mobile, ...rest } = props;
  let buttonClasses: string | string[] = [
    'btn btn-primary tracking-wide font-light rounded text-xs sm:text-base text-gray-700',
  ];
  if (enableBlock) buttonClasses.push('enableBlock w-full sm:btn-wide sm:inline');
  if (mobile) buttonClasses.push('mr-1')

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
    mobile: false,
}

export default Button;
