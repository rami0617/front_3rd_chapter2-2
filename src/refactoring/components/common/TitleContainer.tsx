import { twMerge } from 'tailwind-merge';

interface TitleContainerProps {
  title: string;
  className?: string;
}

const TitleContainer = ({ title, className = '' }: TitleContainerProps) => {
  return <h2 className={twMerge(`text-2xl font-semibold mb-4 ${className}`)}>{title}</h2>;
};

export default TitleContainer;
