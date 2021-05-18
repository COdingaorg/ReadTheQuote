export class QuoteClass {
  showQuoteDetails:boolean;
  initialUpVote: number;
  initialDownVote: number;
  createdOnDate: Date;
  constructor( public userName:string, public quote:string, public author:string){
    this.initialUpVote=11;
    this.initialDownVote=0;
    this.showQuoteDetails=false;
    this.createdOnDate=new Date();
  }
}
