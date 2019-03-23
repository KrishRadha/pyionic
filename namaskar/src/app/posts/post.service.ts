import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from './post.model';
//import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
// Typescript custom enum for search types (optional)
import { tap } from  'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  //post_url='https://api.myjson.com/bins/177mwi';
  POST_SERVER_ADDRESS:  string  = 'http://192.168.0.7:8000/api/v1/posts/';
  //NEXT_POSTS:string=this.POST_SERVER_ADDRESS;
  //private posts  = [];
  //postSubject  =  new  BehaviorSubject(false);
  constructor(private http: HttpClient) {

  }

  getPosts(next_url:string): Observable<any> {
    if (next_url==""){next_url=this.POST_SERVER_ADDRESS}
    let response1 = this.http.get(`${next_url}`,{

    });
    return response1;
  }

  // getPosts() {
  //   // this.http.get(`${this.url}`).pipe(map(res => res)).subscribe(data => {
  //   //         console.log(data)});
  //   //console.log([this.http.get(`${this.url}`).pipe(map(res => res))]);
  //   //this.http.get(`${this.url}`).pipe(map(res => {return res}));//?i=${id}&plot=full&apikey=${this.apiKey}`);
  //   return this.http.get(`${this.POST_SERVER_ADDRESS}`);
  //   //subscribe(data => {
  //   // console.log(data);
  //   // this.posts=data;
  //   // return this.posts;
  //   //resolve(data);
  // }


}
