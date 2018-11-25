export class YtsResponse<T> {
  private _status: number;
  private _status_message: number;
  private _data: T;

  public get status(): number {
    return this._status;
  }

  public set status(value: number) {
    this._status = value;
  }

  public get statusMessage(): number {
    return this._status_message;
  }

  public set statusMessage(value: number) {
    this._status_message = value;
  }

  public get data(): T {
    return this._data;
  }

  public set data(value: T) {
    this._data = value;
  }
}
