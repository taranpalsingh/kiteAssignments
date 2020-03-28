import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

  vegetables = ["broccoli","brussels sprouts","cabbage","kohlrabi","Savoy cabbage","red cabbage","cauliflower","fiddleheads","frisee","fennel","greens"];

  constructor() { }

  ngOnInit() {
  }
}

