import { Component, Input, OnInit } from '@angular/core';
import { InterestedComponent, StatexService } from '../state/statex.service';

@Component({
  selector: 'show-number',
  templateUrl: './show-number.component.html',
  styleUrl: './show-number.component.css'
})
export class ShowNumberComponent implements OnInit, InterestedComponent {
  value: number = 0;

  constructor(private stateService: StatexService) { }

  ngOnInit() {
    this.value = this.stateService.getState().value;
    this.stateService.registerInterest(this);
  }

  somethingInterestingHappened(): void {
    this.value = this.stateService.getState().value;
  }

}
