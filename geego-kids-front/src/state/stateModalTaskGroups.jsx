import { create } from 'zustand';

const stateModalTaskGroups = create((set) => ({
  isOpen: false,
  selectedData: null, 
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false, selectedData: null }), 
  setSelectedData: (data) => set({ selectedData: data }), 
}));

export default stateModalTaskGroups;
