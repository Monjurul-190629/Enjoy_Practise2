import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

type CounterState = {
    counter1 : number,
    counter2 : number,
    increase1 : () => void,
    decrease1 : () => void,
    increase2 : () => void,
    decrease2 : () => void,
    getSum : () => number,
    reset1 : () => void,
    reset2 : () => void
}


export const useDualCounter = create<CounterState>()(
   
    //using persist to store in the localstorage
    persist(
        devtools(
           (set, get) => ({
            /// initialize counters
              counter1 : 0,
              counter2 : 0,
            // then function
              increase1 : () => set((state) => ({counter1 : state.counter1 + 1})),
              increase2 : () => set((state) => ({counter2 : state.counter2 + 1})),
              decrease1 : () => set((state) => ({counter1 : state.counter1 - 1})),
              decrease2 : () => set((state) => ({counter2 : state.counter2 - 1})),
            // For sum
               getSum : () => get().counter1 + get().counter2,
            // For Reset
               reset1: () => set(() => ({counter1 : 0})),
               reset2: () => set(() => ({counter2 : 0}))
           })
        ),
        // Name 
        {
            name : 'dual-counter-storage' ,
        }
    )
)