import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExcampleComponent } from './pipes-excample.component';

describe('PipesExcampleComponent', () => {
  let component: PipesExcampleComponent;
  let fixture: ComponentFixture<PipesExcampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesExcampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesExcampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
