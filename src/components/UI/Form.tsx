import { useThemeState } from '../../hooks/useThemeState';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

interface Props {
  title: string;
  mins: string;
}

export default function Form({ title, mins }: Props) {
  const {
    handleIncrease,
    handleDecrease,
    handleChangeMinsByInput,
    handleInvalidVal,
  } = useThemeState();

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
          type='text'
          value={mins}
          maxLength={2}
          onChange={(e) => handleChangeMinsByInput(title, e.target.value)}
          onBlur={() => handleInvalidVal(title)}
        />
        <div className='form-arrow'>
          <IoIosArrowUp
            size='18px'
            tabIndex={0}
            className='md:w-5 md:h-5 transition ease-in cursor-pointer outline-none'
            onClick={() => handleIncrease(title)}
          />
          <IoIosArrowDown
            size='18px'
            tabIndex={0}
            className='md:w-5 md:h-5 transition ease-in cursor-pointer outline-none'
            onClick={() => handleDecrease(title)}
          />
        </div>
      </div>
    </div>
  );
}
