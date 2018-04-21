import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { map, tap, catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

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
                      }),
                      catchError(this.handleError)
                    )
  }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error ocurred: ', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}\n body was: ${error.error}` );
    }

    return new ErrorObservable('Something bad happened please try again');
  }

}
