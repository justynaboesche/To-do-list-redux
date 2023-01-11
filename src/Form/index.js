import "./style.css";
import { useState } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }
        
        addNewTask(newTaskContent.trim());
        setNewTaskContent("")
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__field"
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
};

export default Form;