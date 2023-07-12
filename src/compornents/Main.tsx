import { useState } from "react";

export type todoList = {
  id: number;
  text: string;
};

const Main: React.FC = () => {
  const [add, setAdd] = useState("");
  const [todo, setTodo] = useState<todoList[]>([{ id: 1, text: "ここに表示" }]);

  const changeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdd(e.target.value);
  };

  const pushHandler = () => {
    setTodo([...todo, { id: todo.length, text: add }]);
    setAdd("");
  };

  return (
    <div>
      <input type="text" value={add} onChange={changeTextHandler} />
      <button type="button" onClick={pushHandler}>
        追加
      </button>
    </div>
  );
};

export default Main;
