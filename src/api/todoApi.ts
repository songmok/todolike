import axiosInstance from "./axios";

export const fetchTodo = async (id: number) => {
  const response = await axiosInstance.get(`/todos/${id}`);
  return response.data;
};

export const createTodo = async (data: {
  title: string;
  completed: boolean;
}) => {
  const response = await axiosInstance.post("/todos", data);
  return response.data;
};

export const deleteTodo = async (id: number) => {
  const response = await axiosInstance.delete(`/todos/${id}`);
  return response.data;
};
