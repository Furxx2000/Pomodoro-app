import { useThemeState } from '../../hooks/useThemeState';
import ModeButton from './Buttons/ModeButton';

export default function ModeSwitcher() {
  const { curTheme } = useThemeState();

  return (
    <section className='w-full h-[63px] max-w-[373px] rounded-[31.5px] bg-dark-blue-2 px-1.5 py-2 flex relative z-10'>
      {curTheme.modes.map((mode) => (
        <ModeButton key={mode.modeType} mode={mode} />
      ))}
    </section>
  );
}
