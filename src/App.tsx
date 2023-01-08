import { ThemeStateProvider } from './hooks/useThemeState';
import Pomodoro from './components/Layout/Pomodoro';

export default function App() {
  return (
    <ThemeStateProvider>
      <Pomodoro />
    </ThemeStateProvider>
  );
}
