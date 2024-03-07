import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import datas from "../Data/Data";

function Editcomp({ setTodos, editIndex, todos, setIsEditing }) {
  let editTodo = todos[editIndex];
  let [names, setNames] = useState("");
  let [descript, setDescript] = useState("");
  let [status, setStatus] = useState("");
  useEffect(() => {
    setNames(editTodo.names);
    setDescript(editTodo.descript);
    setStatus(editTodo.status);
  }, [editTodo]);

  let handleSubmit = (e) => {
    e.preventDefault();
    const newObjtodo = {
      names,
      descript,
      status,
    };
    todos[editIndex] = newObjtodo;
    setTodos([...todos]);
    setIsEditing(false);
  };

  return (
    <div className="edit-container">
      <form onSubmit={handleSubmit}>
        <h1>Edit Todo</h1>
        <div className="inp-one">
          <label>Todo Name:</label>
          <input
            className="todo"
            type="text"
            placeholder="Todo Name"
            value={names}
            onChange={(e) => setNames(e.target.value)}
          />{" "}
        </div>
        <div className="inp-two">
          <label>Todo description:</label>
          <input
            className="todo"
            type="text"
            placeholder="Todo Description"
            value={descript}
            onChange={(e) => setDescript(e.target.value)}
          />{" "}
        </div>
        <div className="inp-three">
          <label id="status">Status:</label>
          <select value={status} onClick={(e) => setStatus(e.target.value)}>
            <option value="notcompleted">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <Button variant="success" type="submit">
          Update
        </Button>{" "}
      </form>
    </div>
  );
}

function Cards({ todos, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [value, setValue] = useState("");

  const handleEdit = (idx) => {
    setIsEditing(true);
    setEditIndex(idx);
  };

  const handleDel = (ns) => {
    const obj = todos.filter((arrEle) => arrEle.names !== ns);
    setTodos(obj);
  };
  const handleChng = (e) => {
    setTodos(datas);
    setValue(e.target.value);
    if (e.target.value === "All") {
      setTodos(datas);
    } else {
      const filterData = datas.filter(
        (arrele) => arrele.status === e.target.value
      );
      setTodos(filterData);
    }
  };

  return (
    <>
      {isEditing ? (
        <Editcomp
          editIndex={editIndex}
          setTodos={setTodos}
          todos={todos}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <div className="card-headerss">
            <h1>My Todos</h1>
            <div>
              <h1 className="filter-name">StatusFilter: </h1>

              <select
                id="select1"
                value={value}
                onChange={handleChng}
                style={{
                  backgroundColor: value === "notcompleted" ? "red" : "green",
                }}
              >
                <option value="All">ALL</option>
                <option value="notcompleted">Not Completed</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          <div className="cards-container">
            {todos.map((data, idx) => (
              <Card
                style={{
                  minWidth: "18rem",
                  height: "200px",
                  backgroundColor: "aquamarine",
                }}
                className="card-cons"
                key={idx}
              >
                <Card.Body>
                  <div className="dis-cards">
                    <Card.Title>Name:{data.names}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Description:{data.descript}
                    </Card.Subtitle>
                    <Card.Text className="card-text">
                      Status:{" "}
                      <select id="select1" value={data.status}>
                        <option value="notcompleted">Not Completed</option>
                        <option value="completed">Completed</option>
                      </select>
                    </Card.Text>
                  </div>
                  <button
                    className="btn bg-success"
                    onClick={() => handleEdit(idx)}
                  >
                    Edit
                  </button>{" "}
                  <button
                    className="btn bg-danger"
                    onClick={() => handleDel(data.names)}
                  >
                    Delete
                  </button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  );
}
export default Cards;
