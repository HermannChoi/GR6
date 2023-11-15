import { create } from "zustand";

const useRandomStore = create((set) => ({
  count: 100,
  inc: () => set((state) => ({ count: state.count + 100 })),
}));

export default useRandomStore;
