import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletContratComponent } from './delet-contrat.component';

describe('DeletContratComponent', () => {
  let component: DeletContratComponent;
  let fixture: ComponentFixture<DeletContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletContratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
