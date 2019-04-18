import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  form;

  number;

  students;


   constructor(private httpserv:HttpService){}



  ngOnInit() {


    this.httpserv.getStudentsData();
    

    
    this.form = new FormGroup({

    UserName: new FormControl("", Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('[\\w\\-\\/]+')

    ]) ),
    password: new FormControl("", this.passWordValidator),
    Gender: new FormControl()

  });

  this.number = new FormGroup({

    Decimal: new FormControl(''),
    Binary : new FormControl(''),
    Octal: new FormControl(''),
    Hexa : new FormControl('')
  })

}

passWordValidator(pass){
  if(pass.value.lenghth < 5){
    return {'password ': true}
  }
}

decimalValueChange = function(oldvalue, newValue){

  if(newValue != ""){
  this.number.patchValue({
    Binary:parseInt(newValue,10).toString(2),
  });
  this.number.patchValue({
    Octal:parseInt(newValue,10).toString(8),
  });
  this.number.patchValue({
    Hexa:parseInt(newValue,10).toString(16).toUpperCase(),
  });
}else {
  
  this.number.patchValue({Binary:"" });
  this.number.patchValue({Octal:""});
  this.number.patchValue({ Hexa:""});
}
}

binary = 0;
octal = 0;
hexa = 0;


binaryValueChange = function(oldvalue, newValue){
  this.binary = this.binary + 1;
  if(this.binary == 1){
  if(newValue != ""){
  this.number.patchValue({
    Decimal :parseInt(newValue,2).toString(10),
  });
}
else{
  this.number.patchValue({
    Decimal :""
  });
}
this.binary = 0;
}
}
octalValueChange = function(oldvalue, newValue){
  this.octal = this.octal + 1;
  if(this.octal == 1){
  if(newValue != ""){
  this.number.patchValue({
    Decimal :parseInt(newValue,8).toString(10),
  });
}
else{
  this.number.patchValue({
    Decimal :""
  });
}
this.octal = 0;
}
}

hexaValueChange = function(oldvalue, newValue){
  this.hexa = this.hexa + 1;
  if(this.hexa == 1){
  if(newValue != ""){
  this.number.patchValue({
    Decimal :parseInt(newValue,16).toString(10),
  });
}
else{
  this.number.patchValue({
    Decimal :""
  });
}
this.hexa = 0;
}
}




onSubmit = function(user){
  console.log(user)
}

}