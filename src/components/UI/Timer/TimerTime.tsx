import { useThemeState } from '../../../hooks/useThemeState';
import TransformTime from '../../../helper/TransformTime';

export default function TimerTime() {
  const { curTheme } = useThemeState();
  const curMode = curTheme.activeState.filter((mode) => mode.isSelected)[0];
  const curTime = TransformTime(curMode.value);

  return <h1 className={`text-[80px] ${curTheme.font}`}>{curTime}</h1>;
}
