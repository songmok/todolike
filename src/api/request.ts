const todoVar = "todos";

const apiEndpoints = {
  todos: {
    getTodo: (id: number) => `/${todoVar}/${id}`,
    createTodo: `/${todoVar}`,
    deleteTodo: (id: number) => `/${todoVar}/${id}`,
  },
};

export default apiEndpoints;
