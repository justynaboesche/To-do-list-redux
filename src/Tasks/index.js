import { List, Item, Content, ListButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <Item
        key={task.id}
        hidden={hideDone && task.done}
      >
        <ListButton
          toggleDone
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </ListButton>
        <Content
          done={task.done}
        >
          {task.content}
        </Content>
        <ListButton
          remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </ListButton>
      </Item>
    ))}
  </List >
);

export default Tasks;