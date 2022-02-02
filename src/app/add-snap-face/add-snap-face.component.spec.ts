import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSnapFaceComponent } from './add-snap-face.component';

describe('AddSnapFaceComponent', () => {
  let component: AddSnapFaceComponent;
  let fixture: ComponentFixture<AddSnapFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSnapFaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSnapFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
