import { Wrapper, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <Wrapper>
        {tasks.length > 0 && (
            <>
                <Button
                    onClick={toggleHideDone} 
                    className="section__header--button"
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={setAllDone}
                    className="section__header--button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </Wrapper>

);

export default Buttons;
