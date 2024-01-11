import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import "@styles/globals.scss";
import { wrapper } from "@core/store";
import { appWithTranslation } from "next-i18next";
//
const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"]
});

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default appWithTranslation(wrapper.withRedux(App));
