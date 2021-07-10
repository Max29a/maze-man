import React from 'react';
import {Location} from './AppTypes';
import {useState} from 'react';

type Props = {
    currentLocation: Location,
    onNewMaze: Function
};

function ControlPanel(props: Props) {
  const [newMazeSize, setNewMazeSize] = useState<string>('20');

    return (
      <div>
        <div>Current Location: {props.currentLocation.x}, {props.currentLocation.y}</div>
        <div><input type="number" value={newMazeSize} onChange={(e) =>{setNewMazeSize(e.target.value)}}></input>
        <button onClick={() => {
          const val = parseInt(newMazeSize);
          if (!isNaN(val)) {
            props.onNewMaze(val);
          }
          }}>Create New Maze</button></div>
      </div>
    )
}

export default ControlPanel;