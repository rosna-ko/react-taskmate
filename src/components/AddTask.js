export const AddTask = ({taskList, setTaskList, task, setTask}) => {
const handleSubmit = (e) =>    {
    e.preventDefault();
   if(task.id) {
    const date = new Date();
        const updateTask = taskList.map((item) => (
            item.id === task.id ? {
                id: task.id,
                name: e.target.task.value, // we can also use task.name here
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            } : item
        ))

        setTaskList(updateTask);
        setTask({});
   } else {
    const date = new Date();
    const task = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }

    if(e.target.task.value !== '') {
        setTaskList([...taskList, task]);
        setTask({});
    }
   }
}

    return(
       <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" id="task" autoComplete="off" placeholder="add task"
            maxLength={25}
            value={task.name || ""}
            onChange={e => setTask({...task, name:e.target.value})} />
            <button type="submit">{task.id ? 'Update' : "Add"}</button>
        </form>
       </section>
    )
}