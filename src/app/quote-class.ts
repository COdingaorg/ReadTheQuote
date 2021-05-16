export class QuoteClass {
  initialVote: number;
  constructor( public userName:string, public quote:string, public author:string){
    this.initialVote=0;
  }
}
