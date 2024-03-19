import Lane from "../models/lane";
import AddTask from "./addTask";
import Task from "./task";

type LaneProps = {
    lane: Lane;
    onMoveAcceptTask: (oldLane: number, taskId: number) => void;
}

function Lane(props: LaneProps) {
    const { lane, onMoveAcceptTask } = props;
    const handleOnDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
        const { taskId, oldLaneId } = JSON.parse(e.dataTransfer.getData("text/plain"));
        if (!taskId || !oldLaneId) {
            return;
        }
        if (oldLaneId !== lane.laneId) {
            onMoveAcceptTask(oldLaneId, taskId);
        }
    }

    return (
        <div 
            className="bg-slate-800 w-48"
            onDragOver={handleOnDragOver}
            onDrop={handleOnDrop}
        >
           <h1>{lane.title}</h1>
           <div className="space-y-2">
              {lane.tasks.map((task) => (
                <Task 
                    key={task.taskId} 
                    task={task} 
                    laneId={lane.laneId}
                 />
              ))}
            </div>
            <AddTask/>
        </div>
    );
}

export default Lane;    