import ApplyButton from './components/UI/Buttons/ApplyButton';
import Form from './components/UI/Form';
import Selector from './components/UI/Selector';
import Logo from './components/UI/Logo';
import ModeSwitcher from './components/UI/ModeSwitcher';
import Timer from './components/UI/Timer';
import Dialog from './components/UI/Dialog';
import { IoSettingsSharp } from 'react-icons/io5';

export default function App() {
  return (
    <>
      <main className='px-6 py-8 flex flex-col items-center gap-11'>
        <Logo />
        <ModeSwitcher />
        <Timer />

        <IoSettingsSharp
          tabIndex={0}
          color='#D7E0FF'
          className='cursor-pointer'
          size='28px'
        />
      </main>
      <Dialog />
    </>
  );
}
