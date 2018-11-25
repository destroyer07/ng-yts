import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../yts/models/movie';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ObservableMedia } from '@angular/flex-layout';
import {MoviesResponse} from '../yts/models/movies-response';
import {YtsService} from '../yts/yts.service';

@Component({
  selector: 'app-movie-grid-list',
  templateUrl: './movie-grid-list.component.html',
  styleUrls: ['./movie-grid-list.component.css']
})
export class MovieGridListComponent implements OnInit {

  protected movies: Movie[];

  /**
   * The number of colums in the md-grid-list directive.
   */
  public cols: Observable<number>;

  constructor(
    private yts: YtsService,
    private observableMedia: ObservableMedia
  ) {}

  ngOnInit() {

    this.yts
      .getMovies()
      .subscribe((movies: MoviesResponse) => this.movies = movies.movies);

    const grid = new Map([
      ['xs', 1],
      ['sm', 2],
      ['md', 3],
      ['lg', 4],
      ['xl', 5]
    ]);
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .pipe(
        map(change => grid.get(change.mqAlias)),
        startWith(start)
      );
  }

}
