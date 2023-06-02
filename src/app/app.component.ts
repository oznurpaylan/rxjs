import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    let myobservable=new Observable<string>(data=>{ //observable için nesne tanımlanır string türünde daat yayınlanmak istendiği için string yazılır.
      //data yayınlanması yapılacağı için metot olarak tanımlanır.
      data.next("öznur") //subscribe .next metodu ile istenilen data gönderilir.
      data.next("paylan")
     // data.complete(); //metotla data çağırma işlemi sona erer
    })

    // myobservable.subscribe(x=>{ //gönderilen datayı dinlemek / yakalamak için
    //   console.log(x);
    // })

    myobservable.subscribe({ //observable den gelen metot isteğine göre gerekli yerleri çalıştırır.
      next(data){console.log("App component- "+data)},
      error(err){console.log("App component- "+err)},
      complete(){console.log("data yayınlama sona erdi")}
    })

  }
  title = 'rxjs';
}
