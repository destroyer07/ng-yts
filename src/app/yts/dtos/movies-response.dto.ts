import {MovieDto} from './movie.dto';

export interface MoviesResponseDto {
  movie_count: number;
  limit: number;
  page_number: number;
  movies: MovieDto[];
}
