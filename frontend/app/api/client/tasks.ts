import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: "pending" | "in_progress" | "done";
  createdAt: string;
};

export async function fetchTasks(status?: string) {
  const res = await axios.get<Task[]>(`${API_URL}/tasks`, {
    params: status ? { status } : {},
  });
  return res.data;
}

export async function createTask(data: Omit<Task, "id" | "createdAt">) {
  const res = await axios.post<Task>(`${API_URL}/tasks`, data);
  return res.data;
}

export async function updateTask(id: string, data: Partial<Task>) {
  const res = await axios.put<Task>(`${API_URL}/tasks/${id}`, data);
  return res.data;
}

export async function deleteTask(id: string) {
  await axios.delete(`${API_URL}/tasks/${id}`);
}
