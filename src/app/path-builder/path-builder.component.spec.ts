import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathBuilderComponent } from './path-builder.component';

describe('PathBuilderComponent', () => {
  let component: PathBuilderComponent;
  let fixture: ComponentFixture<PathBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
