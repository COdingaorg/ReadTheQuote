import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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

  newQuoteItem() {
    return this.newQuote.quote
  };
  newQuoteAuthor() {
    return this.newQuote.author
  };
  newQuotePoster() {
    return this.newQuote.userName
  };
  newQuoteUpVote(){
    return this.newQuote.initialUpVote;
  }; 
  newQuoteDownVote(){
    return this.newQuote.initialDownVote;
  }; 

  upvotesInit = this.newQuoteUpVote();
  downvotesInit = this.newQuoteDownVote();
  
  ngOnInit(): void {
  }
//push newQuote to newQuotesArray when add quote is clicked
  submitQuote(){
    this.newQuotesArray= this.newQuotesArray.push(this.newQuote)
  }
}