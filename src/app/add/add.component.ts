import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response,Headers} from '@angular/http';
//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private http: Http) { }
  teachers=[];
  Class=[];
  S=[];
  //fetch classes using teacher dropdown
  fetchTeacher=function(pro)
  {
    this.S=[]
    console.log("hii tid "+pro)
      this.http.get("http://localhost:3004/class/"+pro).subscribe(
        (res:Response) =>{
        this.Class= res.json();
      //  this.Section=res.json();
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
  /*  fetchSection=function(sec){

    }*/
//Loading teacher data to dropdown
  ngOnInit() {
    this.http.get("http://localhost:3002/fetch").subscribe(
      (res:Response) =>{
      this.teachers=res.json();
     console.log(this.teachers);
      //console.log(this.Teacher_Id);
    }
    )

 //this.fetchTeacher();
}
}