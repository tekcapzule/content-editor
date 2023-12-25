import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  textVal = "Angular Crash course";
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
