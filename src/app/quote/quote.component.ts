import { Component, OnInit } from '@angular/core';
import { IQuote } from '../interfaces/app.interface';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  public randomQuote: IQuote;

  constructor(
    private quoteService: QuoteService
  ) { }

  ngOnInit(): void {
    this.quoteService.getQuote()
      .subscribe(quote => {
        this.randomQuote = quote;
      })
  }
}
