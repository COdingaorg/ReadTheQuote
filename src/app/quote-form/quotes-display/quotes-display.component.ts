import { Component, OnInit, Input } from '@angular/core';
import { QuoteClass } from 'src/app/quote-class';

@Component({
  selector: 'app-quotes-display',
  templateUrl: './quotes-display.component.html',
  styleUrls: ['./quotes-display.component.css']
})
export class QuotesDisplayComponent implements OnInit {

  @Input() quoteItems:any;  

  ngOnInit(): void {
  }

}
