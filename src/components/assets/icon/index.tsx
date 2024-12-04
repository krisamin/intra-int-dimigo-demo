import React from "react";

import type { ColorPath } from "values";
import type { IconBaseProps } from "./base";

import { useTheme } from "contexts/theme";
import * as Icons from "./base";

type IconName = keyof typeof Icons;
interface IconProps extends IconBaseProps {
  name: IconName;
  color?: ColorPath;
}
const Icon = React.memo(
  ({ name = "Placeholder", fill = false, size = 24, color = "content.neutral.primary" }: IconProps) => {
    const { decodeColor } = useTheme();

    const IconBase = Icons[name];
    return <IconBase fill={fill} size={size} color={decodeColor(color)} />;
  },
);

export { Icon };
export type { IconName };
