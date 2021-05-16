import { Component, OnInit } from '@angular/core';
import { QuoteClass } from '../quote-class';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  //create an initializing class
  newQuote = new QuoteClass('', '', '');

  newQuoteItem() {
    return this.newQuote.quote
  };
  newQuoteAuthor() {
    return this.newQuote.author
  };
  newQuotePoster() {
    return this.newQuote.userName
  };
  newQuoteVote(){
    return this.newQuote.initialVote;
  }; 

  ngOnInit(): void {
  }

}