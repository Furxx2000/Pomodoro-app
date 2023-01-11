export default function TransformTime(value: string) {
  const min = String(Math.trunc(+value / 60)).padStart(2, '0');
  const sec = String(+value % 60).padStart(2, '0');
  return `${min}:${sec}`;
}
