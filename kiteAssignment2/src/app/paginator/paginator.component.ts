import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent{

  length = 100;  // default length of array
  pageSize = 10;  // default page size 
  pageSizeOptions: number[] = [5, 10, 25, 100]; // default page size options

  // default starting and ending index of the array to be shown
  lowValue: number = 0;  
  highValue: number = 10;

  numbers = ([...Array(this.length).keys()].map(x => ++x));  // Array to be displayed inside paginator

  pageEvent: PageEvent;

  // converts page size options from the input field (String) to an array  
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  
  // updating starting and ending index of the array to be shown
  getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  // Updating starting and ending index of the array to be shown on length change   
  updateLength(){
    if(this.highValue > this.length)
      this.highValue = this.pageSize;
    this.numbers = ([...Array(this.length).keys()].map(x => ++x));
  
    // updating the pageSize options too
    this.pageSizeOptions = this.pageSizeOptions.filter(num => (num <= this.length)? num : null);  
  }

}
