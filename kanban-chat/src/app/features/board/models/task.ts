export interface TaskData {
    id: number;
    title: string;
    description?: string;
    dueDate?: string;
    comments?: number;
    assignees?: number[]; 
    labels?: string[];
    progress?: number;
    creator?: number;
  }