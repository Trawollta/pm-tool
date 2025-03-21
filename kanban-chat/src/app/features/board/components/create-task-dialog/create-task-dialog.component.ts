import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { User } from '../../../auth/models/user.model';
import { Store } from '@ngrx/store';
import { selectAllUsers } from '../../../auth/store/auth.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskData } from '../../models/task';
import { createTask } from '../../store/task.actions';
import { loadUsers } from '../../../auth/store/auth.actions';

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
  taskProgress = 0;
  dropdownOpen = false;

  users$: Observable<User[]>;

  constructor(private store: Store) {
    this.users$ = this.store.select(selectAllUsers);
  }

  ngOnInit(): void {
    this.users$.subscribe(users => {
      if (!users || users.length === 0) {
        this.store.dispatch(loadUsers());
      }
    });
  }

  onSubmit() {
    if (!this.taskTitle) return;
  
    const newTask: TaskData = {
      id: 0,
      title: this.taskTitle,
      description: this.taskDescription,
      dueDate: this.taskDueDate,
      comments: 0,
      assignees: this.selectedAssignees,
      labels: this.selectedLabels.length ? this.selectedLabels : ['To Do'],
      progress: this.taskProgress,
      creator: 1
    };
  
    this.store.dispatch(createTask({ task: newTask }));
  
    this.resetForm();
  }
  

  onCancel() {
    this.closeDialog.emit();
  }

  resetForm() {
    this.taskTitle = '';
    this.taskDescription = '';
    this.taskDueDate = '';
    this.selectedAssignees = [];
    this.selectedLabels = [];
    this.taskProgress = 0;
  }

  toggleAssignee(userId: number, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      if (!this.selectedAssignees.includes(userId)) {
        this.selectedAssignees.push(userId);
      }
    } else {
      this.selectedAssignees = this.selectedAssignees.filter(id => id !== userId);
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
