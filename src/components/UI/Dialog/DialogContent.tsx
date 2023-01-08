export default function DialogContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article className='px-6'>{children}</article>;
}
