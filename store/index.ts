import { create } from "zustand";

type State = {
  activeTab: number;
};

type Action = {
  updateActiveTab: (activeTab: State["activeTab"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useStore = create<State & Action>((set) => ({
  activeTab: 1,
  updateActiveTab: (activeTab) => set(() => ({ activeTab: activeTab })),
}));
