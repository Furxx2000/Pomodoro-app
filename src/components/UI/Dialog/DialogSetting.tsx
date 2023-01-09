interface Props {
  title: string;
  children: React.ReactNode;
}

export default function DialogSetting({ title, children }: Props) {
  return (
    <section
      className={`flex flex-col items-center gap-4 ${
        title === 'color' ? 'py-4' : 'py-5 border-b border-[#E3E1E1]'
      }`}
    >
      <h4 className='text-dark-blue-2'>{title}</h4>
      {children}
    </section>
  );
}
