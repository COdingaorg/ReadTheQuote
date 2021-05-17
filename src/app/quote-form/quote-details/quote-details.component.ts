import { Component, OnInit, Input } from '@angular/core';
import { QuoteClass } from '../../quote-class';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() newQuotesArray: QuoteClass|any;

  newQuoteAuthor(){
    return this.newQuotesArray[1].author
  }
  newQuotePoster(){
    return this.newQuotesArray[1].userName
  }
  constructor() { }

  ngOnInit(): void {
  }

}
