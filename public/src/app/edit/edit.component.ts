import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router, private _route : ActivatedRoute) { }
  editPet: any;
  id : any;
  errors : any;
  ngOnInit() {
    this.getID();
    this.getPet();
  }
  getID(){
    let Observable = this._route.params;
    Observable.subscribe(data =>{
      console.log(data)
      this.id = data["id"];
    })
  }
  getPet(){
    let Observable = this._httpService.getPet(this.id);
    Observable.subscribe(data => {
      console.log("Pet: ",data);
      this.editPet = data["pet"];
      console.log(this.editPet);
    })
  }
  onEdit(editPet){
    console.log(editPet);
    let Observable = this._httpService.editPet(this.id,editPet);
    Observable.subscribe (data => {
      console.log("Editing pet...", data);
      if(data["error"]){
        this.errors = data["error"]["errors"];
      }else{
        this._router.navigate(['/pets',(this.id)])
      }
    })
  }

}
