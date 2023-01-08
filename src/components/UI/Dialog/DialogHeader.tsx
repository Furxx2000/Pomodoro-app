import { IoCloseSharp } from 'react-icons/io5';
import { useThemeState } from '../../../hooks/useThemeState';

export default function DialogHeader() {
  const { handleSetDialog } = useThemeState();

  return (
    <header className='flex justify-between items-center p-5 text-xl border-b border-[#E3E1E1]'>
      <h5 className='text-dark-blue-2'>Settings</h5>
      <IoCloseSharp
        size='24px'
        className='close-icon  cursor-pointer'
        onClick={handleSetDialog}
      />
    </header>
  );
}
