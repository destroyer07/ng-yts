import {MovieDto} from '../dtos/movie.dto';

export class Movie {
  private _id: number;
  private _url: string;
  private _imdb_code: string;
  private _title: string;
  private _title_english: string;
  private _title_long: string;
  private _slug: string;
  private _year: number;
  private _rating: number;
  private _runtime: number;
  private _genres: any[];
  private _summary: string;
  private _description_full: string;
  private _synopsis: string;
  private _yt_trailer_code: string;
  private _language: string;
  private _mpa_rating: string;
  private _background_image: string;
  private _background_image_original: string;
  private _small_cover_image: string;
  private _medium_cover_image: string;
  private _large_cover_image: string;
  private _state: string;
  private _torrents: any[];
  private _date_uploaded: Date;
  private _date_uploaded_unix: number;

  public static fromDto(dto: MovieDto): Movie {
    const obj = new Movie();

    obj.id = dto.id;
    obj.url = dto.url;
    obj.imdbCode = dto.imdb_code;
    obj.title = dto.title;
    obj.titleEnglish = dto.title_english;
    obj.titleLong = dto.title_long;
    obj.slug = dto.slug;
    obj.year = dto.year;
    obj.rating = dto.rating;
    obj.runtime = dto.runtime;
    obj.genres = dto.genres;
    obj.summary = dto.summary;
    obj.descriptionFull = dto.description_full;
    obj.synopsis = dto.synopsis;
    obj.ytTrailerCode = dto.yt_trailer_code;
    obj.language = dto.language;
    obj.mpaRating = dto.mpa_rating;
    obj.backgroundImage = dto.background_image;
    obj.backgroundImageOriginal = dto.background_image_original;
    obj.smallCoverImage = dto.small_cover_image;
    obj.mediumCoverImage = dto.medium_cover_image;
    obj.largeCoverImage = dto.large_cover_image;
    obj.state = dto.state;
    obj.torrents = dto.torrents;
    obj.dateUploaded = dto.date_uploaded;
    obj.dateUploadedUnix = dto.date_uploaded_unix;

    return obj;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get url(): string {
    return this._url;
  }

  public set url(value: string) {
    this._url = value;
  }

  public get imdbCode(): string {
    return this._imdb_code;
  }

  public set imdbCode(value: string) {
    this._imdb_code = value;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get titleEnglish(): string {
    return this._title_english;
  }

  public set titleEnglish(value: string) {
    this._title_english = value;
  }

  public get titleLong(): string {
    return this._title_long;
  }

  public set titleLong(value: string) {
    this._title_long = value;
  }

  public get slug(): string {
    return this._slug;
  }

  public set slug(value: string) {
    this._slug = value;
  }

  public get year(): number {
    return this._year;
  }

  public set year(value: number) {
    this._year = value;
  }

  public get rating(): number {
    return this._rating;
  }

  public set rating(value: number) {
    this._rating = value;
  }

  public get runtime(): number {
    return this._runtime;
  }

  public set runtime(value: number) {
    this._runtime = value;
  }

  public get genres(): any[] {
    return this._genres;
  }

  public set genres(value: any[]) {
    this._genres = value;
  }

  public get summary(): string {
    return this._summary;
  }

  public set summary(value: string) {
    this._summary = value;
  }

  public get descriptionFull(): string {
    return this._description_full;
  }

  public set descriptionFull(value: string) {
    this._description_full = value;
  }

  public get synopsis(): string {
    return this._synopsis;
  }

  public set synopsis(value: string) {
    this._synopsis = value;
  }

  public get ytTrailerCode(): string {
    return this._yt_trailer_code;
  }

  public set ytTrailerCode(value: string) {
    this._yt_trailer_code = value;
  }

  public get language(): string {
    return this._language;
  }

  public set language(value: string) {
    this._language = value;
  }

  public get mpaRating(): string {
    return this._mpa_rating;
  }

  public set mpaRating(value: string) {
    this._mpa_rating = value;
  }

  public get backgroundImage(): string {
    return this._background_image;
  }

  public set backgroundImage(value: string) {
    this._background_image = value;
  }

  public get backgroundImageOriginal(): string {
    return this._background_image_original;
  }

  public set backgroundImageOriginal(value: string) {
    this._background_image_original = value;
  }

  public get smallCoverImage(): string {
    return this._small_cover_image;
  }

  public set smallCoverImage(value: string) {
    this._small_cover_image = value;
  }

  public get mediumCoverImage(): string {
    return this._medium_cover_image;
  }

  public set mediumCoverImage(value: string) {
    this._medium_cover_image = value;
  }

  public get largeCoverImage(): string {
    return this._large_cover_image;
  }

  public set largeCoverImage(value: string) {
    this._large_cover_image = value;
  }

  public get state(): string {
    return this._state;
  }

  public set state(value: string) {
    this._state = value;
  }

  public get torrents(): any[] {
    return this._torrents;
  }

  public set torrents(value: any[]) {
    this._torrents = value;
  }

  public get dateUploaded(): Date {
    return this._date_uploaded;
  }

  public set dateUploaded(value: Date) {
    this._date_uploaded = value;
  }

  public get dateUploadedUnix(): number {
    return this._date_uploaded_unix;
  }

  public set dateUploadedUnix(value: number) {
    this._date_uploaded_unix = value;
  }
}
