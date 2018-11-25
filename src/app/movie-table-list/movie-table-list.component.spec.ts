import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTableListComponent } from './movie-table-list.component';

describe('MovieTableListComponent', () => {
  let component: MovieTableListComponent;
  let fixture: ComponentFixture<MovieTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
