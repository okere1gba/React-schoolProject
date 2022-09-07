import { useSelector, useDispatch } from "react-redux";

const Info = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const increment = () => {
    dispatch({ type: "INC" });
  };

  const mutiply = () => {
    dispatch({ type: "MUT", payload: 20 });
  };

  return (
    <div>
      <h1>Counter application</h1>
      <h2>{counter}</h2>

      <button onClick={decrement}> -</button>
      <button onClick={increment}> +</button>
      <button onClick={mutiply}> by20</button>
    </div>
  );
};
export default Info;
