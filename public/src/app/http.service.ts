import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addPet(newPet){
    console.log("newPet:",newPet);
    return this._http.post('/api/pets/new', newPet);
  }

  getPets(){
    return this._http.get('/api/pets')
  }
  
  getPet(id){
    return this._http.get(`/api/pets/${id}`)
  }
  likePet(id,likes){
    console.log("Services",id,likes)
    return this._http.post(`/api/pets/like/${id}`,likes)
  }
  adoptPet(id){
    return this._http.delete(`/api/pets/${id}`)
  }
  editPet(id,editPet){
    return this._http.put(`/api/pets/${id}`,editPet);
  }
}
