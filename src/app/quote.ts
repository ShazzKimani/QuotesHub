export class Quote {
    showAuthor:boolean;
    constructor(
      public id: number,
      public name: string,
      public theQuote: string,
      public author: string,
      public postDate:Date)
      
      {
        this.showAuthor=false;
      }
      
    
  }