import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDeatilComponent } from './student-deatil.component';

describe('StudentDeatilComponent', () => {
  let component: StudentDeatilComponent;
  let fixture: ComponentFixture<StudentDeatilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDeatilComponent]
    });
    fixture = TestBed.createComponent(StudentDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
