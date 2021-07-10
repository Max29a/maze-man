import './App.css';

import Maze from './Maze.react';
import ControlPanel from './ControlPanel.react';
import {useState, useCallback, useEffect} from 'react';
import * as Constants from './Constants';
import {Location} from './AppTypes';

function App() {
  
  const [maze, setMaze] = useState<Array<Array<string>>>([['1','1','1','1','1','1','1','1','1','1']
                                                         ,['1','0','0','0','0','0','0','0','0','1']
                                                         ,['1','0','0','0','0','0','0','0','0','1']
                                                         ,['1','0','0','0','0','0','0','0','0','1']
                                                         ,['1','0','0','0','p','0','0','0','0','1']
                                                         ,['1','0','0','0','0','0','0','0','0','1']
                                                         ,['1','0','0','0','0','0','0','0','0','1']
                                                         ,['1','0','0','0','0','0','0','0','0','1']
                                                         ,['1','0','0','0','0','0','0','0','0','1']
                                                         ,['1','1','1','1','1','1','1','1','1','1']]
                                                         );

// ------------------------------------------------------------
  const startPos:Location = {x:4, y: 4};

  const [personLocation, setPersonLocation] = useState<Location>(startPos);
  const [lastLoc, setLasLoc] = useState<Location>(startPos);

  const isWithinMazeBounds = useCallback((location: Location): boolean => {
    return location.x > 0 && location.x < maze[0].length - 1 && location.y > 0 && location.y < maze.length-1;
  },[maze]);

  const handleKeyPress = useCallback((event:any) => {
    let validKeyPress = false;
    let newLoc = {x: personLocation.x, y: personLocation.y};

    switch (event.key) {
      case Constants.UP_ARROW:
      case Constants.UP_KEY:
        validKeyPress = true;
        newLoc.y = personLocation.y - 1;
        break;
      case Constants.DOWN_ARROW:
      case Constants.DOWN_KEY:
        validKeyPress = true;
        newLoc.y = personLocation.y + 1;
        break;
      case Constants.LEFT_ARROW:
      case Constants.LEFT_KEY:
        validKeyPress = true;
        newLoc.x = personLocation.x - 1;
        break;
      case Constants.RIGHT_ARROW:
      case Constants.RIGHT_KEY:
        validKeyPress = true;
        newLoc.x = personLocation.x + 1;
        break;
      default:
        break;
    }
    if (validKeyPress && isWithinMazeBounds(newLoc)) {
      setPersonLocation(newLoc);
    }

  },[setPersonLocation, isWithinMazeBounds, personLocation]);

  // keep the maze up to date as the person is 
  useEffect(() => {
    maze[lastLoc.y][lastLoc.x] = Constants.BLANK;
    maze[personLocation.y][personLocation.x] = Constants.PERSON;
    setLasLoc(personLocation);
  }, [personLocation])

  const onNewMaze = useCallback((size: number) => {
    console.log(`Should create new maze: ${size}`);
  },[]);

  return (
    <div className="App" onKeyDown={handleKeyPress} tabIndex={0}>
      <ControlPanel currentLocation={personLocation} onNewMaze={onNewMaze} />
      <header className="App-header">
        <Maze mazeArray={maze} />
      </header>
    </div>
  );
}

export default App;
