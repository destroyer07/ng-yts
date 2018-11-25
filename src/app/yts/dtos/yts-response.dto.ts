export interface YtsResponseDto<T> {
  status: number;
  status_message: number;
  data: T;
}
