import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodos, updateTodo } from "./todoSlice";
import { useEffect } from "react";

export default function OpenTodoDialog({ todoId, todoTitle, todoDesc }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setTitle(todoTitle || "");
    setDesc(todoDesc || "");
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(getTodos());
    setOpen(false);
  };

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color={!todoId ? "success" : "secondary"}
        onClick={handleClickOpen}
      >
        {todoId ? "Update" : "Add"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              if (!todoId) {
                dispatch(addTodo({ title, desc }));
              } else {
                dispatch(
                  updateTodo({
                    id: todoId,
                    title: title,
                    desc: desc,
                  })
                );
              }
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>{todoId ? "Update Todo" : "Add Todo"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {todoId ? "Update" : "Add"} Your Daily Wish Todo's....
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="filled"
            color="secondary"
            focused
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            id="desc"
            name="desc"
            label="Description"
            type="text"
            fullWidth
            variant="filled"
            color="success"
            focused
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">{todoId ? "Update" : "Add"} Todo</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
