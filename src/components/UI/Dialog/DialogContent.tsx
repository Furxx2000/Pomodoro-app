export default function DialogContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article className='px-6 md:px-10'>{children}</article>;
}
