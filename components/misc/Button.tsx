import { FC, ReactNode } from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  enableBlock?: boolean;
  mobile?: boolean;
  outline?:boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { children,enableBlock,mobile,outline, ...rest } = props;
  let buttonClasses: string | string[] = [
    'btn btn-primary tracking-wide font-light rounded text-xs sm:text-base hover:text-gray-800',
  ];
  if (enableBlock) buttonClasses.push('enableBlock w-full sm:btn-wide sm:inline');
  if (mobile) buttonClasses.push('mr-1');
  if (outline)buttonClasses.push('btn-outline focus:hover:text-gray-800')

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
    outline: false,
}

export default Button;
