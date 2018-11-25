import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MoviesResponse} from './models/movies-response';
import {YtsResponseDto} from './dtos/yts-response.dto';
import {MoviesResponseDto} from './dtos/movies-response.dto';

@Injectable({
  providedIn: 'root'
})
export class YtsService {

  private static URL_BASE = 'https://yts.am/api/v2/';

  private static URL_PART_MOVIES = 'list_movies.json';

  private static SORT_BY = 'sort_by';
  private static ORDER_BY = 'order_by';
  private static LIMIT = 'limit';
  private static PAGE = 'page';

  constructor(private http: HttpClient) {
  }

  public getMovies(
    sortBy: string = null,
    orderByAsc: boolean = null,
    limit: number = null,
    page: number = null
  ): Observable<MoviesResponse> {

    let params = new HttpParams();

    if (limit) {
      params = params.append(YtsService.LIMIT, limit.toString());
    }
    if (page) {
      params = params.append(YtsService.PAGE, page.toString());
    }
    if (sortBy) {
      params = params.append(YtsService.SORT_BY, sortBy.toString());
    }
    if (orderByAsc) {
      params = params.append(YtsService.ORDER_BY, orderByAsc.toString());
    }

    return this.http
      .get<YtsResponseDto<MoviesResponseDto>>(YtsService.URL_BASE + YtsService.URL_PART_MOVIES, {params})
      .pipe(map(res => MoviesResponse.fromDto(res.data)));
  }
}
