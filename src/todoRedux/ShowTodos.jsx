import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteTodo, getTodos } from "./todoSlice";
import Button from "@mui/material/Button";
import OpenTodoDialog from "./OpenTodoDialog";

export default function ShowTodos() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Todo_ID</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Desc</TableCell>
            <TableCell align="right">Update Todo's</TableCell>
            <TableCell align="right">Delete Todo's</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todo.map((item, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="right">{item.title}</TableCell>
              <TableCell align="right">{item.desc}</TableCell>
              <TableCell align="right">
                <OpenTodoDialog
                  todoId={item.id}
                  todoTitle={item.title}
                  todoDesc={item.desc}
                />
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    dispatch(deleteTodo(item.id));
                    dispatch(getTodos());
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
