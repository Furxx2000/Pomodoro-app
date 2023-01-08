import { createContext, useContext, useState } from 'react';
import { Fonts, Colors, Modes, CurTheme } from '../data/ThemeData';

export default function useStateSource() {
  const [dialog, setDialog] = useState(false);
  const [curTheme, setCurTheme] = useState(CurTheme);
  const [fonts, setFont] = useState(Fonts);
  const [colors, setColor] = useState(Colors);
  const [modes, setMode] = useState(Modes);

  function handleSetDialog() {
    const fontArr = fonts.map((font) => {
      return {
        ...font,
        isSelected: font.fontType === curTheme.font,
      };
    });

    const colorArr = colors.map((color) => {
      return {
        ...color,
        isSelected: color.colorTheme === curTheme.color,
      };
    });
    setFont(fontArr);
    setColor(colorArr);
    setDialog(!dialog);
  }

  function handleSetFont(fontType: string) {
    const newArr = fonts.map((font) => {
      return {
        ...font,
        isSelected: font.fontType === fontType,
      };
    });
    setFont(newArr);
  }

  function handleSetColor(colorTheme: string) {
    const newArr = colors.map((color) => {
      return {
        ...color,
        isSelected: color.colorTheme === colorTheme,
      };
    });
    setColor(newArr);
  }

  function handleSetMode(modeType: string) {
    const newArr = modes.map((mode) => {
      return {
        ...mode,
        isSelected: mode.modeType === modeType,
      };
    });
    setMode(newArr);
  }

  function handleApplyTheme() {
    const curTheme = {
      font: fonts.filter((font) => font.isSelected)[0].fontType,
      color: colors.filter((color) => color.isSelected)[0].colorTheme,
    };
    setCurTheme(curTheme);
    setDialog(!dialog);
  }

  return {
    dialog,
    fonts,
    colors,
    modes,
    curTheme,
    handleSetDialog,
    handleSetColor,
    handleSetFont,
    handleSetMode,
    handleApplyTheme,
  };
}

const ThemeStateContext = createContext<ReturnType<typeof useStateSource>>(
  null as unknown as ReturnType<typeof useStateSource>
);

export function useThemeState() {
  return useContext(ThemeStateContext);
}

export function ThemeStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeStateContext.Provider value={useStateSource()}>
      {children}
    </ThemeStateContext.Provider>
  );
}
