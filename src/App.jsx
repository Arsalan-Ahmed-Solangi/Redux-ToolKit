import { useSelector, useDispatch } from "react-redux";
import { incrementCount } from "./actions";
function App() {
  const myState = useSelector((state) => state.changeCount);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Count :  { myState }</h1>
      <button onClick={ ()=>{ dispatch(incrementCount())  }  } >Increment</button>
      <button>Decrement</button>
    </>
  );
}

export default App;
