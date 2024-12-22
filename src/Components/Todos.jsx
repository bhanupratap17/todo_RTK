import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null); // To track the todo being edited
  const [editText, setEditText] = useState(''); // To hold the new text

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText })); // Dispatch action with id and new text
      setEditId(null); // Reset edit state
      setEditText(''); // Clear input
    }
  };

  return (
    <>
      <div className="text-1xl font-bold underline mt-3">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* Show input field for editing */}
           <div className="flex-1">
              {editId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="text-black px-2 py-1 rounded w-full bg-black text-white"
                />
              ) : (
                <div className="text-white">{todo.text}</div>
              )}
            </div>

             <div className="flex gap-2">
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Remove
              </button>

             <div  className="w-[70px]">
             {editId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)} // important
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditId(todo.id);
                    setEditText(todo.text);
                  }}
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                >
                  Edit
                </button>
              )}
             </div>
              
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
