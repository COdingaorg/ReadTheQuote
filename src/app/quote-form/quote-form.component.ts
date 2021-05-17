import { Component, OnInit, Output, EventEmitter   } from '@angular/core';

import { QuoteClass } from '../quote-class';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuotesArray: any|QuoteClass[]=[
    new QuoteClass('Timothy', 'A bird in hand worth more than 10 in bush', 'anonymous'),
    new QuoteClass('lavender', 'what goes around...comes all the way round', 'Justin Timberlake')
  ]
  quotes(){
    // for (var i=0; i=<newQuotesArray.length; i++){
     return this.newQuotesArray[0].quote;
    //}
  }

  //create an initializing class
  newQuote = new QuoteClass('', '', '');

  //adding the output decorator to addQuote
  @Output() addQuote= new EventEmitter<QuoteClass>();

  //submit button pushing a new item to quotes array
 
  addQuotetoArray(){
    this.newQuotesArray= this.newQuotesArray.push(this.newQuote)
  };
  addNewQuote(quote:any){
    this.newQuotesArray.push(quote);
  }

  // quotesListing(){
  //   for(var i=0; i<=this.newQuotesArray.length; i++){
  //     return this.newQuotesArray[i].quote;
  //   }
  // }
  arrayLength:number = this.newQuotesArray.length;
  ngOnInit(): void {
    this.submitQuote();
  }
//push newQuote to newQuotesArray when add quote is clicked
  submitQuote(){
    this.newQuotesArray= this.newQuotesArray.push(this.newQuote)
  }
}