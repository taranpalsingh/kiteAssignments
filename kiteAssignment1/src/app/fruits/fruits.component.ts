import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruits = ["Apple", "Apricot", "Avocado", "Banana", "Bilberry", "Blackberry", "Blackcurrant", "Black sapote", "Blueberry", "Boysenberry", "Breadfruit", "Crab apple", "pear"]; 

  constructor() { }

  ngOnInit() {
  }

}
