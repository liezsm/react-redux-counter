import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTodosAsync } from "../redux/todoSlice";
// import { getTodos } from "../redux/todoSlice";

const TodoList = () => {
  // const todos = [
  //   { id: 1, title: "todo1", completed: false },
  //   { id: 2, title: "todo2", completed: false },
  //   { id: 3, title: "todo3", completed: true },
  //   { id: 4, title: "todo4", completed: false },
  //   { id: 5, title: "todo5", completed: false },
  // ];
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       dispatch(
  //         getTodos({
  //           data: data,
  //         })
  //       );

  //       console.log(data);
  //     });
  // }, []);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);
  return (
    <ul className='list-group'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
