/* eslint-disable no-param-reassign */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// placeholder: store for state management
const useStore = create(devtools(immer((set) => {
  return {
    count: 0,
    /*
    increment: () => set((state) => ({ count: state.count + 1 }), false, 'count/increment'),
    decrement: () => set((state) => ({ count: state.count - 1 }), false, 'count/decrement'),
    */
    increment: () => set((draftState) => { draftState.count += 1; }, false, 'count/increment'),
    decrement: () => set((draftState) => { draftState.count -= 1; }, false, 'count/increment'),
  };
})));

export default useStore;
