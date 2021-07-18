import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 quote?:Quote []= [
   {id:1, message:'You only live once, but if you do it right, once is enough.”'},
   {id:2, message:'If you’re afraid to fail, then you’re probably going to fail'},
   {id:3, message:'We all have self-doubt. You don’t deny it, but you also don’t capitulate to it. You embrace it.'},
   {id:4, message:'Believe you can and you are halfway there.'},
   {id:5, message:'Never regret anything that made you smile.'}
 ]

  constructor(){
    
}
}