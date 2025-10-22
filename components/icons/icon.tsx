import { BaseIconProps } from "./base-icons";
import { LogoIcon } from "./logo";

export type IconProps = {} & Omit<BaseIconProps, "children">;

const Icon = {
  Logo: LogoIcon,
};

export default Icon;
