import { Injectable } from '@angular/core';
import { Action, ActionType, Reducer, changeState } from './actions';

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

  private reducers: Reducer[] = [];

  constructor() {
    this.registerReducer(changeState);
  }

  registerInterest(component: InterestedComponent) {
    this.interstees.push(component);
  }

  registerReducer(reducer: Reducer) {
    this.reducers.push(reducer);
  }


  getState() {
    // copy state to prevent mutation
    // (we only need a shallow copy here)
    return {
      ...this.state
    };
  }

  private notifyInterestedComponents() {
    for (const component of this.interstees) {
      component.somethingInterestingHappened();
    }
  }

  dispatch(action: Action) {
    for (let index = 0; index < this.reducers.length; index++) {
      const reducer = this.reducers[index];
      this.state = reducer(this.state, action);
    }
    // this.state = this.reducers.reduce((state, reducer) => reducer(state, action), this.state);

    this.notifyInterestedComponents();
  }


  // setState(state: State) {
  //   this.state = state;
  //   this.notifyInterestedComponents();
  // }
}
