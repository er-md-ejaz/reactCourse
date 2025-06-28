import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);       // list of todos
  const [newTodo, setNewTodo] = useState('');    // input value

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');  // reset the input
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo)
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">📝 My Todos</h1>
      <input
        type="text"
        value={newTodo}
        placeholder="Add a new todo"
        onChange={(e) => setNewTodo(e.target.value)}
        className="border px-2 py-1 w-full mb-2"
      />
      <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-1 rounded mb-4">Add</button>

      <ul className="list-none p-0">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between border-b py-2">
            <span
              onClick={() => toggleTodo(index)}
              className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)} className="text-red-500 ml-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
