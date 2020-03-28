import { Component } from '@angular/core';

@Component({
  selector: 'expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent {

  step: number = 0;

  // sets the step on clicking a panel
  setStep(index: number){
    this.step = index;
  }

  // sets the step to the next step
  nextStep(){
    this.step++;
  }

  // sets the step to the previous step  
  previousStep(){
    this.step--;
  }
}
