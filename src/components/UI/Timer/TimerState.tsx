import { useThemeState } from '../../../hooks/useThemeState';

export default function TimerState() {
  const { curTheme } = useThemeState();

  function textColor(color: string) {
    if (color.includes('1')) return 'hover:text-theme-1';
    if (color.includes('2')) return 'hover:text-theme-2';
    if (color.includes('3')) return 'hover:text-theme-3';
  }

  return (
    <h3
      className={`timer-state ${textColor(curTheme.color)} ${
        curTheme.font
      } tracking-[15px] indent-[15px] transition ease-in z-10 md:text-base`}
    >
      {curTheme.isTimerStart ? 'pause' : 'start'}
    </h3>
  );
}
