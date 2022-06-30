import { Injectable } from '@angular/core';
import { createClient, Entry, EntryCollection } from 'contentful';
import { HttpClient } from '@angular/common/http';
import { from, map, Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor(private http: HttpClient) {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  getAllEntries(): Observable<EntryCollection<unknown>> {
    const promise = this.client.getEntries();
    //from renvoie un observable à partir d'une promesse
    return from(promise);
  }

  getEntryById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }
}
