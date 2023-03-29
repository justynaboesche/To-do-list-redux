import { useSelector, useDispatch } from "react-redux";
import { ButtonsWrapper } from "./styled";
import { Button } from "../Button/styled";
import {
    toggleHideDone,
    setAllDone,
    selectHideDone,
    selectIsEveryTaskDone,
    selectAreTasksEmpty,
} from "../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

    const dispatch = useDispatch();

    if (areTasksEmpty) {
        return null;
    }

    return (
        <ButtonsWrapper>
            <>
                <Button
                    onClick={() => dispatch(toggleHideDone())}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={() => dispatch(setAllDone())}
                    disabled={isEveryTaskDone}
                >
                    Ukończ wszystkie
                </Button>
            </>
        </ButtonsWrapper>
    );
}

export default Buttons;
