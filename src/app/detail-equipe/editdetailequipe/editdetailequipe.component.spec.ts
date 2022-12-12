import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdetailequipeComponent } from './editdetailequipe.component';

describe('EditdetailequipeComponent', () => {
  let component: EditdetailequipeComponent;
  let fixture: ComponentFixture<EditdetailequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdetailequipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdetailequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
