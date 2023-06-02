import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { concatMap, defer, delay, first, from, fromEvent, interval, map, mergeMap, of, range, reduce, retry, single, skip, skipUntil,
  skipWhile, switchMap, take, takeLast, takeWhile, timer, toArray } from 'rxjs';


@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrls: ['./of-operator.component.css']
})
export class OfOperatorComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {

    //CREATION OPERATIONS

    // //of operator
    // let values=of('angular',2,[5,9,8],7.56) //of operatörü sayesinde app compo. tanımlanan gibi nesne yaratmaya gerek olmadan mesaj gönderilir.
    // values.subscribe(x=>{
    //   console.log("ofOperator- "+ x)
    // })

    // //Interval Operator 'belli aralıklarla data göndermek istendiğinde'
    // let values=interval(1000)//1000 ms de bir gönderir.
    // values.subscribe(x=>{
    //   console.log("intervalOperator- "+ x)
    // })

    //   //timer Operator 'belli sn sonra mesajı gösterir sonra tamamlanır.'
    // let values=timer(1000)//1000 ms de bir gönderir.
    // values.subscribe({
    //   next:(val)=>{console.log("timerOperator- gösterildi")},
    //   complete:()=>{console.log("timerOperator- tamamlandı")},
    // })

    // //range operator sayaç
    // let values=range(20,10)//sayaç 20 den başla 10 kez 1 er arttırarak devam et.
    // values.subscribe({
    //   next:(val)=>{console.log("rangeOperator- "+val)},
    //   complete:()=>{console.log("rangeOperator- tamamlandı")},
    // })

    // //defer op 'alınacak datanın geçiktirilmesini sağlar'
    // let ofObservable=of(new Date())
    // let deferObserver=defer(()=>of(new Date()))
    // let timerObserver=timer(3000)
    // timerObserver.subscribe(x=>{
    //   ofObservable.subscribe({ //metot çalışmaya başladığı andaki date değeri verir
    //     next:(val)=>{console.log(`of: ${val}`)},
    //     complete:()=>{console.log("tamamlandı")},
    //   })
    //   deferObserver.subscribe({ //metot çalışınca timer kadar bekleyıp o anki datei verir.
    //     next:(val)=>{console.log(`defer: ${val}`)},
    //     complete:()=>{console.log("tamamlandı")},
    //   })

    // })

    // //from op. dizin göndermek istrediğinizde
    // let fromObserver=from([5,8,'asd'])
    // fromObserver.subscribe({ //metot çalışmaya başladığı andaki date değeri verir
    //     next:(val)=>{console.log(`from: ${val}`)},
    //     complete:()=>{console.log("tamamlandı")},
    //   })


//FILTERING OPERATORS *********** 'dizin içerisinde filtreleme yapmaya izin verir.'

    // //first oper. dizindeki ilk elemnı
    // const array=from([3,2,8,7,5,9])
    // array.pipe(first(x=>x<5)).subscribe(x=>{ //5 den küçük ilk değeri veriri
    //   console.log(x)
    // })

    //find op. arama iilemi için
    //find(x=>x>10) 10 dan büyük olan ilk değeri verir

    //filter op
    //filer(x=>x>10) 10 dan büyük olan değerleri hepsini sıralar

    //last op.
    //şartı sağlayan son elemanı döner last(x=>x>10)

    // //single op
    // //şatı sağlayan birden fazla eleman varsa hata döner
    // array.pipe(single(x=>x<5)).subscribe(x=>{
    //   console.log(x)
    // })

    //Distinct op
    //dizinde tekrar eden değerleri teke düşürür. her değerden 1 tane yazdırır.

    // //Skip/SkipWhile op.
    // //sizinde atlama işlemi yapar
    // array.pipe(skip(4)).subscribe(x=>{ //ilk 4 değeri atlar index mantğı ile değil
    //   console.log(x)
    // })

    // array.pipe(skipWhile(x=>x<5)).subscribe(x=>{ //şartlı olarak atlar 5 den küçükse atla şart sağlanmadığı andan itibaren kontol edilmez.
    //   console.log(x)
    // })

    // //SkipUntil  op
    // const arr=interval(1000)
    // arr.pipe(skipUntil(timer(5000))).subscribe(x=>{ //5 sn bekler data yayınlanmaya başladığı anda gösterir.
    //   console.log(x)
    // })

    // //Take/TakeLast/TakeWhile Operator
    // array.pipe(take(4)).subscribe(x=>{ //ilk 4 elenmanı alır
    //   console.log(x)
    // })
    // array.pipe(takeLast(4)).subscribe(x=>{ //sondan 4 elenmanı alır
    //   console.log(x)
    // })
    // array.pipe(takeWhile(x=>x>4)).subscribe(x=>{ //şartlı olarak alır bir kere şart sağlamazsa çıkar
    //   console.log(x)
    // })


//TRANSFORMATION OPERATORS dönüşüm ile ilgili operatörler

    // //map oper.
    // const array=from([2,8,5,7])
    // let names=from([
    //   {name:"öznur",surname:"paylan"},
    //   {name:"mehmet ali",surname:"çapan"}
    // ])

    // array.pipe(map(x=>x+10)).subscribe(x=>{ //her değere 10 ekler
    //   console.log(x)
    // })

    // names.pipe(map(x=>x.name)).subscribe(x=>{ //sadece name alanı gelir.
    //   console.log(x)
    // })

    // //MergeMap operator iki diziyi birleştirir.
    // var starray=of("a","b","c","d") //x
    // var nbarray=of(1,2,3,4)//y

    // starray.pipe(mergeMap(x=>nbarray.pipe(map(y=>x+y)))).subscribe(x=>{
    //   console.log(x)
    // })

    // //SwitchMap op.
    // const click=fromEvent(document,"click")
    // click.pipe(switchMap(()=>timer(2000))).subscribe(x=>{
    //   console.log("tıklandı")
    // })

    // //ConcatMap oper.
    // //merge ile benziyor fakat bir delay bekleme işlemi eklendiğinde merge bekler bütün veriyi aynı anda verir concat ise a için bekledi a olanları verdi b geldi b için bekledi b olanları verdi ... devam eder.
    // var starray=of("a","b","c","d") //x
    // var nbarray=of(1,2,3,4)//y

    // starray.pipe(concatMap(x=>nbarray.pipe(delay(5000), map(y=>x+y)))).subscribe(x=>{
    //   console.log(x)
    // })

    // //ToArray op. arraye dönüştürme işlemi
    // var starray=of("a","b","c","d")
    // starray.pipe(toArray()).subscribe(x=>{
    //    console.log(x)
    //  })

    // //Reduce  oper. dataları tek bir iteme dönüştürür.
    // var nbarray=of(1,2,3,4)
    // nbarray.pipe(reduce((x,y)=>x+y)).subscribe(x=>{ //arrayı toplar sonra tek bir toplam degeri veirir.
    //    console.log(x)
    //  })

//UTILITY OPERATORS

    //Retry  operators verilen sayı kadar ısteği gerçekleştirir. istek kabul edilmediğinde tekrar istek atar
    ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(retry(3)).subscribe(x=>{ //ajax ile url üzerinden gelen isteği alır
      console.log(x)                                               //retry ilk çekmede başarısız olursa tekrar dene 3 kere deneyebilirsin.
    })

  }

}
