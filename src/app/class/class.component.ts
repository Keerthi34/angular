import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
 classcomponent = "Enter to class component";

  constructor(private http: Http) { }
  Class=[];
  classfunction=function(){
  this.http.get("http://localhost:3004/fetch").subscribe(
    (res:Response) =>{
  this.Class=res.json();
  console.log(this.Class)

  }
)
}
  ngOnInit() {
    this.classfunction();

}

}
