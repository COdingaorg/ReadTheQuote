import { Component, OnInit, Input } from '@angular/core';
import { QuoteClass } from '../../quote-class';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() newQuotesArray: QuoteClass | any;
  @Input() quoteAuthor: any;
  @Input() quotePoster: any;
  @Input() upVoteClick!: Subject<void>;
  @Input() downVoteClick!: Subject<void>;

  upvotes = 0;
  downvotes = 0;

  ngOnInit(): any {
    this.upVoteClick.subscribe(() => this.addVote())
    this.downVoteClick.subscribe(() => this.subVote())
  }
  addVote() {
    this.upvotes = this.upvotes + 1
  }
  subVote() {
    this.downvotes = this.downvotes + 1
  }

  newQuoteAuthor() {
    return this.newQuotesArray[1].author
  }
  newQuotePoster() {
    return this.newQuotesArray[1].userName
  }
  constructor() { }

}
