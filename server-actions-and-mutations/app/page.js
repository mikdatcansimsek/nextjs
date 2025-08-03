'use client';

import { useEffect, useState } from "react";
import { create } from "./action";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const createAction = create.bind(null,1);
  useEffect(() => {
    fetch("http://localhost:9500/todos").then(res => res.json()).then(d => setTodos(d));
  }, [])

  return (
    <>
      <h1>Server actions and mutations</h1>
      <form action={createAction}>
        <div>
          <label>Work</label>
          <input name="work" />
        </div>
        <div>
          <button type ="submit">Save</button>
        </div>
      </form>

      <hr />
      <ul>
        {todos.map((val, i) => <li key={i}>{val.work}</li>)}
      </ul>
    </>
  );
}
