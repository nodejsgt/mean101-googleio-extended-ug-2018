import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

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
  }

}
