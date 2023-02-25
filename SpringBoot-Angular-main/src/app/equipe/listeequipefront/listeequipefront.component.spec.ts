import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeequipefrontComponent } from './listeequipefront.component';

describe('ListeequipefrontComponent', () => {
  let component: ListeequipefrontComponent;
  let fixture: ComponentFixture<ListeequipefrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeequipefrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeequipefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
