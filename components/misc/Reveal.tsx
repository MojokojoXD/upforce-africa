import { FC, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface RevealProps {
  children: ReactNode;
  direction?: 'left' | 'up';
}

const Reveal: FC<RevealProps> = ({ children, direction }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  let baseClass = `transition-all delay-500 duration-300`;
  let initial = '';
  let final = '';
  switch (direction) {
    case 'up': {
      initial = 'translate-y-10 opacity-0';
      final = 'translate-y-0 opacity-100';
      break;
    }
    case 'left': {
      initial = '-translate-x-10 opacity-0';
      final = 'translate-x-0 opacity-100';
      break;
    }

    default:
      throw new Error('direction not supported');
  }

  const finalClass = baseClass + ' ' + (inView ? final : initial);
  return (
    <div ref={ref} className={finalClass}>
      {children}
    </div>
  );
};

Reveal.defaultProps = {
  direction: 'up',
};

export default Reveal;
