import { useEffect, useState } from "react";

function App() {
  
  /** state */
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  /** event */
  const fnChange = (event) => setToDo(event.target.value);
  const fnSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");

  };
  
  /** data check */
  console.log(toDos);

  /** data check */

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={fnSubmit}>
        <input value={toDo} onChange={fnChange} type="text" placeholder="Write your to do" />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;