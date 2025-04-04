import { Category } from "./category";
import { Subtask } from "./subtask";

export interface TaskData {
  id: number;
  title: string;
  description?: string;
  due_date?: string;
  comments?: number;
  assignees?: number[];
  labels?: string[];
  progress?: number;
  creator?: number;
  category_id?: number | null;
  category?: Category | null;
  status?: string;
  subtasks?: Subtask[];

  // ✨ NEU:
  board_id: number;
}
