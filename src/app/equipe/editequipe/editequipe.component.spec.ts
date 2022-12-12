import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditequipeComponent } from './editequipe.component';

describe('EditequipeComponent', () => {
  let component: EditequipeComponent;
  let fixture: ComponentFixture<EditequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditequipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
