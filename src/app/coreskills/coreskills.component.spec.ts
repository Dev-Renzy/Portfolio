import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreskillsComponent } from './coreskills.component';

describe('CoreskillsComponent', () => {
  let component: CoreskillsComponent;
  let fixture: ComponentFixture<CoreskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
