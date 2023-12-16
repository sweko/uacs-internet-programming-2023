import { State } from "./statex.service";

export enum ActionType {
    Increment = 'Increment',
    Decrement = 'Decrement',
}

export interface Action<T = any> {
    type: ActionType;
    payload?: T;
}

// export class IncrementAction implements Action<number> {
//     readonly type = ActionType.Increment;

//     constructor(public payload: number) {
//     }
// }

// export class DecrementAction implements Action<number> {
//     readonly type = ActionType.Decrement;

//     constructor(public payload: number) {
//     }
// }

export const incrementAction = (payload: number = 1) => ({
    type: ActionType.Increment,
    payload,
});

export const decrementAction = (payload: number = 1) => ({
    type: ActionType.Decrement,
    payload,
});

export interface Reducer {
    (state: State, action: Action): State;
}

export const changeState = (state: State, action: Action) => {
    switch (action.type) {
        case ActionType.Increment:
            return {
                ...state,
                value: state.value + action.payload,
            };
        case ActionType.Decrement:
            return {
                ...state,
                value: state.value - action.payload,
            };
        default:
            return state;
    }
}


