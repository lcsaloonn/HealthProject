import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get(
        'https://cdn.contentful.com/spaces/zfepwmneoymr/environments/master/entries?access_token=pH_0g8yMK6j0UHkNtHpFYf25B1eBQZTv90K_QXMcIxM'
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
