import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {

  upVoteClick:Subject<void> = new Subject<void>();

  upClicker(){
    this.upVoteClick.next();
  }

  @Input() quoteItem:string|any;
  
  ngOnInit(): void {

  }

}
