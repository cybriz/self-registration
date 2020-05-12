import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratzPageComponent } from './congratz-page.component';

describe('CongratzPageComponent', () => {
  let component: CongratzPageComponent;
  let fixture: ComponentFixture<CongratzPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongratzPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratzPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
