import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreclamationComponent } from './listreclamation.component';

describe('ListreclamationComponent', () => {
  let component: ListreclamationComponent;
  let fixture: ComponentFixture<ListreclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListreclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
