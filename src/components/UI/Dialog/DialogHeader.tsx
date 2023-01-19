import { IoCloseSharp } from 'react-icons/io5';
import { useThemeState } from '../../../hooks/useThemeState';

export default function DialogHeader() {
  const { handleSetDialog } = useThemeState();

  return (
    <header className='flex justify-between items-center p-5 text-xl border-b border-[#E3E1E1] md:px-10 md:py-8'>
      <h5 className='text-dark-blue-2 md:text-[28px]'>Settings</h5>
      <IoCloseSharp
        size='24px'
        className='close-icon  cursor-pointer transition ease-in'
        onClick={handleSetDialog}
      />
    </header>
  );
}
