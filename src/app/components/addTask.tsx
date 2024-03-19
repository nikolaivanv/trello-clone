import { useState } from "react";
import { FiPlus } from "react-icons/fi";

function AddTask() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const handleClickAddTask = () => {
        setIsFormOpen(true);
    }


    return (
        <div>
            <button className="flex items-center mx-4"><FiPlus/>Add task</button>
        </div>
    );

}

export default AddTask;