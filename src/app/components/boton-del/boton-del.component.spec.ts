import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDelComponent } from './boton-del.component';

describe('BotonDelComponent', () => {
  let component: BotonDelComponent;
  let fixture: ComponentFixture<BotonDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
