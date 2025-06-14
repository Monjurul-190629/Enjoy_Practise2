import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeInfer = {
    theme: string,
    toggleTheme: () => void
}


export const useThemeStore = create<ThemeInfer>()(
    persist(
        (set) => ({
            theme: 'light',
            toggleTheme: () => set((state) => ({
                theme: state.theme === 'light' ? 'dark' : 'light'
            }))
        }),
        {
            name: 'theme-storage'
        }
    ),
)