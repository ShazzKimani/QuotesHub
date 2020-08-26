import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  public quotes: Quote[] = [
    new Quote(1, "Sharon Kimani", " In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they’re still beautiful. ","Alice Walker", new Date(2020, 3, 8)),
    new Quote(2, "Sharon Kimani", " To me a lush carpet of pine needles or spongy grass is more welcome than the most luxurious Persian rug.", "Helen Keller", new Date(2020, 5, 3)),
    new Quote(3, "Sharon Kimani", " Look deep into nature, and then you will understand everything better.", "Albert Einstein", new Date(2020, 2, 9)),
  ]

  addNewQuote(quote) {
    let quoteLength = this.quotes.length; 
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }

 
  quoteDelete(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  

  constructor() { }

  ngOnInit() { }

}