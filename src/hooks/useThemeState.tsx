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

    const modeArr = curTheme.modes.map((mode) => {
      return {
        ...mode,
        value: mode.value,
      };
    });
    setFont(fontArr);
    setColor(colorArr);
    setMode(modeArr);
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
    const newArr = curTheme.modes.map((mode) => {
      return {
        ...mode,
        isSelected: mode.modeType === modeType,
      };
    });
    const newCurTheme = {
      ...curTheme,
      modes: newArr,
    };
    setCurTheme(newCurTheme);
  }

  function handleApplyTheme() {
    const curTheme = {
      font: fonts.filter((font) => font.isSelected)[0].fontType,
      color: colors.filter((color) => color.isSelected)[0].colorTheme,
      modes: modes,
    };
    setCurTheme(curTheme);
    setDialog(!dialog);
  }

  function handleIncrease(modeName: string) {
    const newArr = modes.map((mode) => {
      if (+mode.value >= 99) return mode;
      return {
        ...mode,
        value:
          mode.modeType === modeName
            ? (+mode.value + 1).toString()
            : mode.value,
      };
    });
    setMode(newArr);
  }

  function handleDecrease(modeName: string) {
    const newArr = modes.map((mode) => {
      if (+mode.value <= 1) return mode;
      return {
        ...mode,
        value:
          mode.modeType === modeName
            ? (+mode.value - 1).toString()
            : mode.value,
      };
    });
    setMode(newArr);
  }

  function handleChangeMinsByInput(modeName: string, value: string) {
    console.log(modeName, value);
    const newArr = modes.map((mode) => {
      return {
        ...mode,
        value: mode.modeType === modeName ? value : mode.value,
      };
    });
    setMode(newArr);
  }

  function handleInvalidVal(modeName: string) {
    const newArr = modes.map((mode) => {
      return {
        ...mode,
        value: mode.modeType === modeName ? checkValue(mode.value) : mode.value,
      };
    });
    setMode(newArr);
  }

  function checkValue(value: string) {
    if (+value <= 0) return '1';
    if (value[0] === '0' && +value > 0) return `${value[1]}`;
    return value;
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
    handleIncrease,
    handleDecrease,
    handleChangeMinsByInput,
    handleInvalidVal,
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
