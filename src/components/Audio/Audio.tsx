import Beep from '../../assets/ringtone.mp4';
import Click from '../../assets/Click.mp3';

export default function Audio() {
  return (
    <>
      <audio id='times-up' preload='auto' src={Beep}></audio>
      <audio id='click' preload='auto' src={Click}></audio>
    </>
  );
}
