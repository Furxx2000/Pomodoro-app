import React from 'react';

export default function TimerContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='absolute grid place-content-center bg-dark-blue-2 rounded-full timer-center-size'>
      {children}
    </div>
  );
}
