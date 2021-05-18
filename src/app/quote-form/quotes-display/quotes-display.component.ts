import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuoteClass } from 'src/app/quote-class';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-quotes-display',
  templateUrl: './quotes-display.component.html',
  styleUrls: ['./quotes-display.component.css']
})
export class QuotesDisplayComponent implements OnInit {

  @Input() quotesItem: any | QuoteClass;
  @Output() removeItem = new EventEmitter<boolean>();
  // @Input() initialUpVotes:any;
  // @Input() initialDownVotes:any;

  @Output() initialUpVotes:number=0;
  @Output() initialDownVotes:number=0;
  upVoteClick: Subject<void> = new Subject<void>();
  downVoteClick: Subject<void> = new Subject<void>();

  
  upvote() {
    this.upVoteClick.next();
  }
  downvote() {
    this.downVoteClick.next();
  }

  deleteQuote(deleteItem: boolean) {
    this.removeItem.emit(deleteItem)
  }
  
  
  ngOnInit(): void {
    this.upVoteClick.subscribe(()=>this.addvotes());
    this.downVoteClick.subscribe(()=>this.dedvotes());
  }
//add votes and deduct votes
  addvotes(){
    this.initialUpVotes=this.initialUpVotes+1;
  }
  dedvotes(){
    this.initialDownVotes=this.initialDownVotes-1;
  }
}
