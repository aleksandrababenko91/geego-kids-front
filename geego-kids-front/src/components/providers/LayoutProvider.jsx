'use client'
import { usePathname } from "/src/navigation";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";



export default function LayoutProvider({children}) {
  const pathname = usePathname()

  return (
    <div className="wrapper">
      {pathname==='/admin'|| pathname==='/login'?
        <>
          {children}
        </>:
        <>
          <Header />
          {children}
          <Footer />  
        </>
      }
    </div>
  )
}