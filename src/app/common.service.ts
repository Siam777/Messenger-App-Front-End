import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  url='http://127.0.0.1:8000/site/?name="thor"';

  getUsers():Observable<any>{
    return this.http.get<any>(this.url);
  }
}

