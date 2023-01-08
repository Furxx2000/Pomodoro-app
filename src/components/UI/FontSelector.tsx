import { useThemeState } from '../../hooks/useThemeState';

interface Props {
  font: {
    fontType: string;
    isSelected: boolean;
  };
}

const classes = {
  selector:
    'rounded-full hover:ring-1 ring-light-gray ring-offset-4 w-10 h-10 transition ease-in ',
  active: (isSelected: boolean) =>
    isSelected ? 'bg-dark-blue-2 text-white' : 'bg-light-gray text-dark-blue-1',
};

export default function FontSelector({ font }: Props) {
  const { handleSetFont } = useThemeState();

  return (
    <button
      className={`${classes.selector} ${classes.active(font.isSelected)} ${
        font.fontType
      }`}
      onClick={() => handleSetFont(font.fontType)}
    >
      Aa
    </button>
  );
}
