import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllUsers } from '../../../auth/store/auth.selectors';
import { loadUsers } from '../../../auth/store/auth.actions';
import { User } from '../../../auth/models/user.model';
import { TaskData } from '../../models/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { selectAllCategories } from '../../store/category-store/caetegory.selector';
import { Category } from '../../models/category';
import { createCategory, loadCategories } from '../../store/category-store/caetegory.actions';
import { createTask } from '../../store/task-store/task.actions';
import { AppState } from '../../../auth/store/app.state';
import { Subtask } from '../../models/subtask';

@Component({
  selector: 'app-create-task-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss']
})
export class CreateTaskDialogComponent implements OnInit {
  @Output() taskCreated = new EventEmitter<TaskData>();
  @Output() closeDialog = new EventEmitter<void>();

  taskTitle = '';
  taskDescription = '';
  taskDueDate: string = '';
  selectedAssignees: number[] = [];
  selectedLabels: string[] = [];
  selectedCategory: number | null = null;
  taskProgress = 0;
  dropdownOpen = false;
  showAddCategory = false;
  newCategoryName = '';
  subtasks: Subtask[] = [];
  newSubtaskTitle: string = '';


  users$: Observable<User[]>;
  categories$: Observable<Category[]>;

  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select(selectAllUsers);
    this.categories$ = this.store.select(selectAllCategories);
  }

  ngOnInit(): void {
    this.users$.subscribe(users => {
      if (!users || users.length === 0) {
        this.store.dispatch(loadUsers());
      }
    });

    this.categories$.subscribe(categories => {
      if (!categories || categories.length === 0) {
        this.store.dispatch(loadCategories());
      }
    });
  }

  onSubmit() {
    if (!this.taskTitle) return;
  
    const newTask: TaskData = {
      id: 0,
      title: this.taskTitle,
      description: this.taskDescription,
      due_date: this.taskDueDate,
      assignees: this.selectedAssignees,
      labels: this.selectedLabels.length ? this.selectedLabels : ['To Do'],
      progress: this.taskProgress,
      creator: 1,
      category_id: this.selectedCategory,
      status: this.selectedLabels[0] || 'To Do',
      subtasks: this.subtasks,
      board_id: 1 // hier kommen die subtasks rein
    };
  
    this.store.dispatch(createTask({ task: newTask }));
    this.resetForm();
  }
  

  toggleAssignee(userId: number, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.selectedAssignees.push(userId);
    } else {
      this.selectedAssignees = this.selectedAssignees.filter(id => id !== userId);
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleAddCategory() {
    this.showAddCategory = !this.showAddCategory;
  }

  addCategory() {
    if (this.newCategoryName) {
      const randomColor = this.generateRandomColor();
  
      const newCat = {
        name: this.newCategoryName,
        color: randomColor
      };
  
      this.store.dispatch(createCategory({ category: newCat }));
  
      this.showAddCategory = false;
      this.newCategoryName = '';
    }
  }
  
  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

  onCancel() {
    this.closeDialog.emit();
  }

  resetForm() {
    this.taskTitle = '';
    this.taskDescription = '';
    this.taskDueDate = '';
    this.selectedAssignees = [];
    this.selectedLabels = [];;
    this.taskProgress = 0;
  }

  addSubtask() {
    if (this.newSubtaskTitle.trim()) {
      this.subtasks.push({ id: 0, task_id: 0, title: this.newSubtaskTitle, done: false });
      this.newSubtaskTitle = '';
    }
  }
  
  removeSubtask(index: number) {
    this.subtasks.splice(index, 1);
  }
}
