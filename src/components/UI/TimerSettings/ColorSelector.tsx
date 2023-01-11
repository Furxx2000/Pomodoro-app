import { BiCheck } from 'react-icons/bi';
import { useThemeState } from '../../../hooks/useThemeState';

interface Props {
  theme: {
    colorTheme: string;
    isSelected: boolean;
  };
}

export default function ColorSelector({ theme }: Props) {
  const { handleSetColor } = useThemeState();

  return (
    <button
      className={`grid place-items-center rounded-full w-10 h-10 transition ease-in ${theme.colorTheme}`}
      onClick={() => handleSetColor(theme.colorTheme)}
    >
      {theme.isSelected && <BiCheck color='#161932' size='26px' />}
    </button>
  );
}
