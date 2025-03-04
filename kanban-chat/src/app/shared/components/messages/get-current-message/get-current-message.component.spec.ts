import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCurrentMessageComponent } from './get-current-message.component';

describe('GetCurrentMessageComponent', () => {
  let component: GetCurrentMessageComponent;
  let fixture: ComponentFixture<GetCurrentMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCurrentMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCurrentMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
