export class Quote {
    showDescription:;
    constructor(
      public id: number,
      public name: string,
      public theQuote: string,
      public author: string,
      public postDate:Date,
      public numberOfLikes:number, 
      public numberOfDislikes:number)
      {
        this.showDescription=false;
      }
      
    
  }