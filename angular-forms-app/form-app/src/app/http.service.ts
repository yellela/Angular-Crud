import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:Http) { }

  getStudentsData(){
    return this.http.get('src/data/students.json').pipe(map((response: any) => response.json()))
    .subscribe(
        (data) => console.log(data)
    )
  }
  
}
