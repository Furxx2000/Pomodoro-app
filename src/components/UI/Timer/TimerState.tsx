import { useThemeState } from '../../../hooks/useThemeState';

export default function TimerState() {
  const { curTheme } = useThemeState();

  return (
    <h3
      className={`timer-state ${curTheme.font} tracking-[15px] indent-[15px] transition ease-in z-10 md:text-base`}
    >
      {curTheme.isTimerStart ? 'pause' : 'start'}
    </h3>
  );
}
