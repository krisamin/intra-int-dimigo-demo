type TextSizeType =
  | "display"
  | "title"
  | "headline"
  | "body"
  | "callout"
  | "footnote"
  | "caption"
  | "paragraphLarge"
  | "paragraphSmall";
type TextSize = {
  [key in TextSizeType]: number;
};

const size: TextSize = {
  display: 48,
  title: 24,
  headline: 20,
  body: 16,
  callout: 14,
  footnote: 12,
  caption: 10,
  paragraphLarge: 16,
  paragraphSmall: 14,
};
const lineHeight: TextSize = {
  display: 70,
  title: 34,
  headline: 28,
  body: 24,
  callout: 20,
  footnote: 18,
  caption: 14,
  paragraphLarge: 28.8,
  paragraphSmall: 24,
};
const weight = {
  weak: "SUIT-Regular",
  regular: "SUIT-Medium",
  strong: "SUIT-SemiBold",
};

type TextPath =
  | "display.weak"
  | "display.regular"
  | "display.strong"
  | "title.weak"
  | "title.regular"
  | "title.strong"
  | "headline.weak"
  | "headline.regular"
  | "headline.strong"
  | "body.weak"
  | "body.regular"
  | "body.strong"
  | "callout.weak"
  | "callout.regular"
  | "callout.strong"
  | "footnote.weak"
  | "footnote.regular"
  | "footnote.strong"
  | "caption.weak"
  | "caption.regular"
  | "caption.strong"
  | "paragraph.small"
  | "paragraph.large";

const text = {
  display: {
    weak: {
      fontFamily: weight.weak,
      fontSize: size.display,
      lineHeight: lineHeight.display,
    },
    regular: {
      fontFamily: weight.regular,
      fontSize: size.display,
      lineHeight: lineHeight.display,
    },
    strong: {
      fontFamily: weight.strong,
      fontSize: size.display,
      lineHeight: lineHeight.display,
    },
  },
  title: {
    weak: {
      fontFamily: weight.weak,
      fontSize: size.title,
      lineHeight: lineHeight.title,
    },
    regular: {
      fontFamily: weight.regular,
      fontSize: size.title,
      lineHeight: lineHeight.title,
    },
    strong: {
      fontFamily: weight.strong,
      fontSize: size.title,
      lineHeight: lineHeight.title,
    },
  },
  headline: {
    weak: {
      fontFamily: weight.weak,
      fontSize: size.headline,
      lineHeight: lineHeight.headline,
    },
    regular: {
      fontFamily: weight.regular,
      fontSize: size.headline,
      lineHeight: lineHeight.headline,
    },
    strong: {
      fontFamily: weight.strong,
      fontSize: size.headline,
      lineHeight: lineHeight.headline,
    },
  },
  body: {
    weak: {
      fontFamily: weight.weak,
      fontSize: size.body,
      lineHeight: lineHeight.body,
    },
    regular: {
      fontFamily: weight.regular,
      fontSize: size.body,
      lineHeight: lineHeight.body,
    },
    strong: {
      fontFamily: weight.strong,
      fontSize: size.body,
      lineHeight: lineHeight.body,
    },
  },
  callout: {
    weak: {
      fontFamily: weight.weak,
      fontSize: size.callout,
      lineHeight: lineHeight.callout,
    },
    regular: {
      fontFamily: weight.regular,
      fontSize: size.callout,
      lineHeight: lineHeight.callout,
    },
    strong: {
      fontFamily: weight.strong,
      fontSize: size.callout,
      lineHeight: lineHeight.callout,
    },
  },
  footnote: {
    weak: {
      fontFamily: weight.weak,
      fontSize: size.footnote,
      lineHeight: lineHeight.footnote,
    },
    regular: {
      fontFamily: weight.regular,
      fontSize: size.footnote,
      lineHeight: lineHeight.footnote,
    },
    strong: {
      fontFamily: weight.strong,
      fontSize: size.footnote,
      lineHeight: lineHeight.footnote,
    },
  },
  caption: {
    weak: {
      fontFamily: weight.weak,
      fontSize: size.caption,
      lineHeight: lineHeight.caption,
    },
    regular: {
      fontFamily: weight.regular,
      fontSize: size.caption,
      lineHeight: lineHeight.caption,
    },
    strong: {
      fontFamily: weight.strong,
      fontSize: size.caption,
      lineHeight: lineHeight.caption,
    },
  },
  paragraph: {
    small: {
      fontFamily: weight.weak,
      fontSize: size.paragraphSmall,
      lineHeight: lineHeight.paragraphSmall,
    },
    large: {
      fontFamily: weight.weak,
      fontSize: size.paragraphLarge,
      lineHeight: lineHeight.paragraphLarge,
    },
  },
} as const;

export { text };
export type { TextPath };
