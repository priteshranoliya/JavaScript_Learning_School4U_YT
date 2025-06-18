import React from "react";
import Button from "@mui/material/Button";
import OpenTodoDialog from "./OpenTodoDialog";
import ShowTodos from "./ShowTodos";

const TodoRedux = () => {
  return (
    <>
      <div className="flex mt-20 ml-20 mr-50 flex-column align-items-center">
        <div className="ml-10">
          <OpenTodoDialog />
        </div>
        <div className=" ml-10 mt-30">
          <ShowTodos />
        </div>
      </div>
    </>
  );
};

export default TodoRedux;
