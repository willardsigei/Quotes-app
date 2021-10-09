import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[]=[

    new Quotes('Albert','Education','“Try not to become a man of success, but rather try to become a man of value.”',0,0,'Willard'),
    new Quotes('Albert','Education','“Try not to become a man of success, but rather try to become a man of value.”',0,0,'Willard'),
    new Quotes('Albert','Education','“Try not to become a man of success, but rather try to become a man of value.”',0,0,'Willard'),
    new Quotes('Albert','Education','“Try not to become a man of success, but rather try to become a man of value.”',0,0,'Willard'),

  ]
 

  constructor() { }

  ngOnInit(): void {
  }
}
