import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuoteClass } from 'src/app/quote-class';

@Component({
  selector: 'app-quotes-display',
  templateUrl: './quotes-display.component.html',
  styleUrls: ['./quotes-display.component.css']
})
export class QuotesDisplayComponent implements OnInit {

  @Input() quotesItem:any|QuoteClass;  
  @Output() removeItem = new EventEmitter<boolean>();

  deleteQuote(deleteItem:boolean){
    this.removeItem.emit(deleteItem)
  }

  ngOnInit(): void {
  }

}
