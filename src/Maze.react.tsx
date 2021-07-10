
import React from 'react';
import {PERSON, WALL, BLANK} from './Constants';

type Props = {
    mazeArray: Array<Array<string>>
};

function Maze(props: Props) {

    const createTable = () => {
        return (<div>
        {props.mazeArray.map((row, index) => {
            return <pre key={index}>{row.map((square, innerIndex) => {
                    switch(square) {
                        case BLANK:
                            return ' ';
                        case WALL: 
                            return '■';
                        case PERSON:
                            return 'x';
                        default:
                            return `Error at (${index},${innerIndex})`;
                    }
                })}
            </pre>
        })}
        </div>);
    };

    return (
        <div>{createTable()}</div>
    )
}

export default Maze;