interface Props {
  mode: {
    modeType: string;
    isSelected: boolean;
  };
  handleSetMode: (modeType: string) => void;
}

const classes = {
  mode: 'grow grid place-items-center text-sm rounded-[26.5px] opacity-40 transition ease-in',
  active: (isSelected: boolean) =>
    isSelected ? 'bg-theme-1 opacity-100 text-dark-blue-1' : 'text-lilac-blue',
};

export default function ModeButton({ mode, handleSetMode }: Props) {
  return (
    <button
      className={`${classes.active(mode.isSelected)} ${classes.mode}`}
      onClick={() => handleSetMode(mode.modeType)}
    >
      {mode.modeType}
    </button>
  );
}
