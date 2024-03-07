import { useState } from "react";
import datas from "../Data/Data";
import Addtodo from "./Addtodo";
import Cards from "./Cards";

function Basecom() {
  let [todos, setTodos] = useState(datas);
  return (
    <div className="mainapp">
      <header>
        <h1>My ToDo</h1>
      </header>
      <main>
        <Addtodo todos={todos} setTodos={setTodos} />
        <Cards todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}
export default Basecom;
