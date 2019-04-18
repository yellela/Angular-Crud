import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs';

@Component({
  selector: 'app-updatemobile',
  templateUrl: './updatemobile.component.html',
  styleUrls: ['./updatemobile.component.css']
})
export class UpdatemobileComponent implements OnInit {



  id:number;
  data:object = {};
  mobile = [];
  exist = false;
  MobileObj:object = {};

  constructor(private router:Router, private route:ActivatedRoute, private http:Http ) { }

  private headers = new Headers({'Content-Type':'application/json'});

  updateMobile(product){
      this.MobileObj = {
        "MobileName" : product.mobile,
        "price": product.price
      };
      const url = `${"http://localhost:4000/Mobiles"}/${this.id}`;
      this.http.put(url, JSON.stringify(this.MobileObj), {headers: this.headers})
      .toPromise().then(
        () => {
          this.router.navigate(['/']);
        }
      )
  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
    });
    this.http.get("http://localhost:4000/Mobiles").subscribe(
      (res:Response) => {
        this.mobile = res.json();
        for(var i = 0; i< this.mobile.length; i++){
          if(parseInt(this.mobile[i].id) === this.id){
            this.exist = true;
            this.data = this.mobile[i];
            break;
          }
          else{
              this.exist = false;
          }
        }

      }

    )
  }

}
