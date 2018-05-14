import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Headers} from '@angular/http';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teachercomponent = "Enter to teacher component";

  constructor(private http: Http) { }
  /*abc=[];
  stu=[];


  Student=function(id){
    //this.abc=[];
this.http.get("http://10.10.5.4:5000/studentdetails"+id).subscribe(
(res:Response) =>{
this.abc=res.json();
console.log(res.json());

var data=this.abc;
for (var i in abc)
{console.log(data[i].stid);
this.stu.push(data[i].stid)
}
}
)
}*/


  ngOnInit() {
//  this.Student();
}


}
