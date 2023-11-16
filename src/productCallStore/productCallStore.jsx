import { create } from "zustand";

const useProductCallStore = create(() => ({
  productInfo: [],
}));

export default useProductCallStore;
