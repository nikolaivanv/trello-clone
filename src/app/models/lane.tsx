import Task from "./task";

type Lane = {
    laneId: number;
    title: string;
    tasks: Task[];
}

export default Lane;