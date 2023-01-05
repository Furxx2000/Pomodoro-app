const classes = {
  selector:
    'rounded-full bg-light-gray hover:ring-1 ring-light-gray ring-offset-4 w-10 h-10 transition ease-in text-dark-blue-1',
  fonts: {
    sans: 'font-sans',
    serif: 'font-serif',
    mono: 'font-mono',
  },
};

function isValidFont(font: string): font is keyof typeof classes.fonts {
  return font in classes.fonts;
}

export default function Selector({ font }: { font: string }) {
  let fontClasses = '';

  if (isValidFont(font)) {
    fontClasses = classes.fonts[font];
  }

  return <button className={`${classes.selector} ${fontClasses}`}>Aa</button>;
}
