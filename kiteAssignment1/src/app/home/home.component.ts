import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isFruits: Boolean = false;
  isVegetables: Boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if(this.router.url === "/home/fruits"){
      this.isFruits = true;
      this.isVegetables = false;
    }
    else if(this.router.url === "/home/vegetables"){
      this.isFruits = false;
      this.isVegetables = true;
    }
    else if(this.router.url === "/home"){
      this.isFruits = false;
      this.isVegetables = false;
    }
  }
    

}
