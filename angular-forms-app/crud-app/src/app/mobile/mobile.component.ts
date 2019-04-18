import { Component, OnInit } from '@angular/core';
import { Http, Response , Headers } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(private httpserv:Http) { }

  conformationstring:string = "Mobileisadded"

  isAdded:boolean = false;

  mobileObj: object = {}

  addNewMobile =  function(mobile){
    this.mobileObj = {
      "MobileName": mobile.mobile,
      "price": mobile.price

    }
    this.httpserv.post("http://localhost:4000/Mobiles",this.mobileObj).subscribe( (res:Response) => {
      console.log(res);
      this.isAdded = true;
    }  )

  }

  ngOnInit() {



  }

}
