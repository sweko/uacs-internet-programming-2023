import { Injectable } from '@angular/core';

export interface State {
  value: number;
}

export interface InterestedComponent {
  somethingInterestingHappened(): void;
}

export const getInitialState = () => ({
  value: 42
});

@Injectable({
  providedIn: 'root'
})
export class StatexService {

  private state: State = getInitialState();

  private interstees: InterestedComponent[] = [];

  constructor() { }

  registerInterest(component: InterestedComponent) {
    this.interstees.push(component);
  }

  getState() {
    // copy state to prevent mutation
    // (we only need a shallow copy here)
    return {
      ...this.state
    };
  }

  setState(state: State) {
    this.state = state;

    // notify interested components
    for (const component of this.interstees) {
      component.somethingInterestingHappened();
    }
  }


}
