import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllEtudiantComponent } from './delete-all-etudiant.component';

describe('DeleteAllEtudiantComponent', () => {
  let component: DeleteAllEtudiantComponent;
  let fixture: ComponentFixture<DeleteAllEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAllEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAllEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
