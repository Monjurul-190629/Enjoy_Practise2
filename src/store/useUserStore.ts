// store/userStore.ts
import { create } from 'zustand';

type User = {
  id: number;
  name: string;
  email: string;
};

type UserStore = {
  selectedUser: User | null;
  setSelectedUser: (user: User) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  selectedUser: null,
  setSelectedUser: (user) => set({ selectedUser: user }),
}));