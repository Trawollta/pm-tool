import {
  Component,
  inject,
  ChangeDetectorRef,
  Input,
  ElementRef,
  ViewChild,
  OnDestroy,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
// import { AppState } from 'app/store/state/app.state';
// import { AuthService } from 'app/services/auth.service';
// import { Message } from 'app/models/message.class';
import { Observable, Subscription } from 'rxjs';
import { Message } from '../../../models/message.model';
// import { UiStateService } from 'app/services/uistate.service';
// import { GlobalFunctionsService } from 'app/services/app-services/global-functions.service';
// import { selectUserById } from 'app/store/selectors/chat.selector';

@Component({
  selector: 'app-current-user-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-user-message.component.html',
  styleUrls: ['./current-user-message.component.scss'],
})
export class CurrentUserMessageComponent {

  @Input() message!: Message;

}
