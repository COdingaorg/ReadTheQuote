import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { QuoteClass } from '../quote-class';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuotesArray: any | QuoteClass[] = [
    new QuoteClass('Timothy', 'A bird in hand worth more than 10 in bush', 'anonymous'),
    new QuoteClass('lavender', 'what goes around...comes all the way round', 'Justin Timberlake'),
    new QuoteClass('lavender', 'what goes around...comes all the way round', 'Justin Timberlake')
  ];

  quotesItem = this.newQuotesArray;
  //create an initializing class
  newQuote = new QuoteClass('', '', '');

  //adding the output decorator to addQuote
  @Output() addQuote = new EventEmitter<QuoteClass>();
  @Input() title: any;

  //function that shows and hides details
  showDetails(index: any) {
    this.quotesItem[index].showQuoteDetails = !this.quotesItem[index].showQuoteDetails;
  }
  //Delete item function
  deleteselect(deleteItem:any, index: any) {
    if (deleteItem) {
      this.quotesItem.splice(index, 1)
    }
  }
  //submit button pushing a new item to quotes array

  addQuotetoArray() {
    this.newQuotesArray = this.newQuotesArray.push(this.newQuote)
  };
  addNewQuote() {
    // this.newQuotesArray.push(quote);
  }

  // quotesListing(){
  //   for(var i=0; i<=this.newQuotesArray.length; i++){
  //     return this.newQuotesArray[i].quote;
  //   }
  // }
  arrayLength: number = this.newQuotesArray.length;
  ngOnInit(): void {
    // this.submitQuote();
  }
  //push newQuote to newQuotesArray when add quote is clicked
  submitQuote() {
    // this.newQuotesArray = this.newQuotesArray.push(this.newQuote)
  }
}