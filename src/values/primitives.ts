const hexOpacity = (hex: string, opacity: number) => {
  const hexOpacity = Math.round(opacity * 255).toString(16);
  return `${hex}${hexOpacity.length === 1 ? "0" : ""}${hexOpacity}`;
};

const opacityKeys = [0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 60, 80, 100] as const;
type OpacityKeys = (typeof opacityKeys)[number];
type Opacity = {
  [key in OpacityKeys]: string;
};

type SystemBase = {
  red: string;
  orange: string;
  yellow: string;
  green: string;
  blue: string;
  indigo: string;
  grey: string;
  black: string;
  white: string;
};
type SystemOpacity = {
  red: Opacity;
  orange: Opacity;
  yellow: Opacity;
  green: Opacity;
  blue: Opacity;
  indigo: Opacity;
  grey: Opacity;
  black: Opacity;
  white: Opacity;
};

type ThemeBase = {
  brand: string;
  brandBlack: string;
  vibrantWhite: string;
  vibrantBlack: string;
};
type ThemeOpacity = {
  brand: Opacity;
  brandBlack: Opacity;
  vibrantWhite: Opacity;
  vibrantBlack: Opacity;
};

type Contrast = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};

type Theme = ThemeOpacity & {
  contrast: Contrast;
};

const makeTheme = (theme: ThemeBase, contrast: Contrast): Theme => {
  const themeOpacity = {} as ThemeOpacity;
  for (const key of Object.keys(theme) as (keyof ThemeBase)[]) {
    const opacity: Opacity = {} as Opacity;
    for (const opacityKey of opacityKeys) {
      opacity[opacityKey] = hexOpacity(theme[key], opacityKey / 100);
    }
    themeOpacity[key] = opacity;
  }

  return {
    ...themeOpacity,
    contrast,
  };
};

const systemBase = {
  red: "#FF244B",
  orange: "#FF7F0F",
  yellow: "#FFBF0F",
  green: "#16B874",
  blue: "#3275FB",
  indigo: "#5E56D6",
  grey: "#808080",
  black: "#000000",
  white: "#FFFFFF",
};

const system = {} as SystemOpacity;
for (const key of Object.keys(systemBase) as (keyof SystemBase)[]) {
  const opacity: Opacity = {} as Opacity;
  for (const opacityKey of opacityKeys) {
    opacity[opacityKey] = hexOpacity(systemBase[key], opacityKey / 100);
  }
  system[key] = opacity;
}

const coreThemeBase: ThemeBase = {
  brand: "#437DF0",
  brandBlack: "#626A7A",
  vibrantWhite: "#F0F2F5",
  vibrantBlack: "#1F242E",
};
const coreThemeContrast: Contrast = {
  1: "#09090A",
  2: "#0E0E0F",
  3: "#16171A",
  4: "#F5F6F7",
  5: "#F2F3F5",
};
const coreTheme = makeTheme(coreThemeBase, coreThemeContrast);

const dimigoThemeBase: ThemeBase = {
  brand: "#F0437D",
  brandBlack: "#7A626A",
  vibrantWhite: "#F5F0F2",
  vibrantBlack: "#2E1F24",
};
const dimigoThemeContrast: Contrast = {
  1: "#0A090A",
  2: "#0F0E0E",
  3: "#1D1B1C",
  4: "#F7F5F6",
  5: "#F5F2F3",
};
const dimigoTheme = makeTheme(dimigoThemeBase, dimigoThemeContrast);

const sunrinThemeBase: ThemeBase = {
  brand: "#F04343",
  brandBlack: "#7A6262",
  vibrantWhite: "#F4F0F0",
  vibrantBlack: "#2E1F1F",
};
const sunrinThemeContrast: Contrast = {
  1: "#0A0909",
  2: "#0F0E0E",
  3: "#1F1C1C",
  4: "#F7F5F5",
  5: "#F4F2F2",
};
const sunrinTheme = makeTheme(sunrinThemeBase, sunrinThemeContrast);

export { coreTheme, dimigoTheme, sunrinTheme, system };
export type { Theme };
