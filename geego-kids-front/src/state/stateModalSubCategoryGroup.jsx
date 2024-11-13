import { create } from 'zustand';

const stateModalSubCategoryGroup = create((set) => ({
  isOpen: false,
  selectedData: null, 
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false, selectedData: null }), 
  setSelectedData: (data) => set({ selectedData: data }), 
}));

export default stateModalSubCategoryGroup;
