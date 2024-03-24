const TodoItem = ({
  item,
  index,
  editingIndex,
  editingValue,
  setEditingValue,
  handleEditItem,
  handleDeleteItem,
}) => {
  const { title } = item;
  return (
    <>
      <li className="grid grid-cols-6 gap-2 py-2">
        {index === editingIndex ? (
          <input
            className="px-2 py-0.5 border border-solid border-stone-600 col-span-4"
            type="text"
            value={editingValue}
            onChange={(e) => setEditingValue(e.target.value)}
          />
        ) : (
          <p className="col-span-4">{title}</p>
        )}

        <button
          className={`btn ${
            index === editingIndex ? "bg-green-500" : "bg-blue-500"
          } py-0.5 px-2 rounded text-stone-50`}
          onClick={() => handleEditItem(index)}
        >
          {index === editingIndex ? "Update" : "Edit"}
        </button>
        <button
          className="btn bg-red-500 py-0.5 px-2 rounded text-stone-50"
          onClick={() => handleDeleteItem(index)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
