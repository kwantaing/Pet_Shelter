import { Component, OnInit } from '@angular/core';
import { Params,Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private _httpService: HttpService,private _router: Router, private _route : ActivatedRoute) { }

  id : any;
  pet: any;
  likes : any;
  liked : boolean;
  ngOnInit() {
    this.liked = false;
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
      this.pet = data["pet"];
      console.log(this.pet);
    })
  }
  likePet(){
    this.likes = this.pet.likes + 1;
    console.log("Likes:",this.likes);
    let Observable = this._httpService.likePet(this.id, {likes: this.likes});
    Observable.subscribe(data => {
      console.log("Liking pet...",data);
      this.getPet();
      this.liked = true;


    })

  }
  adoptPet(){
    let Observable = this._httpService.adoptPet(this.id);
    Observable.subscribe (data => {
      console.log("adopting...",data);
      this._router.navigate(['/pets'])
    })
  }
}
