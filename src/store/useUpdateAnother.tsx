import { create } from "zustand";

type State = {
  Name: string;
};

type Actions = {
  updateName: (name: string) => void;
};

export const useUpdateAnother = create<State & Actions>((set) => ({
  Name: '',
  updateName: (name: string) => set({ Name: name }),
}));
