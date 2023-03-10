import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Fonts, Colors, Modes, CurTheme } from '../data/ThemeData';

export default function useStateSource() {
  const [dialog, setDialog] = useState(false);
  const [curTheme, setCurTheme] = useState(CurTheme);
  const [fonts, setFont] = useState(Fonts);
  const [colors, setColor] = useState(Colors);
  const [modes, setMode] = useState(Modes);
  const [session, setSession] = useState(0);
  const TimerRef = useRef<any>(null);
  const ModeRef = useRef(Modes);
  const time = +curTheme.activeState.filter((mode) => mode.isSelected)[0].value;

  useEffect(() => {
    if (time <= 0 && curTheme.isTimerStart) {
      const isBreakOver = modes.find((mode) => mode.isSelected)?.modeType;

      if (isBreakOver === 'pomodoro') setSession((session) => session + 1);
      const breakType =
        isBreakOver === 'pomodoro'
          ? (session + 1) % 4 === 0
            ? 'long break'
            : 'short break'
          : 'pomodoro';
      handleSetMode(breakType);
      playAudio('times-up');
      return () => clearTimer();
    }

    if (curTheme.isTimerStart) setTimer();
    else clearTimer();

    return () => clearTimer();
  }, [curTheme.isTimerStart, curTheme.activeState]);

  async function playAudio(id: string) {
    try {
      const audio = document.getElementById(id) as HTMLAudioElement;
      await audio?.play();
    } catch (e) {
      throw e;
    }
  }

  function clearTimer() {
    clearInterval(TimerRef.current);
  }

  function setTimer() {
    TimerRef.current = setInterval(() => {
      const newCurTheme = {
        ...curTheme,
        activeState: curTheme.activeState.map((mode) => {
          return {
            ...mode,
            value: mode.isSelected ? (+mode.value - 1).toString() : mode.value,
          };
        }),
      };
      setCurTheme(newCurTheme);
    }, 1000);
  }

  function handleSetDialog() {
    const isModeChange = ModeRef.current !== modes;
    const isFontChange =
      fonts.find((font) => font.isSelected)?.fontType !== curTheme.font;
    const isColorChange =
      colors.find((color) => color.isSelected)?.colorTheme !== curTheme.color;
    const isSettingsChange = isModeChange || isFontChange || isColorChange;

    if (!dialog) {
      ModeRef.current = modes;
    }
    if (isSettingsChange && dialog) {
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
      setMode(ModeRef.current);
    }
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
    const modeArr = modes.map((mode) => {
      return {
        ...mode,
        isSelected: mode.modeType === modeType,
      };
    });
    const newCurTheme = {
      ...curTheme,
      isTimerStart: false,
      activeState: modeArr.map((mode) => {
        return {
          ...mode,
          value: (+mode.value * 60).toString(),
        };
      }),
    };
    setMode(modeArr);
    setCurTheme(newCurTheme);
  }

  function handleApplyTheme() {
    const newCurTheme = {
      ...curTheme,
      font: fonts.filter((font) => font.isSelected)[0].fontType,
      color: colors.filter((color) => color.isSelected)[0].colorTheme,
      activeState: modes.map((mode) => {
        return {
          ...mode,
          value: (+mode.value * 60).toString(),
        };
      }),
    };
    setCurTheme(newCurTheme);
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
    const newArr = modes.map((mode) => {
      return {
        ...mode,
        value: mode.modeType === modeName ? value : mode.value,
      };
    });
    setMode(newArr);
  }
  1;

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

  function handleChangeTimerState() {
    if (time <= 0) return;
    const newCurTheme = {
      ...curTheme,
      isTimerStart: !curTheme.isTimerStart,
    };
    playAudio('click');
    setCurTheme(newCurTheme);
  }

  return {
    session,
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
    handleChangeTimerState,
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
