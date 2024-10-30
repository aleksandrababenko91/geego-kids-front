import "/src/styles/global.scss";
import QueryProvider from "../components/providers/queryProviders";
import LayoutProvider from "../components/providers/LayoutProvider";

export const metadata = {
  title: "Geego Kids",
  description: "Geego Kids web sivu",
  icons: {
    icon: ["/images/logo.png"],
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