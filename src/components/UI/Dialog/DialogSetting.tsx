interface Props {
  title: string;
  children: React.ReactNode;
  column?: boolean;
}

export default function DialogSetting({
  title,
  children,
  column = false,
}: Props) {
  return (
    <section
      className={`flex ${column && 'flex-col'} items-center gap-4 ${
        title === 'color'
          ? 'py-4 md:py-6'
          : 'py-5 md:py-6 border-b border-[#E3E1E1]'
      } md:items-start`}
    >
      <h4 className='text-dark-blue-2'>{title}</h4>
      {children}
    </section>
  );
}
