import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  clasName?: string;
}

const Box: React.FC<BoxProps> = ({ children, clasName }) => {
  return (
    <div
      className={twMerge("bg-neutral-900 rounded-lg h-fit w-full  ", clasName)}
    >
      {children}
    </div>
  );
};

export default Box;
