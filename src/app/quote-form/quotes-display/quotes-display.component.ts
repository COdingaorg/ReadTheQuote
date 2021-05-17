import { Component, OnInit, Input } from '@angular/core';
import { QuoteClass } from '../../quote-class';

@Component({
  selector: 'app-quotes-display',
  templateUrl: './quotes-display.component.html',
  styleUrls: ['./quotes-display.component.css']
})
export class QuotesDisplayComponent implements OnInit {

  @Input() newQuotesArray:any|QuoteClass[];

  quote(){
    return this.newQuotesArray[1].quote
  }
  ngOnInit(): void {
  }

}
