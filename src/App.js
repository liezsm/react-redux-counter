import "./App.css";

// exp to access state anywhere in components, we use useSelectore

import { useSelector, useDispatch } from "react-redux";

// -import an action

import { increment } from "./actions/increment";

function App() {
  // -access state using useSelector

  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment())}>Add</button>
      <p>{counter}</p>
      {isLogged ? <p>valuable info. one cannot see when not logged in</p> : " "}
    </div>
  );
}

export default App;
