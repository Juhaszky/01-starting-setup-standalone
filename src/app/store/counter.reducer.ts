import { createReducer } from "@ngrx/store";

const initialState = 0;
//newer versions
// export const counterReducer = createReducer(
//     initialState
// );

//older versions
export function counterReducer(state = initialState) {
    return state;
}