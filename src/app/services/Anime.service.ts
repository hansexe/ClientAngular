import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { TablaInterface } from "../interface";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AnimeService {

  private ListAnimeUrl = "http://exebio.inkatech.org.pe/users";
  selectedEmployee: TablaInterface;

  constructor(private http: HttpClient) { }



  public ListAnimeService() {

    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'application/json')
     return this.http.get<TablaInterface[]>(this.ListAnimeUrl,{ headers: headers })
  }


  public getPostsid( id:number): Observable<TablaInterface[]> {
    return this.http.get<TablaInterface[]>(this.ListAnimeUrl + id)
  }


  public postEmployee(selectedEmployee): Observable<TablaInterface[]> {
    var body = JSON.stringify(selectedEmployee);
    // var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    // var requesOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'application/json')
    return this.http.post<TablaInterface[]>(this.ListAnimeUrl, body, { headers: headers });
  }


  public deleteEmployee(id : number) {
    return this.http.delete<TablaInterface[]>(this.ListAnimeUrl +'/' + id);
  }
  

}
