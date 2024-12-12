import "@/styles/global.scss";
import QueryProvider from "../../components/providers/queryProvider";
import LayoutProvider from "../../components/providers/LayoutProvider";
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from "next-intl";
import WithAuthProvider from '@/components/providers/WithAuthProvider'


export const metadata = {
  title: "Geego Kids",
  description: "Geego Kids web sivu",
};

export default async function LocaleLayout({ children }) {

const messages = await getMessages();
  return (
    <NextIntlClientProvider  messages={messages}> 
      <html lang="fi">
        <body>
          <QueryProvider>
              <LayoutProvider>
              <WithAuthProvider>
                {children} 
              </WithAuthProvider>
              </LayoutProvider>
          </QueryProvider>
        </body>
      </html>
    </NextIntlClientProvider> 
  );
}
