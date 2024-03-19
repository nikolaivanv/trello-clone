'use client'

import { useState } from "react";
import Board from "../models/board";
import Lane from "./lane";

type BoardProps = {
    board: Board;
}

function Board(props: BoardProps) {
    //const { board } = props;
    const [board, setBoard] = useState<Board>(props.board);

    const onMoveTaskLeft = (laneId: number, taskId: number) => {
        const newBoard = { ...board };
        const laneIndex = newBoard.lanes.findIndex((lane) => lane.laneId === laneId);
        if (laneIndex === 0) {
            return;
        }
        const taskIndex = newBoard.lanes[laneIndex].tasks.findIndex((task) => task.taskId === taskId);
        const task = newBoard.lanes[laneIndex].tasks[taskIndex];
        newBoard.lanes[laneIndex].tasks.splice(taskIndex, 1);
        newBoard.lanes[laneIndex - 1].tasks.push(task);
        setBoard(newBoard);
    }

    const onMoveTaskRight = (laneId: number, taskId: number) => {
        const newBoard = { ...board };
        const laneIndex = newBoard.lanes.findIndex((lane) => lane.laneId === laneId);
        if (laneIndex === newBoard.lanes.length - 1) {
            return;
        }
        const taskIndex = newBoard.lanes[laneIndex].tasks.findIndex((task) => task.taskId === taskId);
        const task = newBoard.lanes[laneIndex].tasks[taskIndex];
        newBoard.lanes[laneIndex].tasks.splice(taskIndex, 1);
        newBoard.lanes[laneIndex + 1].tasks.push(task);
        setBoard(newBoard);
    }

    const onMoveAcceptTask = (oldLaneId: number, laneId: number, taskId: number) => {
        const newBoard = { ...board };
        const oldLaneIndex = newBoard.lanes.findIndex((lane) => lane.laneId === oldLaneId);
        const laneIndex = newBoard.lanes.findIndex((lane) => lane.laneId === laneId);
        const taskIndex = newBoard.lanes[oldLaneIndex].tasks.findIndex((task) => task.taskId === taskId);
        const task = newBoard.lanes[oldLaneIndex].tasks[taskIndex];
        newBoard.lanes[oldLaneIndex].tasks.splice(taskIndex, 1);
        newBoard.lanes[laneIndex].tasks.push(task);
        setBoard(newBoard);
    }

    return (
        <div>
           <h1>{board.title}</h1>
           <div className="flex flex-row space-x-4">
            {board.lanes.map((lane) => (
                <Lane 
                    key={lane.laneId} 
                    lane={lane} 
                    onMoveTaskLeft={(taskId) => onMoveTaskLeft(lane.laneId, taskId)} 
                    onMoveTaskRight={(taskId) => onMoveTaskRight(lane.laneId, taskId)} 
                    onMoveAcceptTask={(oldLaneId, taskId) => onMoveAcceptTask(oldLaneId, lane.laneId, taskId)}
                />
            ))}
           </div>
        </div>
    );
}

export default Board;