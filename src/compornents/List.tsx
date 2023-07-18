import { todoList } from "./Main";

type TaskListProps = {
  todos: todoList[];
};

export const List: React.FC<TaskListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};