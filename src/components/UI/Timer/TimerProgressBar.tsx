import { useThemeState } from '../../../hooks/useThemeState';

export default function TimerProgressBar() {
  const { curTheme, modes } = useThemeState();
  const theme = +curTheme.activeState.filter((mode) => mode.isSelected)[0]
    ?.value;
  const mode = +modes.filter((mode) => mode.isSelected)[0]?.value;
  const curValue = theme / (mode * 60);
  let mql = matchMedia('(min-width: 768px)');
  let strokeValue = mql.matches ? 1005 : 745;
  let circleValue = mql.matches ? 160 : 119;

  return (
    <svg className='absolute w-[258px] h-[258px] place-self-center md:w-[353px] md:h-[353px]'>
      <circle
        cx='50%'
        cy='50%'
        r={circleValue}
        className='timer-progress-bar transition ease-in'
      ></circle>
      <circle
        cx='50%'
        cy='50%'
        r={circleValue}
        style={{
          strokeDasharray: `${strokeValue}`,
          strokeDashoffset: `calc(${strokeValue} - (${strokeValue} * ${
            +curValue.toFixed(3) * 100
          } / 100)`,
        }}
        className={`timer-progress-bar transition ease-in ${curTheme.color}`}
      ></circle>
    </svg>
  );
}
