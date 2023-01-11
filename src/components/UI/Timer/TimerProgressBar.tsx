import { useThemeState } from '../../../hooks/useThemeState';

export default function TimerProgressBar() {
  const { curTheme } = useThemeState();

  return (
    <svg className='absolute w-[258px] h-[258px] place-self-center'>
      <circle
        cx='50%'
        cy='50%'
        r='119'
        className='timer-progress-bar transition ease-in'
      ></circle>
      <circle
        cx='50%'
        cy='50%'
        r='119'
        className={`timer-progress-bar transition ease-in ${curTheme.color}`}
      ></circle>
    </svg>
  );
}
