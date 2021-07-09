import './App.css';

import {useState} from 'react';
import * as Key from './KeyValues';

function App() {
  
  const [keyDown, setKeyDown] = useState<string>('');
  const [dirShown, setDirShown] = useState<string>('');

  const handleKeyPress = (event:any) => {
    let keyWasFound = false;
    switch (event.key) {
      case Key.UP_ARROW:
      case Key.UP_KEY:
        keyWasFound = true;
        setDirShown('⬆️');
        break;
      case Key.DOWN_ARROW:
      case Key.DOWN_KEY:
        setDirShown('⬇️');
        keyWasFound = true;
        break;
      case Key.LEFT_ARROW:
      case Key.LEFT_KEY:
        setDirShown('⬅️');
        keyWasFound = true;
        break;
      case Key.RIGHT_ARROW:
      case Key.RIGHT_KEY:
        setDirShown('➡️');
        keyWasFound = true;
        break;
      default:
        break;
    }
    if (keyWasFound) {
      setKeyDown(event.key);
    }
  };

  return (
    <div className="App" onKeyDown={handleKeyPress} tabIndex={0}>
      <header className="App-header">
        Navigate with the keyboard: {dirShown}
      </header>
    </div>
  );
}

export default App;
