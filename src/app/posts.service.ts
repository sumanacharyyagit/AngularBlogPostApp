import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = "http://localhost:3000/postCardsArr";

  constructor(private _http: HttpClient) { }

  getAllPosts(){
    return this._http.get(this.url);
  }

  saveAllPostsDataJson(data: any){
    console.log(data);
    return this._http.post(this.url, data);
  }
  deletePostsDataJson(id: any){
    return this._http.delete(`${this.url}/${id}`);
  }
  getPostsDataJsonById(id: number){
    return this._http.get(`${this.url}/${id}`);
  }
  updatePostsDataJsonById(id: number, data: any){
    return this._http.put(`${this.url}/${id}`, data);
  }

}
