export const MOCK_API = "https://65fd23659fc4425c6531370d.mockapi.io/api";

export const API_OPTIONS = {
  GETAPI: {
    method: "GET",
    headers: { "content-type": "application/json" },
  },
};

export const createTodo = (newItem) => {
  try {
    fetch(`${MOCK_API}/todos`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(newItem),
    });
  } catch (error) {
    console.log("Error Creating data ", error.message);
  }
};

export const updateTodo = (id, updatedTasks) => {
  try {
    fetch(`${MOCK_API}/todos/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedTasks),
    });
  } catch (error) {
    console.log("Error Updating data ", error.message);
  }
};

export const deleteTodo = (id) => {
  try {
    fetch(`${MOCK_API}/todos/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log("Error Updating data ", error.message);
  }
};
