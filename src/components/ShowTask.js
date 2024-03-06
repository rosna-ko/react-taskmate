export const ShowTask = ({taskList, setTaskList,  task, setTask}) => {

    const handleDelete = (id) => {
        const updatedArray = taskList.filter(item => item.id !== id);
        setTaskList(updatedArray);
    }

    const handleEdit = (id) => {
        const editArray = taskList.find(item => item.id === id);
        setTask(editArray);
    }

    return(
       <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">{taskList.length}</span>
            </div>

            <button className="clearAll" onClick={() => setTaskList([])}>Clear all</button>
        </div>

        <ul>
           {taskList.map((element) => (
             <li key={element.id}>
             <p>
                 <span className="name">{element.name}</span>
                 <span className="time">{element.time}</span>
             </p>
             <i className="bi bi-pencil-square" onClick={() => handleEdit(element.id)}></i>
             <i className="bi bi-trash" onClick={() => handleDelete(element.id)}></i>
            </li>
           ))}
        </ul>
       </section>
    )
}