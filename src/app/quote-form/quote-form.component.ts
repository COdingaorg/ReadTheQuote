import { Component, OnInit } from '@angular/core';
import { QuoteClass } from '../quote-class';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  //create an initializing class
  newQuote = new QuoteClass('', '', '', 0);
  
  newQuoteItem(){
    return this.newQuote.quote
  };
  newQuoteAuthor(){
    return this.newQuote.author
  };
  newQuotePoster(){
    return this.newQuote.userName
  };
 votes = this.newQuote.initialVote
  ngOnInit(): void {  
  }

}
