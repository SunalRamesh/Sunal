import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  value:any
getData(){
return  this.usehere.get("http://localhost:3000/comments") 
}
  constructor(private usehere:HttpClient) { }

}
