import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiBoxComponent } from './multi-box.component';

describe('MultiBoxComponent', () => {
  let component: MultiBoxComponent;
  let fixture: ComponentFixture<MultiBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiBoxComponent]
    });
    fixture = TestBed.createComponent(MultiBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
