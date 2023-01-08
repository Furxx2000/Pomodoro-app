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
      <div className='bg-light-gray rounded-[10px] w-[140px] h-[40px] md:h-[48px] p-4 flex items-center'>
        <input
          id={`${title}-Form`}
          className='w-full bg-light-gray text-sm text-dark-blue-1 appearance-none outline-none'
          type='number'
          value='25'
          onChange={handleOnChangeFont}
        />
        <div className='form-arrow'>
          <IoIosArrowUp
            size='18px'
            tabIndex={0}
            className='md:w-5 md:h-5 transition ease-in cursor-pointer outline-none'
          />
          <IoIosArrowDown
            size='18px'
            tabIndex={0}
            className='md:w-5 md:h-5 transition ease-in cursor-pointer outline-none'
          />
        </div>
      </div>
    </div>
  );
}
