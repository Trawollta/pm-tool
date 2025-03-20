import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../auth/models/user.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../auth/store/app.state';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.scss'
})
export class AccountDetailsComponent implements OnInit {

  user$!: Observable<User | null>;

  firstName = '';
  lastName = '';
  email = '';
  phoneNumber = '';

  constructor(private store: Store<AppState>) {}

  user: User | null = null;

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      this.user = user;
      // Hier aufteilen in Vor- und Nachname, wenn der Name ein String ist:
      const nameParts = user.name.split(' ');
      this.firstName = nameParts[0] || '';
      this.lastName = nameParts[1] || '';
      this.email = user.email || '';
      this.phoneNumber = user.phoneNumber || '';
    }
  }

  onSubmit() {
    console.log('Account details saved:', {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber
    });
    // Optional: API Call zum Speichern hinzufügen
  }
}
