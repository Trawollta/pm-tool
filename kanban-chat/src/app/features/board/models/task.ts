export interface TaskData {
    id: number;
    title: string;
    description?: string;
    dueDate?: string;
    comments?: number;
    assignees?: string[];
    labels?: string[];
    progress?: number;
  }