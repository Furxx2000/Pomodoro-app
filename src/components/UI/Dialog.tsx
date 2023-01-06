import Backdrop from './Dialog/Backdrop';
import Form from './Form';
import Selector from './Selector';
import { IoCloseSharp } from 'react-icons/io5';

export default function Dialog() {
  return (
    <>
      <Backdrop />
      <div
        role='dialog'
        aria-label='Open settings'
        className='dialog-width h-[549px] md:h-[494px] bg-white rounded-[15px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-30'
      >
        <header className='flex justify-between items-center p-6 text-xl border-b border-[#E3E1E1]'>
          <h5 className='text-dark-blue-2'>Settings</h5>
          <IoCloseSharp color='#161932' size='24px' className='opacity-50' />
        </header>
        <article className='px-6'>
          <section className='flex flex-col items-center gap-4 py-6 border-b border-[#E3E1E1]'>
            <h4 className='text-dark-blue-2'>Time (minutes)</h4>
            <div className='grid gap-2 w-full'>
              <Form title='pomodoro' />
              <Form title='short break' />
              <Form title='long break' />
            </div>
          </section>
          <section className='flex flex-col items-center gap-4 py-6 border-b border-[#E3E1E1]'>
            <h4 className='text-dark-blue-2'>font</h4>
            <div className='flex gap-4 w-full justify-center'>
              <Selector font='sans' />
              <Selector font='serif' />
              <Selector font='mono' />
            </div>
          </section>
          <section className='flex flex-col items-center gap-4 py-6 border-b border-[#E3E1E1]'>
            <h4 className='text-dark-blue-2'>color</h4>
            <div className='grid gap-2 w-full'></div>
          </section>
        </article>
      </div>
    </>
  );
}
