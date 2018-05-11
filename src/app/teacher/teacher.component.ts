import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teachercomponent = "Enter to teacher component";

  constructor(private http: Http) { }
  abc=[];
  ngOnInit() {
this.http.get("http://10.10.5.4:5000/studentdetails").subscribe(
  (res:Response) =>{
  this.abc=res.json();
 console.log(this.abc);


}
)
}


}
