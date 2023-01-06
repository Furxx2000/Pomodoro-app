export default function Timer() {
  return (
    <section className='grid place-items-center timer-size timer-gradient rounded-full relative'>
      <div className='absolute grid place-content-center bg-dark-blue-2 rounded-full timer-center-size'>
        <h1>17:59</h1>
        <h3>pause</h3>
      </div>
    </section>
  );
}
