import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCrudComponent } from './users-crud.component';

describe('UsersCrudComponent', () => {
  let component: UsersCrudComponent;
  let fixture: ComponentFixture<UsersCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
