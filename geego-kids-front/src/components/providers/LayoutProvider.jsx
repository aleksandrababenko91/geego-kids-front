'use client'

import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import ModalDocumentPdf from '../modals/ModalDocumentPdf/ModalDocumentPdf';

export default function LayoutProvider({children}) {


  return (
    <div className="wrapper">
          <Header />
          {children}
          <Footer />  
          <ModalDocumentPdf />
    </div>
  )
}