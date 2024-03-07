import { useState } from "react";
import Button from "react-bootstrap/Button";

function Addtodo({ todos, setTodos }) {
  let [names, setNames] = useState("");
  let [descript, setDescript] = useState("");

  let handleEve = (e) => {
    e.preventDefault();
    if (names === "" && descript === "") {
      alert("please fill all fields....!");
    } else {
      let newObj = {
        names,
        descript,
      };
      setTodos([...todos, newObj]);
      console.log(setTodos);
    }
  };

  return (
    <div>
      <form onSubmit={handleEve}>
        <input
          className="todo"
          type="text"
          placeholder="Todo Name"
          onChange={(e) => setNames(e.target.value)}
        />{" "}
        <input
          className="todo"
          type="text"
          placeholder="Todo Description"
          onChange={(e) => setDescript(e.target.value)}
        />{" "}
        <Button variant="success" type="submit">
          Add todo
        </Button>{" "}
      </form>
    </div>
  );
}
export default Addtodo;
