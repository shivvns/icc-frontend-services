import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSlcComponent } from './simple-slc.component';

describe('SimpleSlcComponent', () => {
  let component: SimpleSlcComponent;
  let fixture: ComponentFixture<SimpleSlcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleSlcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
