import { useThemeState } from '../../../hooks/useThemeState';

export default function TimerProgressBar() {
  const { curTheme, modes } = useThemeState();
  const theme = +curTheme.activeState.filter((mode) => mode.isSelected)[0]
    ?.value;
  const mode = +modes.filter((mode) => mode.isSelected)[0]?.value;
  const curValue = theme / (mode * 60);

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
        style={{
          strokeDasharray: 745,
          strokeDashoffset: `calc(745 - (745 * ${
            +curValue.toFixed(3) * 100
          } / 100)`,
        }}
        className={`timer-progress-bar transition ease-in ${curTheme.color}`}
      ></circle>
    </svg>
  );
}
