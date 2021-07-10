import React from 'react';
import {Location} from './AppTypes';
import {PERSON, WALL, BLANK} from './Constants';

export const createMaze = (size: number): [Array<Array<string>>, Location] => {
  let mazeData = [];
  const center = Math.round(size/2);
  const startPos = {x: center, y: center};
  
  mazeData.push(Array(size).fill(WALL));
  for (let i = 0; i <= size - 2; i++) {
    mazeData.push([WALL, ...Array(size-2).fill(BLANK), WALL]);
  }
  mazeData[startPos.y][startPos.x] = PERSON;
  mazeData.push(Array(size).fill(WALL));
  return [mazeData, startPos];
}
