import { useThemeState } from '../../hooks/useThemeState';

export default function Timer() {
  const { curTheme } = useThemeState();

  return (
    <section className='relative grid place-items-center timer-size timer-gradient rounded-full'>
      <div className='absolute grid place-content-center bg-dark-blue-2 rounded-full timer-center-size'>
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
        <h1 className='text-[80px]'>17:59</h1>
        <h3>pause</h3>
      </div>
    </section>
  );
}
