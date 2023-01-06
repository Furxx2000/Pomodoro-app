import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

export default function Form({ title }: { title: string }) {
  function handleOnChangeFont() {}

  return (
    <div className='flex items-center justify-between gap-y-2.5 w-full bg-white'>
      <label
        htmlFor={`${title}-Form`}
        className=' text-dark-blue-1 text-xs opacity-40'
      >
        {title}
      </label>
      <div className='bg-light-gray rounded-[10px] w-[140px] h-[48px] p-4 flex items-center'>
        <input
          id={`${title}-Form`}
          className='w-full bg-light-gray text-sm text-dark-blue-1 appearance-none outline-none'
          type='number'
          value='25'
          onChange={handleOnChangeFont}
        />
        <div>
          <IoIosArrowUp
            tabIndex={0}
            color='bg-arrow'
            className='hover:opacity-25 transition ease-in cursor-pointer'
          />
          <IoIosArrowDown
            tabIndex={0}
            className='hover:opacity-25 transition ease-in cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
}
