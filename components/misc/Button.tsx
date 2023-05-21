import { FC, ReactNode } from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  block?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, block = false } = props;
  let buttonClasses: string | string[] = [
    'btn btn-primary tracking-wide font-light rounded',
  ];
  if (block) buttonClasses.push('block w-full sm:btn-wide sm:inline');

  buttonClasses = buttonClasses.join(' ');

  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
