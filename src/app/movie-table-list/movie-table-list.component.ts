import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../yts/models/movie';
import {PageEvent, Sort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {YtsService} from '../yts/yts.service';

@Component({
  selector: 'app-movie-table-list',
  templateUrl: './movie-table-list.component.html',
  styleUrls: ['./movie-table-list.component.css']
})
export class MovieTableListComponent implements OnInit {

  @Input() movies: Movie[];
  @Input() totalMoviesFound: number;

  @Output() onSort = new EventEmitter<{ sortBy: string; orderByAsc: boolean }>();
  @Output() onPaginate = new EventEmitter<PageEvent>();

  displayedColumns: string[] = ['select', 'cover', 'title', 'rating'];
  selection = new SelectionModel<Movie>(true, []);

  constructor(private yts: YtsService) { }

  ngOnInit() {}

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.movies.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.movies.forEach(row => this.selection.select(row));
  }

  sortData(sort: Sort) {
    this.onSort.emit({
      sortBy: sort.active,
      orderByAsc: sort.direction === 'asc'
    });
  }

  onPageChange(page: PageEvent) {
    this.onPaginate.emit(page);
  }
}
