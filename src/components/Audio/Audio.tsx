import Beep from '../../assets/ringtone.mp3';
import Click from '../../assets/Click.mp3';

export default function Audio() {
  return (
    <>
      <audio id='times-up' preload='auto'>
        <source src={Beep} type='audio/mpeg' />
      </audio>
      <audio id='click' preload='auto'>
        <source src={Click} type='audio/mpeg' />
      </audio>
    </>
  );
}
