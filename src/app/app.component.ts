import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
 userFormGroup:FormGroup;
 constructor(private formBuilder:FormBuilder)
 {

 }

 arr(n:number):any[]{
   return Array(n);
 }
 
ngOnInit(){
  this.userFormGroup=this.formBuilder.group({
    firstName:['',Validators.required],
    surName:['',Validators.required],
    phoneNumber:['',Validators.required],
    password:['',Validators.required],
    dayOfBirth:'',
    monthOfBirth:'',
    yearOfBirth:'',
    gender:'',
  })

}

facebookSubmitForm(){
  console.log(this.userFormGroup.value);
}

}
