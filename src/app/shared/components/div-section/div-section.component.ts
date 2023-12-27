import { Component } from '@angular/core';

@Component({
  selector: 'app-div-section',
  templateUrl: './div-section.component.html',
  styleUrls: ['./div-section.component.scss']
})
export class DivSectionComponent {
  textVal = "For someone who is a complete beginner or starting from scratch, it should take around 2-3 months to learn the basics of Angular with full concentration and dedication. There is much more to learn in Angular, and many frameworks and javascript libraries are required for better understanding.";
  isAddButtonVisible: boolean;

  constructor() {

  }
  
  onMouseOver() {
    this.isAddButtonVisible = true;
  }

  onMouseLeave() {
    this.isAddButtonVisible = false;
  }

  onAddSection() {
    
  }
}
