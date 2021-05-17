import { formatCurrency } from '@angular/common';
import { Component, OnInit, Output, EventEmitter   } from '@angular/core';
import { QuoteClass } from '../quote-class';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  //hardcodding place holder quote clases
  newQuotesArray: any|QuoteClass[]=[
    new QuoteClass('Iimothy', 'A bird in hand woth more than 2 in the bush', 'anonymous'),
    new QuoteClass('lavender', 'what goes aoround...comes back around', 'Justin TImberlake')
  ];
  
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
  submitQuote(){
    this.newQuotesArray.push(this.newQuote);

  }
}