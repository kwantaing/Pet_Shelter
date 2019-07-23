import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router, private _route : ActivatedRoute) { }
  newPet : any;
  errors : any;
  ngOnInit() {
    this.newPet = {name: "", type: "", description: "", skill1: "", skill2: "", skill3:""}
  }

  onAdd(newPet){
    let Observable = this._httpService.addPet(newPet);
    Observable.subscribe(data => {
      console.log("onAdd: ",data);
        if(data["error"]){
          this.errors = data["error"]["errors"];
          console.log("Errors",this.errors)
        }else{
          this.newPet = {name: "", type: "", description: "", skill1: "", skill2: "", skill3:""};
          this._router.navigate(['/pets'])
        }
    })
    }
  toPets(){
    this._router.navigate(['/pets']);
  }

}
