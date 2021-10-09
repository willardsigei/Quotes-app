import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  newQuote = new Quotes('','','',0,0,'');
    submitQuote(){
      
    }

  constructor() { }

  ngOnInit(): void {
  }

}
