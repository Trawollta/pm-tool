import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-workspace-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './workspace-menu.component.html',
  styleUrl: './workspace-menu.component.scss'
})

export class WorkspaceMenuComponent {

}
