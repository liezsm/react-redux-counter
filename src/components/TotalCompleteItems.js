import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed)
  );
  return (
    todos.length > 0 && (
      <h4 className='mt-3'>Total Complete Items: {todos.length}</h4>
    )
  );
};

export default TotalCompleteItems;
