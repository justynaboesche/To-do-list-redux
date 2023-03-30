import Buttons from "../Buttons";
import Form from "../Form";
import TaskList from "../TaskList";
import FetchExampleTasksButton from "./FetchExampleTasksButton";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={
          <FetchExampleTasksButton />
        }
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
