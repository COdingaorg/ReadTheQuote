export class QuoteClass {
  initialUpVote: number;
  initialDownVote: number;
  constructor( public userName:string, public quote:string, public author:string){
    this.initialUpVote=0;
    this.initialDownVote=0;
  }
}
