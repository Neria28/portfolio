import { cn } from "@/utils/cn";

export type BaseIconProps = {
  size?: number;
  viewBox?: string;
  className?: string;
  children: React.ReactNode;
} & React.SVGProps<SVGSVGElement>;

const BaseIcon = ({ className, children, ...rest }: BaseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      role="img"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
};

export default BaseIcon;
