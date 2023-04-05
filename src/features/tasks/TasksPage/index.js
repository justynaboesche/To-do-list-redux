import Buttons from "./Buttons";
import Form from "./Form";
import TaskList from "./TaskList";
import FetchExampleTasksButton from "./FetchExampleTasksButton";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import Search from "./Search";

const TasksPage = () => {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <FetchExampleTasksButton />
        }
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
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
