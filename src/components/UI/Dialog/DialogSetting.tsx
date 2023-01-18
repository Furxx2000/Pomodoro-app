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
  const mql = matchMedia('(min-width: 768px)');

  return (
    <section
      className={`flex  ${
        mql.matches && !column
          ? 'md:flex-row md:items-center'
          : 'flex-col md:items-start'
      } items-center gap-4 ${
        title === 'color'
          ? 'py-4 md:py-6'
          : 'py-5 md:py-6 border-b border-[#E3E1E1]'
      } `}
    >
      <h4 className='text-dark-blue-2'>{title}</h4>
      {children}
    </section>
  );
}
