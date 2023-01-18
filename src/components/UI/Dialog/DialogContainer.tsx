import { useThemeState } from '../../../hooks/useThemeState';

export default function DialogContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { dialog } = useThemeState();

  return (
    <div
      role='dialog'
      aria-label='Open settings'
      className={`dialog-width h-[549px] bg-white rounded-[15px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[calc(-50%-7px)] ${
        dialog ? '' : 'opacity-0 pointer-events-none'
      } transition ease-in z-30 md:h-[464px] md:rounded-3xl`}
    >
      {children}
    </div>
  );
}
