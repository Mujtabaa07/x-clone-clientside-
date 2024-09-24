import "@/styles/globals.css";
import { Toaster } from 'react-hot-toast';
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId="383465682853-s7v46hfsnjkj01mf4mn46022soeejcgi.apps.googleusercontent.com">
        <Component {...pageProps} />
        <Toaster/>
        <ReactQueryDevtools />
      </GoogleOAuthProvider>
      </QueryClientProvider>
    </div>
  );
}
