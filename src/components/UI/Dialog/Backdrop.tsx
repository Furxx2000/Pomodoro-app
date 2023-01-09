import { useThemeState } from '../../../hooks/useThemeState';

export default function Backdrop() {
  const { dialog } = useThemeState();

  return (
    <div
      className={`fixed inset-0 bg-backdrop ${
        dialog ? '' : 'opacity-0 pointer-events-none'
      } transition ease-in z-20`}
    ></div>
  );
}
