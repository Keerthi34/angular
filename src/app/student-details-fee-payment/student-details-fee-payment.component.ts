import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers, } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-details-fee-payment',
  templateUrl: './student-details-fee-payment.component.html',
  styleUrls: ['./student-details-fee-payment.component.css']
})
export class StudentDetailsFeePaymentComponent implements OnInit {
student=[]
stu=[]
details=[]
d=[];
e=[];
det=[]
det2=[]

  constructor(private route: ActivatedRoute,private http: Http, private httpClient:HttpClient) { }


  submit=function(s1)
  {
    console.log("hi")
   var id = (<HTMLInputElement>document.getElementById("stid")).value;

console.log(id)

var url="http://10.10.5.42:5000/findbyid"+"/"+id
this.http.get(url,id).subscribe (
  (res:Response) =>{console.log(url)
this.student= res.json();
console.log(this.stu=this.student[0])
}  )


  var url="http://10.10.5.54:3010/findbystudentid"+"/"+id
  this.http.get(url,id).subscribe (
    (res:Response) =>{console.log(url)
  this.details= res.json();
  console.log(this.e=this.details[0].Total_Fee)
  console.log(this.d=this.details[0])
  }  )
}


onSubmit=function(data)
{
  var dat=JSON.stringify(data)
alert("saved")
var id = (<HTMLInputElement>document.getElementById("stid")).value;
var Amount = (<HTMLInputElement>document.getElementById("Amount")).value;
var PaymentMode = (<HTMLInputElement>document.getElementById("Payment_Mode")).value;
var Term = (<HTMLInputElement>document.getElementById("Term")).value;
var date = (<HTMLInputElement>document.getElementById("date")).value;

 var a ={Student_Id:id,Amount:Amount,Payment_Mode:PaymentMode,Term:Term,date:date}
 console.log("daata "+JSON.stringify(a))
var pay=this.e-Amount;
console.log(pay)
var url="http://10.10.5.54:3012/transaction"+"/"+id

this.http.post(url,a).toPromise()
    .then(res => console.log(data,<any[]> res.json()))
    .then(data => { return data; });
}






  ngOnInit() {


  }




}
