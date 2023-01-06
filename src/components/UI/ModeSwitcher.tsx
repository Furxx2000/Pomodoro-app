import { useState } from 'react';
import ModeButton from './Buttons/ModeButton';

const modesObj = [
  {
    modeType: 'pomodoro',
    isSelected: true,
  },
  {
    modeType: 'short break',
    isSelected: false,
  },
  {
    modeType: 'long break',
    isSelected: false,
  },
];

export default function ModeSwitcher() {
  const [modes, setMode] = useState(modesObj);

  function handleSetMode(modeType: string) {
    const newArr = modes.map((mode) => {
      return {
        ...mode,
        isSelected: mode.modeType === modeType,
      };
    });
    setMode(newArr);
  }

  return (
    <section className='w-full h-[63px] max-w-[373px] rounded-[31.5px] bg-dark-blue-2 px-1.5 py-2 flex relative z-10'>
      {modes.map((mode) => (
        <ModeButton
          key={mode.modeType}
          mode={mode}
          handleSetMode={handleSetMode}
        />
      ))}
    </section>
  );
}
