import "./style.css";
import { useState, useRef } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("")
    };

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                ref={inputRef}
                value={newTaskContent}
                className="form__field"
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button
                onClick={focusInput} className="form__button"
            >
                Dodaj zadanie
            </button>
        </form>
    )
};

export default Form;