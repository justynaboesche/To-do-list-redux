import { useSelector, useDispatch } from "react-redux";
import { ButtonsWrapper } from "../Buttons/styled";
import { Button } from "../Button/styled";
import {
    fetchExampleTasks,
} from "../tasksSlice";

const FetchExampleTasksButton = () => {

    const dispatch = useDispatch();

    return (
        <ButtonsWrapper>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
        </ButtonsWrapper>
    );
}

export default FetchExampleTasksButton;
