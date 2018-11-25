import {Movie} from './movie';
import {MoviesResponseDto} from '../dtos/movies-response.dto';

export class MoviesResponse {
  private _movie_count: number;
  private _limit: number;
  private _page_number: number;
  private _movies: Movie[];


  public static fromDto(dto: MoviesResponseDto): MoviesResponse {
    const obj = new MoviesResponse();

    obj.movieCount = dto.movie_count;
    obj.limit = dto.limit;
    obj.pageNumber = dto.page_number;
    obj.movies = (dto.movies || []).map(movie => Movie.fromDto(movie));

    return obj;
  }

  get movieCount(): number {
    return this._movie_count;
  }

  set movieCount(value: number) {
    this._movie_count = value;
  }

  get limit(): number {
    return this._limit;
  }

  set limit(value: number) {
    this._limit = value;
  }

  get pageNumber(): number {
    return this._page_number;
  }

  set pageNumber(value: number) {
    this._page_number = value;
  }

  get movies(): Movie[] {
    return this._movies;
  }

  set movies(value: Movie[]) {
    this._movies = value;
  }
}
