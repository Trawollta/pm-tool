import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-details',
  imports: [CommonModule,FormsModule],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.scss'
})
export class AccountDetailsComponent {
  firstName = 'Laura';
  lastName = 'Cintiya';
  employeeId = '09-6364';
  position = 'Designer';
  email = 'lauracintiya@site.com';
  phoneNumber = '+6208737445';

  onSubmit() {
    // Hier kannst du die Logik einbauen, um die Daten zu speichern (z. B. via HTTP-Request)
    console.log('Account details saved:', {
      firstName: this.firstName,
      lastName: this.lastName,
      employeeId: this.employeeId,
      position: this.position,
      email: this.email,
      phoneNumber: this.phoneNumber
    });
  }

}
