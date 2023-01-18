import { useThemeState } from '../../../hooks/useThemeState';

export default function TimerState() {
  const { curTheme } = useThemeState();

  return (
    <h3
      className={`${curTheme.font} tracking-[15px] indent-[15px] md:text-base`}
    >
      {curTheme.isTimerStart ? 'pause' : 'start'}
    </h3>
  );
}
