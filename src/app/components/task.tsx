import Task from "../models/task";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

type TaskProps = {
    task: Task;
    laneId: number;
}

function Task(props: TaskProps) {
    const { task, laneId } = props;
    const handleOnDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("text/plain", JSON.stringify({taskId: task.taskId, oldLaneId: laneId}));
    }
    return (
        <div className="h-10 bg-slate-400 mx-4 px-4" draggable onDragStart={(e) => handleOnDragStart(e)}>
           <h1>{task.title}</h1>
        </div>
    );
}

export default Task;    