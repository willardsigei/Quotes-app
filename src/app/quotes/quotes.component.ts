import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[]=[
    new Quotes('lorem','coding','building an application using angular'),
    new Quotes('lorem','xxxxx', 'i will be reading a book called everything is fucked up'),
    new Quotes('lorem', 'xxxxxxxx','playing pool games and cards')
  ]
 

  constructor() { }

  ngOnInit(): void {
  }
}
