import { Component, OnInit, Output } from '@angular/core';
import { IQuote } from '../interfaces/app.interface';
import { QuoteService } from '../quote/quote.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() randomQuote: IQuote;

  constructor(
    private quoteService: QuoteService
  ) { }

  ngOnInit(): void {
  }

  newQuote() {
    this.getQuote();
  }
  
  getQuote() {
    this.quoteService.getQuote()
      .subscribe(quote => {
        this.randomQuote = quote;
        console.log('this.randomQuote :>> ', this.randomQuote);
      })
  }
}
