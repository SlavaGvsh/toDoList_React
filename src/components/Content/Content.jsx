import { useState, useEffect } from "react";
import ToDoList from "../toDoList/ToDoList.jsx";

const Content = () => {
  const [items, setItems] = useState([
    //  { id: 1, cheched: false, item: "Lorem" },
    //  { id: 2, cheched: false, item: "Lorem1" },
    //  { id: 3, cheched: false, item: "Lorem2" },
    //  { id: 4, cheched: false, item: "Lorem3" },
  ]);

  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((response) => response.json())
    .then((data) => setItems(data))
    .catch((error) => console.error("Error fetching data:", error));
}, []);

  const handleCheckboxChange = (id) => {
    const listChange = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(listChange);
  };
  const deleteItem = (id) => {
    const filteredItem = items.filter((item) => item.id !== id);
    setItems(filteredItem);
  };

  return (
    <div>
      <main>
        <ul
         //  style={{
         //    paddingTop: "50px",
         //    background: "red",
         //  }}
        >
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.id}</span>
              <span>{item.title}</span>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <button type="button" onClick={() => deleteItem(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <ToDoList />
      </main>
    </div>
  );
};

export default Content;
