'use client';

import { useEffect, useState } from "react";



export default function Home() {
  const [Todos, setTodos] = useState([]);
  const [work, setWork] = useState("");

  function getAll() {
    fetch("http://localhost:3000/api/todos/get")
      .then(response => response.json())
      .then(data => setTodos(data));
  }

  function create() {
    fetch("http://localhost:3000/api/todos/post", {
      method: "POST",
      body: JSON.stringify({ work: work })
    })
      .then(() => getAll())
      
  }

  useEffect(() => {
    getAll();
  }, []);
  return (
    <>
      <h1>Todo App</h1>
      <input onChange={(e) => setWork(e.target.value)} type="text" />
      <button onClick={create}>Create</button>
      <ul>
        {Todos.map((val,i) => <li key={i}>{val.work}</li>)}
      </ul>
    </>
  );
}
