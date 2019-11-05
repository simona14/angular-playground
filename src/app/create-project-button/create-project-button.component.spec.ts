import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectButtonComponent } from './create-project-button.component';

describe('CreateProjectButtonComponent', () => {
  let component: CreateProjectButtonComponent;
  let fixture: ComponentFixture<CreateProjectButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
