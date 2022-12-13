import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDepartementComponent } from './remove-departement.component';

describe('RemoveDepartementComponent', () => {
  let component: RemoveDepartementComponent;
  let fixture: ComponentFixture<RemoveDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveDepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
