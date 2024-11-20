import "@/styles/global.scss";
import QueryProvider from "../../components/providers/queryProvider";
import LayoutProvider from "../../components/providers/LayoutProvider";

export const metadata = {
  title: "Geego Kids",
  description: "Geego Kids web sivu",
  icons: {
    icon: ["/images/logo.svg"],
  },
};

export default async function LocaleLayout({ children }) {
  return (
    <html >
      <body>
        <QueryProvider>
            <LayoutProvider>
              {children}
            </LayoutProvider>
        </QueryProvider>
        </body>
    </html>
  );
}