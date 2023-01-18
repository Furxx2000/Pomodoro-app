import { useThemeState } from '../../../hooks/useThemeState';

export default function TimerSession() {
  const { session } = useThemeState();

  return (
    <span className='text-lilac-blue text-center leading-5'>#{session}</span>
  );
}
