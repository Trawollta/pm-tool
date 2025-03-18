import { TaskData } from './task';

export const TASK_DUMMY: TaskData[] = [
  {
    id: 1,
    title: 'Dashboard Finance',
    description: 'Visualize financial trends and key metrics.',
    dueDate: '06 Feb 2024',
    comments: 15,
    assignees: [
      'https://i.pravatar.cc/30?img=3',
      'https://i.pravatar.cc/30?img=4'
    ],
    labels: ['In Progress'],
    progress: 75,
  },
  {
    id: 2,
    title: 'UI Design Mobile',
    description: 'Create a responsive and intuitive mobile UI.',
    dueDate: '08 Feb 2024',
    comments: 8,
    assignees: [
      'https://i.pravatar.cc/30?img=5'
    ],
    labels: ['To Do'],
    progress: 0,
  },
  {
    id: 3,
    title: 'API Integration',
    description: 'Integrate third-party APIs for real-time data.',
    dueDate: '10 Feb 2024',
    comments: 5,
    assignees: [
      'https://i.pravatar.cc/30?img=6'
    ],
    labels: ['In Progress'],
    progress: 50,
  },
  {
    id: 4,
    title: 'Final QA Testing',
    description: 'Perform QA tests before final release.',
    dueDate: '12 Feb 2024',
    comments: 3,
    assignees: [
      'https://i.pravatar.cc/30?img=7'
    ],
    labels: ['Done'],
    progress: 100,
  }
];
