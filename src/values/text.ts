type Text = {
  display: number;
  title: number;
  headline: number;
  body: number;
  callout: number;
  footnote: number;
  caption: number;
  paragraphLarge: number;
  paragraphMedium: number;
};

const size: Text = {
  display: 48,
  title: 24,
  headline: 20,
  body: 16,
  callout: 14,
  footnote: 12,
  caption: 10,
  paragraphLarge: 16,
  paragraphMedium: 14,
};
const lineHeight: Text = {
  display: 70,
  title: 34,
  headline: 28,
  body: 24,
  callout: 20,
  footnote: 18,
  caption: 14,
  paragraphLarge: 28.8,
  paragraphMedium: 24,
};

export { size, lineHeight };
export type { Text };
