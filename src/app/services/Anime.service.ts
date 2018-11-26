import { Injectable } from '@angular/core';
import { Response, RequestOptions, RequestMethod, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { TablaInterface } from "../interface";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from '../../../node_modules/rxjs/operators';

interface Post {
  id: string;
  name: string
}

@Injectable()
export class AnimeService {

   private ListAnimeUrl = "http://exebio.inkatech.org.pe/users";
   // private ListAnimeUrl = "http://localhost:3000/users";

  selectedEmployee: TablaInterface;

  constructor(private http: HttpClient) { }



  public ListAnimeService() {

    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'application/json')

     return this.http.get<TablaInterface[]>(this.ListAnimeUrl,{ headers: headers })
    //  .map((response: Response)=> {
    //  return <TablaInterface[]>response.json();
    //  })
    //  .catch(this.handleError);

    
  }

  // private handleError(error: Response) {
  //   return Observable.throw(error.statusText);
  // }

  public getPostsid( id:number): Observable<TablaInterface[]> {
    return this.http.get<TablaInterface[]>('http://localhost:3000/users/' + id)
  }



  public postEmployee(selectedEmployee): Observable<TablaInterface[]> {
    var body = JSON.stringify(selectedEmployee);
    // var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    // var requesOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });

    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'application/json')
    // .append('...', '...')
    // .append('...', '...');
    return this.http.post<TablaInterface[]>(this.ListAnimeUrl, body, { headers: headers });

  }


  public deleteEmployee(id : number) {
    return this.http.delete<TablaInterface[]>(this.ListAnimeUrl + id);
  }
  


}
