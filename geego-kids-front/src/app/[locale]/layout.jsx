import "@/styles/global.scss";
import QueryProvider from "../../components/providers/queryProvider";
import LayoutProvider from "../../components/providers/LayoutProvider";
import { getMessages } from 'next-intl/server';
import Loader from "@/components/shared/Loader/Loader";
import { NextIntlClientProvider } from "next-intl";
import { Suspense } from "react";



export const metadata = {
  title: "Geego Kids",
  description: "Geego Kids web sivu",
};


// export default async function LocaleLayout({ children, params: { locale } }) {
  export default async function LocaleLayout({ children }) {

 const messages = await getMessages();


  return (
     <NextIntlClientProvider messages={messages}> 
      <html lang="fi">
        <body>
          <QueryProvider>
              <LayoutProvider>
                {children} 
                <Suspense fallback={<Loader />}>
                </Suspense>
              </LayoutProvider>
          </QueryProvider>
        </body>
      </html>
     </NextIntlClientProvider> 
  );
}
