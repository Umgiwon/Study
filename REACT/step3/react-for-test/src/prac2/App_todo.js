import { useEffect, useState } from "react";

function App_todo() {
  
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
    // setToDos((currentArray) => [toDo, ...currentArray]);
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");

  };
  
  /** data check */
  // useEffect(() => {
    console.log(toDos);
  // }, [])

  /** data check */

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={fnSubmit}>
        <input value={toDo} onChange={fnChange} type="text" placeholder="Write your to do" />
        <button>Add To Do</button>
      </form>
     <hr />
     <ul>
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
     </ul>


    </div>
  );
}

export default App_todo;