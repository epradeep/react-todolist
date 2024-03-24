import { useRef, useState } from "react";
import TodoItem from "./TodoItem";
import { checkValidData } from "../utils/validate";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const todoName = useRef(null);

  const handleAddItem = (e) => {
    e.preventDefault();
    const message = checkValidData(todoName.current.value);
    setErrorMessage(message);
    if (message) return;

    if (todo.trim() !== "") {
      // If adding new task
      const newItem = {
        title: todo,
        completed: false,
      };
      setTodoList([...todoList, newItem]);
      setTodo("");
    }
  };

  const handleEditItem = (index) => {
    if (editingIndex !== null) {
      // If editing, update the task
      if (!editingValue) return;
      const updatedTasks = [...todoList];
      console.log(updatedTasks);
      const item = updatedTasks[editingIndex];
      // updatedTasks[editingIndex].title = editingValue;
      let newTodo = { ...item, title: editingValue };
      updatedTasks.splice(index, 1, newTodo);
      setTodoList(updatedTasks);
      setEditingIndex(null);
      setEditingValue("");
    } else {
      setEditingIndex(index);
      setEditingValue(todoList[index].title);
    }
  };

  const handleDeleteItem = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
    if (editingIndex === index) {
      setEditingIndex(null);
      setEditingValue("");
    }
  };

  return (
    <div className="px-4 py-4 w-4/12">
      <form>
        <label htmlFor="todoName">Add Item</label>
        <div className="grid grid-cols-4 gap-2">
          <input
            className="px-2 py-1 border border-solid border-stone-600 col-span-3"
            ref={todoName}
            id="todoName"
            name="todoName"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            className="px-2 py-1 bg-green-500 text-stone-50 hover:bg-green-700 rounded"
            onClick={handleAddItem}
          >
            Add
          </button>
        </div>
        <p className="text-red-500 font-medium py-2">{errorMessage}</p>
      </form>
      <ul className="mt-10 divide-y divide-solid divide-stone-300">
        {todoList?.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            editingIndex={editingIndex}
            editingValue={editingValue}
            setEditingValue={setEditingValue}
            handleEditItem={handleEditItem}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
