import { useThemeState } from '../../../hooks/useThemeState';

export default function TimerState() {
  const { curTheme } = useThemeState();

  return (
    <h3 className={`${curTheme.font}`}>
      {curTheme.isTimerStart ? 'pause' : 'start'}
    </h3>
  );
}
