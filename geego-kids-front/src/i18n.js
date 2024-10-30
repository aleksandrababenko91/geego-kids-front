import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

//Can be imported from a shared configuration
export const locales = ["fi", "en", "se"];

export default getRequestConfig(async ({ locale }) => {
//Make sure the `locale` input parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});


export const pathnames = {
  "/": "/",
};