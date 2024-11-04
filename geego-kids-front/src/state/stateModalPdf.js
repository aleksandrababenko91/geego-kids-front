import { create } from 'zustand';


const filesDefault={
 ladataTiedosta: '/pdf/pdf1.pdf',
 palaute: '/pdf/pdf1.pdf',
}




const stateModalPdf = create((set,get) => ({
  isOpen: false,
  files:{...filesDefault},
  document:'',
  open: (fileName) => set({ isOpen: true, document:get().files[fileName]}),
  close: () => set({ isOpen: false, document:''}),
  
  

}))

export default stateModalPdf;