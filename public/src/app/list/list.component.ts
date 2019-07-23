import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Params,Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private _httpService: HttpService,private _router: Router, private _route : ActivatedRoute) { }

  pets: any;
  order : 'type';
  ngOnInit() {
    this.getAll();
  }

  getAll(){
    let Observable = this._httpService.getPets();
    Observable.subscribe(data => {
      console.log("getting pets: ",data);
      this.pets = data["pets"];
    })
  }
  toDetail(id){
    this._router.navigate["id"];
  }
  toEdit(id){
    this._router.navigate[`edit/${id}`]
  }
}
