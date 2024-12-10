'use client'

import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import ModalDocumentPdf from '../modals/ModalDocumentPdf/ModalDocumentPdf';
import UseAlert from '@/components/shared/UseAlert/UseAlert';

export default function LayoutProvider({children}) {


  return (
    <div className="wrapper">
          <Header />
          {children}
          <Footer />  
          <ModalDocumentPdf />
          <UseAlert />
    </div>
  )
}

