import { useThemeState } from '../../../hooks/useThemeState';

export default function Backdrop() {
  const { dialog } = useThemeState();

  return (
    <div
      className={`fixed inset-0 bg-backdrop ${
        dialog ? '' : 'opacity-0 invisible'
      } transition ease-in z-20`}
    ></div>
  );
}
