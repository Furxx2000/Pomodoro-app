import { useThemeState } from '../../../hooks/useThemeState';
import Backdrop from './Backdrop';
import Form from '../TimerSettings/Form';
import FontSelector from '../TimerSettings/FontSelector';
import ColorSelector from '../TimerSettings/ColorSelector';
import ApplyButton from '../TimerSettings/ApplyButton';
import DialogContainer from './DialogContainer';
import DialogHeader from './DialogHeader';
import DialogContent from './DialogContent';
import DialogSetting from './DialogSetting';

export default function Dialog() {
  const { fonts, colors, modes } = useThemeState();

  return (
    <>
      <Backdrop />
      <DialogContainer>
        <DialogHeader />
        <DialogContent>
          <DialogSetting title='time (minutes)' column>
            <div className='grid gap-2 w-full md:grid-cols-3'>
              {modes.map((mode) => (
                <Form
                  key={mode.modeType}
                  title={mode.modeType}
                  mins={mode.value}
                />
              ))}
            </div>
          </DialogSetting>
          <DialogSetting title='font'>
            <div className='flex gap-4 w-full justify-center'>
              {fonts.map((font) => (
                <FontSelector key={font.fontType} font={font} />
              ))}
            </div>
          </DialogSetting>
          <DialogSetting title='color'>
            <div className='flex gap-4 w-full justify-center'>
              {colors.map((color) => (
                <ColorSelector key={color.colorTheme} theme={color} />
              ))}
            </div>
          </DialogSetting>
        </DialogContent>
        <div className='absolute left-1/2 translate-x-[-50%] translate-y-[50%]'>
          <ApplyButton />
        </div>
      </DialogContainer>
    </>
  );
}
