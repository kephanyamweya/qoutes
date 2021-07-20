import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote( 'You only live once, but if you do it right, once is enough.”','Mae West','Clinton',0,0),
    new Quote('If you’re afraid to fail, then you’re probably going to fail"','Kobe Byrant','Ken', 0,0),
    new Quote( 'We all have self-doubt. You don’t deny it, but you also don’t capitulate to it. You embrace it ."', 'Joel Osteen', 'Faith',0,0),
    new Quote('Believe you can and you are halfway there."','Babe Ruth','Dexter',0,0),
    new Quote('Never regret anything that made you smile."','Mark Twain','Lynn',0,0)
    ];
    delete(i:any) {
      this.quotes.splice(i, 1)
    }
  
    addNewQuote(quote:any){
      let quoteLength= this.quotes.length;
      quote.text=quote.text;
      quote.author=quote.author;
      quote.submitter=quote.submitter;
      quote.upvotes=quote.upvotes;
      quote.downvotes=quote.downvotes
  
  
      this.quotes.push(quote)
    }
        
  constructor() { }

  ngOnInit(): void {
  }

}
