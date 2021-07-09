import './App.css';

import {useState} from 'react';
import * as Key from './KeyValues';

function App() {
  
  const [keyDown, setKeyDown] = useState('');

  const handleKeyPress = (event:any) => {
    let keyWasFound = false;
    switch (event.key) {
      case Key.UP_ARROW:
      case Key.UP_KEY:
        keyWasFound = true;
        break;
      case Key.DOWN_ARROW:
      case Key.DOWN_KEY:
          keyWasFound = true;
          break;
      case Key.LEFT_ARROW:
      case Key.LEFT_KEY:
          keyWasFound = true;
        break;
      case Key.RIGHT_ARROW:
      case Key.RIGHT_KEY:
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
        You pressed: {keyDown}
      </header>
    </div>
  );
}

export default App;
