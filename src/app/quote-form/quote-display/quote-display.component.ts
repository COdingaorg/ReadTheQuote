import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {

  @Input() quoteItem:string|any;
  constructor() { }

  ngOnInit(): void {
  }

}
