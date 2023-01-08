import { useThemeState } from '../../../hooks/useThemeState';

export default function Button() {
  const { curTheme, handleApplyTheme } = useThemeState();

  return (
    <button
      className={`${curTheme.color} after:absolute after:inset-0 after:bg-white after:rounded-button after:opacity-0 hover:after:opacity-20 after:transition after:ease-in  text-white rounded-button w-[140px] h-[53px]`}
      onClick={handleApplyTheme}
    >
      Apply
    </button>
  );
}
