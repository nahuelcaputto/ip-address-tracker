import type { SVGProps, FC } from "react";
import ArrowIcon from "@/assets/icon-arrow.svg?react";
import LocationIcon from "@/assets/icon-location.svg?react";

const icons: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  arrow: ArrowIcon,
  location: LocationIcon,
};

type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 24, className }: IconProps) {
  const Svg = icons[name];

  return (
    <Svg
      width={size}
      height={size}
      className={className}
      aria-hidden
      style={{
        fill: "currentColor",
        stroke: "currentColor",
      }}
    />
  );
}
