import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable()
export class PostService {
  headers = new HttpHeaders( {'Content-type': 'application/json'});
  
  constructor(private http: HttpClient) { }

  getAllPosts(): Promise<any[]> {
    return this.http.get('/api/posts')
                    .toPromise()
                    .then( result => {
                      return result;
                    })
                    .catch( (result) => {
                      return result;
                    })
  };

  getAllPostObservable(): Observable<any[]> {
    return this.http.get<any[]>('/api/posts')
                    .pipe(
                      map( results => {
                        return results;
                      })
                    )
  }

}
