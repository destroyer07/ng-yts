import {Component, OnInit} from '@angular/core';
import {YtsService} from '../yts/yts.service';
import {Movie} from '../yts/models/movie';
import {MoviesResponse} from '../yts/models/movies-response';
import {GeneralSettingsService} from '../general-settings.service';
import {PageEvent} from '@angular/material';

class ViewOptions {
  totalMoviesFound: number;
  sortBy: string;
  orderByAsc: boolean;
  pageIndex: number;
  pageSize: number;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  protected movies: Movie[];

  protected viewOptions = new ViewOptions();

  constructor(
    private genSets: GeneralSettingsService,
    private yts: YtsService
  ) {
  }

  ngOnInit() {
    this.viewOptions.pageSize = 5;
    this.viewOptions.pageIndex = 1;

    this.doRequisition();
  }

  onSort(sortObj: { sortBy: string; orderByAsc: boolean }) {
    this.viewOptions.sortBy = sortObj.sortBy;
    this.viewOptions.orderByAsc = sortObj.orderByAsc;
    this.viewOptions.pageIndex = 1;

    this.doRequisition();
  }

  onPaginate(page: PageEvent) {
    this.viewOptions.pageSize = page.pageSize;
    this.viewOptions.pageIndex = page.pageIndex + 1;

    this.doRequisition();
  }
  
  private doRequisition() {
    this.yts
      .getMovies(
        this.viewOptions.sortBy,
        this.viewOptions.orderByAsc,
        this.viewOptions.pageSize,
        this.viewOptions.pageIndex
      )
      .subscribe((res: MoviesResponse) => {
        this.movies = res.movies;

        // Update view options values
        this.viewOptions.totalMoviesFound = res.movieCount;
        this.viewOptions.pageSize = res.limit;
        this.viewOptions.pageIndex = res.pageNumber;
      });
  }
}
