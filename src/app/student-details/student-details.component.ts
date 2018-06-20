import { Component, OnInit } from '@angular/core';

import { RouterModule,Router , ActivatedRoute, Params} from '@angular/router';

import { RequestOptions,Request,RequestMethod,Http,Response,Headers, } from '@angular/http';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private http: Http, private router: Router) { }

onSubmit(data){
  this.router.navigate(['/feedetails/:id']);
}
  ngOnInit() {
  }

}


//spare
/*  onSubmit(value) {
    var stid=JSON.stringify(value)
    alert(JSON.stringify(value))
    var id: string =this.route.snapshot.params.id;

    var url="http://10.10.5.42:5000/findbyid"+"/"+id
    this.http.get(url).subscribe (
      (res:Response) =>{console.log(url)
  this.student= res.json();
        var st=JSON.stringify(this.student)
        console.log(st)
        this.stu.push(st)

        console.log(this.stu)

      }  )
}*/

/*abcd=function(){
    var id: string =this.route.snapshot.params.id;
      var url="http://10.10.5.42:5000/findbyid"+"/"+id
      this.http.get(url).subscribe (
  (res:Response) =>{
this.stu=res.json();
console.log(this.stu)
var x = document.getElementById("stid");

}
)
}

onNameKeyUp(event:any){
  console.log(event.target.value)
this.id = event.target.value;
this.found = false;
}
onClickSubmit(stid){}
*/
