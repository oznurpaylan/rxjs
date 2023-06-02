import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{ //servisten gelen datayı kullanmak için component

  constructor(private example:ExampleService){ //example servisine erişmek için
  }
  ngOnInit(): void {

        //servise subscribe olmak için
        this.example.myobservable.subscribe({
          next(data){console.log("fist component-"+data)},
          error(err){console.log("fist component-"+err)},
          complete(){console.log("data yayınlama sona erdi")}
        })
  }

}
