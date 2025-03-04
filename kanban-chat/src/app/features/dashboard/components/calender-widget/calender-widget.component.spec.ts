import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderWidgetComponent } from './calender-widget.component';

describe('CalenderWidgetComponent', () => {
  let component: CalenderWidgetComponent;
  let fixture: ComponentFixture<CalenderWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
