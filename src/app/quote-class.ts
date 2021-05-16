export class QuoteClass {
  constructor( public userName:string, public quote:string, public author:string, public initialVote:number){
    this.initialVote = 0
  }
}
