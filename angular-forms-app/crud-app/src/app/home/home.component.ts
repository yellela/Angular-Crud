import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




export class HomeComponent implements OnInit {

  constructor(private httpserv:Http) { }

  id:number;

  private headers = new Headers({'Content-Type':'application/json'});


  Mobiles = [];

  getMobiles = function(){
    this.httpserv.get("http://localhost:4000/Mobiles").subscribe(
      (res:Response) => {
        this.Mobiles = res.json();
      }
    )
  }
  deleteMobile = function(id){
    if(confirm("Are sure sure ?")){
      const url = `${"http://localhost:4000/Mobiles"}/${id}`;
      return this.httpserv.delete(url, {headers: this.headers}).toPromise().then(
        () => {
          this.getMobiles();
        }
      )
    }
  }


  ngOnInit() {
    this.getMobiles();
  }

}

