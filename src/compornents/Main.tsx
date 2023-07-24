import React, { useState } from "react";
import { ToDoList } from "./List";
import { TextField, Button, Container } from "@mui/material";

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
    <Container>
      <TextField
        variant="outlined"
        value={add}
        onChange={changeTextHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={pushHandler} sx={{ width: "100%", maxWidth: "1400px" }}>
        追加
      </Button>
      <ToDoList todos={todo} />
    </Container>
  );
};

export default Main;
