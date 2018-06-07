import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response,Headers} from '@angular/http';
import { CommonModule} from '@angular/common';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import 'rxjs/add/operator/map';

@Component({

  selector: 'app-add',
  templateUrl: './add.component.html',

  styleUrls: ['./add.component.css'],

})
export class AddComponent implements OnInit {

  constructor(private http: Http) { }
  teachers=[];
  Class=[];
  S=[];
  stu=[];

  //fetch classes using teacher dropdown
  fetchTeacher=function(pro)
  {
    this.S=[]
    console.log("hii tid "+pro)
      this.http.get("http://localhost:3004/class/"+pro).subscribe(
        (res:Response) =>{
        this.Class= res.json();
      //this.Section=res.json();
        console.log(res.json())

       var data=this.Class;
         for (var i in data)
           {
              console.log(data[i].Class);
              console.log(data[i].Section);
              this.S.push(data[i].Class+data[i].Section)
           }

       }
     )

  }

    fetchClass=function(cls){

    }

fetch=function()
{
  this.http.get("http://localhost:3002/fetch").subscribe(
    (res:Response) =>{
    this.teachers=res.json();
   console.log(this.teachers);
    //console.log(this.Teacher_Id);
  }
)
}

/*myEvent(event) {
  console.log(event);
}*/



    Student=function(){
      //this.abc=[];
    this.http.get("http:localhost:10.10.5.4:5000/getstudenttoclass").subscribe(
    (res:Response)=>{
    this.stu=res.json();
    console.log(res.json());
    }
    )
  }

  onClickSubmit(data) {

    }
      /*Studentname=function(){
        //this.abc=[];
      this.http.get("http://10.10.5.4:5000/studentdetails").subscribe(
      (res:Response)=>{
      this.stu=res.json();
      console.log(res.json());

      //var data=this.one;
      //for (var i in one)
      //{console.log(data[i].stid);
    //  this.stu.push(data[i].stid)
      //}
      }
      )
    }
*/

//Loading teacher data to dropdown
  ngOnInit() {

    this.fetch();
//     this.myEvent();
   //this.Student();
   //this.Studentname();
 //this.fetchTeacher();
}
}
