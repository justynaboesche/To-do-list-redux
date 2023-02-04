import "./style.css";
import { List, Item, Content } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <Item
        key={task.id}
        hidden={hideDone && task.done}
      >
        <button
          className="tasks__button tasks__button--done"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </button>
        <Content
          done={task.done}
        >
          {task.content}
        </Content>
        <button
          onClick={() => removeTask(task.id)}
          className="tasks__button tasks__button--remove">
          🗑
        </button>
      </Item>
    ))}
  </List>
);

export default Tasks;