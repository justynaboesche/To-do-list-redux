import { useSelector, useDispatch } from "react-redux";
import { ButtonsWrapper } from "../Buttons/styled";
import { Button } from "../Button/styled";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";

const FetchExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectIsLoading);

    return (
        <ButtonsWrapper>
            <Button
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={loading}
            >
                {loading ? "Trwa ładowanie" : "Pobierz przykładowe zadania"}
            </Button>
        </ButtonsWrapper>
    );
}

export default FetchExampleTasksButton;
