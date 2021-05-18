import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { QuoteClass } from '../quote-class';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuotesArray: any | QuoteClass[] = [
    new QuoteClass('Timothy', 'A bird in hand worth more than 10 in bush', 'anonymous'),
    new QuoteClass('lavender', 'what goes around...comes all the way round', 'Justin Timberlake'),
    new QuoteClass('lavender', 'what goes around...comes all the way round', 'Justin Timberlake')
  ];

  quotesItem = this.newQuotesArray;
  //create an initializing object for form items
  newQuote= new QuoteClass('', '', '')

  //adding the output decorator to addQuote
  @Output() addQuote = new EventEmitter<QuoteClass>();
  @Input() title: any;
  @Input() upVoteClick!: Subject<void>;


  //function that shows and hides details
  showDetails(index: any) {
    this.quotesItem[index].showQuoteDetails = !this.quotesItem[index].showQuoteDetails;
  }
  //Delete item function
  deleteselect(deleteItem:any, index: any) {
    if (deleteItem) {
      this.quotesItem.splice(index, 1)
    }
  }
  //initializie votes
  initialUpVotes:number= this.quotesItem.initialUpVote;
  initialDownVotes:number= this.quotesItem.initialDownVote;
  //submit button pushing a new item to quotes array

  
  arrayLength: number = this.newQuotesArray.length;
  ngOnInit(): void {
    this.upVoteClick.subscribe(()=>this.addvotes);
  }
  //add votes
  addvotes(){
    this.initialUpVotes=this.initialUpVotes+1;
  }
  dedvotes(){
    this.initialDownVotes=this.initialDownVotes-1;
  }
 
//adding quote
submitQuote(){
  this.newQuotesArray.push(new QuoteClass(this.newQuote.userName, this.newQuote.author, this.newQuote.quote))
  
}
}