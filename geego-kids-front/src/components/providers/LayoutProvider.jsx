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



// 'use client';
// import { useEffect, useState } from 'react';
// import { usePathname, useRouter } from '@/src/navigation';
// import { token } from '@/src/api/auth';
// import Loader from '../shared/loader/Loader';

// export default function WithAuthProvider({
//   children,
// }) {
//   const router = useRouter()
//   const pathname = usePathname()
//   const [isShow, setIsShow] = useState();

//   useEffect(() => {
//     const  getAdmin = async () => {
//       if (!token.get()) {
//         setIsShow(false)
//         router.replace('/admin/login')
//       } else {
//         setIsShow(true)
//       };
//     };
//     getAdmin();
//   }, [pathname]);

//   return <>{isShow ? children : <Loader/>}</>;
// };