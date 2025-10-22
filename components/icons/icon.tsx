import { BaseIconProps } from "./base-icons";
import { LogoIcon } from "./logo";
import { GithubIcon } from "./github";
import { LinkedinIcon } from "./linkedin";

export type IconProps = {} & Omit<BaseIconProps, "children">;

const Icon = {
  Logo: LogoIcon,
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
};

export default Icon;
