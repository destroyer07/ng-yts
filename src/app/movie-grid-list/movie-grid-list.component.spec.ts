import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGridListComponent } from './movie-grid-list.component';

describe('MovieGridListComponent', () => {
  let component: MovieGridListComponent;
  let fixture: ComponentFixture<MovieGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
