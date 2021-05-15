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
  constructor() { }

  ngOnInit(): void {
  }

}
