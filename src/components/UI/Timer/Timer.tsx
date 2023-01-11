import { useThemeState } from '../../../hooks/useThemeState';
import TimerProgressBar from './TimerProgressBar';
import TimerTime from './TimerTime';
import TimerState from './TimerState';
import TimerContainer from './TimerContainer';

export default function Timer() {
  const { handleChangeTimerState } = useThemeState();

  return (
    <section
      className='relative grid place-items-center timer-size timer-gradient rounded-full'
      onClick={handleChangeTimerState}
    >
      <TimerContainer>
        <TimerProgressBar />
        <TimerTime />
        <TimerState />
      </TimerContainer>
    </section>
  );
}
