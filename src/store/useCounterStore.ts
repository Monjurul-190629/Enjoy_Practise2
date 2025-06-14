import { create } from "zustand";
import { devtools } from "zustand/middleware"


type CounterState = {
    count : number;
    increase : () => void;
    decrease : () => void;
}


export const useCounterStore = create<CounterState>()(
  devtools((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count : state.count - 1}))
  }), { name: 'CounterStore' })
);