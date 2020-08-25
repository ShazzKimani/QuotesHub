import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  public quotes: Quote[] = [
    new Quote(1, "Alice Walker", "In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they’re still beautiful. ", new Date(2020, 3, 8), 0, 0),
    new Quote(2, "Helen Keller", "To me a lush carpet of pine needles or spongy grass is more welcome than the most luxurious Persian rug.", new Date(2020, 5, 3), 0, 0),
    new Quote(3, "Native American proverb", " We don’t inherit the earth from our ancestors, we borrow it from our children.", new Date(2020, 11, 7), 0, 0),
    new Quote(4, "Albert Einstein", " Look deep into nature, and then you will understand everything better.", new Date(2020, 16, 9), 0, 0),
  ]

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  quoteDelete(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  numberOfLikes : number=0;
  numberOfDislikes =0;

  likeButtonClick(i) {
    this.quotes[i].numberOfLikes++;
  }

  

  dislikeButtonClick(i) {
    this.quotes[i].numberOfDislikes++;
  }

  preNum:number
  lastNum:number
  counter:number

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].numberOfLikes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  

  constructor() { }

  ngOnInit() { }

}