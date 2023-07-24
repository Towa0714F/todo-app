import { todoList } from "./Main";
import { List, ListItem, ListItemText, Button } from "@mui/material";

type TaskListProps = {
  todos: todoList[];
};

export const ToDoList: React.FC<TaskListProps> = (props) => {
  const handleItemClick = (text: string) => {
    alert(`${text}`);
  };

  return (
    <List>
      {props.todos.map((todo) => (
        <ListItem key={todo.id} disablePadding>
          <Button onClick={() => handleItemClick(todo.text)}>
            <ListItemText primaryTypographyProps={{ style: { color: "black" } }} primary={todo.text} />
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
