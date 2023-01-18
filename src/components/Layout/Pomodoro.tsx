import Logo from '../UI/Logo';
import ModeSwitcher from '../UI/ModeSwitch/ModeSwitcher';
import Timer from '../UI/Timer/Timer';
import Dialog from '../UI/Dialog/Dialog';
import { useThemeState } from '../../hooks/useThemeState';
import { IoSettingsSharp } from 'react-icons/io5';

export default function Pomodoro() {
  const { handleSetDialog } = useThemeState();

  return (
    <>
      <main className='px-6 pt-8 pb-20 flex flex-col items-center gap-11 min-h-screen justify-center md:justify-evenly'>
        <Logo />
        <ModeSwitcher />
        <Timer />
        <IoSettingsSharp
          tabIndex={0}
          color='#D7E0FF'
          className='opacity-50 hover:opacity-100 transition ease-in cursor-pointer outline-none'
          size='28px'
          onClick={handleSetDialog}
        />
      </main>
      <Dialog />
    </>
  );
}
