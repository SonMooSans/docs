import { AppProps } from "next/app";
import { ReactElement } from "react";
import "../style.css";
import "react-tooltip/dist/react-tooltip.css";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
