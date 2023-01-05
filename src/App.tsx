import Button from './components/UI/Button';
import Form from './components/UI/Form';
import Selector from './components/UI/Selector';

export default function App() {
  return (
    <div>
      <h1>Dolor Sit</h1>
      <h2>Dolor Sit</h2>
      <h3>Dolor Sit</h3>
      <h4>Dolor Sit</h4>
      <p className='text-1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        facilis itaque nihil qui deserunt aut. Incidunt, officiis eius aliquid
        molestiae expedita magni quo repudiandae. Repellendus inventore
        voluptates provident? Cumque, asperiores.
      </p>
      <p className='text-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        facilis itaque nihil qui deserunt aut. Incidunt, officiis eius aliquid
        molestiae expedita magni quo repudiandae. Repellendus inventore
        voluptates provident? Cumque, asperiores.
      </p>
      <Button />
      <div className='flex'>
        <Form title='pomodoro' />
        <Form title='short break' />
        <Form title='long break' />
      </div>
      <div className='flex gap-4 mt-1 bg-white p-4 w-fit'>
        <Selector font='sans' />
        <Selector font='serif' />
        <Selector font='mono' />
      </div>
    </div>
  );
}
