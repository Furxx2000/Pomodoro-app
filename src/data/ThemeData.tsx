export const Fonts = [
  {
    fontType: 'font-sans',
    isSelected: true,
  },
  {
    fontType: 'font-serif',
    isSelected: false,
  },
  {
    fontType: 'font-mono',
    isSelected: false,
  },
];

export const Colors = [
  {
    colorTheme: 'bg-theme-1',
    isSelected: true,
  },
  {
    colorTheme: 'bg-theme-2',
    isSelected: false,
  },
  {
    colorTheme: 'bg-theme-3',
    isSelected: false,
  },
];

export const Modes = [
  {
    modeType: 'pomodoro',
    value: '25',
    isSelected: true,
  },
  {
    modeType: 'short break',
    value: '5',
    isSelected: false,
  },
  {
    modeType: 'long break',
    value: '15',
    isSelected: false,
  },
];

export const CurTheme = {
  font: 'font-sans',
  color: 'bg-theme-1',
  modes: Modes,
  activeState: Modes.map((mode) => {
    return {
      ...mode,
      value: (+mode.value * 60).toString(),
    };
  }),
  isTimerStart: false,
};
