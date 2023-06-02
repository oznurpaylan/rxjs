import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  myobservable:Observable<string>

  constructor() {
    this.myobservable=new Observable<string>(data=>{
    data.next("öznur")
    data.next("mehmet ali")
    data.complete()
  })}
}
