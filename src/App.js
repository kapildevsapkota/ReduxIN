import "./styles.css";
import Conuter from "./component/count";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={(e) => dispatch({ type: "Increment" })}>
        increment
      </button>
      <Conuter />
      <button onClick={(e) => dispatch({ type: "Decrement" })}>
        decrement
      </button>
    </div>
  );
}
