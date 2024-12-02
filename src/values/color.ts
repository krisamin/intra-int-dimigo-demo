import { type Theme, coreTheme, dimigoTheme, sunrinTheme, system } from "./primitives";

type Color = {
  background: {
    root: {
      regular: string;
      strong: string;
    };
    fill: {
      regular: string;
      strong: string;
      inverted: string;
    };
    group: {
      regular: string;
      strong: string;
      interactive: string;
    };
    state: {
      hover: string;
      focussed: string;
      pressed: string;
    };
  };
  border: {
    divider: string;
    outline: string;
  };
  content: {
    inverted: string;
    static: string;
    neutral: {
      primary: string;
      secondary: string;
      tertiary: string;
      quarternary: string;
    };
  };
  semantic: {
    brand: string;
    brandTranslucent: string;
    status: {
      success: string;
      successTranslucent: string;
      warning: string;
      warningTranslucent: string;
      danger: string;
      dangerTranslucent: string;
    };
    calendar: {
      exam: string;
      home: string;
      vacation: string;
      event: string;
      stay: string;
    };
  };
  dim: {
    regular: string;
    strong: string;
  };
};
type ColorPath =
  | "background.root.regular"
  | "background.root.strong"
  | "background.fill.regular"
  | "background.fill.strong"
  | "background.fill.inverted"
  | "background.group.regular"
  | "background.group.strong"
  | "background.group.interactive"
  | "background.state.hover"
  | "background.state.focussed"
  | "background.state.pressed"
  | "border.divider"
  | "border.outline"
  | "content.inverted"
  | "content.static"
  | "content.neutral.primary"
  | "content.neutral.secondary"
  | "content.neutral.tertiary"
  | "content.neutral.quarternary"
  | "semantic.brand"
  | "semantic.brandTranslucent"
  | "semantic.status.success"
  | "semantic.status.successTranslucent"
  | "semantic.status.warning"
  | "semantic.status.warningTranslucent"
  | "semantic.status.danger"
  | "semantic.status.dangerTranslucent"
  | "semantic.calendar.exam"
  | "semantic.calendar.home"
  | "semantic.calendar.vacation"
  | "semantic.calendar.event"
  | "semantic.calendar.stay"
  | "dim.regular"
  | "dim.strong";
type ThemeColor = {
  light: Color;
  dark: Color;
};

const makeColor = (theme: Theme): ThemeColor => {
  const lightColor: Color = {
    background: {
      root: {
        regular: system.white[100],
        strong: theme.contrast[5],
      },
      fill: {
        regular: theme.brandBlack[4],
        strong: theme.brandBlack[8],
        inverted: theme.contrast[3],
      },
      group: {
        regular: system.white[100],
        strong: theme.contrast[4],
        interactive: system.white[100],
      },
      state: {
        hover: theme.vibrantBlack[4],
        focussed: theme.vibrantBlack[8],
        pressed: theme.vibrantBlack[16],
      },
    },
    border: {
      divider: theme.vibrantBlack[16],
      outline: theme.vibrantBlack[12],
    },
    content: {
      inverted: theme.vibrantWhite[100],
      static: system.white[100],
      neutral: {
        primary: theme.vibrantBlack[100],
        secondary: theme.vibrantBlack[80],
        tertiary: theme.vibrantBlack[40],
        quarternary: theme.vibrantBlack[24],
      },
    },
    semantic: {
      brand: theme.brand[100],
      brandTranslucent: theme.brand[8],
      status: {
        success: system.green[100],
        successTranslucent: system.green[8],
        warning: system.yellow[100],
        warningTranslucent: system.yellow[8],
        danger: system.red[100],
        dangerTranslucent: system.red[8],
      },
      calendar: {
        exam: system.indigo[100],
        home: system.green[100],
        vacation: system.blue[100],
        event: system.yellow[100],
        stay: system.red[100],
      },
    },
    dim: {
      regular: system.white[100],
      strong: theme.contrast[5],
    },
  };
  const darkColor: Color = {
    background: {
      root: {
        regular: theme.contrast[2],
        strong: theme.contrast[1],
      },
      fill: {
        regular: theme.vibrantWhite[2],
        strong: theme.vibrantWhite[4],
        inverted: theme.contrast[5],
      },
      group: {
        regular: theme.contrast[2],
        strong: theme.contrast[3],
        interactive: theme.vibrantWhite[4],
      },
      state: {
        hover: theme.vibrantWhite[8],
        focussed: theme.vibrantWhite[12],
        pressed: theme.vibrantWhite[16],
      },
    },
    border: {
      divider: theme.vibrantWhite[12],
      outline: theme.vibrantWhite[8],
    },
    content: {
      inverted: theme.vibrantBlack[100],
      static: theme.vibrantWhite[100],
      neutral: {
        primary: theme.vibrantWhite[100],
        secondary: theme.vibrantWhite[80],
        tertiary: theme.vibrantWhite[40],
        quarternary: theme.vibrantWhite[24],
      },
    },
    semantic: {
      brand: theme.brand[100],
      brandTranslucent: theme.brand[8],
      status: {
        success: system.green[100],
        successTranslucent: system.green[16],
        warning: system.yellow[100],
        warningTranslucent: system.yellow[16],
        danger: system.red[100],
        dangerTranslucent: system.red[16],
      },
      calendar: {
        exam: system.indigo[100],
        home: system.green[100],
        vacation: system.blue[100],
        event: system.yellow[100],
        stay: system.red[100],
      },
    },
    dim: {
      regular: theme.contrast[2],
      strong: theme.contrast[1],
    },
  };

  return {
    light: lightColor,
    dark: darkColor,
  };
};

const coreColor = makeColor(coreTheme);
const dimigoColor = makeColor(dimigoTheme);
const sunrinColor = makeColor(sunrinTheme);
export { coreColor, dimigoColor, sunrinColor };
export type { Color, ColorPath, ThemeColor };
