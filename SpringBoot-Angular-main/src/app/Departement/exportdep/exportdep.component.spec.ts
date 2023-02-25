import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportdepComponent } from './exportdep.component';

describe('ExportdepComponent', () => {
  let component: ExportdepComponent;
  let fixture: ComponentFixture<ExportdepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportdepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportdepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
