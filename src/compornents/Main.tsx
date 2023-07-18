import { useState } from "react";
import { List } from "./List";

export type todoList = {
  id: number;
  text: string;
};

const Main: React.FC = () => {
  const defaultText = "ここにテキストを入力";
  const [add, setAdd] = useState(defaultText);
  const [todo, setTodo] = useState<todoList[]>([]);

  const changeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdd(e.target.value);
  };

  const pushHandler = () => {
    if (add !== defaultText && add !== "") {
      setTodo([...todo, { id: todo.length, text: add }]);
      setAdd(defaultText);
    }
  };

  const onFocusHandler = () => {
    if (add === defaultText) {
      setAdd("");
    }
  };

  const onBlurHandler = () => {
    if (add === "") {
      setAdd(defaultText);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={add}
        onChange={changeTextHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />
      <button type="button" onClick={pushHandler}>
        追加
      </button>
      <List todos={todo} />
    </div>
  );
};

export default Main;
