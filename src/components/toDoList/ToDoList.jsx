import { useState, useRef, useEffect } from "react";
import SearchItems from "../SerchItems/SearchItems.jsx";

const ToDoList = () => {
  const [addToDoItems, setAddToDoItems] = useState(
    JSON.parse(localStorage.getItem("todolist")) || []
  );
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(setSeachTemp);

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(0);

  const setAndSaveItems = (newItems) => {
    setAddToDoItems(newItems);
    localStorage.setItem("todolist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = addToDoItems.length
      ? addToDoItems[addToDoItems.length - 1].id + 1
      : 1;
    const myNewItem = { id, item };
    const listItem = [...addToDoItems, myNewItem];
    setAndSaveItems(listItem);
  };

  const heandlSudlit = (e) => {
    e.preventDefault();
    if (!inputValue || !inputValue.trim()) return;
    addItem(inputValue);
    setInputValue("");
  };

  const deleteItems = (id) => {
    setAddToDoItems(addToDoItems.filter((item) => item.id !== id));
  };
  const filteredItems = addToDoItems.filter((item) =>
    item.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul
    // style={{
    //   paddingTop: "50px",
    //   background: "green",
    // }}
    >
      <SearchItems setSearchTerm={setSearchTerm} />

      <form onSubmit={heandlSudlit}>
        <input
          type="text"
          ref={inputRef}
          name=""
          id=""
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" onClick={() => inputRef.current.focus()}>
          Add
        </button>
      </form>
      {filteredItems.map((item) => (
        <li className="item" key={item.id}>
          <span>{item.id}</span>
          <span>{item.item}</span>
          <button onClick={() => deleteItems(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
