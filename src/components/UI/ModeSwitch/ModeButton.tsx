import { useThemeState } from '../../../hooks/useThemeState';

interface Props {
  mode: {
    modeType: string;
    isSelected: boolean;
  };
}

const classes = {
  mode: 'grow grid place-items-center text-sm font-bold rounded-[26.5px] opacity-40 hover:opacity-100 transition ease-in cursor-pointer',
  active: (isSelected: boolean, theme: string) =>
    isSelected ? `${theme} opacity-100 text-dark-blue-1` : 'text-lilac-blue',
};

export default function ModeButton({ mode }: Props) {
  const { curTheme, handleSetMode } = useThemeState();

  return (
    <button
      className={`${classes.active(mode.isSelected, curTheme.color)} ${
        curTheme.font
      } ${classes.mode}`}
      onClick={() => handleSetMode(mode.modeType)}
    >
      {mode.modeType}
    </button>
  );
}
