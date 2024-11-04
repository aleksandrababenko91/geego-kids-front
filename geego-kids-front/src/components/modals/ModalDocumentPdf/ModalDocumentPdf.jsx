"use client";
import styles from './ModalDocumentPdf.module.scss'
import dynamic from "next/dynamic";
import CloseBtn from '@/components/shared/CloseButton/CloseButton';
import LayoutModal from '../LayoutModal/LayoutModal';
import stateModalPdf from '@/state/stateModalPdf';
import { useBodyLock } from '@/lib/hooks/useBodyLock';


const PDFViewer = dynamic(() => import("@/components/shared/PdfViewer/PdfViewer"), {
  ssr: false
});

export default function ModalDocumentPdf() {
 // Get the state
  const isOpen = stateModalPdf(state => state.isOpen);
  const file = stateModalPdf(state => state.document);
  const onClose = stateModalPdf(state => state.close);

  useBodyLock(isOpen);

  return (
    <LayoutModal isOpen={isOpen} handleClose={onClose}>
      <div className={styles.wrapper} >
        <div className={styles.modal} >
          <CloseBtn className={styles.closeButton}
          onClick={onClose}/>
          <PDFViewer file={file}/>
        </div>
      </div>
    </LayoutModal>
  )
}