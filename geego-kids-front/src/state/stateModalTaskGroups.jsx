import { create } from 'zustand';

const stateModalTaskGroups = create((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true}),
  close: () => set({ isOpen: false}),
}))

export default stateModalTaskGroups;