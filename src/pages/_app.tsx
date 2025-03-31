import "@/styles/globals.css";
import { HeroUIProvider } from "@heroui/react";
import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import {ThemeProvider as NextThemesProvider} from "next-themes";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class">
        <Component {...pageProps} />
        <Analytics />
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
