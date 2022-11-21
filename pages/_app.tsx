import "../styles/globals.css";
import type { AppProps } from "next/app";
import BasicLayout from "../src/components/ui/layout/BasicLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeContextProvider } from "../src/themes/themeContext";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <BasicLayout>
          <Component {...pageProps} />
        </BasicLayout>
      </QueryClientProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
