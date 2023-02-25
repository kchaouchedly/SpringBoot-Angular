import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdetailequipeComponent } from './listdetailequipe.component';

describe('ListdetailequipeComponent', () => {
  let component: ListdetailequipeComponent;
  let fixture: ComponentFixture<ListdetailequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdetailequipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdetailequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
